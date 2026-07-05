"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "../../context/ConsultationContext";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";

export default function ServicesHero() {
  const { openModal } = useConsultation();

  return (
    <section
      id="services-hero"
      className="relative min-h-screen 2xl:min-h-[50rem] flex flex-col justify-center pt-28 sm:pt-40 pb-14  overflow-hidden bg-brand-dark"
    >
      {/* Background Immersive Photo with precise luxury masking */}
      <div className="w-full h-full absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Premium Luxury Dark Kitchen Design"
          fill
          className="w-full h-full object-cover object-right lg:object-center filter brightness-[1.5] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 via-brand-dark/46 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-brand-dark/28" />
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-gold/5 blur-[180px] pointer-events-none rounded-full" />
      </div>

      <div className=" mx-auto px-4 sm:px-10 md:px-16 relative z-10 w-full ">
        {/* Breadcrumb row matching exactly "Home > About Us" in image */}
        <div className="flex items-center gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8">
          <Link
            href="/"
            className="text-zinc-350 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-brand-gold font-normal px-0.5">&gt;</span>
          <span className="text-brand-gold font-medium">Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 flex flex-col items-start gap-4"
          >
            {/* ABOVE US pre-title */}
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block">
              OUR SERVICES
            </span>

            {/* Main high-contrast elegant serif heading matching photo exactly */}
            <h1 className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.08] tracking-tight">
              Premium Interior <br />
              Solutions Tailored <br />
              For You
            </h1>

            {/* Premium description paragraph */}
            <p className="text-zinc-300 font-sans text-base sm:text-lg max-w-[540px] leading-relaxed mt-4">
              From concept to completion, we create timeless spaces that blend
              luxury, functionality and your personal style.
            </p>

            {/* Golden action button matches image perfectly with golden bg and white bold text */}
            <button
              onClick={openModal}
              className="mt-8 px-8 py-4.5 bg-brand-gold hover:bg-[#9A0101] text-white font-sans text-xs font-bold tracking-normal rounded-[1px] flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(154,1,1,0.3)] shadow-[0_12px_28px_rgba(154,1,1,0.15)] group cursor-pointer"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
