"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Sliders, Sofa, Building2, RefreshCw } from "lucide-react";
import Link from "next/link";
import heroImg from "../../assets/Home/caliwoodPortfolioHero.png";
import Image from "next/image";

export default function PortfolioHero() {
  // Original categories – unchanged
  const categories = [
    {
      id: "kitchens",
      label: "Kitchens",
      count: "Bespoke layouts & finishes",
      icon: Home,
    },
    {
      id: "wardrobes",
      label: "Fitted Wardrobes",
      count: "Made-to-size storage",
      icon: Sliders,
    },
    {
      id: "tv_media",
      label: "TV & Media Units",
      count: "Custom-built solutions",
      icon: Sofa,
    },
    {
      id: "commercial",
      label: "Corporate Furniture",
      count: "Furniture for workspaces",
      icon: Building2,
    },
    {
      id: "custom_interiors",
      label: "Custom Interiors",
      count: "Tailored furniture designs",
      icon: RefreshCw,
    },
  ];

  // Animation variants – same as Hero
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section
      id="portfolio-hero"
      className="relative min-h-screen 2xl:min-h-[50rem] flex flex-col justify-between items-center pt-28 sm:pt-40 pb-14 overflow-hidden "
    >
      {/* Background – exactly like Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          fill
          sizes="100vw"
          alt="Luxury Modular Kitchen and Custom Interior Backdrop"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 theme-hero-wash" />
        <div className="absolute inset-0 theme-hero-bottom" />
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-gold/5 blur-[180px] pointer-events-none rounded-full" />
      </div>

      <div className="w-full   px-4 sm:px-10 lg:px-16   mx-auto relative z-10 flex-grow flex flex-col justify-center">
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="w-fit px-3 py-0.5 rounded-full flex items-center bg-white/70 border border-brand-gold/10 gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8">
            <Link
              href="/"
              className="text-brand-dark font-medium hover:font-bold transition-all duration-150"
            >
              Home
            </Link>
            <span className="text-brand-dark font-normal px-0.5">&gt;</span>
            <span className="text-brand-dark font-medium hover:font-bold transition-all duration-150">
              Portfolio
            </span>
          </div>
          {/* Gold label – original */}
          <motion.span
            variants={fadeInUp}
            className="bg-brand-gold/7 text-brand-gold rounded-full px-3 py-0.5 font-sans text-xs font-bold tracking-[0.25em] uppercase block w-fit"
          >
            OUR PORTFOLIO
          </motion.span>

          {/* Heading – original text, but gradient styling from Hero optional (kept simple) */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-dark leading-[1.08] tracking-tight"
          >
            Furniture Made <br />
            for Real Spaces
          </motion.h1>

          {/* Description – original */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-600 tracking-wide font-sans font-medium max-w-xl leading-relaxed"
          >
            Explore selected Cali Wood projects across kitchens, fitted
            wardrobes, TV units, corporate furniture and custom interiors, each
            designed, manufactured and installed around the client&apos;s space,
            needs and preferences.
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="w-full  mx-auto relative z-10 mt-auto pt-6  px-4 sm:px-10 lg:px-16 "
        variants={slideInRight}
        initial="hidden"
        animate="visible"
      >
        <div className="flex w-full justify-end">
          <div className="w-full bg-white/70 backdrop-blur-xs border border-brand-gold/10 rounded-xl px-4 py-6 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-2 ">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    className="flex flex-row items-start sm:items-center justify-start gap-2 py-3 rounded-lg transition-all duration-300"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div
                      className={`w-9 sm:w-12 h-9 sm:h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 border-brand-gold/40 text-brand-gold `}
                    >
                      <Icon
                        className={`w-5 sm:w-7 h-5 sm:h-7 text-brand-gold `}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="text-brand-dark font-semibold text-xs sm:text-sm tracking-wide font-sans">
                        {cat.label}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-zinc-600 mt-0.5 font-sans">
                        {cat.count}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
