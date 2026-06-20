"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ServiceDetailIcon } from "./ServiceDetailIcons";

const actions = [
  {
    icon: "calendar",
    title: "Book Consultation",
    text: "Schedule a meeting",
    href: "/consultation",
  },
  {
    icon: "service",
    title: "WhatsApp Chat",
    text: "Chat with our experts",
    href: "https://wa.me/11234567890",
  },
  {
    icon: "quality",
    title: "Request Quote",
    text: "Get a customized quote",
    href: "/consultation",
  },
  {
    icon: "user",
    title: "Schedule Call",
    text: "Talk to our specialists",
    href: "/consultation",
  },
];

export default function ServiceDetailCTA({ service }) {
  return (
    <section className="bg-brand-white px-4 pb-8 pt-4 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm lg:grid-cols-[270px_1fr_2fr]">
        <div className="relative min-h-[150px]">
          <Image
            src={service.showcaseImage}
            alt={`${service.title} consultation`}
            fill
            sizes="270px"
            className="object-cover"
          />
        </div>
        <div className="px-4 py-4 flex flex-col items-center justify-center">
          <h2 className="font-serif text-[25px] font-medium leading-tight">
            {service.ctaTitle}
          </h2>
          <p className="mt-2 text-[12px] leading-4.5 text-zinc-600">
            {service.ctaText}
          </p>
        </div>
        <div className="grid grid-cols-2 border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-4 lg:border-l lg:border-t-0">
          {actions.map((action) => {
            const external = action.href.startsWith("http");
            const content = (
              <>
                <ServiceDetailIcon
                  name={action.icon}
                  className="mx-auto mb-2 h-12 w-12 text-brand-gold"
                />
                <h3 className="text-xs font-extrabold text-neutral-900">
                  {action.title}
                </h3>
                <p className="mt-0 text-[11px] text-zinc-500">{action.text}</p>
              </>
            );

            if (external) {
              return (
                <a
                  key={action.title}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group border-b border-r border-neutral-200 px-4 py-6 text-center transition-colors hover:bg-brand-gold/10"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={action.title}
                href={action.href}
                className="group border-b border-r border-neutral-200 px-4 py-6 text-center transition-colors hover:bg-brand-gold/10"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
