"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useConsultation } from "../../context/ConsultationContext";
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { openModal } = useConsultation();

  const reviews = [
    {
      text: "Netsaarthi transformed our kitchen into a masterpiece. The design, quality and professionalism exceeded our expectations. Highly recommended!",
      author: "Sarah Johnson",
      role: "Homeowner",
      location: "Homeowner, New York, USA",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      text: "Our new modular luxury wardrobes and contemporary room partitions is an absolute masterwork. The execution met all visual goals beautifully.",
      author: "Michael Chang",
      role: "Architect",
      location: "Architect, Boston, USA",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      text: "Outstanding premium craftsmanship from start to finish. The elegant layout, built-in sensor strip lighting, and quality woodwork fit perfectly.",
      author: "Althea Boateng",
      role: "Estate Owner",
      location: "Estate Owner, Chicago, USA",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      text: "Exceptional modern kitchen designs with flawless execution. Their responsive team guided us from 3D renders to final handover with absolute luxury.",
      author: "David Miller",
      role: "Property Owner",
      location: "Homeowner, London, UK",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section
      id="blog"
      className="bg-brand-dark relative overflow-hidden select-none"
    >
      {/* Subtle gold-ambient radial illumination backdrops */}
      {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-gold/5 blur-[160px] pointer-events-none"></div> */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

      <div className=" mx-auto px-2 md:px-10 lg:px-0  relative z-10">
        {/* Rounded Slate Container with thin borders enclosing all three visual columns */}
        <div className="  bg-brand-dark/85 shadow-[0_30px_60px_rgba(0,0,0,0.85)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-[3.6fr_3.7fr_3.7fr] items-stretch gap-6">
          {/* Left Column matching exact structure & text layout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className=" px-4 py-8 sm:pt-16 lg:py-12  sm:pl-10 md:pl-16  flex flex-col justify-center relative z-10"
          >
            <span className="text-brand-gold font-sans text-[11px] font-bold tracking-[0.25em] uppercase block mb-3.5">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="font-serif text-2xl sm:text-[28px] font-normal text-white leading-[1.5] tracking-tight mb-8">
              Trusted By <br />
              <span className="font-semibold text-white">
                Homeowners &
              </span>{" "}
              <br />
              <span className="font-semibold text-white">
                Businesses Worldwide
              </span>
            </h2>

            {/* Exactly styled Rating Block - No Vertical Divider Line */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-end gap-3">
                <div className="flex items-end leading-none">
                  <span className="font-serif text-[42px] font-bold text-brand-gold leading-none">
                    4.9
                  </span>
                  <span className="text-zinc-500 font-sans text-lg ml-0.5">
                    /5
                  </span>
                </div>
                <div className="w-[1.5px] h-full border-l opacity-20 border-l-brand-gold" />
                <div className="flex items-center text-brand-gold gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-brand-gold"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-sans tracking-wide">
                Based on 500+ reviews
              </p>
            </div>
          </motion.div>

          {/* Center Column: Elegant Slider Card floating inside parent panel space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className=" py-8 sm:py-8 lg:py-14 px-1 sm:px-14 lg:px-0  flex flex-col justify-center relative z-10"
          >
            <div className="border border-brand-gold/15 bg-brand-dark/35 rounded-2xl py-8 pl-6 pr-4 flex flex-col justify-between h-full shadow-[0_20px_50px_rgba(0,0,0,0.45)]  hover:border-brand-gold/30 transition-colors duration-300">
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  {/* Gold Curly Double Quote */}

                  <ImQuotesLeft className="font-serif w-[30px] h-[30px] text-brand-gold/90 mb-2 leading-none select-none block " />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-zinc-300 font-sans text-[14px]  leading-relaxed mb-7">
                        {reviews[activeTestimonial].text}
                      </p>

                      {/* Author group with custom gold frame avatar matching reference image */}
                      <div className="flex items-center gap-4">
                        <div className="relative shrink-0">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-brand-gold/30 p-0.5 bg-brand-dark/80">
                            <Image
                              src={reviews[activeTestimonial].avatar}
                              alt={reviews[activeTestimonial].author}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-white font-sans font-bold text-[14px] sm:text-[15px] tracking-wide leading-tight">
                            {reviews[activeTestimonial].author}
                          </h4>
                          <p className="text-[11px] text-zinc-400 mt-1.5 font-sans leading-none">
                            {reviews[activeTestimonial].location}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider Positions Custom Dots inside the Card, Center Bottom */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeTestimonial
                        ? "bg-brand-gold"
                        : "bg-zinc-700 hover:bg-zinc-600"
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Booking Solid Gold Ochre Card (Full Bleed on Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" bg-brand-gold text-white mx-1 sm:mx-14 lg:mx-0 px-3 md:px-10 py-8 sm:py-12 xl:py-14 flex flex-col justify-between relative overflow-hidden rounded-2xl lg:rounded-l-3xl lg:rounded-r-none h-full "
          >
            <div className="relative z-10 flex flex-col  gap-6 md:gap-8">
              {/* Custom SVG Wire Binder Calendar with badge matches image layout perfectly */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-white">
                  <svg
                    viewBox="0 0 44 44"
                    className="w-[48px] h-[48px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="10" width="28" height="26" rx="3" />
                    <line x1="10" y1="5" x2="10" y2="10" />
                    <line x1="18" y1="5" x2="18" y2="10" />
                    <line x1="26" y1="5" x2="26" y2="10" />
                    {/* representation of grid days */}
                    <circle
                      cx="11"
                      cy="18"
                      r="1.5"
                      className="fill-current text-white"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="1.5"
                      className="fill-current text-white"
                    />
                    <circle
                      cx="25"
                      cy="18"
                      r="1.5"
                      className="fill-current text-white"
                    />
                    <circle
                      cx="11"
                      cy="25"
                      r="1.5"
                      className="fill-current text-white"
                    />
                    <circle
                      cx="18"
                      cy="25"
                      r="1.5"
                      className="fill-current text-white"
                    />
                    {/* Badge circle with checkmark/emblem */}
                    <circle
                      cx="32"
                      cy="30"
                      r="8"
                      className="fill-brand-gold stroke-white"
                      strokeWidth="2.5"
                    />
                    <polyline
                      points="30 30 32 32 35 29"
                      strokeWidth="2.2"
                      className="stroke-white"
                      fill="none"
                    />
                  </svg>
                </div>

                <h3 className="font-serif text-[24px] sm:text-[27px] font-semibold text-white leading-[1.12] tracking-tight">
                  Book Your <br />
                  Free Consultation
                </h3>
              </div>

              <p className="text-[14.5px] sm:text-[18px] text-white/85 font-sans leading-relaxed">
                Let's bring your dream space to life. Schedule a free
                consultation with our experts today.
              </p>
            </div>

            {/* Split Button style matching image button perfectly */}
            <div className="relative z-10 mt-4 ">
              <button
                onClick={openModal}
                className="w-full py-4.5 px-6 bg-brand-dark/90 hover:bg-brand-dark text-white font-sans text-xs font-bold tracking-[0.2em] rounded-md flex items-center justify-between transition-all duration-300 focus:outline-none group cursor-pointer shadow-[0_12px_32px_rgba(12,13,18,0.25)]"
              >
                <span>BOOK NOW</span>
                <span className="text-xl text-brand-gold font-light leading-none relative -top-0.5 group-hover:translate-x-1 duration-300">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
