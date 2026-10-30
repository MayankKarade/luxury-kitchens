"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";

import PortfolioHero from "./PortfolioHero";
import FeaturedProjects from "./FeaturedProjects";
import ProjectSpotlight from "./ProjectSpotlight";
import BeforeAfterTransformations from "./BeforeAfterTransformations";
import PortfolioFinalCTA from "./PortfolioFinalCTA";

export default function PortfolioClient() {
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dialogRef = useRef(null);
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
  const hasLightboxImages = lightboxProject.images.length > 0;

  useEffect(() => {
    if (!lightboxOpen || !hasLightboxImages) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen, hasLightboxImages]);

  const changeImage = (direction) => {
    if (lightboxProject.images.length < 2) return;
    setSpotlightIdx((index) =>
      (index + direction + lightboxProject.images.length) % lightboxProject.images.length,
    );
  };

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

        {/* SECTION 5: FINAL CTA */}
        <PortfolioFinalCTA />

        {/* GLOBAL LIGHTBOX MODULE FOR PRESTIGE SHOWCASES */}
        <dialog
          ref={dialogRef}
          aria-label={`${lightboxProject.title || "Project"} image gallery`}
          onCancel={(event) => {
            event.preventDefault();
            setLightboxOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              changeImage(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-black/95 p-0 text-white backdrop:bg-black/95"
        >
          {hasLightboxImages && (
            <div
              className="flex h-full flex-col items-center p-4 backdrop-blur-md sm:p-8"
            >
              {/* Top Row Toolbar */}
              <div className="flex w-full shrink-0 items-center justify-between gap-4 text-white">
                <div className="flex min-w-0 flex-col">
                  <span className="text-[10px] text-brand-gold tracking-[0.25em] font-sans font-black uppercase">
                    {lightboxProject.tag}
                  </span>
                  <span className="truncate font-serif font-bold text-sm sm:text-base tracking-tight text-zinc-100">
                    {lightboxProject.title} (Frame {activeLightboxIndex + 1} of{" "}
                    {lightboxProject.images.length})
                  </span>
                </div>
                <button
                  id="lightbox-close-btn"
                  type="button"
                  aria-label="Close project gallery"
                  onClick={() => setLightboxOpen(false)}
                  className="w-10 h-10 shrink-0 rounded-full bg-brand-white/5 border border-white/10 hover:bg-brand-gold hover:text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Central Main Media Workspace */}
              <div className="relative mt-4 min-h-0 w-full max-w-5xl flex-1 overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                <Image
                  src={lightboxProject.images[activeLightboxIndex]}
                  alt={`${lightboxProject.title} expanded view ${activeLightboxIndex + 1}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
                {lightboxProject.images.length > 1 && (
                  <>
                    <button type="button" onClick={() => changeImage(-1)} aria-label="Previous project image" className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-brand-gold sm:left-4">
                      <ArrowLeft aria-hidden="true" className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={() => changeImage(1)} aria-label="Next project image" className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-brand-gold sm:right-4">
                      <ArrowRight aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Row Frame NavSelectors */}
              <div className="mt-4 flex max-w-full shrink-0 items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
                {lightboxProject.images.map((img, i) => (
                  <button
                    key={i}
                    id={`lightbox-thumb-btn-${i}`}
                    type="button"
                    aria-label={`Show project image ${i + 1}`}
                    onClick={() => setSpotlightIdx(i)}
                    className={`w-16 h-12 shrink-0 relative rounded-lg overflow-hidden border-2 transition-all ${
                      spotlightIdx === i
                        ? "border-brand-gold scale-[1.05]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail preview ${i + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </dialog>
      </div>
    </div>
  );
}
