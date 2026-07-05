"use client";

import Image from "next/image";

import { ServiceDetailIcon } from "./ServiceDetailIcons";

export default function ServiceWhyChoose({ service }) {
  return (
    <section className="bg-brand-white px-4 pb-8 pt-24 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid  grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div>
          <h2 className="font-serif text-[25px] font-medium uppercase leading-[1.18] sm:text-[35px]">
            {service.whyTitle}
          </h2>
          <div className="mt-4 h-0.5 w-10 bg-brand-gold" />
          <p className="mt-5 max-w-md text-sm font-medium leading-5 sm:leading-7 text-zinc-700">
            Designed for modern living, our solutions are as functional as they
            are beautiful.
          </p>

          <div className="mt-7 space-y-7">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[2px] border-brand-gold/45 text-brand-gold">
                  <ServiceDetailIcon name={benefit.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-neutral-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 sm:leading-6 text-zinc-600">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[#071014] shadow-sm">
          <div className="relative min-h-[340px] sm:min-h-[430px]">
            <Image
              src={service.showcaseImage}
              alt={`${service.title} showcase`}
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 divide-x divide-white/10 bg-[#071014] text-center text-white sm:grid-cols-4">
            {service.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-6">
                <div className="text-2xl font-extrabold text-brand-gold sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium text-zinc-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
