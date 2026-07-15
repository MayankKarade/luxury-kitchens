"use client";

import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

import PortfolioHero from "./PortfolioHero";
import FeaturedProjects from "./FeaturedProjects";
import ProjectSpotlight from "./ProjectSpotlight";
import BeforeAfterTransformations from "./BeforeAfterTransformations";

export default function PortfolioClient() {
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPortfolioSlug, setSelectedPortfolioSlug] = useState("");
  const [selectedPortfolioRequest, setSelectedPortfolioRequest] = useState(0);
  const [lightboxProject, setLightboxProject] = useState({
    tag: "",
    title: "",
    images: [],
  });

  const handlePortfolioSpotlight = useCallback((slug) => {
    setSelectedPortfolioSlug(slug);
    setSelectedPortfolioRequest((current) => current + 1);
  }, []);

  const activeLightboxIndex =
    spotlightIdx < lightboxProject.images.length ? spotlightIdx : 0;

  return (
    <div className="w-full  flex  justify-center items-center">
      <div className="w-full max-w-[1800px]">
        {/* SECTION 1: HERO & CATEGORIES */}
        <PortfolioHero />

        {/* SECTION 2: SLIDABLE FEATURED PROJECTS */}
        <FeaturedProjects onPortfolioSpotlight={handlePortfolioSpotlight} />

        {/* SECTION 3: PROJECT SPOTLIGHT & INTERACTIVE GALLERY */}
        <ProjectSpotlight
          selectedPortfolioSlug={selectedPortfolioSlug}
          selectedPortfolioRequest={selectedPortfolioRequest}
          setLightboxOpen={setLightboxOpen}
          setLightboxProject={setLightboxProject}
          spotlightIdx={spotlightIdx}
          setSpotlightIdx={setSpotlightIdx}
        />

        {/* SECTION 4: BEFORE & AFTER SLIDER COMPILATIONS */}
        <BeforeAfterTransformations />

        {/* GLOBAL LIGHTBOX MODULE FOR PRESTIGE SHOWCASES */}
        <AnimatePresence>
          {lightboxOpen && lightboxProject.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            >
              {/* Top Row Toolbar */}
              <div className="absolute top-6 inset-x-6 sm:inset-x-12 flex justify-between items-center text-white z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-gold tracking-[0.25em] font-sans font-black uppercase">
                    {lightboxProject.tag}
                  </span>
                  <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-zinc-100">
                    {lightboxProject.title} (Frame {activeLightboxIndex + 1} of{" "}
                    {lightboxProject.images.length})
                  </span>
                </div>
                <button
                  id="lightbox-close-btn"
                  onClick={() => setLightboxOpen(false)}
                  className="w-10 h-10 rounded-full bg-brand-white/5 border border-white/10 hover:bg-brand-gold hover:text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Central Main Media Workspace */}
              <div className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden mt-8 shadow-2xl border border-white/5">
                <Image
                  src={lightboxProject.images[activeLightboxIndex]}
                  alt="Main Lightbox view"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Row Frame NavSelectors */}
              <div className="flex items-center gap-3 mt-6">
                {lightboxProject.images.map((img, i) => (
                  <button
                    key={i}
                    id={`lightbox-thumb-btn-${i}`}
                    onClick={() => setSpotlightIdx(i)}
                    className={`w-16 h-12 relative rounded-lg overflow-hidden border-2 transition-all ${
                      spotlightIdx === i
                        ? "border-brand-gold scale-[1.05]"
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
    </div>
  );
}
