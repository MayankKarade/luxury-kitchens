"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, Network, Globe, Star, Clock } from "lucide-react";
import { motion } from "motion/react";

function AnimatedNumber({ value, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Stats() {
  const statsList = [
    {
      iconElement: (
        <Award className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      target: 15,
      suffix: "+",
      label: "Years Experience",
    },
    {
      iconElement: (
        <Network className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      target: 1200,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      iconElement: (
        <Globe className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      target: 5,
      suffix: "",
      label: "Countries Served",
    },
    {
      iconElement: (
        <Star
          className="w-11 h-11 text-brand-gold fill-brand-gold/10"
          strokeWidth={1.5}
        />
      ),
      target: 98,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      iconElement: (
        <Clock className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      target: 24,
      suffix: "/7",
      label: "Dedicated Support",
    },
  ];

  return (
    <section className="w-full bg-brand-light py-10 lg:py-12 border-y border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Five column modular responsive grid: adapts from stacked to 2-columns (grid-cols-2) then 3, and cleanly aligned in 5-columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-6 lg:gap-0 items-center justify-between lg:divide-x-2 lg:divide-zinc-200">
          {statsList.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:items-center lg:items-center gap-4 justify-center text-center sm:text-center lg:text-center px-4 py-1 ${
                index === statsList.length - 1
                  ? "col-span-2 sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                {stat.iconElement}
              </div>

              <div className="flex flex-col gap-1 sm:gap-0.5">
                <span className="font-sans text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight leading-none">
                  <AnimatedNumber value={stat.target} />
                  {stat.suffix}
                </span>
                <span className="text-xs md:text-[13px] text-zinc-500 font-sans font-medium tracking-wide block max-w-[140px] mx-auto sm:mx-0">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
