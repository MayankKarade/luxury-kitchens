"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { landDots } from "@/data/landDots";
import Image from "next/image";
import worldMap from "../../assets/images/worldMap.png";

const MapPinIcon = () => (
  <span className="relative flex items-center justify-center w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] shrink-0">
    <span className="absolute inline-flex h-5 w-5 rounded-full bg-brand-gold/35 animate-ping duration-[1200ms]"></span>
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full text-brand-gold relative z-10 filter drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.15)]"
      fill="currentColor"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#dfab56"
      />
      <circle cx="12" cy="9" r="3.5" fill="#ffffff" />
      <circle cx="12" cy="9" r="1.5" fill="#dfab56" />
    </svg>
  </span>
);
export default function Presence() {
  const { openModal } = useConsultation();

  // Pin positions from script (height 295 ke hisaab se)
  const locations = [
    { name: "Canada", top: "60.93%", left: "34.31%" },
    { name: "USA", top: "75.00%", left: "35.88%" },
    { name: "UK", top: "61.60%", left: "49.49%" },
    { name: "Europe", top: "62.34%", left: "52.25%" },
    { name: "Ghana", top: "91.01%", left: "49.85%" },
  ];

  return (
    <section className="bg-[#fbfbfb] text-brand-dark relative select-none overflow-hidden">
      {/* Full width container – no max-width, no horizontal padding */}
      <div className="max-w-7xl mx-auto relative w-full px-4 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[4.5fr_5.5fr] gap-0 items-center ">
          {/* Left text column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left py-16 "
          >
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              INTERNATIONAL PRESENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] text-brand-dark tracking-tight mb-3">
              Serving Clients Worldwide
            </h2>
            <div className="w-10 h-[2px] bg-brand-gold mb-4"></div>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed max-w-xs mb-5">
              We proudly deliver our premium interior solutions across multiple
              countries with a commitment to quality and global standards.
            </p>
            <button
              onClick={openModal}
              className="px-5 py-2.5 border mt-4 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-sans text-xs font-bold tracking-[0.18em] rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300 bg-transparent group cursor-pointer uppercase whitespace-nowrap"
            >
              <span>VIEW ALL LOCATIONS</span>
              <ArrowRight className="w-3.5 h-3.5 text-current transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Map column – takes remaining width, no gaps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="relative w-full h-full aspect-[4/2]">
              <Image src={worldMap} alt="" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
