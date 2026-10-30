"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const transformations = [
  {
    title: "Kitchen with Island",
    before: "/before-after/before-0.png",
    after: "/before-after/portfolio-0.png",
  },
  {
    title: "Arched Kitchen",
    before: "/before-after/before-1.png",
    after: "/before-after/protfolio-1.png",
  },
  {
    title: "Dark Finish Kitchen",
    before: "/before-after/before-2.png",
    after: "/before-after/portfolio-2.png",
  },
  {
    title: "Skylight Kitchen",
    before: "/before-after/before-3.png",
    after: "/before-after/portfoilo-3.png",
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
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.after}
          alt={`${project.title} after`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
            <Image
              src={project.before}
              alt={`${project.title} before`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-dark text-white shadow-lg">
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
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare before and after for ${project.title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="pointer-events-none absolute left-3 bottom-3 z-10 rounded bg-black/60 px-2 py-1 text-[10px] font-bold tracking-wide text-white">
          BEFORE
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 z-10 rounded bg-black/60 px-2 py-1 text-[10px] font-bold tracking-wide text-white">
          AFTER
        </span>
      </div>

      <div className="px-4 py-3 text-white">
        <h3 className="font-sans text-[13px] font-bold">{project.title}</h3>
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
            <span className="mb-3 block font-sans text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
              TRANSFORMATIONS
            </span>
            <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-[34px]">
              Before &amp; After
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-brand-gold" />
            <p className="mt-4 max-w-2xl font-sans text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
              See how made-to-size furniture, thoughtful planning and carefully
              selected finishes can transform the look, functionality and use of
              a space.
            </p>
          </div>
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
