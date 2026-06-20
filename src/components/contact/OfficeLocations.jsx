"use client";

import { useCallback, useMemo } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { useConsultation } from "@/context/ConsultationContext";
import { ContactIcon } from "./ContactIcons";
import { officeImg, officeLocations } from "./contactData";

const carouselLocations = [...officeLocations, ...officeLocations];

function LocationCard({ location }) {
  return (
    <article className="overflow-hidden rounded-lg bg-[#080d11] text-white shadow-sm">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d11]/40 to-transparent" />
      </div>
      <div className="px-4 py-4">
        <h3 className="text-sm font-extrabold">{location.name}</h3>
        <p className="mt-3 flex items-start gap-2 text-xs font-semibold text-zinc-200">
          <ContactIcon
            name="pin"
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
          />
          {location.city}
        </p>
        <p className="mt-3 flex items-start gap-2 text-xs font-medium leading-5 text-zinc-300">
          <ContactIcon
            name="pin"
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
          />
          {location.address}
        </p>
      </div>
    </article>
  );
}

export default function OfficeLocations() {
  const { openModal } = useConsultation();
  const autoplayPlugins = useMemo(
    () => [
      Autoplay({
        delay: 2800,
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
    <section className="bg-brand-white px-4 pb-8 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="font-serif text-3xl font-medium sm:text-[34px]">
            Our Office Locations
          </h2>
          <button className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-black">
            VIEW ALL LOCATIONS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">
          <button
            onClick={scrollPrev}
            aria-label="Previous locations"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition-colors hover:bg-brand-gold hover:text-black lg:left-[-22px]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex touch-pan-y">
              {carouselLocations.map((location, index) => (
                <div
                  key={`${location.name}-${index}`}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_20%]"
                >
                  <LocationCard location={location} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            aria-label="Next locations"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition-colors hover:bg-brand-gold hover:text-black lg:right-[-22px]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.12fr_1fr]">
          <div className="min-h-[300px] overflow-hidden rounded-lg border border-neutral-200 bg-white">
            <iframe
              title="Netsaarthi head office map"
              src="https://www.google.com/maps?q=123%20Luxury%20Avenue%20New%20York%20NY%2010001&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-[#080d11] p-8 text-white">
            <Image
              src={officeImg}
              alt="Netsaarthi showroom reception"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d11] via-[#080d11]/88 to-[#080d11]/40" />
            <div className="relative z-10 max-w-md">
              <h3 className="font-serif text-3xl font-medium sm:text-[34px]">
                Visit Our Head Office
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-zinc-300">
                We welcome you to visit our showroom and experience our designs
                and materials in person.
              </p>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-zinc-200">
                {[
                  "Experience our premium materials",
                  "Meet our expert designers",
                  "Discuss your project in detail",
                  "See our latest collections",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-brand-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={openModal}
                className="group mt-7 inline-flex items-center gap-5 rounded-md bg-brand-gold px-7 py-4 text-[11px] font-extrabold tracking-wide text-black transition-colors hover:bg-[#eec176]"
              >
                GET DIRECTIONS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
