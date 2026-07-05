"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { fadeInUp, stagger, successStories } from "./testimonialData";

function StoryImage({ story }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-[16/8.2] overflow-hidden">
      <Image
        src={story.image}
        alt={story.title}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
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
            src={story.image}
            alt={`${story.title} before`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover grayscale brightness-[0.5] contrast-75 saturate-50"
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
        aria-label={`Compare before and after for ${story.title}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="pointer-events-none absolute left-3 bottom-3 z-10 text-[10px] font-black tracking-wide text-white drop-shadow">
        BEFORE
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 z-10 text-[10px] font-black tracking-wide text-white drop-shadow">
        AFTER
      </span>
      <span className="pointer-events-none absolute left-3 top-3 z-10 rounded bg-brand-gold px-2 py-1 text-[10px] font-extrabold text-white">
        {story.tag}
      </span>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section className="bg-brand-white px-4 py-12 text-brand-dark sm:px-10 sm:py-14 md:px-16">
      <div className="mx-auto ">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
              SUCCESS STORIES
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-[40px]">
              Real Projects. Real Impact.
            </h2>
            <div className="mt-3 h-0.5 w-10 bg-brand-gold" />
          </div>
          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-5 py-3 text-[10px] font-bold tracking-widest text-brand-gold transition-colors hover:bg-brand-gold hover:text-white">
            VIEW ALL STORIES
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {successStories.map((story) => (
            <motion.article
              key={story.title}
              variants={fadeInUp}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <StoryImage story={story} />
              <div className="px-5 py-5">
                <h3 className="text-base font-extrabold text-brand-dark">
                  {story.title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-5 text-zinc-600">
                  {story.text}
                </p>
                <button className="group mt-4 inline-flex items-center gap-3 text-xs font-extrabold tracking-wide text-brand-gold">
                  READ FULL STORY
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
