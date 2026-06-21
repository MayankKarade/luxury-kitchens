"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { DetailIcon } from "./ServiceDesignDetailIcons";

export default function DesignImageGallery({ product }) {
  const slides = product.galleryImages;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
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
                className="relative min-w-0 flex-[0_0_100%] aspect-[16/11]"
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
          onClick={() => setLightboxOpen(true)}
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

      <div className="mt-2 grid grid-cols-3 gap-1 sm:grid-cols-6">
        {slides.slice(0, 6).map((image, index) => {
          const isLast = index === 5;

          return (
            <button
              key={`${product.title}-thumb-${index}`}
              type="button"
              onClick={() => {
                if (isLast) {
                  setLightboxOpen(true);
                  return;
                }

                scrollTo(index);
              }}
              className={`relative aspect-[16/13] overflow-hidden rounded-md border-2 transition-colors ${
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

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/95 p-4 text-white backdrop-blur-md sm:p-8"
          >
            <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between gap-4 sm:inset-x-12">
              <div className="min-w-0">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold">
                  {product.serviceLabel}
                </span>
                <span className="mt-1 block truncate font-serif text-sm font-bold text-zinc-100 sm:text-base">
                  {product.title} (Frame {selectedIndex + 1} of {slides.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close design gallery"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:scale-105 hover:bg-brand-gold hover:text-black"
              >
                <DetailIcon name="x" className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-8 aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-xl border border-white/5 shadow-2xl sm:aspect-[16/9]">
              <Image
                src={slides[selectedIndex]}
                alt={`${product.title} expanded view ${selectedIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-6 flex max-w-full items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
              {slides.map((image, index) => (
                <button
                  key={`${product.title}-lightbox-thumb-${index}`}
                  type="button"
                  onClick={() => {
                    setSelectedIndex(index);
                    emblaApi?.scrollTo(index);
                  }}
                  aria-label={`Show expanded design image ${index + 1}`}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    selectedIndex === index
                      ? "scale-[1.05] border-brand-gold"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.title} expanded thumbnail ${index + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
