"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Gem, Eye } from "lucide-react";
import Image from "next/image";

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
        <div className="grid grid-cols-1 lg:grid-cols-[3.2fr_6.8fr] gap-10 items-center">
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
              Crafted With Passion.
              <br />
              Built On Trust.
            </h2>

            {/* Elegant thin golden horizontal divider block */}
            <div className="w-12 h-[2px] bg-brand-gold  mb-4"></div>

            {/* Premium body text paragraphs */}
            <p className="text-zinc-600 font-sans text-sm  leading-relaxed mt-1">
              Founded with a vision to redefine modern living, we specialize in
              premium modular kitchens and luxury interiors for residential and
              commercial spaces.
            </p>
            <p className="text-zinc-600/90 font-sans text-sm  leading-relaxed">
              From concept to completion, we focus on quality, innovation and
              attention to detail, delivering spaces that are timeless,
              functional and truly yours.
            </p>

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
            <div className="hidden lg:block relative w-full h-[450px]">
              {/* Main wide background image */}
              <div className="absolute left-0 top-[4%] w-[76%] h-[60%] lg:h-[92%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800"
                    fill
                    alt="Luxury Modern Architecture Kitchen & Living Room Space"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* <div className="absolute inset-0 bg-black/5"></div> */}
              </div>

              {/* Overlapping Dark Mission & Vision Card */}
              <div className="absolute right-0 top-0 w-[230px] h-[100%] bg-[#010129]  rounded-2xl py-10 px-8 flex flex-col justify-center gap-5 text-[#f3f4f6] shadow-[0_25px_60px_rgba(0,0,0,0.45)] z-20">
                {/* Item 1: Mission */}
                <div className="flex flex-col items-start gap-4">
                  <div className="text-brand-gold transform transition-transform duration-300 hover:scale-105">
                    <Gem className="w-9 h-9 stroke-[1.2]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-normal text-brand-gold tracking-wide leading-tight">
                      Our Mission
                    </h3>
                    <p className="text-zinc-300 font-sans text-xs sm:text-[13.5px] leading-relaxed">
                      To create exceptional spaces that inspire, enhance
                      lifestyles, and stand the test of time.
                    </p>
                  </div>
                </div>

                {/* Item 2: Vision */}
                <div className="flex flex-col items-start gap-4">
                  <div className="text-brand-gold transform transition-transform duration-300 hover:scale-105">
                    <Eye className="w-9 h-9 stroke-[1.2]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-xl font-normal text-brand-gold tracking-wide leading-tight">
                      Our Vision
                    </h3>
                    <p className="text-zinc-300 font-sans text-xs sm:text-[13.5px] leading-relaxed">
                      To be a global leader in luxury interior solutions
                      recognized for design excellence and trust.
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
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              {/* Dark Box Content for Mobile */}
              <div className="w-full bg-[#010129] border border-white/5 rounded-2xl p-8 sm:p-10 flex flex-col gap-8 text-[#f3f4f6] shadow-lg">
                {/* Item 1: Mission */}
                <div className="flex flex-col items-start gap-4">
                  <div className="text-brand-gold">
                    <Gem className="w-8 h-8 stroke-[1.25]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg font-normal text-brand-gold tracking-wide leading-tight">
                      Our Mission
                    </h3>
                    <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                      To create exceptional spaces that inspire, enhance
                      lifestyles, and stand the test of time.
                    </p>
                  </div>
                </div>

                {/* Divider line */}
                <div className="w-full h-px bg-brand-white/5"></div>

                {/* Item 2: Vision */}
                <div className="flex flex-col items-start gap-4">
                  <div className="text-brand-gold">
                    <Eye className="w-8 h-8 stroke-[1.25]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-serif text-lg font-normal text-brand-gold tracking-wide leading-tight">
                      Our Vision
                    </h3>
                    <p className="text-zinc-300 font-sans text-xs sm:text-sm leading-relaxed">
                      To be a global leader in luxury interior solutions
                      recognized for design excellence and trust.
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
