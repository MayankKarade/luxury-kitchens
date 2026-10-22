"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function WhyChooseUs() {
  const whyChooseUs = [
    {
      title: "Bespoke Design",
      desc: "Every solution begins with your individual space, requirements and preferences.",
      icon: "/about/about-design.png",
    },
    {
      title: "Precision Manufacturing",
      desc: "Furniture is manufactured to the measurements and specifications of your project.",
      icon: "/about/about-diamond.png",
    },
    {
      title: "Made-to-Size Solutions",
      desc: "Rather than forcing standard furniture into your space, we design around the dimensions you have.",
      icon: "/about/about-maufacturing.png",
    },
    {
      title: "Material & Finish Options",
      desc: "Select materials, accessories, worktops and finishes that suit your project and preferences.",
      icon: "/about/about-expert.png",
    },
    {
      title: "Expert Installation",
      desc: "Professional fitting helps ensure that every element functions correctly and achieves the intended finish.",
      icon: "/about/about-service.png",
    },
    {
      title: "Complete Project Process",
      desc: "We guide the project from initial consultation and measurement through design, manufacturing and final installation.",
      icon: "/about/about-delivery.png",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className=" py-12 sm:py-16  bg-[#010129] text-white relative select-none overflow-hidden"
    >
      {/* Immersive organic dark gold marble / vein background matching reference image */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#9A0101_0.8px,transparent_0.8px)] [background-size:32px_32px]"></div>
        {/* Subtle decorative golden veins using CSS radial waves */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-brand-gold/3 blur-[140px] rounded-full pointer-events-none"></div>
      </div>

      <div className=" mx-auto px-4 sm:px-10 md:px-16 z-10s relative">
        {/* Left-Aligned Header exactly same as in the reference image */}
        <div className="flex flex-col items-start text-left mb-10 max-w-4xl">
          <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-brand-white tracking-tight">
            A Thoughtful Approach to Custom Furniture
          </h2>
        </div>

        {/* 6-Column Grid of centered luxury cards exactly duplicating the mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {whyChooseUs.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-[#0b0c11]/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 flex flex-col items-center text-center h-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:border-brand-gold/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Gold icon asset centered in a stable box */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={card.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  sizes="56px"
                />
              </div>

              {/* Card headers and responsive details description */}
              <div className="flex flex-col items-center flex-grow">
                <h4 className="text-[14px] font-sans font-bold text-white tracking-wide leading-snug mb-3">
                  {card.title}
                </h4>
                <p className="text-[12px] text-zinc-400 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
