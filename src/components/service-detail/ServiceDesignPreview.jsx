"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceDesignPreview({ service }) {
  const designsHref = `/our-services/${service.slug}/designs`;
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
