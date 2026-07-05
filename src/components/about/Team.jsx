"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useConsultation } from "../../context/ConsultationContext";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Team() {
  const { openModal } = useConsultation();

  const team = [
    {
      name: "David Anderson",
      role: "Founder & CEO",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
      linkedin: "https://linkedin.com",
      email: "david@netsaarthi.com",
    },
    {
      name: "Sophia Martinez",
      role: "Lead Interior Designer",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
      linkedin: "https://linkedin.com",
      email: "sophia@netsaarthi.com",
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500",
      linkedin: "https://linkedin.com",
      email: "james@netsaarthi.com",
    },
    {
      name: "Emily Johnson",
      role: "Design Consultant",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
      linkedin: "https://linkedin.com",
      email: "emily@netsaarthi.com",
    },
    {
      name: "Michael Brown",
      role: "3D Visualizer",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
      linkedin: "https://linkedin.com",
      email: "michael@netsaarthi.com",
    },
  ];

  // Duplicate the list so there's always plenty of items to enable continuous scrolling on all device screen sizes (even 5-col displays)
  const extendedTeam = [...team, ...team, ...team];

  // Configure Embla with autoloop and professional Autoplay controls
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) autoplayPlugin.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const autoplayPlugin = emblaApi.plugins().autoplay;
      if (autoplayPlugin) autoplayPlugin.reset();
    }
  }, [emblaApi]);

  return (
    <section
      id="team-section"
      className=" py-12 bg-[#fdfdfd] text-brand-dark relative select-none overflow-hidden"
    >
      <div className=" mx-auto px-4 sm:px-10 md:px-16 relative">
        {/* Section Header Split layout matching mockup */}
        <div className="flex flex-col md:flex-row justify-between items-start  gap-5 border-b border-zinc-200/60 pb-8 ">
          <div className="flex flex-col gap-3">
            <span className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block">
              OUR TEAM / DESIGNERS
            </span>
            <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-brand-dark tracking-tight">
              Meet The Minds Behind The Magic
            </h2>
            {/* Elegant short gold line precisely under "Meet" header */}
            <div className="w-12 h-[2.5px] bg-brand-gold mt-3"></div>
          </div>

          <button
            onClick={openModal}
            className="px-6  py-3.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-sans text-xs font-bold tracking-[0.18em] rounded-[1px] flex items-center justify-center gap-2.5 transition-all duration-300 bg-transparent group cursor-pointer shrink-0 uppercase text-nowrap"
          >
            <span>VIEW ALL TEAM</span>
            <ArrowRight className="w-4 h-4 text-current transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Outer container of slider viewport with absolute side triggers */}
        <div className="relative ">
          {/* Slider trigger left & right arrows matched to mockup overlay layout */}
          <button
            onClick={scrollPrev}
            className="absolute hidden sm:flex -left-2 lg:-left-12 top-[40%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-100 bg-brand-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]  items-center justify-center text-brand-gold hover:bg-neutral-50 hover:shadow-md transition-all duration-300 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute hidden sm:flex -right-2 lg:-right-12 top-[40%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-100 bg-brand-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]  items-center justify-center text-brand-gold hover:bg-neutral-50 hover:shadow-md transition-all duration-300 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
          </button>

          {/* Embla slider viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-5.5">
              {extendedTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] pl-4 sm:pl-5 min-w-0"
                >
                  <div className="bg-brand-white rounded-[4px]  flex flex-col h-full border border-zinc-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
                    {/* Photo with beautiful padding margin layout as shown inside reference card */}
                    <div className=" relative overflow-hidden aspect-[4/3] rounded-[2px]  w-full bg-neutral-100 mb-4 sm:mb-5">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        fill
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Member Information & Contacts layout */}
                    <div className="flex flex-col flex-grow items-start justify-between px-3.5">
                      <div className="flex flex-col gap-1 w-full">
                        <h4 className="font-sans font-bold text-[15px] sm:text-[16px] text-[#1c1e23] tracking-wide leading-tight group-hover:text-brand-gold transition-colors duration-200">
                          {member.name}
                        </h4>
                        <span className="text-[12.5px] sm:text-[13px] text-zinc-500 font-sans tracking-wide">
                          {member.role}
                        </span>
                      </div>

                      {/* Custom styled square outlined social button boxes exact matches Reference image */}
                      <div className="flex items-center gap-2 mt-4 sm:mt-5">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="w-7 h-7 border border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold hover:text-white text-brand-gold rounded-[2px] transition-all duration-200 flex items-center justify-center cursor-pointer"
                        >
                          <FaLinkedin className="w-3.5 h-3.5 stroke-[1.5]" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          aria-label={`Email ${member.name}`}
                          className="w-7 h-7 border border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold hover:text-white text-brand-gold rounded-[2px] transition-all duration-200 flex items-center justify-center cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5 stroke-[1.5]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
