"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Gem,
  Clock,
  Award,
  Lightbulb,
  Headphones,
} from "lucide-react";
import { useConsultation } from "../../context/ConsultationContext";

export default function ExcellenceDetail() {
  const { openModal } = useConsultation();

  // Why choose us columns
  const valueColumns = [
    {
      title: "Premium Quality",
      desc: "We use the finest materials and deliver exceptional craftsmanship.",
      Icon: Gem,
    },
    {
      title: "On-Time Delivery",
      desc: "We value your time and ensure on-time project completion.",
      Icon: Clock,
    },
    {
      title: "Customer First",
      desc: "Your satisfaction is our priority, always at every step.",
      Icon: Award,
    },
    {
      title: "Innovative Designs",
      desc: "Creative solutions that combine aesthetics with functionality.",
      Icon: Lightbulb,
    },
    {
      title: "Dedicated Support",
      desc: "24/7 support to assist you throughout your journey.",
      Icon: Headphones,
    },
  ];

  return (
    <section
      id="services-excellence-section"
      className="py-12 sm:py-16 bg-[#090a0f] border-t border-neutral-800/20 relative overflow-hidden"
    >
      {/* Decorative subtle golden layout lines/glow grids */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#dfab56_0.8px,transparent_0.8px)] [background-size:32px_32px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[165px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-brand-gold/3 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2.8fr_9.2fr] gap-6 items-start">
          {/* Left Side Copy */}
          <div className=" flex flex-col items-start text-left">
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3.5 select-none">
              WHY CHOOSE US
            </span>

            <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-white tracking-tight">
              Excellence In <br />
              Every Detail
            </h2>

            <p className="text-zinc-400 mt-6 font-sans text-[14px] sm:text-[14.5px] leading-relaxed mb-8 max-w-sm">
              We are committed to delivering spaces that reflect perfection,
              innovation and unmatched craftsmanship.
            </p>

            {/* Learn More trigger */}
            <button
              onClick={openModal}
              className="px-6 py-3.5 bg-brand-gold hover:bg-[#eec176] text-brand-dark font-sans text-xs font-bold tracking-[0.18em] rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_8px_20px_rgba(223,171,86,0.15)] group cursor-pointer"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-dark transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side: Horizontal columns */}
          <div className=" w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-8 lg:gap-0 items-stretch">
              {valueColumns.map((val, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center pt-1 sm:pt-0 h-full"
                >
                  {/* Icon */}
                  <div className="text-brand-gold mb-5 transform transition-transform duration-300 hover:scale-110">
                    <val.Icon className="w-10 sm:w-13 h-10 sm:h-13 stroke-[1.25]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-white text-center font-sans text-[12.5px] font-bold tracking-wide mt-1 mb-2">
                    {val.title}
                  </h4>

                  {/* Description */}
                  <p className="text-zinc-400 text-center font-sans px-2 text-xs sm:text-[12.5px] leading-relaxed">
                    {val.desc}
                  </p>

                  {/* Divider for Tablet (2 columns) - only between col1 and col2 */}
                  {idx % 2 === 0 && idx !== valueColumns.length - 1 && (
                    <div className="hidden sm:block md:hidden absolute right-0 top-0 bottom-0 w-px bg-zinc-700/50" />
                  )}

                  {/* Divider for Desktop (5 columns) - between all except 5th item of each row */}
                  {(idx + 1) % 5 !== 0 && idx !== valueColumns.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[2px] bg-zinc-700/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
