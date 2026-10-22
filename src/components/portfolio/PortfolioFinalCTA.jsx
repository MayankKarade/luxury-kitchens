"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConsultation } from "../../context/ConsultationContext";

export default function PortfolioFinalCTA() {
  const { openModal } = useConsultation();

  return (
    <section className="bg-[#010129] px-4 py-14 text-white sm:px-10 sm:py-16 md:px-16">
      <div className="mx-auto overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] px-6 py-10 shadow-2xl sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10">
        <div className="max-w-3xl">
          <span className="mb-3 block font-sans text-xs font-extrabold uppercase tracking-[0.25em] text-brand-gold">
            START YOUR PROJECT
          </span>
          <h2 className="font-serif text-3xl font-normal leading-[1.1] tracking-tight sm:text-[40px]">
            Have a Space You Want to Transform?
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-zinc-300 sm:text-[15px]">
            Tell us about your space, style and requirements. Cali Wood can
            help you plan, design, manufacture and install a furniture solution
            tailored to your project.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <button
            type="button"
            onClick={openModal}
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-md bg-brand-gold px-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#9A0101]"
          >
            BOOK A SITE VISIT
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
