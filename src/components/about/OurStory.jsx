"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Gem, Eye } from "lucide-react";
import Image from "next/image";

const aboutParagraphs = [
  "Cali Wood Limited is a premier furniture and interior production firm specializing in the bespoke design, precision manufacturing, and expert installation of high-end cabinetry and woodwork solutions.",
  "As a strategic expansion of Asanduff Construction Limited, Cali Wood was established to bridge the gap between artisanal craftsmanship and industrial-scale production. By leveraging state-of-the-art machinery and a deep understanding of the construction landscape, we provide durable, factory-finished furniture tailored for residential, corporate, and commercial environments across Ghana.",
  "With our newly commissioned factory and flagship showroom, Cali Wood is transitioning into a full-capacity production powerhouse, setting new benchmarks for interior finishing in West Africa.",
];

const visionText =
  "To be the most trusted name in furniture manufacturing across Ghana, recognized for pioneering innovation, uncompromising durability, and world-class professional service.";

const missionText =
  "To transform spaces through high-quality cabinetry and furniture solutions. We combine advanced technology with expert craftsmanship to deliver aesthetic value and functional excellence, ensuring every client experiences the perfect blend of style and longevity.";

export default function OurStory() {
  const handleOurJourneyClick = () => {
    const processSection = document.getElementById("process-section");
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="our-story-section"
      className="py-12 sm:py-16 lg:py-24 bg-[#fbfbfb] text-brand-dark relative select-none"
    >
      <div className=" mx-auto px-4 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3.5fr_6.5fr] gap-10 items-center">
          {/* Story text (left column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className=" flex flex-col items-start gap-3"
          >
            {/* Predefined gold subtitle */}
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block">
              OUR STORY
            </span>

            {/* Main high-contrast serif title */}
            <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-brand-dark tracking-tight">
              Built For Precision.
              <br />
              Finished With Craft.
            </h2>

            {/* Elegant thin golden horizontal divider block */}
            <div className="w-12 h-[2px] bg-brand-gold  mb-4"></div>

            <div className="mt-1 flex flex-col gap-3">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 font-sans text-sm leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Custom styled golden outlined button */}
            <button
              onClick={handleOurJourneyClick}
              className="mt-6 px-7 py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-sans text-xs font-bold tracking-[0.22em] rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300 bg-transparent cursor-pointer"
            >
              <span>OUR JOURNEY</span>
              <ArrowRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Overlapping Photo + Mission-Vision layout (right side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className=" relative w-full"
          >
            {/* Desktop Layout: Premium Overlapping Block */}
            <div className="hidden lg:block relative w-full min-h-[500px]">
              {/* Main wide background image */}
              <div className="absolute left-0 top-[6%] w-[70%] h-[88%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800"
                    fill
                    alt="Luxury Modern Architecture Kitchen & Living Room Space"
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* <div className="absolute inset-0 bg-black/5"></div> */}
              </div>

              {/* Overlapping Dark Mission & Vision Card */}
              <div className="absolute right-0 top-0 w-[35%] min-w-[300px] min-h-[500px] bg-[#010129] rounded-2xl py-8 px-7 flex flex-col justify-center gap-6 text-[#f3f4f6] shadow-[0_25px_60px_rgba(0,0,0,0.45)] z-20">
                {/* Item 1: Vision */}
                <div className="flex flex-col items-start gap-3">
                  <div className="text-brand-gold transform transition-transform duration-300 hover:scale-105">
                    <Eye className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-normal text-brand-gold tracking-wide leading-tight">
                      Our Vision
                    </h3>
                    <p className="text-zinc-300 font-sans text-[13px] leading-relaxed">
                      {visionText}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10" />

                {/* Item 2: Mission */}
                <div className="flex flex-col items-start gap-3">
                  <div className="text-brand-gold transform transition-transform duration-300 hover:scale-105">
                    <Gem className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-normal text-brand-gold tracking-wide leading-tight">
                      Our Mission
                    </h3>
                    <p className="text-zinc-300 font-sans text-[13px] leading-relaxed">
                      {missionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Stack Layout */}
            <div className="flex lg:hidden flex-col gap-6">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800"
                    fill
                    alt="Luxury Modern Architecture Kitchen & Living Room Space"
                    sizes="100vw"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              {/* Dark Box Content for Mobile */}
              <div className="w-full bg-[#010129] border border-white/5 rounded-2xl p-8 sm:p-10 flex flex-col gap-8 text-[#f3f4f6] shadow-lg">
                {/* Item 1: Vision */}
                <div className="flex flex-col items-start gap-4">
                  <div className="text-brand-gold">
                    <Eye className="w-8 h-8 stroke-[1.25]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg font-normal text-brand-gold tracking-wide leading-tight">
                      Our Vision
                    </h3>
                    <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                      {visionText}
                    </p>
                  </div>
                </div>

                {/* Divider line */}
                <div className="w-full h-px bg-brand-white/5"></div>

                {/* Item 2: Mission */}
                <div className="flex flex-col items-start gap-4">
                  <div className="text-brand-gold">
                    <Gem className="w-8 h-8 stroke-[1.25]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-serif text-lg font-normal text-brand-gold tracking-wide leading-tight">
                      Our Mission
                    </h3>
                    <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                      {missionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
