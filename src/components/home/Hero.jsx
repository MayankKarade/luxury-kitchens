"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/Home/caliwoodHomeHero.png";
import { useConsultation } from "@/context/ConsultationContext";
import Image from "next/image";

export default function Hero() {
  const { openModal } = useConsultation();

  const features = [
    {
      image: "/hero/shieldCheck.png",
      title: "Bespoke Design",
      desc: "Planned around your space",
    },
    {
      image: "/hero/penTool.png",
      title: "Made to Size",
      desc: "Built to your measurements",
    },
    {
      image: "/hero/CogSetting.png",
      title: "Durable Materials",
      desc: "Selected for your project",
    },
    {
      image: "/hero/Wrench.png",
      title: "Expert Installation",
      desc: "Professionally fitted",
    },
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
      className="relative min-h-screen 2xl:min-h-[50rem] flex flex-col justify-between items-center bg-[#F5E7DE] pt-28 sm:pt-40 pb-14 overflow-hidden"
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
        <div
          className="absolute inset-y-0 left-0 w-full backdrop-blur-[3px] lg:w-[72%]"
          style={{
            maskImage:
              "linear-gradient(to right, black 0%, black 45%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,231,222,0.98)_0%,rgba(245,231,222,0.94)_45%,rgba(245,231,222,0.7)_72%,rgba(245,231,222,0.4)_100%)] lg:bg-[linear-gradient(90deg,#F5E7DE_0%,rgba(245,231,222,0.98)_24%,rgba(245,231,222,0.90)_40%,rgba(245,231,222,0.55)_52%,rgba(245,231,222,0.08)_68%,transparent_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5E7DE]/45 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-16 w-full ">
        <div className="w-full lg:w-[55%] mx-auto relative z-10 flex-grow flex flex-col justify-center">
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
                className="bg-brand-gold/7 text-brand-gold rounded-full px-3 py-0.5 font-sans text-xs font-bold tracking-[0.25em] uppercase block w-fit"
              >
                DESIGNED. BUILT. INSTALLED.
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-brand-dark leading-[1.08] tracking-tight"
              >
                Bespoke Furniture.
                <br />
                Crafted for Your Space.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-zinc-700 font-sans text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mt-2"
              >
                Cali Wood creates durable, made-to-size kitchens, wardrobes and
                custom furniture designed around your space, style and everyday
                needs. From design and manufacturing to professional
                installation, we manage every stage to deliver a beautifully
                finished space.
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
                  className="px-5 py-3.5 border border-brand-gold hover:bg-brand-gold/10 text-brand-gold font-sans text-xs font-bold tracking-wide rounded-[1px] flex items-center justify-center gap-2 transition-all duration-300"
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
                  {/* <span className="text-xs font-bold text-white tracking-[0.1em] uppercase">
                    500+ Happy Clients
                  </span> */}
                  <span className="text-xs font-bold text-brand-dark tracking-wide capitalize ">
                    Furniture designed around your space
                  </span>
                  <div className="flex items-center gap-1.5">
                    {/* <div className="flex items-center text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-current text-brand-gold"
                        />
                      ))}
                    </div> */}
                    <span className="text-xs text-zinc-600 font-sans font-semibold">
                      Precision-built to size • Professionally installed
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
          className="w-full lg:w-[45%] mx-auto lg:mr-8 relative z-10 mt-auto pt-6"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-end">
            <div className="w-full lg:max-w-4xl bg-white/65 backdrop-blur-xs border border-white/70 rounded-xl p-5  shadow-2xl relative overflow-hidden group">
              <div className="grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-8 px-2 ">
                {features.map((feat, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center lg:items-start justify-center gap-4 py-2"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center shrink-0 bg-white/70">
                      <Image
                        src={feat.image}
                        alt={`${feat.title} icon`}
                        width={42}
                        height={42}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-brand-dark font-semibold text-xs sm:text-sm tracking-wide font-sans">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-center sm:text-start sm:text-xs text-zinc-600 mt-0.5 font-sans">
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
