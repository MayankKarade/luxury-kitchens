"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useConsultation } from "@/context/ConsultationContext";
import { ContactIcon } from "./ContactIcons";
import { officeImg, officeLocations } from "./contactData";

function LocationCard({ location }) {
  return (
    <article className="grid h-full grid-cols-[96px_1fr] overflow-hidden rounded-lg border border-neutral-200 bg-white text-brand-dark shadow-sm sm:grid-cols-[112px_1fr] xl:grid-cols-[150px_1fr]">
      <div className="relative min-h-[200px] overflow-hidden bg-neutral-100">
        <Image
          src={location.image}
          alt={location.name}
          fill
          sizes="(min-width: 1280px) 150px, (min-width: 640px) 112px, 96px"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex min-w-0 flex-col p-4 xl:p-5">
        <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-gold">
          <ContactIcon
            name="pin"
            className="h-3.5 w-3.5 shrink-0"
          />
          {location.city}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-medium leading-tight">{location.name}</h3>
        <p className="mt-2 text-xs leading-5 text-zinc-600">
          {location.address}
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to our ${location.name} office`}
          className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-3 text-[10px] font-bold uppercase tracking-wide text-brand-gold transition-colors hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
        >
          Get Directions
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export default function OfficeLocations() {
  const { openModal } = useConsultation();

  return (
    <section className="bg-brand-white px-4 pb-8 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto ">
        <div className="mb-6 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="font-serif text-3xl font-medium sm:text-[34px]">
            Our Office Locations
          </h2>
          <Link href="/locations" className="group inline-flex items-center gap-4 rounded-md border border-brand-gold px-6 py-3 text-[11px] font-extrabold tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white">
            VIEW ALL LOCATIONS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {officeLocations.map((location) => (
            <LocationCard key={location.name} location={location} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.12fr_1fr]">
          <div className="min-h-[300px] overflow-hidden rounded-lg border border-neutral-200 bg-white">
            <iframe
              title="Netsaarthi head office map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(officeLocations[0].address)}&output=embed`}
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
                className="group mt-7 inline-flex items-center gap-5 rounded-md bg-brand-gold px-7 py-4 text-[11px] font-extrabold tracking-wide text-white transition-colors hover:bg-[#9A0101]"
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
