"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { DetailIcon } from "./ServiceDesignDetailIcons";

export default function DesignImageGallery({ product }) {
  const slides = product.galleryImages;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const plugins = useMemo(
    () => [
      Autoplay({
        delay: 4200,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, duration: 30 },
    plugins,
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex touch-pan-y">
            {slides.map((image, index) => (
              <div
                key={`${product.title}-main-${index}`}
                className="relative min-w-0 flex-[0_0_100%] aspect-[16/10.7]"
              >
                <Image
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            ))}
          </div>
        </div>

        <span className="absolute left-5 top-5 rounded-md bg-brand-gold px-4 py-2 text-[11px] font-extrabold text-white shadow">
          {(product.badge || "Bestseller").replace("BEST SELLER", "Bestseller")}
        </span>
        <button
          type="button"
          aria-label="View full design image"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition-colors hover:bg-brand-gold hover:text-black"
        >
          <DetailIcon name="expand" className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous design image"
          className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-lg transition-colors hover:bg-brand-gold hover:text-black"
        >
          <DetailIcon name="chevron-left" className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next design image"
          className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-lg transition-colors hover:bg-brand-gold hover:text-black"
        >
          <DetailIcon name="chevron-right" className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {slides.slice(0, 6).map((image, index) => {
          const isLast = index === 5;

          return (
            <button
              key={`${product.title}-thumb-${index}`}
              type="button"
              onClick={() => scrollTo(index)}
              className={`relative aspect-[16/9] overflow-hidden rounded-md border-2 transition-colors ${
                selectedIndex === index
                  ? "border-brand-gold"
                  : "border-neutral-200 hover:border-brand-gold/60"
              }`}
            >
              <Image
                src={image}
                alt={`${product.title} thumbnail ${index + 1}`}
                fill
                sizes="160px"
                className="object-cover"
              />
              {isLast && (
                <span className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 text-white">
                  <span className="text-xl font-extrabold">+18</span>
                  <span className="text-[11px] font-semibold">More Images</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
