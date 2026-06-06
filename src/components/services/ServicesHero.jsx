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
          className="w-full h-full object-cover object-right lg:object-center filter brightness-[0.80] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Mobile vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/85 to-brand-dark/60 lg:hidden"></div>

        {/* Desktop premium horizontal fade overlay - blends transparently on the right, fades to pure deep solid black on the left */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 via-brand-dark/85 via-brand-dark/50 to-brand-dark/10"></div>

        {/* Additional master vignette cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-16 relative z-10 w-full ">
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
              className="mt-8 px-8 py-4.5 bg-brand-gold hover:bg-[#e5b667] text-brand-dark font-sans text-xs font-bold tracking-normal rounded-[1px] flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(223,171,86,0.3)] shadow-[0_12px_28px_rgba(223,171,86,0.15)] group cursor-pointer"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 text-brand-dark transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
