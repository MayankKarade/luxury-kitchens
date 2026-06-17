"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import Image from "next/image";
import worldMap from "../../assets/images/worldMap.png";

const locations = [
  { name: "Canada", top: "24%", left: "30%" },
  { name: "USA", top: "45%", left: "27%" },
  { name: "UK", top: "33%", left: "54%" },
  { name: "Europe", top: "42%", left: "68%" },
  { name: "Ghana", top: "66%", left: "56%" },
];

const MapPinIcon = () => (
  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center sm:h-6 sm:w-6">
    <span className="absolute inline-flex h-6 w-6 rounded-full bg-brand-gold/25 animate-ping" />
    <svg
      viewBox="0 0 24 24"
      className="relative z-10 h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.24)]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.25c-3.78 0-6.85 3.07-6.85 6.85 0 5.14 6.85 12.65 6.85 12.65s6.85-7.51 6.85-12.65c0-3.78-3.07-6.85-6.85-6.85Z" fill="#dfab56" />
      <circle cx="12" cy="9.1" r="3.1" fill="#fff8eb" />
      <circle cx="12" cy="9.1" r="1.45" fill="#dfab56" />
    </svg>
  </span>
);
export default function Presence() {
  const { openModal } = useConsultation();

  return (
    <section className="relative bg-[#fbfbfb] text-brand-dark">
      <div className="max-w-7xl mx-auto relative w-full px-4 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[4.1fr_5.9fr] lg:gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left pt-14 pb-2 lg:py-16"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full pb-12 pt-2 lg:py-12"
          >
            <div className="relative mx-auto w-full max-w-[820px] overflow-visible">
              <div className="relative aspect-[1693/929] w-full overflow-visible sm:min-h-[300px] lg:min-h-[340px]">
                <Image
                  src={worldMap}
                  alt="World map showing Netsaarthi service locations"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain object-center opacity-70"
                />

                <div className="pointer-events-none absolute left-[25%] top-[43%] hidden h-[24%] w-[38%] rounded-[50%] border-t border-dashed border-brand-gold/55 lg:block" />
                <div className="pointer-events-none absolute left-[57%] top-[41%] hidden h-[21%] w-[24%] rounded-[50%] border-t border-dashed border-brand-gold/45 lg:block" />

                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="absolute z-10 flex -translate-x-1/2 -translate-y-full items-center gap-1.5 sm:gap-2"
                    style={{ left: location.left, top: location.top }}
                  >
                    <MapPinIcon />
                    <span className="hidden rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-neutral-800 shadow-[0_8px_22px_rgba(0,0,0,0.14)] ring-1 ring-black/5 sm:inline-flex lg:text-xs">
                      {location.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="flex items-center gap-2 rounded-md border border-brand-gold/20 bg-white px-3 py-2 text-xs font-bold text-neutral-800 shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                    {location.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
