"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ServiceStylesSlider({ service }) {
  const slides = useMemo(
    () => [...service.styles, ...service.styles],
    [service],
  );
  const plugins = useMemo(
    () => [
      Autoplay({
        delay: 3300,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    [],
  );
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      duration: 28,
      loop: true,
      slidesToScroll: 1,
    },
    plugins,
  );

  return (
    <section
      id="service-styles"
      className="bg-brand-white px-4 py-8 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto ">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-medium uppercase sm:text-[36px]">
            {service.stylesTitle}
          </h2>
          <div className="mx-auto mt-3 flex w-14 items-center justify-center">
            <span className="h-px flex-1 bg-brand-gold" />
            <span className="mx-1 h-2 w-2 rounded-full border border-brand-gold bg-white" />
            <span className="h-px flex-1 bg-brand-gold" />
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex touch-pan-y">
            {slides.map((style, index) => (
              <div
                key={`${style.title}-${index}`}
                className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <article className="h-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
                  <div className="relative aspect-[16/8.8] overflow-hidden">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-semibold text-neutral-900">
                      {style.title}
                    </h3>
                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-600">
                      {style.text}
                    </p>
                    <Link
                      href={`/our-services/${service.slug}/designs`}
                      className="mt-4 inline-flex items-center gap-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:text-[#9A0101]"
                    >
                      EXPLORE DESIGNS
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
