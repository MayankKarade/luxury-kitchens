"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";

export default function ServiceDesignPreview({ service }) {
  const [preview, setPreview] = useState({ slug: null, products: [] });

  useEffect(() => {
    const controller = new AbortController();

    async function loadPreview() {
      try {
        const response = await axios.get(API_ENDPOINTS.Product.product, {
          params: { slug: service.slug },
          signal: controller.signal,
        });
        const products = response.data?.data?.product;

        if (!controller.signal.aborted) {
          setPreview({
            slug: service.slug,
            products: Array.isArray(products)
              ? products.filter((product) => product.image).slice(0, 3)
              : [],
          });
        }
      } catch {
        if (!controller.signal.aborted) {
          setPreview({ slug: service.slug, products: [] });
        }
      }
    }

    loadPreview();
    return () => controller.abort();
  }, [service.slug]);

  const designsHref = `/our-services/${service.slug}/designs`;
  const loading = preview.slug !== service.slug;
  const collectionName = service.designButtonText
    ?.replace(/^VIEW\s+/i, "")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <section
      aria-labelledby="service-design-preview-title"
      className="bg-brand-white px-4 py-8 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="overflow-hidden rounded-2xl border border-brand-gold/10 bg-[#faf7f4] px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold sm:text-[11px]">
            A little inspiration for your space
          </p>
          <h2
            id="service-design-preview-title"
            className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-[38px]"
          >
            Explore Our {collectionName || `${service.title} Designs`}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-600">
            Find a look you love. Explore styles, finishes and layouts to make
            your space your own.
          </p>
        </div>

        {loading ? (
          <div role="status" className="mt-7">
            <span className="sr-only">Loading design previews</span>
            <div aria-hidden="true" className="flex gap-4 overflow-hidden sm:grid sm:grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="aspect-[4/3] min-w-[85%] rounded-xl bg-black/5 motion-safe:animate-pulse sm:min-w-0" />
              ))}
            </div>
          </div>
        ) : preview.products.length > 0 ? (
          <div className={`mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:overflow-visible sm:pb-0 ${preview.products.length === 1 ? "sm:mx-auto sm:max-w-xl sm:grid-cols-1" : preview.products.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
            {preview.products.map((product, index) => (
              <Link
                key={product.id || product.slug || index}
                href={designsHref}
                prefetch={false}
                aria-label={`Explore ${product.heading || service.title} designs`}
                className="group relative block min-w-0 flex-[0_0_85%] snap-center overflow-hidden rounded-xl bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.heading || `${service.title} design inspiration`}
                    fill
                    sizes="(min-width: 640px) 30vw, 80vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                    <span className="font-serif text-xl font-medium leading-tight sm:text-2xl">
                      {product.heading || service.title}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:bg-brand-gold group-hover:border-brand-gold">
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-7 text-center">
          <Link
            href={designsHref}
            prefetch={false}
            className="inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-md bg-brand-gold px-7 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:w-auto"
          >
            {service.designButtonText?.replace(/^VIEW\s+/i, "View All ") || "View All Designs"}
            <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </Link>
          <p className="mt-3 text-xs text-zinc-500">
            Explore the collection. Make it yours.
          </p>
        </div>
      </div>
    </section>
  );
}
