"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useConsultation } from "../../context/ConsultationContext";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import axios from "axios";
import { API_ENDPOINTS } from "@/config";

export default function FeaturedProjects({ onPortfolioSpotlight }) {
  const { openModal } = useConsultation();
  const [projects, setProjects] = useState([]);
  const defaultProjectSelectedRef = useRef(false);

  const handleProjectSpotlight = (slug) => {
    onPortfolioSpotlight(slug);
    document
      .getElementById("project-spotlight")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(
          `${API_ENDPOINTS.Portfolio.portfolio}`,
        );
        setProjects(response.data.data.portfolio);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (defaultProjectSelectedRef.current || !projects[0]?.slug) {
      return;
    }

    defaultProjectSelectedRef.current = true;
    onPortfolioSpotlight(projects[0].slug);
  }, [onPortfolioSpotlight, projects]);

  const filteredProjects = projects.map((project) => ({
    ...project,
    category: project.category_name,
    categoryLabel: project.category_name,
    img: project.image,
  }));

  // Configure Embla Carousel with Autoplay Plugin natively
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [filteredProjects.length, emblaApi]);

  return (
    <section className="bg-brand-white py-12 sm:py-16 text-zinc-900 border-y border-neutral-100/80 overflow-hidden relative">
      <div className=" mx-auto px-4 sm:px-10 md:px-16  z-10 relative">
        {/* Section Header with exact details from image */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div className="relative flex flex-col gap-3">
            {/* Main high-contrast serif title */}
            <h2 className="font-serif text-3xl sm:text-[34px] font-normal leading-[1.12] text-brand-dark tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-[2px] bg-brand-gold  mb-4"></div>
          </div>

          <button
            id="view-all-featured-btn"
            onClick={openModal}
            className="group border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 px-5 py-2.5 rounded-md text-xs tracking-widest font-sans font-bold flex items-center gap-2 uppercase shrink-0 cursor-pointer"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Carousel Slider row with absolute arrows */}
        <div className="relative px-2">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-zinc-400">
              No featured projects found.
            </div>
          ) : (
            <div className="relative">
              {/* Embla Viewport Box with overflow helpers preventing card cuts */}
              <div
                className="overflow-hidden px-4 -mx-4 py-4 -my-4"
                ref={emblaRef}
              >
                <div className="flex -ml-5 -mr-1">
                  {filteredProjects.map((project, index) => {
                    const isBeforeAfter =
                      project.category === "before_after" ||
                      project.id === "f5";
                    return (
                      <div
                        key={project.id}
                        className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%]"
                      >
                        <motion.div
                          id={`project-card-${project.id}`}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex flex-col h-[360px] bg-brand-white border border-neutral-200/50 rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:border-brand-gold/30 group"
                        >
                          {/* Card Image Area with visual logic for dual Before/After if needed */}
                          {isBeforeAfter ? (
                            <div className="relative flex-grow h-52 overflow-hidden bg-neutral-100 flex">
                              {/* Left half: Before Version */}
                              <div className="relative w-1/2 h-full overflow-hidden border-r border-brand-white/5">
                                <Image
                                  src={
                                    "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
                                  }
                                  alt="Before image"
                                  fill
                                  className="object-cover"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-sans font-extrabold text-brand-gold tracking-wider uppercase z-10">
                                  BEFORE
                                </div>
                              </div>

                              {/* Right half: After Version */}
                              <div className="relative w-1/2 h-full overflow-hidden">
                                <Image
                                  src={project.img}
                                  alt="After image"
                                  fill
                                  className="object-cover"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute bottom-3 right-3 bg-brand-gold/90 px-2 py-0.5 rounded text-[9px] font-sans font-extrabold text-white tracking-wider uppercase z-10 whitespace-nowrap">
                                  AFTER
                                </div>
                              </div>

                              {/* Middle separator line with visual handle */}
                              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-brand-gold/80 flex items-center justify-center z-10">
                                <div className="w-5 h-5 rounded-full bg-black border border-brand-gold flex items-center justify-center text-[10px] text-brand-white">
                                  <span>↔</span>
                                </div>
                              </div>

                              {/* Corner Luxury Tag */}
                              <div className="absolute top-4 left-4 bg-zinc-950 px-2.5 pb-1 rounded-[3px] shadow-lg z-10 pointer-events-none">
                                <span className="text-[9px] sm:text-[10px] font-sans tracking-widest font-black text-brand-gold">
                                  {project.categoryLabel}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="relative flex-grow h-52 overflow-hidden bg-neutral-100">
                              <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                referrerPolicy="no-referrer"
                              />
                              {/* Corner Luxury Tag */}
                              <div className="absolute top-4 left-4 bg-zinc-950 px-2.5 pb-1 rounded-[3px] shadow-lg z-10 pointer-events-none">
                                <span className="text-[9px] sm:text-[10px] font-sans tracking-widest font-black text-brand-gold">
                                  {project.categoryLabel}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Card Text & Metadata Section conform layout exactly to design */}
                          <div className="py-5 px-2 bg-brand-white flex flex-col justify-between border-t border-neutral-100/50 min-h-[140px]">
                            <div>
                              {/* Upper miniature orange label */}
                              <span className="text-[10px] text-brand-gold font-sans font-extrabold tracking-widest uppercase block mb-1">
                                {project.categoryLabel}
                              </span>
                              <h3 className="text-[#010129] text-base sm:text-[17px] font-serif font-bold leading-snug group-hover:text-brand-gold transition-colors duration-300">
                                {project.title}
                              </h3>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center gap-1.5 text-zinc-500 font-sans text-xs sm:text-[13px] font-semibold">
                                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span>{project.location}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  handleProjectSpotlight(project.slug)
                                }
                                aria-label={`View ${project.title} in project spotlight`}
                                className="w-7 h-7 rounded-full border border-neutral-200/80 flex items-center justify-center text-zinc-400 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold transition-all duration-300 shrink-0"
                              >
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation button controls - Black solid circle with White arrow */}
              <button
                id="carousel-left-btn"
                onClick={scrollPrev}
                className="absolute top-1/2 -left-2 lg:-left-12 -translate-y-1/2 z-20 w-10 h-10 bg-zinc-950 hover:bg-brand-gold text-brand-white hover:text-white flex items-center justify-center rounded-full border border-zinc-800 transition-all hover:scale-105 cursor-pointer shadow-lg active:scale-95"
                title="Scroll Left"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                id="carousel-right-btn"
                onClick={scrollNext}
                className="absolute top-1/2 -right-2 sm:-right-12 -translate-y-1/2 z-20 w-10 h-10 bg-zinc-950 hover:bg-brand-gold text-brand-white hover:text-white flex items-center justify-center rounded-full border border-zinc-800 transition-all hover:scale-105 cursor-pointer shadow-lg active:scale-95"
                title="Scroll Right"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
