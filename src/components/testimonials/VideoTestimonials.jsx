"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import marbleBg from "../../assets/images/close-up-black-marble-background.jpg";
import { videoTestimonials } from "./testimonialData";
import { PlayCircleIcon } from "./TestimonialIcons";

function FlagIcon({ region }) {
  if (region === "USA") {
    return (
      <span
        className="relative h-4 w-5 overflow-hidden rounded-[2px] shadow-sm"
        style={{
          background:
            "repeating-linear-gradient(to bottom,#b91c1c 0 2px,#ffffff 2px 4px)",
        }}
      >
        <span className="absolute left-0 top-0 h-[9px] w-[10px] bg-[#1d4ed8]" />
      </span>
    );
  }

  if (region === "CAN") {
    return (
      <span
        className="relative h-4 w-5 overflow-hidden rounded-[2px] shadow-sm"
        style={{
          background:
            "linear-gradient(to right,#dc2626 0 28%,#ffffff 28% 72%,#dc2626 72%)",
        }}
      >
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dc2626]" />
      </span>
    );
  }

  return (
    <span className="relative h-4 w-5 overflow-hidden rounded-[2px] bg-[#1d4ed8] shadow-sm">
      <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-white" />
      <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-[#dc2626]" />
      <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-[#dc2626]" />
    </span>
  );
}

function VideoCard({ video }) {
  return (
    <article className="h-full overflow-hidden rounded-lg border border-white/15 bg-[#071014] shadow-[0_18px_45px_rgba(0,0,0,0.34)]">
      <div className="relative aspect-[16/13.15] overflow-hidden">
        <Image
          src={video.image}
          alt={video.title}
          fill
          sizes="(min-width: 1280px) 27vw, (min-width: 1024px) 30vw, 100vw"
          className="object-cover brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-black/12" />
        <button
          aria-label={`Play ${video.title}`}
          className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white drop-shadow-xl transition-transform hover:scale-105"
        >
          <PlayCircleIcon className="h-[58px] w-[58px]" />
        </button>
      </div>

      <div className="min-h-[98px] border-t border-white/10 px-4 py-4">
        <h3 className="text-[14px] font-extrabold leading-tight text-white">
          {video.title}
        </h3>
        <p className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-zinc-200">
          <FlagIcon region={video.region} />
          {video.location}
        </p>
      </div>
    </article>
  );
}

function SectionIntro() {
  return (
    <div>
      <span className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-brand-gold">
        VIDEO TESTIMONIALS
      </span>
      <h2 className="mt-5 font-serif text-[36px] font-semibold leading-[1.05] text-white sm:text-[40px] lg:text-[42px]">
        Hear It From
        <br />
        Our Clients
      </h2>
      <p className="mt-6 max-w-[315px] text-[13px] font-medium leading-7 text-zinc-300">
        Our clients love to share their experience working with us and how we
        helped them create their dream spaces.
      </p>
      <button className="group mt-8 inline-flex h-[58px] min-w-[246px] items-center justify-center gap-5 rounded-md bg-brand-gold px-7 text-[11px] font-extrabold tracking-wide text-white transition-colors hover:bg-[#9A0101]">
        VIEW MORE VIDEOS
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeVideo = videoTestimonials[activeIndex];
  const visibleVideos = Array.from({ length: 3 }, (_, index) => {
    return videoTestimonials[(activeIndex + index) % videoTestimonials.length];
  });

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? videoTestimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) =>
      current === videoTestimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#05090c] px-4 py-10 text-white sm:px-10 md:px-16 lg:py-[56px]">
      <Image
        src={marbleBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.13]"
      />
      <div className="absolute inset-0 bg-[#05090c]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(154,1,1,0.08),transparent_30%),radial-gradient(circle_at_86%_50%,rgba(255,255,255,0.035),transparent_26%)]" />

      <div className="relative z-10 mx-auto hidden max-w-[1610px] grid-cols-[330px_minmax(0,1fr)] gap-[64px] pr-[74px] lg:grid">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="pt-3"
        >
          <SectionIntro />
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 38 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -38 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-3 gap-4"
            >
              {visibleVideos.map((video) => (
                <VideoCard key={video.title} video={video} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute right-0 top-2 flex flex-col gap-4">
          <button
            onClick={showPrevious}
            aria-label="Previous video"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/60 bg-[#071014]/90 text-brand-gold shadow-[0_12px_28px_rgba(0,0,0,0.38)] transition-colors hover:bg-brand-gold hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={showNext}
            aria-label="Next video"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/60 bg-[#071014]/90 text-brand-gold shadow-[0_12px_28px_rgba(0,0,0,0.38)] transition-colors hover:bg-brand-gold hover:text-white"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-xl lg:hidden">
        <SectionIntro />

        <div className="mt-8">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeVideo.title}
              custom={direction}
              initial={{ opacity: 0, x: direction * 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -28 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <VideoCard video={activeVideo} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              onClick={showPrevious}
              aria-label="Previous video testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/60 text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-center gap-2">
              {videoTestimonials.map((video, index) => (
                <button
                  key={video.title}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  aria-label={`Show ${video.title}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-6 bg-brand-gold"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={showNext}
              aria-label="Next video testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/60 text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
