"use client";

import { ArrowRight } from "lucide-react";

import MediaSlider from "./MediaSlider";
import { walkthroughs } from "./galleryData";

export default function WalkthroughGallery() {
  return (
    <section
      id="walkthroughs"
      className="bg-brand-white px-4 py-9 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-gold">
              WALKTHROUGHS
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-[38px]">
              Step Inside. Experience Virtually.
            </h2>
          </div>

          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-black">
            VIEW ALL WALKTHROUGHS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <MediaSlider items={walkthroughs} variant="walkthrough" />
      </div>
    </section>
  );
}
