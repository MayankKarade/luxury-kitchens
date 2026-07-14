import Image from "next/image";
import Link from "next/link";

import { HtmlContent } from "./HtmlContent";
import { DetailIcon } from "./ServiceDesignDetailIcons";

function DimensionSketch() {
  return (
    <svg
      viewBox="0 0 560 270"
      className="h-full w-full text-neutral-500"
      aria-hidden="true"
    >
      <rect
        x="90"
        y="70"
        width="310"
        height="105"
        fill="#f7f7f4"
        stroke="#c8c8c4"
        strokeWidth="2"
      />
      <path
        d="M90 70 150 35h310v105l-60 35V70z"
        fill="#f1f1ee"
        stroke="#c8c8c4"
        strokeWidth="2"
      />
      <path d="M400 70 460 35M400 175l60-35M150 35v105M210 35v105M270 35v105M330 35v105M390 35v105" />
      <path
        d="M105 105h280M105 140h280M130 175v50M240 175v50M350 175v50"
        stroke="#c8c8c4"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M110 28h340M110 28l8-8M110 28l8 8M450 28l-8-8M450 28l-8 8"
        stroke="#9b9b96"
        strokeWidth="2"
        fill="none"
      />
      <text x="250" y="18" textAnchor="middle" fontSize="14" fill="#555">
        3600 mm
      </text>
      <path
        d="M470 35h50M470 35l8-8M470 35l8 8M520 35l-8-8M520 35l-8 8"
        stroke="#9b9b96"
        strokeWidth="2"
        fill="none"
      />
      <text x="495" y="26" textAnchor="middle" fontSize="14" fill="#555">
        1200 mm
      </text>
      <path
        d="M62 70v155M62 70l-8 8M62 70l8 8M62 225l-8-8M62 225l8-8"
        stroke="#9b9b96"
        strokeWidth="2"
        fill="none"
      />
      <text
        x="42"
        y="154"
        transform="rotate(-90 42 154)"
        textAnchor="middle"
        fontSize="14"
        fill="#555"
      >
        2400 mm
      </text>
      <path
        d="M130 238h230M130 238l8-8M130 238l8 8M360 238l-8-8M360 238l-8 8"
        stroke="#9b9b96"
        strokeWidth="2"
        fill="none"
      />
      <text x="245" y="260" textAnchor="middle" fontSize="14" fill="#555">
        2400 mm
      </text>
    </svg>
  );
}

function MaterialCard({ material }) {
  return (
    <div className="grid grid-cols-[54px_1fr] gap-4">
      <span
        className="h-12 w-12 rounded-md border border-neutral-200 shadow-inner"
        style={{ background: material.swatch }}
      />
      <div>
        <h4 className="text-sm font-extrabold text-neutral-900">
          {material.title}
        </h4>
        <HtmlContent
          value={material.text}
          className="mt-0 text-sm font-medium leading-5 text-zinc-600 "
        />
      </div>
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

  return (
    <section
      id="overview"
      className="bg-brand-white px-4 py-8 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto ">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
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

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {product.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[38px_1fr] sm:grid-cols-1 gap-4 sm:gap-2.5"
                >
                  <DetailIcon
                    name={fact.icon}
                    className="mb-3 sm:mb-0 h-8 w-8 text-brand-gold"
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
          </div>

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
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div
            id="materials"
            className="rounded-lg border border-neutral-200 bg-white p-7 shadow-sm"
          >
            <h2 className="font-serif text-2xl font-semibold text-neutral-900">
              Premium Materials
            </h2>
            <div className="mt-7 space-y-6">
              {product.materials.map((material) => (
                <MaterialCard key={material.title} material={material} />
              ))}
            </div>
            <Link
              href="/consultation"
              className="mt-8 inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-wide text-brand-gold hover:text-[#9A0101]"
            >
              View All Materials
              <DetailIcon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div
            id="specifications"
            className="grid gap-6 rounded-lg border border-neutral-200 bg-white p-7 shadow-sm xl:grid-cols-[1fr_250px]"
          >
            <div>
              <h2 className="font-serif text-2xl font-semibold text-neutral-900">
                Kitchen Dimensions
              </h2>
              <p className="mt-2 text-sm font-medium text-zinc-600">
                This design can be customized to fit your space perfectly.
              </p>
              <div className="mt-5 rounded-md bg-[#faf9f6] p-4">
                <DimensionSketch />
              </div>
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

            <div className="rounded-lg bg-brand-light p-5">
              <div className="space-y-7">
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
        </div>
      </div>
    </section>
  );
}
