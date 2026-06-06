"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  LayoutGrid,
  Sliders,
  Sofa,
  RefreshCw,
  Building2,
} from "lucide-react";
import kitchenImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import wardrobeImg from "../../assets/images/luxury_wardrobe_card_1780070338933.png";
import interiorImg from "../../assets/images/interior_living_room_1780070361503.png";
import renovationImg from "../../assets/images/renovation_kitchen_living_1780070378792.png";
import officeImg from "../../assets/images/executive_office_card_1780070403397.png";
import Image from "next/image";
import Link from "next/link";

export default function Expertise() {
  const services = [
    {
      id: "modular-kitchens",
      title: "Modular Kitchens",
      desc: "Stylish, functional and customized kitchens designed for modern living.",
      img: kitchenImg,
      iconElement: (
        <LayoutGrid className="w-5 h-5 text-brand-gold" strokeWidth={1.8} />
      ),
    },
    {
      id: "luxury-wardrobes",
      title: "Luxury Wardrobes",
      desc: "Smart storage solutions that blend elegance with functionality.",
      img: wardrobeImg,
      iconElement: (
        <Sliders className="w-5 h-5 text-brand-gold" strokeWidth={1.8} />
      ),
    },
    {
      id: "interior-design",
      title: "Interior Design",
      desc: "Complete interior solutions tailored to your taste and lifestyle.",
      img: interiorImg,
      iconElement: (
        <Sofa className="w-5 h-5 text-brand-gold" strokeWidth={1.8} />
      ),
    },
    {
      id: "renovations",
      title: "Renovations",
      desc: "Transform your existing spaces with our renovation expertise.",
      img: renovationImg,
      iconElement: (
        <RefreshCw className="w-5 h-5 text-brand-gold" strokeWidth={1.8} />
      ),
    },
    {
      id: "commercial-interiors",
      title: "Commercial Interiors",
      desc: "Premium interior solutions for offices, retail and commercial spaces.",
      img: officeImg,
      iconElement: (
        <Building2 className="w-5 h-5 text-brand-gold" strokeWidth={1.8} />
      ),
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { y: -8, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="services"
      className="bg-[#ffffff] px-4 sm:px-10 md:px-16  py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with staggered animation */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            <span className="text-brand-gold font-sans text-[12.5px] font-bold tracking-[0.2em] uppercase">
              OUR EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#111827] font-semibold tracking-tight">
              Premium Solutions <br />
              <span className="font-semibold text-[#111827]">
                For Every Space
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col items-start gap-5"
          >
            <p className="text-zinc-500 font-sans text-base leading-relaxed max-w-md">
              From concept to completion, we deliver bespoke interior solutions
              that reflect your style and elevate your living and working
              spaces.
            </p>
            <Link
              href="/our-services"
              className="inline-flex items-center gap-1 text-[13px] font-sans font-bold tracking-wider text-brand-gold hover:text-[#eec176] transition-colors uppercase"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>VIEW ALL SERVICES</span>
              <span className="text-lg leading-none select-none relative -top-0.5 ml-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 5-Column Grid with staggered card animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-brand-white rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm transition-all duration-300 flex flex-col h-full group hover:shadow-lg"
            >
              {/* Card Image section with floating badge overlay */}
              <div className="relative">
                <div className="relative h-44 overflow-hidden shrink-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 left-5 w-11 h-11 bg-[#0f1115] border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-40 group-hover:scale-[1.1] group-hover:rotate-6 transition-all duration-200"
                  // whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.iconElement}
                </motion.div>
              </div>

              {/* Card content block */}
              <div className="p-5 flex flex-col justify-between flex-grow pt-8 bg-brand-white pb-6">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-serif text-[18px] md:text-[19px] font-bold text-[#111827] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-sans min-h-[52px]">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 mt-2">
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-extrabold tracking-widest text-brand-gold hover:text-[#eec176] transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span>EXPLORE</span>
                    <span className="text-base leading-none select-none relative -top-0.5 ml-0.5 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
