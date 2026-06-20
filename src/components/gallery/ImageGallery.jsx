"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { GalleryIcon } from "./GalleryIcons";
import { imageGallery } from "./galleryData";

const desktopLayout = [
  "sm:col-span-2 lg:col-span-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
  "sm:col-span-2 lg:col-start-4 lg:row-span-2 lg:row-start-1",
];

export default function ImageGallery() {
  return (
    <section
      id="images"
      className="bg-brand-white px-4 py-10 text-brand-dark sm:px-10 sm:py-12 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-gold">
              IMAGES GALLERY
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-[38px]">
              Beautiful Spaces, Captured in Every Detail.
            </h2>
          </div>

          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-black">
            VIEW ALL IMAGES
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:h-[392px] lg:grid-cols-[1.12fr_0.78fr_0.78fr_1.12fr] lg:grid-rows-2 xl:h-[420px]">
            {imageGallery.map((item, index) => (
              <article
                key={item.title}
                className={`group relative min-h-[220px] overflow-hidden rounded-lg bg-neutral-200 shadow-sm sm:min-h-[240px] lg:min-h-0 ${desktopLayout[index]}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </article>
            ))}
          </div>

          <button className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-md border border-white/10 bg-[#080b0e]/92 px-8 py-3 text-[12px] font-extrabold tracking-wide text-white shadow-2xl backdrop-blur-sm transition-colors hover:bg-brand-gold hover:text-black lg:inline-flex">
            VIEW MORE PHOTOS
            <GalleryIcon name="photos" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
