"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import ServiceLocationsMap from "../locations/ServiceLocationsMap";
export default function Presence() {
  const { openModal } = useConsultation();

  return (
    <section className="relative bg-[#fbfbfb] text-brand-dark">
      <div className=" mx-auto relative w-full px-4 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[4.1fr_5.9fr] lg:gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left pt-14 pb-2 lg:py-16"
          >
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              SPACES WE CREATE FOR
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] text-brand-dark tracking-tight mb-3">
              Designed for Homes, Workplaces and Commercial Spaces
            </h2>
            <div className="w-10 h-[2px] bg-brand-gold mb-4"></div>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed max-w-xs mb-5">
              Cali Wood creates custom furniture solutions for residential,
              corporate and commercial spaces, with every project planned around
              the space, function and specific needs of the client.
            </p>
            <button
              onClick={openModal}
              className="px-5 py-2.5 border mt-4 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-sans text-xs font-bold tracking-[0.18em] rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300 bg-transparent group cursor-pointer uppercase whitespace-nowrap"
            >
              <span>BOOK A SITE VISIT</span>
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
              <ServiceLocationsMap />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
