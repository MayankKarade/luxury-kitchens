"use client";

import React from "react";
import {
  MessageSquare,
  Compass,
  Layers,
  Settings,
  Wrench,
  CheckCircle,
} from "lucide-react";

export default function Process() {
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
      className="bg-[#faf8f6] px-4 sm:px-8 py-12 sm:py-16 lg:py-24 border-b border-zinc-200/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading exactly matching the image */}
        <div className="mb-16">
          <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            OUR PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight text-neutral-900 font-semibold tracking-tight">
            From Concept To Creation
          </h2>
        </div>

        {/* 6-Column Grid Layout with elegant connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 relative">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="flex flex-col items-start relative group"
            >
              {/* Relative container holding Step circle & Connecting arrow line to the next card */}
              <div className="flex items-center w-full mb-6 relative">
                {/* Process Circle Frame with delicate gold shadow hover */}
                <div className="w-24 h-24 rounded-full bg-white border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-sm transform transition-all duration-300 group-hover:scale-105 group-hover:border-brand-gold group-hover:shadow group-hover:bg-amber-50/10 z-10 shrink-0">
                  <step.Icon
                    className="w-12 h-12 text-brand-gold"
                    strokeWidth={1.3}
                  />
                </div>

                {/* Desktop Dotted Connector Arrow (rendered after columns 1-5) */}
                {index < 5 && (
                  <div className="hidden lg:flex items-center absolute left-24 right-[-16px] top-12 -translate-y-1/2 z-0 pr-4">
                    <div className="flex-grow border-t-2 border-dotted border-brand-gold/50 h-0"></div>
                    <span className="text-brand-gold/70 text-[12px] font-sans font-bold leading-none select-none relative -left-0.5">
                      →
                    </span>
                  </div>
                )}
              </div>

              {/* Informative step label details */}
              <div className="flex flex-col items-start text-left">
                {/* Luxury mini step gold tag */}
                <span className="text-[11px] font-sans font-bold text-brand-gold tracking-widest uppercase mb-1.5 leading-none block">
                  {step.num} /
                </span>

                <h3 className="text-neutral-900 font-serif text-[17px] font-bold tracking-tight mb-2.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[13px] text-zinc-500 leading-relaxed font-sans max-w-[170px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
