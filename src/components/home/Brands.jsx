"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Brands() {
  const brandLogos = [
    {
      id: 0,
      element: (
        <span className="font-sans font-extrabold text-neutral-800 text-[18px] sm:text-[25px] tracking-[0.14em] uppercase select-none whitespace-nowrap">
          HÄFELE
        </span>
      ),
    },
    {
      id: 1,
      element: (
        <div className="flex items-center text-neutral-900 select-none whitespace-nowrap">
          <span className="font-sans font-[900] italic text-[22px] sm:text-[26px] tracking-tight leading-none">
            blum
          </span>
          <span className="text-[10px] align-top relative -top-2 ml-0.5 font-bold">
            ®
          </span>
        </div>
      ),
    },
    {
      id: 2,
      element: (
        <div className="flex items-center gap-2 select-none whitespace-nowrap">
          <svg
            className="w-5 h-5 text-neutral-800 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
          </svg>
          <span className="font-sans font-extrabold text-[17px] sm:text-[20px] tracking-wide text-neutral-900">
            BOSCH
          </span>
        </div>
      ),
    },
    {
      id: 3,
      element: (
        <div className="flex items-center gap-1.8 select-none whitespace-nowrap">
          <svg
            className="w-5.5 h-5.5 text-neutral-800 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12 A1.5 1.5 0 0 0 13 13" />
            <circle cx="9.5" cy="9" r="1" fill="currentColor" />
            <path d="M12 6 v6 h6" strokeWidth="2" />
          </svg>
          <span className="font-sans font-[900] text-[18px] sm:text-[21px] text-neutral-900 tracking-tight ml-0.5">
            LG
          </span>
        </div>
      ),
    },
    {
      id: 4,
      element: (
        <span className="font-sans font-black tracking-widest text-[#111827] text-[17px] sm:text-[21px] select-none whitespace-nowrap uppercase">
          SAMSUNG
        </span>
      ),
    },
    {
      id: 5,
      element: (
        <div className="flex items-center gap-1.5 select-none whitespace-nowrap">
          <div className="w-4.5 h-4.5 shrink-0 flex items-center justify-center">
            <svg
              className="w-full h-full text-neutral-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2zM12 6a6 6 0 0 0-6 6c0 3.314 2.686 6 6 6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-serif font-medium text-[15px] sm:text-[18px] tracking-tight text-neutral-900">
            caesarstone
          </span>
        </div>
      ),
    },
    {
      id: 6,
      element: (
        <span className="font-sans font-light text-[15px] sm:text-[18px] tracking-[0.32em] text-neutral-900 select-none whitespace-nowrap uppercase">
          NATUZZI
        </span>
      ),
    },
  ];

  // Infinite duplicate list to ensure smooth wrapping
  const extendedBrands = [
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
    ...brandLogos,
  ];

  // Slider State
  const [index, setIndex] = useState(brandLogos.length); // Start in the middle set of brands
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-play interval
  useEffect(() => {
    const sliderTimer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(sliderTimer);
  }, [index]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setIndex((prev) => prev - 1);
  };

  // Reset to middle set when reaching boundaries to simulate infinite scroll
  useEffect(() => {
    if (index >= brandLogos.length * 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(brandLogos.length);
      }, 550);
    } else if (index < brandLogos.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(brandLogos.length * 2 - 1);
      }, 550);
    } else {
      setIsTransitioning(true);
    }
  }, [index, brandLogos.length]);

  return (
    <section className="bg-[#fbf9f6] px-4 sm:px-10 md:px-20 py-9 sm:py-10 border-y border-brand-gold/15 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto ">
        {/* Centered Heading */}
        <div className="text-center pb-6">
          <p className="text-[11px] sm:text-[14px] tracking-[0.25em] font-extrabold text-neutral-900 font-sans uppercase">
            PREMIUM BRANDS WE WORK WITH
          </p>
        </div>

        {/* Slider Frame */}
        <div className="relative flex items-center justify-between w-full max-w-[1140px] mx-auto px-1">
          {/* Gold Thin Left Chevron arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-12px] sm:left-[-24px] z-10 w-10 h-10 flex items-center justify-center text-brand-gold hover:text-[#eec176] active:scale-95 transition-all duration-200 cursor-pointer group focus:outline-none"
            aria-label="Previous brand logo"
          >
            <ChevronLeft className="w-8 h-8 stroke-[1.25] transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Masked Sliding Window */}
          <div className="w-full overflow-hidden mx-6 sm:mx-10 select-none">
            <div
              className={`flex items-center ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${index * (100 / 5)}%)`, // Base size based on 5 visible items dynamically
              }}
            >
              {extendedBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="w-1/2 sm:w-1/3 lg:w-1/5 shrink-0 flex items-center justify-center px-4 h-12 transform hover:scale-105 duration-300"
                >
                  <div className="opacity-75 hover:opacity-100 transition-opacity duration-300">
                    {brand.element}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Thin Right Chevron arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-12px] sm:right-[-24px] z-10 w-10 h-10 flex items-center justify-center text-brand-gold hover:text-[#eec176] active:scale-95 transition-all duration-200 cursor-pointer group focus:outline-none"
            aria-label="Next brand logo"
          >
            <ChevronRight className="w-8 h-8 stroke-[1.25] transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
