import Link from "next/link";

import { DetailIcon } from "./ServiceDesignDetailIcons";

function Rating({ product }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-0.5 text-brand-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <DetailIcon
            key={`${product.title}-star-${index}`}
            name="star"
            className="h-4 w-4"
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-neutral-700">
        {product.rating} ({product.reviews})
      </span>
    </div>
  );
}

export default function DesignInfoPanel({ product }) {
  return (
    <aside className="pt-1">
      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-gold">
        {product.serviceLabel}
      </span>
      <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-neutral-900 md:text-[44px]">
        {product.title}
      </h1>
      <Rating product={product} />

      <p className="mt-5 text-[15px] font-medium leading-7 text-zinc-700">
        {product.detailText}
      </p>

      <div className="mt-5">
        <p className="text-3xl font-extrabold text-neutral-900">
          {product.price}
        </p>
        <p className="mt-1 text-xs font-semibold text-zinc-500">
          {product.note}
        </p>
      </div>

      <div className="mt-6 border-y border-neutral-200 py-5">
        <div className="space-y-5">
          {product.quickFeatures.map((feature) => (
            <div
              key={feature.title}
              className="grid grid-cols-[38px_1fr] gap-4"
            >
              <DetailIcon
                name={feature.icon}
                className="h-8 w-8 text-brand-gold"
              />
              <div>
                <h3 className="text-sm font-extrabold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm font-medium leading-5 text-zinc-600">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/consultation"
          className="inline-flex h-12 items-center justify-center gap-4 rounded-md bg-brand-gold px-5 text-[11px] font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-[#eec176]"
        >
          Book A Consultation
          <DetailIcon name="calendar" className="h-4 w-4" />
        </Link>
        <Link
          href="/consultation"
          className="inline-flex h-12 items-center justify-center gap-4 rounded-md border border-neutral-300 bg-white px-5 text-[11px] font-extrabold uppercase tracking-wide text-neutral-900 transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          Request A Quote
          <DetailIcon name="arrow" className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-zinc-700">
          Have questions? Chat with our experts
        </p>
        <a
          href="https://wa.me/11234567890"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-3 rounded-md border border-neutral-200 bg-white px-6 text-[11px] font-extrabold uppercase tracking-wide text-neutral-900 transition-colors hover:border-[#25d366] hover:text-[#25d366]"
        >
          Chat On WhatsApp
          <DetailIcon name="whatsapp" className="h-4 w-4 text-[#25d366]" />
        </a>
      </div>
    </aside>
  );
}
