"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HtmlContent } from "./HtmlContent";
import { DetailIcon } from "./ServiceDesignDetailIcons";

function MaterialDetails({ material }) {
  return (
    <div>
      <h4 className="text-sm font-extrabold text-neutral-900">
        {material.title}
      </h4>
      <HtmlContent
        value={material.text}
        className="mt-2 text-sm font-medium leading-7 text-zinc-600"
      />
    </div>
  );
}

function getMaterials(product) {
  if (product.materialContent || product.premiumMaterialContent) {
    return [
      {
        title: "Material",
        text: product.materialContent,
      },
      {
        title: "Premium Material",
        text: product.premiumMaterialContent,
      },
    ].filter((material) => material.text);
  }

  return [...(product.materials || [])].sort(
    (a, b) => Number(/premium/i.test(a.title)) - Number(/premium/i.test(b.title)),
  );
}

function getFaqs(product) {
  return [
    {
      question: `Can the ${product.title} be customized for my space?`,
      answer:
        "Yes. Layout, storage, finish, color, countertop, hardware, and accessories can be adjusted after measuring your actual site dimensions.",
    },
    {
      question: "How long does design and installation usually take?",
      answer:
        "Timelines depend on the final scope, material selection, and site readiness. After consultation, the team can share a practical schedule for design, production, and installation.",
    },
    {
      question: "Can I choose different materials or finishes?",
      answer:
        "Yes. You can select from available laminates, acrylics, veneers, glass, hardware, and premium surface options based on the look and durability you want.",
    },
    {
      question: "Is the listed price final?",
      answer:
        "The displayed price is indicative. Final pricing depends on size, material grade, accessories, site conditions, and custom requirements.",
    },
    {
      question: "Do you help with measurements and planning?",
      answer:
        "Yes. The process can include consultation, site measurement, layout planning, 3D visualization, production, and installation support.",
    },
  ];
}

function FaqAccordion({ product }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = getFaqs(product).slice(0, 5);

  return (
    <div className="mx-auto mt-6 max-w-4xl space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
            >
              <span className="text-sm font-extrabold leading-5 text-neutral-900 sm:text-[15px]">
                {faq.question}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-lg font-bold leading-none text-white">
                {isOpen ? "-" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-neutral-200 px-4 pb-5 pt-4 sm:px-5">
                <p className="text-sm font-medium leading-6 text-zinc-600">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function getActiveTabContent(product, activeTab) {
  if (activeTab === "features") {
    return {
      title: "Features",
      value: product.featuresContent,
      fallback: "Feature details are not available right now.",
    };
  }

  if (activeTab === "materials") {
    return {
      title: "Materials",
      value: [product.materialContent, product.premiumMaterialContent]
        .filter(Boolean)
        .join(""),
      fallback: "Material details are not available right now.",
    };
  }

  if (activeTab === "specifications") {
    return {
      title: "Specifications",
      value: product.specificationContent,
      fallback: "Specification details are not available right now.",
    };
  }

  if (activeTab === "included") {
    return {
      title: "What's Included",
      value: product.includedContent,
      fallback: "Included item details are not available right now.",
    };
  }

  if (activeTab === "faqs") {
    return {
      title: "FAQs",
      value: "",
      fallback: "FAQs are not available for this design right now.",
    };
  }

  return {
    title: "Overview",
    value: product.overview,
    fallback: "Overview details are not available right now.",
  };
}

export default function DesignOverview({ product, activeTab = "overview" }) {
  const activeContent = getActiveTabContent(product, activeTab);
  const showIntroContent =
    activeTab !== "materials" && activeTab !== "specifications";
  const showOverviewVideo = activeTab === "overview";
  const showMaterialsPanel = activeTab === "materials";
  const showSpecificationsPanel = activeTab === "specifications";
  const materials = getMaterials(product);

  if (activeTab === "faqs") {
    return (
      <section
        id="overview"
        className="bg-brand-white px-4 py-8 text-brand-dark sm:px-10 md:px-16"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-semibold text-neutral-900">
            FAQs
          </h2>
          <FaqAccordion product={product} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="overview"
      className="bg-brand-white px-4 py-8 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto ">
        {(showIntroContent || showOverviewVideo) && (
          <div
            className={
              showOverviewVideo
                ? "grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
                : ""
            }
          >
            {showIntroContent && (
              <div>
                <h2 className="font-serif text-3xl font-semibold text-neutral-900">
                  {activeContent.title}
                </h2>
                {activeContent.value ? (
                  <HtmlContent
                    value={activeContent.value}
                    className="mt-4 max-w-2xl text-[15px] font-medium leading-8 text-zinc-700 [&_p]:mb-3 [&_p:last-child]:mb-0"
                  />
                ) : (
                  <p className="mt-4 max-w-2xl text-[15px] font-medium leading-8 text-zinc-700">
                    {activeContent.fallback}
                  </p>
                )}

                {activeTab === "overview" && (
                  <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {product.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="grid grid-cols-[38px_1fr] gap-4 sm:grid-cols-1 sm:gap-2.5"
                      >
                        <DetailIcon
                          name={fact.icon}
                          className="mb-3 h-8 w-8 text-brand-gold sm:mb-0"
                        />
                        <div>
                          <h3 className="text-sm font-extrabold text-neutral-900">
                            {fact.label}
                          </h3>
                          <p className="mt-1 text-sm font-medium leading-5 text-zinc-600">
                            {fact.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {showOverviewVideo && (
              <div className="relative overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
                <div className="relative aspect-[16/6.6] min-h-[220px]">
                  {product.video ? (
                    <video
                      src={product.video}
                      poster={product.galleryImages[0]}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      <track kind="captions" />
                    </video>
                  ) : (
                    <>
                      <Image
                        src={product.galleryImages[0]}
                        alt={`${product.title} video preview`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/18" />
                      <button
                        type="button"
                        aria-label={`Play ${product.title} walkthrough`}
                        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white transition-transform hover:scale-105"
                      >
                        <DetailIcon name="play" className="h-20 w-20" />
                      </button>
                      <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-extrabold text-white">
                        02:15
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {(showMaterialsPanel || showSpecificationsPanel) && (
          <div className="mt-8 grid gap-6">
            {showMaterialsPanel && (
              <div
                id="materials"
                className="space-y-6"
              >
                <h2 className="font-serif text-2xl font-semibold text-neutral-900">
                  Materials
                </h2>
                {materials.length > 0 ? (
                  <div className="space-y-6">
                    {materials.map((material) => (
                      <MaterialDetails key={material.title} material={material} />
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm font-medium leading-6 text-zinc-600">
                    Material details are not available right now.
                  </p>
                )}
              </div>
            )}

            {showSpecificationsPanel && (
              <div
                id="specifications"
                className="grid gap-6 rounded-lg border border-neutral-200 bg-white p-7 shadow-sm lg:grid-cols-[minmax(0,0.7fr)_minmax(360px,1fr)]"
              >
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-neutral-900">
                    Kitchen Dimensions
                  </h2>
                  <p className="mt-2 text-sm font-medium text-zinc-600">
                    This design can be customized to fit your space perfectly.
                  </p>
                  {product.dimensionImage && (
                    <div className="relative mt-5 aspect-[560/270] max-w-[520px] overflow-hidden rounded-md bg-[#faf9f6]">
                      <Image
                        src={product.dimensionImage}
                        alt={`${product.title} dimensions`}
                        fill
                        sizes="(min-width: 640px) 520px, 100vw"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="mt-5 flex flex-col gap-4 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-center">
                    <p className="text-sm font-extrabold text-neutral-900">
                      Get a custom layout designed for your space
                    </p>
                    <Link
                      href="/consultation"
                      className="inline-flex h-10 items-center justify-center gap-3 rounded-md border border-brand-gold px-5 text-[11px] font-extrabold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
                    >
                      Get Free Design
                      <DetailIcon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg bg-brand-light p-6">
                  <h2 className="font-serif text-2xl font-semibold text-neutral-900">
                    Specifications
                  </h2>
                  {activeContent.value ? (
                    <HtmlContent
                      value={activeContent.value}
                      className="mt-4 text-[15px] font-medium leading-7 text-zinc-700 [&_li]:mb-2 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5"
                    />
                  ) : (
                    <p className="mt-4 text-sm font-medium leading-6 text-zinc-600">
                      {activeContent.fallback}
                    </p>
                  )}

                  <div className="mt-7 space-y-7 border-t border-neutral-200 pt-6">
                    {product.dimensionFeatures.map((item) => (
                      <div
                        key={item.title}
                        className="grid grid-cols-[34px_1fr] gap-3"
                      >
                        <DetailIcon
                          name={item.icon}
                          className="h-7 w-7 text-brand-gold"
                        />
                        <div>
                          <h3 className="text-sm font-extrabold text-neutral-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm font-medium leading-5 text-zinc-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
