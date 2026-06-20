"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { useConsultation } from "@/context/ConsultationContext";
import { ServiceDetailIcon } from "./ServiceDetailIcons";

export default function ServiceDetailHero({ service }) {
  const { openModal } = useConsultation();

  return (
    <section className="relative bg-brand-dark pt-24 text-white sm:pt-30">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={`${service.title} hero`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.08] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 sm:px-10 md:px-16">
        <div className="flex min-h-[500px] flex-col justify-center">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold">
            <Link href="/" className="text-white/85 hover:text-white">
              Home
            </Link>
            <span className="text-brand-gold">&gt;</span>
            <Link
              href="/our-services"
              className="text-white/85 hover:text-white"
            >
              Services
            </Link>
            <span className="text-brand-gold">&gt;</span>
            <span className="text-brand-gold">{service.title}</span>
          </div>

          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold">
            {service.label}
          </span>
          <h1 className="mt-3 max-w-[450px] font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[54px]">
            {service.headline}
          </h1>
          <div className="my-4 h-0.5 w-14 bg-brand-gold" />
          <p className="max-w-[560px] text-sm font-medium leading-6 text-zinc-200 sm:text-[15px]">
            {service.description}
          </p>

          <div className="mt-7 grid max-w-[420px] grid-cols-2 items-center text-center gap-4 sm:grid-cols-4">
            {service.featureCards.map((feature) => (
              <div
                key={feature.title}
                className="text-center flex flex-col items-center sm:text-left"
              >
                <ServiceDetailIcon
                  name={feature.icon}
                  className="mx-auto mb-2 h-8 w-8 text-brand-gold sm:mx-0"
                />
                <span className="block text-[11px] text-center font-bold leading-4 text-white">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={openModal}
              className="inline-flex h-12 items-center justify-center gap-5 rounded-md bg-brand-gold px-7 text-[11px] font-extrabold tracking-wide text-black transition-colors hover:bg-[#eec176]"
            >
              BOOK CONSULTATION
              <Calendar className="h-4 w-4" />
            </button>
            <a
              href="#service-styles"
              className="inline-flex h-12 items-center justify-center gap-5 rounded-md border border-brand-gold/70 bg-black/25 px-7 text-[11px] font-bold tracking-wide text-white transition-colors hover:bg-brand-gold hover:text-black"
            >
              {service.designButtonText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-4 -mb-20 sm:-mb-14 grid overflow-hidden rounded-lg border border-white/10 bg-[#071014]/95 shadow-[0_16px_34px_rgba(0,0,0,0.32)] backdrop-blur-sm grid-cols-2 md:grid-cols-4">
          {service.trustCards.map((card) => (
            <div
              key={card.title}
              className="grid grid-cols-1 sm:grid-cols-[36px_1fr] items-center gap-3 border-b border-white/10 px-6 py-4 last:border-r-0 md:border-r lg:border-b-0 lg:px-7"
            >
              <ServiceDetailIcon
                name={card.icon}
                className="h-8 w-8 shrink-0 text-brand-gold"
              />
              <div>
                <h3 className="text-[12px] font-bold leading-4 text-white">
                  {card.title}
                </h3>
                <p className="mt-1 text-[11px] font-medium leading-4 text-zinc-300">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
