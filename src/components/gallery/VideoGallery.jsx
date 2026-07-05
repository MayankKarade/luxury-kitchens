"use client";

import { ArrowRight } from "lucide-react";

import MediaSlider from "./MediaSlider";
import { videos } from "./galleryData";

export default function VideoGallery() {
  return (
    <section
      id="videos"
      className="bg-brand-white px-4 py-9 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto ">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-gold">
              VIDEOS
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-[38px]">
              See Our Projects Come To Life.
            </h2>
          </div>

          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white">
            VIEW ALL VIDEOS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <MediaSlider items={videos} variant="video" />
      </div>
    </section>
  );
}
