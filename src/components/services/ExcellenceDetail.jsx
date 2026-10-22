"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Gem,
  Ruler,
  Award,
  Factory,
  Settings2,
} from "lucide-react";
import { useConsultation } from "../../context/ConsultationContext";

export default function ExcellenceDetail() {
  const { openModal } = useConsultation();

  // Why choose us columns
  const valueColumns = [
    {
      title: "Bespoke Design",
      desc: "Furniture thoughtfully planned around your space, style and practical requirements.",
      Icon: Gem,
    },
    {
      title: "Precision Manufacturing",
      desc: "Made-to-size furniture built with attention to durability, function and fit.",
      Icon: Factory,
    },
    {
      title: "Custom Sizing",
      desc: "Solutions can be adapted to suit the measurements and requirements of your space.",
      Icon: Ruler,
    },
    {
      title: "Expert Installation",
      desc: "Professional fitting ensures everything works properly and looks right once installed.",
      Icon: Award,
    },
    {
      title: "Finish Options",
      desc: "Choose from different accessories, materials and worktop options to personalise your project.",
      Icon: Settings2,
    },
  ];

  return (
    <section
      id="services-excellence-section"
      className="py-12 sm:py-16 bg-[#010129] border-t border-neutral-800/20 relative overflow-hidden"
    >
      {/* Decorative subtle golden layout lines/glow grids */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#9A0101_0.8px,transparent_0.8px)] [background-size:32px_32px]"></div>
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[165px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-brand-gold/3 blur-[140px] rounded-full"></div>
      </div>

      <div className=" mx-auto px-4 sm:px-10 md:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2.8fr_9.2fr] gap-6 items-start">
          {/* Left Side Copy */}
          <div className=" flex flex-col items-start text-left">
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3.5 select-none">
              WHY CALI WOOD
            </span>

            <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-white tracking-tight">
              Built Around Your Space,
              <br />
              From Start to Finish
            </h2>

            <p className="text-zinc-400 mt-6 font-sans text-[14px] sm:text-[14.5px] leading-relaxed mb-8 max-w-sm">
              Cali Wood combines bespoke design, precision manufacturing and
              expert installation to create furniture tailored to your space,
              requirements and preferences.
            </p>

            {/* Learn More trigger */}
            <button
              onClick={openModal}
              className="px-6 py-3.5 bg-brand-gold hover:bg-[#9A0101] text-white font-sans text-xs font-bold tracking-[0.18em] rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_8px_20px_rgba(154,1,1,0.15)] group cursor-pointer"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side: Horizontal columns */}
          <div className=" w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-0 items-stretch">
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
                    <div className="hidden sm:block md:hidden absolute right-[-16px] top-0 bottom-0 w-px bg-zinc-700/50" />
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
