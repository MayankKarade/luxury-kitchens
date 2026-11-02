"use client";

import { useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const brands = [
  { name: "Blum", image: "/home/brand/Blum_Logo_web_neu.jpg", scale: 0.8 },
  { name: "EGGER", image: "/home/brand/Egger-Logo5.png", scale: 1.65 },
  { name: "Finsa", image: "/home/brand/logo_finsa-positivo.png", scale: 1 },
  { name: "Samet", image: "/home/brand/Samet.jpg", scale: 2.1 },
];

const slides = [...brands, ...brands];

export default function Brands() {
  const plugins = useMemo(
    () => [Autoplay({
      delay: 3000,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    })],
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1 },
    plugins,
  );

  const scroll = (direction) => {
    if (direction === "previous") emblaApi?.scrollPrev();
    else emblaApi?.scrollNext();
    emblaApi?.plugins().autoplay?.play();
  };

  return (
    <section
      aria-labelledby="home-brands-heading"
      className="relative border-y border-brand-gold/15 bg-[#fbf9f6] px-4 py-9 sm:px-10 sm:py-10 md:px-20"
    >
      <div className="mx-auto max-w-[1140px]">
        <h2
          id="home-brands-heading"
          className="text-center font-sans text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-900 sm:text-[14px]"
        >
          Premium Brands We Work With
        </h2>
        <div className="relative mt-5 px-8 sm:px-10" role="region" aria-label="Brand logos carousel" aria-roledescription="carousel">
          <button type="button" onClick={() => scroll("previous")} aria-label="Previous brand logo" className="absolute left-0 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center text-brand-gold transition-colors hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold">
            <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
          </button>
          <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex touch-pan-y items-center">
          {slides.map((brand, index) => (
            <li key={`${brand.name}-${index}`} className="flex h-28 min-w-0 flex-[0_0_50%] items-center justify-center px-3 sm:h-32 sm:flex-[0_0_33.333333%] lg:flex-[0_0_25%]" aria-hidden={index >= brands.length ? true : undefined}>
              <div className="relative aspect-[2/1] w-full max-w-[155px] overflow-hidden rounded-md border border-neutral-200/60 bg-white">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="(min-width: 640px) 155px, 40vw"
                  className="object-contain"
                  style={{ transform: `scale(${brand.scale})` }}
                />
              </div>
            </li>
          ))}
        </ul>
          </div>
          <button type="button" onClick={() => scroll("next")} aria-label="Next brand logo" className="absolute right-0 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center text-brand-gold transition-colors hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold">
            <ChevronRight className="h-8 w-8" strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </section>
  );
}
