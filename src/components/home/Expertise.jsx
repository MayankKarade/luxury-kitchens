"use client";

import React from "react";
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

  return (
    <section id="services" className="bg-[#ffffff] px-4 sm:px-9 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header exactly formatted as the attached image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="text-brand-gold font-sans text-[12.5px] font-bold tracking-[0.2em] uppercase">
              OUR EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#111827] font-semibold tracking-tight">
              Premium Solutions <br />
              <span className="font-semibold text-[#111827]">
                For Every Space
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <p className="text-zinc-500 font-sans text-base leading-relaxed max-w-md">
              From concept to completion, we deliver bespoke interior solutions
              that reflect your style and elevate your living and working
              spaces.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-1 text-[13px] font-sans font-bold tracking-wider text-brand-gold hover:text-[#eec176] transition-colors uppercase"
            >
              <span>VIEW ALL SERVICES</span>
              <span className="text-lg leading-none select-none relative -top-0.5 ml-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* 5-Column Grid conforming strictly to the image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm transition-all duration-300 flex flex-col h-full group hover:shadow-lg"
            >
              {/* Card Image section with exact aspect ratios and floating badge overlay */}
              <div className="relative">
                <div className="relative h-44 overflow-hidden shrink-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating overlapping absolute black badging */}
                </div>
                <div className="absolute -bottom-6 left-5 w-11 h-11 bg-[#0f1115] border border-white/10 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 z-40">
                  {service.iconElement}
                </div>
              </div>

              {/* Card content block */}
              <div className="p-5 flex flex-col justify-between flex-grow pt-8 bg-white pb-6">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-serif text-[18px] md:text-[19px] font-bold text-[#111827] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 leading-relaxed font-sans min-h-[52px]">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 mt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[11px] font-sans font-extrabold tracking-widest text-brand-gold hover:text-[#eec176] transition-colors"
                  >
                    <span>EXPLORE</span>
                    <span className="text-base leading-none select-none relative -top-0.5 ml-0.5 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
