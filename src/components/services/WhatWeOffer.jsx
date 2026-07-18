"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServiceDetailIcon } from "../service-detail/ServiceDetailIcons";

export default function WhatWeOffer({ services }) {
  return (
    <section
      id="services-grid-section"
      className="py-12 sm:py-16 lg:py-20 bg-brand-white relative z-10"
    >
      <div className="px-4 sm:px-10 md:px-16 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="text-brand-gold font-sans text-xs font-extrabold tracking-[0.25em] uppercase block mb-3">
            WHAT WE OFFER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-900 tracking-tight">
            Bespoke Furniture & Interior Solutions
          </h2>
          <div className="w-12 h-[2px] bg-brand-gold mt-4 mb-5"></div>
          <p className="text-neutral-500 font-sans text-[15px] sm:text-base max-w-2xl leading-relaxed">
            From custom kitchens and wardrobes to corporate interiors and
            made-to-measure furniture, we deliver complete design, manufacturing
            and installation solutions crafted for lasting quality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-brand-white border border-neutral-100 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo container */}
              <div className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden select-none bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
                </div>

                {/* Badge with icon image or fallback SVG */}
                <motion.div
                  className="absolute -bottom-6 left-5 w-13 h-13 bg-[#010129] border border-brand-gold/30 rounded-xl flex items-center justify-center shadow-lg z-40 group-hover:scale-[1.1] group-hover:rotate-6 transition-all duration-200"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  ) : (
                    <ServiceDetailIcon
                      name="service"
                      className="h-7 w-7 text-brand-gold"
                    />
                  )}
                </motion.div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-grow items-start">
                <span className="text-brand-gold/95 font-mono text-[13px] sm:text-sm font-bold tracking-widest block mb-1.5 select-none">
                  {idx + 1}
                </span>
                <h3 className="font-serif text-[21px] sm:text-[23px] text-neutral-900 font-normal tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-500 font-sans text-[14px] sm:text-[14.5px] leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/our-services/${service.slug}`}
                  className="text-brand-gold hover:text-[#9A0101] font-sans text-xs font-bold tracking-[0.2em] flex items-center gap-2 mt-auto group transition-colors cursor-pointer select-none"
                >
                  <span>EXPLORE DESIGNS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
