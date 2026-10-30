"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Expand,
  Layers3,
  MapPin,
  Ruler,
} from "lucide-react";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";

function getPortfolioImageUrl(image, baseImageUrl) {
  const normalizedImage = image?.trim();

  if (!normalizedImage) {
    return "";
  }

  if (/^https?:\/\//i.test(normalizedImage) || normalizedImage.startsWith("/")) {
    return normalizedImage;
  }

  if (!baseImageUrl) {
    return normalizedImage;
  }

  try {
    return new URL(normalizedImage, baseImageUrl).toString();
  } catch {
    return normalizedImage;
  }
}

export default function ProjectSpotlight({
  selectedPortfolioSlug,
  selectedPortfolioRequest,
  setLightboxOpen,
  setLightboxProject,
  spotlightIdx,
  setSpotlightIdx,
}) {
  const [detailState, setDetailState] = useState(null);
  const currentDetail =
    detailState?.slug === selectedPortfolioSlug &&
    detailState?.request === selectedPortfolioRequest
      ? detailState
      : null;
  const portfolio = currentDetail?.portfolio || null;
  const isLoading = Boolean(selectedPortfolioSlug) && !currentDetail;

  useEffect(() => {
    if (!selectedPortfolioSlug) {
      return;
    }

    const controller = new AbortController();
    const portfolioDetail = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINTS.Portfolio.details}`, {
          params: {
            slug: selectedPortfolioSlug,
          },
          signal: controller.signal,
        });
        if (controller.signal.aborted) return;
        const projects = response.data?.data?.portfolio;
        setDetailState({
          slug: selectedPortfolioSlug,
          request: selectedPortfolioRequest,
          portfolio: response.data?.status === 1 && Array.isArray(projects)
            ? projects[0] || null
            : null,
        });
        setSpotlightIdx(0);
      } catch {
        if (controller.signal.aborted) return;
        setDetailState({
          slug: selectedPortfolioSlug,
          request: selectedPortfolioRequest,
          portfolio: null,
        });
      }
    };
    portfolioDetail();
    return () => controller.abort();
  }, [selectedPortfolioSlug, selectedPortfolioRequest, setSpotlightIdx]);

  const activeSpotlightImages = useMemo(() => {
    if (!portfolio) {
      return [];
    }

    const multiImages = portfolio.multi_image
      ? portfolio.multi_image
          .split(",")
          .filter(Boolean)
          .map((image) => getPortfolioImageUrl(image, portfolio.image))
      : [];

    return [portfolio.image, ...multiImages].filter(Boolean);
  }, [portfolio]);

  const activeSpotlightIndex =
    spotlightIdx < activeSpotlightImages.length ? spotlightIdx : 0;
  const hasSelectedPortfolio = activeSpotlightImages.length > 0;

  useEffect(() => {
    setLightboxProject({
      tag: portfolio?.category_name || "",
      title: portfolio?.title || "",
      images: activeSpotlightImages,
    });
  }, [activeSpotlightImages, portfolio, setLightboxProject]);

  const projectDetails = [
    { Icon: MapPin, label: "Location", value: portfolio?.location },
    {
      Icon: Layers3,
      label: "Project Type",
      value: portfolio?.category_name,
    },
    { Icon: Ruler, label: "Area", value: portfolio?.area },
    {
      Icon: Clock3,
      label: "Duration",
      value: portfolio?.duration,
    },
    { Icon: Layers3, label: "Scope", value: portfolio?.scope },
  ].filter(({ value }) => value !== null && value !== undefined && String(value).trim() !== "");

  return (
    <section
      id="project-spotlight"
      className="relative scroll-mt-24 overflow-hidden bg-[#010129] px-4 py-12 text-white sm:scroll-mt-28 sm:px-10 sm:py-16 md:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 26% 38%, rgba(154,1,1,.08), transparent 28%), linear-gradient(120deg, transparent 20%, rgba(154,1,1,.08) 20.2%, transparent 20.5%, transparent 48%, rgba(154,1,1,.05) 48.2%, transparent 48.5%)",
        }}
      />

      <div className="relative z-10 mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.75fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-3 text-[11px] font-extrabold tracking-[0.16em] text-brand-gold">
            PROJECT SPOTLIGHT
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-[35px]">
            {portfolio?.title || (isLoading ? "Loading project..." : selectedPortfolioSlug ? "Project details unavailable" : "Select a project")}
          </h2>
          <div className="mb-4 mt-3 h-0.5 w-12 bg-brand-gold" />

          {portfolio?.description && (
            <p className="mb-5 max-w-md whitespace-pre-line text-[13px] leading-6 text-zinc-300 sm:text-sm">
              {portfolio.description}
            </p>
          )}

          {projectDetails.length > 0 && <div className="mb-6 max-w-lg border-y border-white/5">
            {projectDetails.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[24px_104px_1fr] items-center gap-2 border-b border-white/5 py-3 last:border-b-0"
              >
                <Icon className="h-5 w-5 text-brand-gold" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-zinc-100">
                  {label}
                </span>
                <span className="text-sm text-zinc-300">{value}</span>
              </div>
            ))}
          </div>}

          <button
            onClick={() => hasSelectedPortfolio && setLightboxOpen(true)}
            disabled={!hasSelectedPortfolio}
            className={`group flex w-fit items-center gap-5 rounded-[4px] px-6 py-3.5 text-[11px] font-extrabold tracking-wide text-white shadow-[0_10px_25px_rgba(154,1,1,.17)] transition-colors ${
              hasSelectedPortfolio
                ? "bg-brand-gold hover:bg-[#9A0101]"
                : "cursor-not-allowed border border-white/10 bg-white/10 text-zinc-300 shadow-none"
            }`}
          >
            {hasSelectedPortfolio ? "VIEW PROJECT DETAILS" : isLoading ? "LOADING PROJECT..." : "SELECT PROJECT"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="grid min-h-[430px] grid-cols-1 gap-2.5 sm:grid-cols-[minmax(0,3fr)_minmax(150px,1fr)]"
        >
          {hasSelectedPortfolio ? (
            <>
              <div className="group relative min-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl sm:min-h-[430px]">
                <Image
                  src={activeSpotlightImages[activeSpotlightIndex]}
                  alt={portfolio?.title || "Project spotlight image"}
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
                <button
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Expand current project image"
                  className="absolute inset-0 z-10 cursor-zoom-in"
                />
                <button
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Expand project gallery"
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  <Expand className="h-4.5 w-4.5" />
                </button>
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/45 px-3 py-2 backdrop-blur-sm">
                  {activeSpotlightImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSpotlightIdx(index)}
                      aria-label={`Show spotlight image ${index + 1}`}
                      className={`h-2 w-2 rounded-full border transition-all ${
                        spotlightIdx === index
                          ? "border-brand-gold bg-brand-gold"
                          : "border-white bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-1 sm:grid-rows-3">
                {activeSpotlightImages.slice(1, 3).map((image, index) => {
                  const imageIndex = index + 1;
                  return (
                    <button
                      key={imageIndex}
                      onClick={() => {
                        setSpotlightIdx(imageIndex);
                        setLightboxOpen(true);
                      }}
                      className={`relative min-h-28 overflow-hidden rounded-lg border transition-colors sm:min-h-0 ${
                        spotlightIdx === imageIndex
                          ? "border-brand-gold"
                          : "border-white/10 hover:border-brand-gold/60"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Project gallery thumbnail ${imageIndex + 1}`}
                        fill
                        sizes="(min-width: 1024px) 15vw, 33vw"
                        className="object-cover"
                      />
                    </button>
                  );
                })}

                {activeSpotlightImages.length > 4 ? (
                  <button
                    onClick={() => {
                      setSpotlightIdx(3);
                      setLightboxOpen(true);
                    }}
                    className="group relative min-h-28 overflow-hidden rounded-lg border border-white/10 sm:min-h-0"
                  >
                    <Image
                      src={activeSpotlightImages[3]}
                      alt="More project photos"
                      fill
                      sizes="(min-width: 1024px) 15vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/65 text-white">
                      <span className="font-serif text-3xl font-semibold">
                        +{activeSpotlightImages.length - 4}
                      </span>
                      <span className="mt-1 text-xs font-medium">
                        More Photos
                      </span>
                    </div>
                  </button>
                ) : (
                  activeSpotlightImages.slice(3, 4).map((image, index) => {
                    const imageIndex = index + 3;
                    return (
                      <button
                        key={imageIndex}
                        onClick={() => {
                          setSpotlightIdx(imageIndex);
                          setLightboxOpen(true);
                        }}
                        className={`relative min-h-28 overflow-hidden rounded-lg border transition-colors sm:min-h-0 ${
                          spotlightIdx === imageIndex
                            ? "border-brand-gold"
                            : "border-white/10 hover:border-brand-gold/60"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Project gallery thumbnail ${imageIndex + 1}`}
                          fill
                          sizes="(min-width: 1024px) 15vw, 33vw"
                          className="object-cover"
                        />
                      </button>
                    );
                  })
                )}
              </div>
            </>
          ) : (
            <div className="col-span-full flex min-h-[430px] items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-6 text-center shadow-2xl">
              <div className="max-w-md">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <h4 className="font-serif text-2xl font-semibold text-white">
                  {isLoading ? "Loading project..." : portfolio ? "No project photos available" : selectedPortfolioSlug ? "Project details unavailable" : "Choose a project to preview"}
                </h4>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {isLoading
                    ? "Fetching the selected project's details and photos."
                    : selectedPortfolioSlug && !portfolio
                      ? "Unable to load this project's details. Select the project again to retry."
                      : portfolio
                        ? "Photos have not been added for this project."
                        : "Select a card in Featured Projects to view its details and photos."}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
