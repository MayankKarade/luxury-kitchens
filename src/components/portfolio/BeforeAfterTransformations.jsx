"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import kitchenAfter from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import livingAfter from "../../assets/images/interior_living_room_1780070361503.png";
import bedroomAfter from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import officeAfter from "../../assets/images/executive_office_card_1780070403397.png";

const transformations = [
  {
    title: "Kitchen Makeover",
    location: "New Jersey, USA",
    after: kitchenAfter,
  },
  {
    title: "Living Room Transformation",
    location: "Vancouver, Canada",
    after: livingAfter,
  },
  {
    title: "Bedroom Redesign",
    location: "Manchester, UK",
    after: bedroomAfter,
  },
  {
    title: "Office Space Upgrade",
    location: "Dubai, UAE",
    after: officeAfter,
  },
];

function TransformationCard({ project, index }) {
  const [position, setPosition] = useState(50);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="overflow-hidden rounded-lg border border-neutral-200 bg-[#010129] shadow-sm"
    >
      <div className="relative aspect-[16/8.2] overflow-hidden">
        <Image
          src={project.after}
          alt={`${project.title} after`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div
            className="relative h-full"
            style={{ width: `${10000 / position}%` }}
          >
            <Image
              src={project.after}
              alt={`${project.title} before`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover grayscale brightness-[.48] contrast-75 saturate-50"
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-white text-white shadow-lg">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8 7-4 5 4 5" />
              <path d="M11 7v10" />
              <path d="M13 7v10" />
              <path d="m16 7 4 5-4 5" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare before and after for ${project.title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="pointer-events-none absolute left-3 bottom-3 z-10 text-[10px] font-bold tracking-wide text-white drop-shadow">
          BEFORE
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 z-10 text-[10px] font-bold tracking-wide text-white drop-shadow">
          AFTER
        </span>
      </div>

      <div className="px-4 py-3 text-white">
        <h3 className="font-sans text-[13px] font-bold">{project.title}</h3>
        <p className="mt-1 text-[11px] text-zinc-300">{project.location}</p>
      </div>
    </motion.article>
  );
}

export default function BeforeAfterTransformations() {
  return (
    <section
      id="transformations"
      className="bg-brand-white px-4 py-12 text-zinc-900 sm:px-10 sm:py-14 md:px-16"
    >
      <div className="mx-auto ">
        <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-[34px]">
              Before &amp; After Transformations
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-brand-gold" />
          </div>
          <button className="group flex items-center gap-4 rounded-md border border-brand-gold px-5 py-3 text-[10px] font-bold tracking-widest text-brand-gold transition-colors hover:bg-brand-gold hover:text-white">
            VIEW ALL TRANSFORMATIONS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {transformations.map((project, index) => (
            <TransformationCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
