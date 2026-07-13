"use client";

import Image from "next/image";
import Link from "next/link";

import fallbackHeroImg from "../../assets/Home/caliwoodServiceHero.png";
import { ServiceDesignIcon } from "./ServiceDesignIcons";

export default function ServiceDesignsHero({ service, collection }) {
  return (
    <section className="relative bg-brand-dark pt-24 text-white sm:pt-30">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={fallbackHeroImg}
          alt={collection.heroTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto  px-4 pb-12 sm:px-10 md:px-16">
        <div className="flex min-h-[520px] flex-col justify-center">
          <div className="flex items-center gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8">
            <Link
              href="/"
              className="text-zinc-350 text-white font-semibold transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-brand-gold font-normal px-0.5">&gt;</span>
            <Link
              href="/our-services"
              className="text-zinc-350 text-white font-semibold transition-colors duration-200"
            >
              Services
            </Link>
            <span className="text-brand-gold font-normal px-0.5">&gt;</span>
            <Link
              href={`/our-services/${service.slug}`}
              className="text-brand-gold font-semibold hover:font-bold"
            >
              {service.title}
            </Link>
          </div>

          {service.label && (
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold">
              {service.label}
            </span>
          )}
          <h1 className="mt-4 max-w-[510px] font-serif text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-[58px]">
            {collection.heroTitle}
          </h1>
          <div className="my-5 h-0.5 w-14 bg-brand-gold" />
          <p className="max-w-[520px] text-sm font-medium leading-7 text-zinc-200 sm:text-[15px]">
            {collection.heroText}
          </p>

          {collection.heroFeatures.length > 0 && (
            <div className="mt-8 w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-brand-dark/20 px-4 py-6 shadow-2xl backdrop-blur-xs">
              <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-4">
                {collection.heroFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-row items-start justify-start gap-2 rounded-lg py-3 transition-all duration-300 hover:-translate-y-[3px] sm:items-center"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold sm:h-12 sm:w-12">
                      <ServiceDesignIcon
                        name={feature.icon}
                        className="h-5 w-5 text-brand-gold sm:h-7 sm:w-7"
                      />
                    </div>
                    <span className="font-sans text-left text-xs font-semibold leading-4 tracking-wide text-white sm:text-sm">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
