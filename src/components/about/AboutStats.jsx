"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, Layers, Globe, Star, Clock } from "lucide-react";

// Robust high-performance counter component starting from 0
function AnimatedCounter({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Extract number and suffix gracefully for animated display values.
  let targetNumber = 0;
  let suffix = "";

  if (value.includes("+")) {
    targetNumber = parseInt(value.replace("+", ""), 10) || 0;
    suffix = "+";
  } else if (value.includes("%")) {
    targetNumber = parseInt(value.replace("%", ""), 10) || 0;
    suffix = "%";
  } else if (value.includes("/7")) {
    targetNumber = parseInt(value.split("/")[0], 10) || 0;
    suffix = "/7";
  } else {
    targetNumber = parseInt(value, 10) || 0;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );

            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * targetNumber));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetNumber, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  const stats = [
    {
      Icon: Award,
      num: "1",
      label: "Bespoke Design",
    },
    {
      Icon: Layers,
      num: "2",
      label: "Made to Size",
    },
    {
      Icon: Globe,
      num: "3",
      label: "Quality Options",
    },
    {
      Icon: Star,
      num: "4",
      label: "Expert Installation",
    },
    {
      Icon: Clock,
      num: "5",
      label: "Complete Process",
    },
  ];

  return (
    <section
      id="stats-counter-bar"
      className="relative py-14 bg-[#010129] border-y border-white/5 overflow-hidden select-none"
    >
      {/* Luxury subtle marble pattern overlays matches image */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent"></div> */}
        {/* Subtle decorative golden veins using CSS radial waves */}
        {/* <div className="absolute -top-[50%] -left-[20%] w-[140%] h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent rotate-12"></div> */}
      </div>

      <div className=" mx-auto px-4 sm:px-5 relative z-10 w-full">
        {/* 5-Column Grid with vertical border separators exactly matching image */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 md:gap-y-0 text-center items-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center relative  ${
                // Setup column span for odd count in responsive mobile screens
                idx === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
              }`}
            >
              {/* Premium Luxury vertical dividers exactly as shown in reference layout */}
              {idx > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-full bg-neutral-800"></div>
              )}

              {/* Minimal golden icon - no hard border container, pure premium outline */}
              <div className="text-brand-gold mb-5 transform transition-transform duration-300 hover:scale-115">
                <item.Icon className="w-11 h-11 stroke-[1.25]" />
              </div>

              {/* Bold numbers */}
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-none">
                <AnimatedCounter value={item.num} />
              </h3>

              {/* Captions below number */}
              <span className="text-xs sm:text-[14px] text-zinc-400 font-sans font-normal mt-3.5 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
