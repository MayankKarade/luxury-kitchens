"use client";

import { ArrowRight } from "lucide-react";

import { designs3d } from "./galleryData";

function FloorPlanPreview({ index }) {
  const roomSets = [
    [
      "left-[12%] top-[28%] h-[34%] w-[24%]",
      "left-[38%] top-[18%] h-[26%] w-[22%]",
      "left-[62%] top-[28%] h-[36%] w-[24%]",
      "left-[34%] top-[52%] h-[28%] w-[30%]",
    ],
    [
      "left-[10%] top-[25%] h-[42%] w-[28%]",
      "left-[40%] top-[24%] h-[30%] w-[20%]",
      "left-[62%] top-[18%] h-[38%] w-[26%]",
      "left-[42%] top-[58%] h-[24%] w-[34%]",
    ],
    [
      "left-[14%] top-[20%] h-[34%] w-[22%]",
      "left-[38%] top-[16%] h-[42%] w-[28%]",
      "left-[68%] top-[28%] h-[30%] w-[18%]",
      "left-[20%] top-[58%] h-[24%] w-[48%]",
    ],
    [
      "left-[12%] top-[30%] h-[28%] w-[24%]",
      "left-[38%] top-[22%] h-[36%] w-[24%]",
      "left-[64%] top-[26%] h-[34%] w-[24%]",
      "left-[28%] top-[60%] h-[22%] w-[44%]",
    ],
  ];
  const rooms = roomSets[index % roomSets.length];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white to-[#f2eee8]">
      <div className="relative h-[74%] w-[82%] -skew-y-6 rotate-[-8deg] rounded-md border border-neutral-300 bg-[#e8dfd2] shadow-[18px_20px_26px_rgba(0,0,0,0.16)]">
        <div className="absolute inset-2 border-4 border-white/90 bg-[#d3c3ad]" />
        {rooms.map((room) => (
          <div
            key={room}
            className={`absolute ${room} border-4 border-white bg-[#b89b76] shadow-inner`}
          >
            <span className="absolute inset-2 rounded-sm bg-[#6f563d]/70" />
            <span className="absolute bottom-2 left-2 h-3 w-8 rounded-full bg-[#f2eee8]" />
          </div>
        ))}
        <div className="absolute left-[43%] top-[42%] h-[18%] w-[18%] rounded-full border-4 border-white bg-brand-gold/70" />
      </div>
    </div>
  );
}

export default function Designs3D() {
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
          {designs3d.map((design, index) => (
            <article
              key={design.title}
              className="relative aspect-[16/8.6] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <FloorPlanPreview index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
