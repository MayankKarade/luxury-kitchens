"use client";

import { useCallback, useMemo } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { GalleryIcon, Tour360Icon } from "./GalleryIcons";

const flagStyles = {
  USA: "from-[#1f4ea8] via-white to-[#c62828]",
  CAN: "from-[#d92828] via-white to-[#d92828]",
  UK: "from-[#1f4ea8] via-white to-[#c62828]",
  360: "from-brand-gold via-[#f5d287] to-brand-gold",
};

function RegionBadge({ region }) {
  return (
    <span
      className={`inline-flex h-5 min-w-8 items-center justify-center rounded-sm bg-gradient-to-r px-1.5 text-[9px] font-extrabold text-black ${flagStyles[region] || flagStyles.USA}`}
    >
      {region}
    </span>
  );
}

function MediaCard({ item, variant }) {
  const isWalkthrough = variant === "walkthrough";

  return (
    <article className="h-full overflow-hidden rounded-lg border border-neutral-200 bg-[#071014] shadow-sm">
      <div className="relative aspect-[16/8.8] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/10" />

        {isWalkthrough ? (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 p-2 text-white backdrop-blur-[2px]">
            <Tour360Icon className="h-16 w-16 drop-shadow-xl" />
          </div>
        ) : (
          <>
            <button
              aria-label={`Play ${item.title}`}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-white drop-shadow-xl transition-transform hover:scale-105"
            >
              <GalleryIcon name="play" className="h-14 w-14" />
            </button>
            <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-[10px] font-extrabold text-white">
              {item.duration}
            </span>
          </>
        )}
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-white">
        <h3 className="text-[13px] font-extrabold leading-snug">
          {item.title}
        </h3>
        <p className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-zinc-300">
          <RegionBadge region={item.region} />
          {item.location}
        </p>
      </div>
    </article>
  );
}

export default function MediaSlider({ items, variant }) {
  const carouselItems = useMemo(() => [...items, ...items], [items]);
  const autoplayPlugins = useMemo(
    () => [
      Autoplay({
        delay: 3200,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      duration: 28,
      loop: true,
      slidesToScroll: 1,
    },
    autoplayPlugins,
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
            >
              <MediaCard item={item} variant={variant} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous gallery item"
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-dark shadow-lg transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-black lg:left-[-22px]"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next gallery item"
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-dark shadow-lg transition-colors hover:border-brand-gold hover:bg-brand-gold hover:text-black lg:right-[-22px]"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
