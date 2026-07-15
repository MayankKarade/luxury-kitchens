"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import { GalleryIcon } from "./GalleryIcons";

const desktopLayout = [
  "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
  "sm:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1",
];

export default function ImageGallery({ galleryImages }) {
  const images = Array.isArray(galleryImages) ? galleryImages : [];
  const previewImages = images.slice(0, 6);
  const hasMoreImages = images.length > 6;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index = 0) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="images"
      className="bg-brand-white px-4 py-10 text-brand-dark sm:px-10 sm:py-12 md:px-16"
    >
      <div className="mx-auto ">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-gold">
              IMAGES GALLERY
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-[38px]">
              Beautiful Spaces, Captured in Every Detail.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => openLightbox(0)}
            disabled={images.length === 0}
            className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            VIEW ALL IMAGES
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[195px] lg:grid-cols-[1.12fr_0.78fr_0.78fr_1.12fr] xl:auto-rows-[208px]">
            {previewImages.map((item, index) => (
              <button
                key={item.id || item.image || index}
                type="button"
                onClick={() => openLightbox(index)}
                className={`group relative min-h-[220px] overflow-hidden rounded-lg bg-neutral-200 shadow-sm sm:min-h-[240px] lg:min-h-0 ${desktopLayout[index] || ""}`}
                aria-label={`Open gallery image ${index + 1}`}
              >
                <Image
                  src={item.image}
                  alt={`Gallery image ${item.id}`}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </button>
            ))}
          </div>

          {hasMoreImages && (
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-3 rounded-md border border-white/10 bg-brand-dark/72 px-8 py-3 text-[12px] font-extrabold tracking-wide text-white shadow-2xl backdrop-blur-sm transition-colors hover:bg-brand-gold hover:text-white"
            >
              VIEW MORE PHOTOS
              <GalleryIcon name="photos" className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/95 p-4 text-white backdrop-blur-md sm:p-8"
          >
            <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between gap-4 sm:inset-x-12">
              <div className="min-w-0">
                <span className="block text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold">
                  Images Gallery
                </span>
                <span className="mt-1 block truncate font-serif text-sm font-bold text-zinc-100 sm:text-base">
                  Frame {selectedIndex + 1} of {images.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close image gallery"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:scale-105 hover:bg-brand-gold hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-8 aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-xl border border-white/5 shadow-2xl sm:aspect-[16/9]">
              <Image
                src={images[selectedIndex].image}
                alt={`Gallery expanded view ${selectedIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="mt-6 flex max-w-full items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
              {images.map((item, index) => (
                <button
                  key={`gallery-lightbox-thumb-${item.id || item.image || index}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Show gallery image ${index + 1}`}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    selectedIndex === index
                      ? "scale-[1.05] border-brand-gold"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`Gallery thumbnail ${index + 1}`}
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
    </section>
  );
}
