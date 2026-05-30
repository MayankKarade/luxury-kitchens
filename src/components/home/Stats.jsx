"use client";

import React from "react";
import { Award, Network, Globe, Star, Clock } from "lucide-react";

export default function Stats() {
  const statsList = [
    {
      iconElement: (
        <Award className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      num: "15+",
      label: "Years Experience",
    },
    {
      iconElement: (
        <Network className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      num: "1200+",
      label: "Projects Completed",
    },
    {
      iconElement: (
        <Globe className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      num: "5",
      label: "Countries Served",
    },
    {
      iconElement: (
        <Star
          className="w-11 h-11 text-brand-gold fill-brand-gold/10"
          strokeWidth={1.5}
        />
      ),
      num: "98%",
      label: "Client Satisfaction",
    },
    {
      iconElement: (
        <Clock className="w-11 h-11 text-brand-gold" strokeWidth={1.5} />
      ),
      num: "24/7",
      label: "Dedicated Support",
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f6] py-8 border-y border-brand-gold/15 relative">
      <div className="max-w-7xl mx-auto px-6 bg-[#fbf9f6]">
        {/* Five column modular responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-0 items-center justify-between lg:divide-x lg:divide-zinc-200/80">
          {statsList.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4.5 justify-center sm:justify-start lg:justify-center px-4 py-3 sm:py-4 lg:py-2`}
            >
              <div className="flex-shrink-0 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                {stat.iconElement}
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-2xl md:text-3xl font-extrabold text-[#111827] tracking-tight leading-none">
                  {stat.num}
                </span>
                <span className="text-xs md:text-[13px] text-zinc-500 font-sans font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
