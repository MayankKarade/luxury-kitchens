"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../assets/images/modular_kitchen_card_1780250098516.png";
import image2 from "../../assets/images/modular_kitchen_card_1780250098516.png";
import image3 from "../../assets/images/modular_kitchen_card_1780250098516.png";
import image4 from "../../assets/images/modular_kitchen_card_1780250098516.png";
import image5 from "../../assets/images/modular_kitchen_card_1780250098516.png";
import image6 from "../../assets/images/modular_kitchen_card_1780250098516.png";

export default function WhatWeOffer() {
  // Premium services checklist data block with golden icon SVGs
  const servicesList = [
    {
      id: "01",
      slug: "modular-kitchens",
      title: "Modular Kitchens",
      description:
        "Stylish, functional and customized kitchens designed for modern living. Premium materials, smart storage and elegant finishes.",
      image: image1,
      iconSvg: (
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="12" y1="9" x2="12" y2="21" />
          <circle cx="7.5" cy="12" r="1" fill="currentColor" />
          <circle cx="16.5" cy="12" r="0.8" fill="currentColor" />
          <circle cx="7.5" cy="18" r="1" fill="currentColor" />
          <circle cx="16.5" cy="18" r="0.8" fill="currentColor" />
          <circle cx="8" cy="6" r="1.2" fill="currentColor" />
          <circle cx="16" cy="6" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "02",
      slug: "luxury-wardrobes",
      title: "Luxury Wardrobes",
      description:
        "Smart storage solutions that blend elegance with functionality. Designed to maximize space and complement your lifestyle.",
      image: image2,
      iconSvg: (
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="4" y1="12" x2="12" y2="12" />
          <line x1="4" y1="16" x2="12" y2="16" />
          <path d="M14 6c0.5-0.5 1.5-1 2.5-0.5s1 1.5 0.5 2.5L15 10" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "03",
      slug: "interior-design",
      title: "Interior Design",
      description:
        "Complete interior solutions tailored to your taste and lifestyle. We create beautiful, functional and inspiring spaces.",
      image: image3,
      iconSvg: (
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M19 9h-2V7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
          <path d="M6 18v2" />
          <path d="M18 18v2" />
          <path d="M7 11v4" />
          <path d="M17 11v4" />
        </svg>
      ),
    },
    {
      id: "04",
      slug: "renovation-services",
      title: "Renovation Services",
      description:
        "Transform your existing spaces with our renovation expertise. We bring new life and value to your home or workspace.",
      image: image4,
      iconSvg: (
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75a2.625 2.625 0 0 1-3.712 0l-5.158-5.158a2.625 2.625 0 0 1 0-3.712z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3a1 1 0 0 1 1-1h1l-2 5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6L2 10l9 9 4-4-9-9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.5 13.5L14 9"
          />
          <circle cx="17.5" cy="18.5" r="2" />
          <path d="M19 19.5l3.5 3.5" />
        </svg>
      ),
    },
    {
      id: "05",
      slug: "commercial-interiors",
      title: "Commercial Interiors",
      description:
        "Premium interior solutions for offices, retail and commercial spaces that enhance productivity and leave a lasting impression.",
      image: image5,
      iconSvg: (
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="6" rx="1" />
          <rect x="3" y="15" width="7" height="6" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
        </svg>
      ),
    },
    {
      id: "06",
      slug: "custom-furniture",
      title: "Custom Furniture",
      description:
        "Bespoke furniture crafted with precision and premium materials to match your space, style and functional needs.",
      image: image6,
      iconSvg: (
        <svg
          className="w-6 h-6 text-brand-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M3 12h18" />
          <path d="M6 12v7" />
          <path d="M18 12v7" />
          <ellipse cx="12" cy="16" rx="3" ry="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services-grid-section"
      className=" py-12 sm:py-16 lg:py-20 bg-brand-white relative z-10"
    >
      <div className="max-w-7xl px-4 sm:px-10 md:px-16 mx-auto ">
        {/* Centered header content layout mirroring reference mockup image */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <span className="text-brand-gold font-sans text-xs font-extrabold tracking-[0.25em] uppercase block mb-3">
            WHAT WE OFFER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-neutral-900 tracking-tight">
            Our Premium Services
          </h2>
          <div className="w-12 h-[2px] bg-brand-gold mt-4 mb-5"></div>
          <p className="text-neutral-500 font-sans text-[15px] sm:text-base max-w-2xl leading-relaxed">
            We offer end-to-end interior solutions with exceptional quality,
            innovative design and flawless execution.
          </p>
        </div>

        {/* Clean Bento / 3x2 Grid for services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
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
                  {/* Subtle inner darkness border on photos */}
                  <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>

                  {/* Overlapping Gold/Black badge layout */}
                </div>

                <motion.div
                  className="absolute -bottom-6 left-5 w-13 h-13 bg-[#0f1115] border border-brand-gold/30 rounded-xl flex items-center justify-center shadow-lg z-40 group-hover:scale-[1.1] group-hover:rotate-6 transition-all duration-200"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.iconSvg}
                </motion.div>
                {/* <div className="absolute bottom-[-24px] left-8 w-13 h-13 sm:w-14 sm:h-14 bg-[#0a0a0c] border border-brand-gold/30 flex items-center justify-center rounded-[4px] shadow-lg z-10 group-hover:border-brand-gold transition-all duration-300">
                  {service.iconSvg}
                </div> */}
              </div>

              {/* Body details text layout with spacious padding */}
              <div className="p-8  flex flex-col flex-grow items-start">
                <span className="text-brand-gold/95 font-mono text-[13px] sm:text-sm font-bold tracking-widest block mb-1.5 select-none">
                  {service.id}
                </span>

                <h3 className="font-serif text-[21px] sm:text-[23px] text-neutral-900 font-normal tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-neutral-500 font-sans text-[14px] sm:text-[14.5px] leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Call to action explore trigger */}
                <Link
                  href={`/our-services/${service.slug}`}
                  className="text-brand-gold hover:text-[#e5b667] font-sans text-xs font-bold tracking-[0.2em] flex items-center gap-2 mt-auto group transition-colors cursor-pointer select-none"
                >
                  <span>EXPLORE SERVICE</span>
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
