"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, PenTool, Timer } from "lucide-react";
import heroImg from "../../assets/Home/caliwoodHomeHero.png";
import { useConsultation } from "@/context/ConsultationContext";
import Image from "next/image";
import { IoGlobeOutline } from "react-icons/io5";

export default function Hero() {
  const { openModal } = useConsultation();

  const features = [
    { Icon: ShieldCheck, title: "Premium Quality", desc: "Materials" },
    { Icon: PenTool, title: "Custom Designs", desc: "Tailored for You" },
    { Icon: IoGlobeOutline, title: "International", desc: "Service" },
    { Icon: Timer, title: "On-Time", desc: "Delivery" },
  ];

  const clientAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
  ];

  // Animation variants
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
      id="home"
      className="relative min-h-screen 2xl:min-h-[50rem] flex flex-col justify-between items-center pt-28 sm:pt-40 pb-14 overflow-hidden"
    >
      {/* Background wallpaper - static (no motion needed) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          fill
          sizes="100vw"
          alt="Luxury Modular Kitchen and Custom Interior Backdrop"
          className="w-full h-full object-cover object-center filter "
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
        <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-gold/5 blur-[180px] pointer-events-none rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-16 w-full ">
        <div className="w-full lg:w-[45%] mx-auto relative z-10 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-8 items-center">
            {/* Left animated content */}
            <motion.div
              className="lg:col-span-7 flex flex-col items-start gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={fadeInUp}
                className="text-brand-gold font-display text-xs font-semibold tracking-[0.3em] uppercase block mb-1"
              >
                CRAFTING TIMELESS SPACES
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.08] tracking-tight"
              >
                Luxury Kitchens.
                <br />
                Timeless Living.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-gray-300 font-sans text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mt-2"
              >
                We design and build premium modular kitchens and luxury
                interiors that combine elegance, functionality and exceptional
                quality.
              </motion.p>

              {/* Buttons with hover animations */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-6"
              >
                <motion.button
                  onClick={openModal}
                  className="px-5 py-3.5 bg-brand-gold hover:bg-[#9A0101] text-white font-sans text-xs font-bold tracking-wide rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </motion.button>

                <motion.a
                  href="#portfolio"
                  className="px-5 py-3.5 border border-brand-gold hover:bg-brand-gold/10 text-white font-sans text-xs font-bold tracking-wide rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </motion.a>
              </motion.div>

              {/* Social proof */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mt-8"
              >
                <div className="flex -space-x-3">
                  {clientAvatars.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      width={40}
                      height={40}
                      alt="Happy Client Face"
                      className="w-10 h-10 rounded-full border-2 border-brand-gold object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-white tracking-[0.1em] uppercase">
                    500+ Happy Clients
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-current text-brand-gold"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-300 font-sans font-semibold">
                      4.9
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5" />
          </div>
        </div>

        {/* Floating panel – animated slide from right */}
        <motion.div
          className="w-full lg:w-[55%] mx-auto relative z-10 mt-auto pt-6"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-end">
            <div className="w-full lg:max-w-4xl bg-black/20 backdrop-blur-xs border border-white/10 rounded-xl p-6 sm:p-7 shadow-2xl relative overflow-hidden group">
              <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center md:gap-0 px-2 sm:px-4">
                {features.map((feat, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center lg:items-start justify-center gap-4 py-2"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                      <feat.Icon className="w-7 h-7 text-brand-gold" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wide font-sans">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 font-sans">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
