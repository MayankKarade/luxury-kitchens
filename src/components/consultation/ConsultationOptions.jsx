"use client";

import { ArrowRight } from "lucide-react";

import { ConsultationIcon } from "./ConsultationIcons";
import { connectOptions } from "./consultationData";

export default function ConsultationOptions() {
  return (
    <section className="bg-brand-white px-4 py-10 text-brand-dark sm:px-10 sm:py-12 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-medium sm:text-[38px]">
            Choose How You&apos;d Like To Connect
          </h2>
          <div className="mx-auto mt-3 flex w-14 items-center justify-center">
            <span className="h-px flex-1 bg-brand-gold" />
            <span className="mx-1 h-2 w-2 rounded-full border border-brand-gold bg-white" />
            <span className="h-px flex-1 bg-brand-gold" />
          </div>
          <p className="mt-3 text-sm font-medium text-zinc-600">
            Select an option below to get started. Our team will get in touch
            with you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {connectOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-lg border border-neutral-200 bg-white px-6 py-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/14 text-brand-gold">
                <ConsultationIcon name={option.icon} className="h-12 w-12" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-neutral-900">
                {option.title}
              </h3>
              <p className="mx-auto mt-4 min-h-[48px] max-w-[210px] text-sm font-medium leading-6 text-zinc-600">
                {option.text}
              </p>
              <a
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-5 rounded-md bg-brand-gold text-[11px] font-extrabold tracking-wide text-black transition-colors hover:bg-[#eec176]"
              >
                {option.action}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
