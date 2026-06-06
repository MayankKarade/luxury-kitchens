"use client";

import React from "react";
import {
  MessageSquare,
  Compass,
  Layers,
  Settings,
  Wrench,
  CheckCircle,
  MoveRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We understand your needs, style and budget.",
      Icon: MessageSquare,
    },
    {
      num: "02",
      title: "Design & Planning",
      desc: "Our experts create custom designs and detailed plans.",
      Icon: Compass,
    },
    {
      num: "03",
      title: "Material Selection",
      desc: "Choose from our premium range of materials.",
      Icon: Layers,
    },
    {
      num: "04",
      title: "Manufacturing",
      desc: "Precision manufacturing with advanced technology.",
      Icon: Settings,
    },
    {
      num: "05",
      title: "Installation",
      desc: "Professional installation with attention to every detail.",
      Icon: Wrench,
    },
    {
      num: "06",
      title: "Handover",
      desc: "On-time delivery and complete satisfaction guaranteed.",
      Icon: CheckCircle,
    },
  ];

  return (
    <section
      id="process"
      className="bg-brand-white  py-12 sm:py-16 lg:py-20 border-b border-zinc-200/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-16 relative">
        {/* Section Heading exactly matching the image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-left"
        >
          <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            OUR PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-brand-dark tracking-tight">
            A Seamless Journey From Concept To Completion
          </h2>
          <div className="w-12 h-[2px] bg-brand-gold  my-4"></div>
        </motion.div>

        {/* Mobile/Tablet View (< lg): Vertical Timeline for clean mobile responsiveness */}
        <div className="lg:hidden relative flex flex-col gap-10 pl-1 sm:pl-4">
          {/* Vertical Dotted Connection Line running behind the badges */}
          <div className="absolute left-9 sm:left-12 top-6 bottom-6 w-0.5 border-l-2 border-dotted border-brand-gold/35 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={step.num}
              className="flex gap-5 sm:gap-7 items-start relative z-10 group"
            >
              {/* Process timeline circle badge */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-brand-white border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-brand-gold group-hover:shadow-md group-hover:bg-amber-50/90 shrink-0">
                <step.Icon
                  className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold"
                  strokeWidth={1.3}
                />
              </div>

              {/* Step info block */}
              <div className="flex flex-col pt-3 sm:pt-4 text-left">
                {/* Luxury step order label */}
                <span className="text-[11px] font-sans font-bold text-brand-gold/85 tracking-widest uppercase mb-1 leading-none block">
                  {step.num} /
                </span>

                <h3 className="text-neutral-900 font-serif text-[18px] sm:text-[19px] font-bold tracking-tight mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed font-sans max-w-sm sm:max-w-md">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View (>= lg): Horizontal Grid Layout matching visual reference exactly */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-x-7 relative">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={step.num}
              className="flex flex-col items-start relative group"
            >
              {/* Step circle & Dotted connector flow */}
              <div className="flex items-center w-full mb-6 relative">
                {/* Process Circle Frame with delicate gold shadow hover */}
                <div className="w-24 h-24 rounded-full bg-brand-white border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-brand-gold group-hover:shadow group-hover:bg-amber-50/10 z-10 shrink-0">
                  <step.Icon
                    className="w-12 h-12 text-brand-gold"
                    strokeWidth={1.3}
                  />
                </div>

                {/* Horizontal Dotted Connector Arrow */}
                {index < 5 && (
                  <div className="hidden lg:flex items-center absolute left-24 right-[-16px] top-12 -translate-y-1/2 z-0 pl-3 pr-4">
                    <div className="flex-grow border-t-2 border-dotted border-brand-gold/50 h-0"></div>
                    <span className="text-brand-gold/70 text-[12px] font-sans font-bold leading-none select-none relative -left-0.5">
                      <MoveRight className="w- h-6 pb-[1px]" />
                    </span>
                  </div>
                )}
              </div>

              {/* Step descriptive details */}
              <div className="flex flex-col items-start text-left">
                {/* Luxury mini step gold tag */}
                <span className="text-[11px] font-sans font-bold text-brand-gold tracking-widest uppercase mb-1.5 leading-none block">
                  {step.num}
                </span>

                <h3 className="text-neutral-900 font-serif text-[17px] font-bold tracking-tight mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[12px] text-zinc-500 leading-relaxed font-sans max-w-[170px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
