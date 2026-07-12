"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Designs3D({ galleryDesigns3D }) {
  return (
    <section
      id="designs"
      className="bg-brand-white px-4 py-9 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto ">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-gold">
              3D DESIGNS
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-[38px]">
              Explore Realistic 3D Designs.
            </h2>
          </div>

          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white">
            VIEW ALL 3D DESIGNS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryDesigns3D.map((design, index) => (
            <article
              key={design.id}
              className="group relative aspect-[16/8.6] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <Image
                src={design.image}
                alt={`3D design ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
