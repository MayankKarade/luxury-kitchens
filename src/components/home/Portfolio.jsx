"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import project1 from "../../assets/images/luxury_kitchen_hero_1780070314375.png";
import project2 from "../../assets/images/renovation_kitchen_living_1780070378792.png";
import project3 from "../../assets/images/interior_living_room_1780070361503.png";
import project4 from "../../assets/images/executive_office_card_1780070403397.png";
import Image from "next/image";

export default function Portfolio() {
  const [slideOffset, setSlideOffset] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const allProjects = [
    {
      id: 1,
      title: "Modern Elegance Kitchen",
      location: "California, USA",
      img: project1,
    },
    {
      id: 2,
      title: "Luxury Minimalist Kitchen",
      location: "Toronto, Canada",
      img: project2,
    },
    {
      id: 3,
      title: "Contemporary Interior",
      location: "London, UK",
      img: project3,
    },
    {
      id: 4,
      title: "Executive Office Interior",
      location: "Accra, Ghana",
      img: project4,
    },
    {
      id: 5,
      title: "Regency Dining Hall",
      location: "Paris, France",
      img: project3,
    },
    {
      id: 6,
      title: "The Penthouse Suite",
      location: "Tokyo, Japan",
      img: project2,
    },
  ];

  // Embla carousel setup for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-slide for desktop grid
  useEffect(() => {
    if (!autoplayEnabled) return;
    const interval = setInterval(() => {
      setSlideOffset((prev) => (prev + 1) % allProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplayEnabled]);

  const nextSlide = () => {
    setAutoplayEnabled(false);
    setSlideOffset((prev) => (prev + 1) % allProjects.length);
    setTimeout(() => setAutoplayEnabled(true), 10000);
  };

  const prevSlide = () => {
    setAutoplayEnabled(false);
    setSlideOffset(
      (prev) => (prev - 1 + allProjects.length) % allProjects.length,
    );
    setTimeout(() => setAutoplayEnabled(true), 10000);
  };

  const getVisibleProjects = () => {
    const list = [];
    for (let i = 0; i < 4; i++) {
      const idx = (slideOffset + i) % allProjects.length;
      list.push(allProjects[idx]);
    }
    return list;
  };

  const visible = getVisibleProjects();

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
    hover: { y: -6, transition: { duration: 0.2 } },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="portfolio"
      className="bg-[#0b0c10] px-4 sm:px-10 md:px-16 py-12 sm:py-16 lg:py-20 relative overflow-hidden select-none"
    >
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-start">
          {/* Left Column with staggered animation */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-start pt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-brand-gold font-sans text-xs font-bold tracking-[0.25em] uppercase block mb-3.5"
            >
              OUR WORK
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-white font-medium tracking-tight mb-6"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#9ca3af] font-sans text-sm sm:text-base leading-relaxed mb-10 max-w-[340px]"
            >
              Explore our handpicked projects that showcase creativity,
              craftsmanship and attention to detail.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="#contact"
              className="px-3 w-full sm:w-fit sm:px-7 py-3.5 bg-brand-gold hover:bg-[#eec176] text-[#0b0c10] font-sans text-xs font-bold tracking-[0.16em] uppercase rounded-[2px] transition-all duration-350 shadow-md flex items-center justify-center gap-2 group-hover:scale-[1.02]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>VIEW FULL PORTFOLIO</span>
              <span className="text-base select-none leading-none relative -top-0.5 ml-0.5">
                →
              </span>
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-5 w-full">
            {/* Desktop Grid (hidden on mobile) */}
            <div className="hidden md:grid grid-cols-12 gap-5 w-full md:h-[550px] items-stretch">
              {/* Card 1 */}
              <motion.div
                className="col-span-4 flex flex-col h-full bg-[#12141c] border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-brand-gold/30 group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={0}
              >
                <div className="relative flex-grow overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className="w-full h-full"
                  >
                    <Image
                      src={visible[0].img}
                      alt={visible[0].title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-65"></div>
                </div>
                <div className="p-6 bg-[#12141c] flex flex-col gap-1 w-full border-t border-white/5">
                  <h3 className="text-white text-lg font-serif font-bold group-hover:text-brand-gold transition-colors">
                    {visible[0].title}
                  </h3>
                  <span className="text-[13px] text-zinc-400">
                    {visible[0].location}
                  </span>
                </div>
              </motion.div>

              {/* Card 2 & 3 stacked */}
              <div className="col-span-4 flex flex-col gap-5 justify-between">
                <motion.div
                  className="flex flex-col h-full bg-[#12141c] border border-white/5 rounded-2xl overflow-hidden shadow-xl group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={1}
                >
                  <div className="relative flex-grow overflow-hidden">
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-full"
                    >
                      <Image
                        src={visible[1].img}
                        alt={visible[1].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-65"></div>
                  </div>
                  <div className="p-4 bg-[#12141c] border-t border-white/5">
                    <h3 className="text-white text-base font-serif font-bold group-hover:text-brand-gold transition-colors">
                      {visible[1].title}
                    </h3>
                    <span className="text-xs text-zinc-400">
                      {visible[1].location}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col h-full bg-[#12141c] border border-white/5 rounded-2xl overflow-hidden shadow-xl group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <div className="relative flex-grow overflow-hidden">
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-full"
                    >
                      <Image
                        src={visible[2].img}
                        alt={visible[2].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-65"></div>
                  </div>
                  <div className="p-4 bg-[#12141c] border-t border-white/5">
                    <h3 className="text-white text-base font-serif font-bold group-hover:text-brand-gold transition-colors">
                      {visible[2].title}
                    </h3>
                    <span className="text-xs text-zinc-400">
                      {visible[2].location}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col col-span-4">
                <div className="flex justify-end gap-3.5 pb-2">
                  <motion.button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-brand-gold/30 hover:border-brand-gold text-white hover:text-brand-gold flex items-center justify-center transition-all duration-300 bg-[#0f1115] cursor-pointer"
                    whileHover={{ scale: 1.1, borderColor: "#dfab56" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-brand-gold/30 hover:border-brand-gold text-white hover:text-brand-gold flex items-center justify-center transition-all duration-300 bg-[#0f1115] cursor-pointer"
                    whileHover={{ scale: 1.1, borderColor: "#dfab56" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
                <motion.div
                  className="flex flex-col h-full bg-[#12141c] border border-white/5 rounded-2xl overflow-hidden shadow-2xl group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={3}
                >
                  <div className="relative flex-grow overflow-hidden">
                    <motion.div
                      variants={imageVariants}
                      className="w-full h-full"
                    >
                      <Image
                        src={visible[3].img}
                        alt={visible[3].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-65"></div>
                  </div>
                  <div className="p-6 bg-[#12141c] border-t border-white/5">
                    <h3 className="text-white text-lg font-serif font-bold group-hover:text-brand-gold transition-colors">
                      {visible[3].title}
                    </h3>
                    <span className="text-[13px] text-zinc-400">
                      {visible[3].location}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Carousel (visible only on mobile) with animation */}
            <div className="block md:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {allProjects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-[0_0_100%] min-w-0 px-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <div className="bg-[#12141c] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5 bg-[#12141c] border-t border-white/5">
                        <h3 className="text-white text-lg font-serif font-bold mb-1">
                          {project.title}
                        </h3>
                        <span className="text-xs text-zinc-400">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Carousel Dots with animated indicator */}
              <div className="flex justify-center gap-2 mt-5">
                {allProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === selectedIndex ? "bg-brand-gold w-4" : "bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
