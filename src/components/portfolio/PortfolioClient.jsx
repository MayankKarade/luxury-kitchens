"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

import PortfolioHero from "./PortfolioHero";
import FeaturedProjects from "./FeaturedProjects";
// import FeaturedProjects from "./FeaturedProjects";
// import ProjectSpotlight from "./ProjectSpotlight";
// import BeforeAfterTransformations from "./BeforeAfterTransformations";

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const spotlightProject = {
    tag: "LUXURY KITCHEN",
    title: "Timeless Elegance in Every Detail",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Main Luxury Kitchen Island
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f", // Detailed Range Cooktop
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136", // Floating Walnut Shelving View
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d", // Adjoining luxury dining table setup
    ],
  };

  return (
    <div className="bg-[#0b0c10] text-[#f3f4f6] min-h-screen">
      {/* SECTION 1: HERO & CATEGORIES */}
      <PortfolioHero
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* SECTION 2: SLIDABLE FEATURED PROJECTS */}
      <FeaturedProjects activeCategory={activeCategory} />

      {/* SECTION 3: PROJECT SPOTLIGHT & INTERACTIVE TIMELINE */}
      {/* <ProjectSpotlight
        setLightboxOpen={setLightboxOpen}
        spotlightIdx={spotlightIdx}
        setSpotlightIdx={setSpotlightIdx}
      /> */}

      {/* SECTION 4: BEFORE & AFTER SLIDER COMPILATIONS */}
      {/* <BeforeAfterTransformations /> */}

      {/* GLOBAL LIGHTBOX MODULE FOR PRESTIGE SHOWCASES */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Top Row Toolbar */}
            <div className="absolute top-6 inset-x-6 sm:inset-x-12 flex justify-between items-center text-white z-10">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#dfab56] tracking-[0.25em] font-sans font-black uppercase">
                  {spotlightProject.tag}
                </span>
                <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-zinc-100">
                  {spotlightProject.title} (Frame {spotlightIdx + 1} of{" "}
                  {spotlightProject.images.length})
                </span>
              </div>
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-brand-white/5 border border-white/10 hover:bg-[#dfab56] hover:text-black flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Main Media Workspace */}
            <div className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden mt-8 shadow-2xl border border-white/5">
              <Image
                src={spotlightProject.images[spotlightIdx]}
                alt="Main Lightbox view"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Row Frame NavSelectors */}
            <div className="flex items-center gap-3 mt-6">
              {spotlightProject.images.map((img, i) => (
                <button
                  key={i}
                  id={`lightbox-thumb-btn-${i}`}
                  onClick={() => setSpotlightIdx(i)}
                  className={`w-16 h-12 relative rounded-lg overflow-hidden border-2 transition-all ${
                    spotlightIdx === i
                      ? "border-[#dfab56] scale-[1.05]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail preview ${i + 1}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
