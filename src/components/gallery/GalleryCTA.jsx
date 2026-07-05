"use client";

import { ArrowRight, Calendar } from "lucide-react";

import { useConsultation } from "@/context/ConsultationContext";

const features = [
  {
    title: "Custom Design",
    subtitle: "Tailored to your style",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path
          d="m8 24 16-16M10 9h.01M23 23h.01M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    subtitle: "Finest materials",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path
          d="m16 4 10 4v7c0 6.5-4.2 10.8-10 13-5.8-2.2-10-6.5-10-13V8l10-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m12 16 3 3 6-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    subtitle: "Experienced designers",
    icon: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path
          d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm8-1a4 4 0 1 0 0-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 27c1.2-5.3 4-8 8-8s6.8 2.7 8 8M20 20c3.6.4 6 2.8 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function GalleryCTA() {
  const { openModal } = useConsultation();

  return (
    <section className="bg-brand-white px-4 pb-8 pt-6 text-white sm:px-10 md:px-16">
      <div className="mx-auto  overflow-hidden rounded-lg bg-[#071014] px-6 py-5 shadow-sm sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-medium ">
              Inspired By What You See?
            </h2>
            <p className="mt-1 text-sm font-medium text-zinc-300">
              Let&apos;s bring your dream space to life.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-[520px]">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <span className="text-brand-gold">{feature.icon}</span>
                <span>
                  <span className="block text-[12px] font-extrabold">
                    {feature.title}
                  </span>
                  <span className="mt-0.5 block text-[10px] font-medium text-zinc-300">
                    {feature.subtitle}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={openModal}
            className="group inline-flex items-center justify-center gap-4 rounded-md bg-brand-gold px-7 py-4 text-[11px] font-extrabold tracking-wide text-white transition-colors hover:bg-[#9A0101]"
          >
            BOOK CONSULTATION
            <Calendar className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
