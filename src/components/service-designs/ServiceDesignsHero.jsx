import Image from "next/image";
import Link from "next/link";

import { ServiceDesignIcon } from "./ServiceDesignIcons";

export default function ServiceDesignsHero({ service, collection }) {
  return (
    <section className="relative bg-brand-dark pt-24 text-white sm:pt-30">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={`${service.title} designs`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.08] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-10 md:px-16">
        <div className="flex min-h-[520px] flex-col justify-center">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold">
            <Link href="/" className="text-white/85 transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-brand-gold">&gt;</span>
            <Link
              href="/our-services"
              className="text-white/85 transition-colors hover:text-white"
            >
              Services
            </Link>
            <span className="text-brand-gold">&gt;</span>
            <Link
              href={`/our-services/${service.slug}`}
              className="text-brand-gold transition-colors hover:text-[#f1c170]"
            >
              {service.title}
            </Link>
          </div>

          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold">
            {service.label}
          </span>
          <h1 className="mt-4 max-w-[510px] font-serif text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-[58px]">
            {collection.heroTitle}
          </h1>
          <div className="my-5 h-0.5 w-14 bg-brand-gold" />
          <p className="max-w-[520px] text-sm font-medium leading-7 text-zinc-200 sm:text-[15px]">
            {collection.heroText}
          </p>

          <div className="mt-8 grid max-w-[500px] grid-cols-2 gap-5 sm:grid-cols-4">
            {collection.heroFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <ServiceDesignIcon
                  name={feature.icon}
                  className="mb-2 h-9 w-9 text-brand-gold"
                />
                <span className="text-[11px] font-bold leading-4 text-white">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
