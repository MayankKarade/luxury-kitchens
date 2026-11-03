"use client";

import Image from "next/image";
import Link from "next/link";

import fallbackHeroImg from "../../assets/Home/caliwoodServiceHero.png";
import { ServiceDesignIcon } from "./ServiceDesignIcons";

export default function ServiceDesignsHero({ service, collection }) {
  return (
    <section className="relative bg-brand-blush pt-24 text-brand-dark sm:pt-30">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={fallbackHeroImg}
          alt={collection.heroTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 theme-hero-wash" />
        <div className="absolute inset-0 theme-hero-bottom" />
      </div>

      <div className="relative z-10 mx-auto  px-4 pb-12 sm:px-10 md:px-16">
        <div className="flex min-h-[520px] flex-col justify-center">
          <div className="w-fit px-3 py-0.5 rounded-full flex items-center bg-white/70 border border-brand-gold/10 gap-1.5 text-xs font-sans tracking-[0.12em] text-brand-gold/90 uppercase mb-8">
            <Link
              href="/"
              className="text-brand-dark font-medium hover:font-bold transition-all duration-150"
            >
              Home
            </Link>
            <span className="text-brand-dark font-normal px-0.5">&gt;</span>
            <Link
              href="/our-services"
              className="text-brand-dark font-medium hover:font-bold transition-all duration-150"
            >
              Services
            </Link>
            <span className="text-brand-dark font-normal px-0.5">&gt;</span>
            <Link
              href={`/our-services/${service.slug}`}
              prefetch={false}
              className="text-brand-dark font-medium hover:font-bold transition-all duration-150"
            >
              {service.title}
            </Link>
          </div>

          {service.label && (
            <span className="bg-brand-gold/7 text-brand-gold rounded-full px-3 py-0.5 font-sans text-xs font-bold tracking-[0.25em] uppercase block w-fit">
              {service.label}
            </span>
          )}
          <h1 className="mt-4 max-w-[710px] font-serif text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-[58px]">
            {collection.heroTitle}
          </h1>
          <div className="my-5 h-0.5 w-14 bg-brand-gold" />
          <p className="max-w-[520px] text-sm font-medium leading-7 text-zinc-700 sm:text-[15px]">
            {collection.heroText}
          </p>

          {collection.heroFeatures.length > 0 && (
            <div className="mt-8 w-full max-w-3xl overflow-hidden rounded-xl border border-brand-gold/10 bg-white/70 px-4 py-6 shadow-2xl backdrop-blur-xs">
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
                    <span className="font-sans text-left text-xs font-semibold leading-4 tracking-wide text-brand-dark sm:text-sm">
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
