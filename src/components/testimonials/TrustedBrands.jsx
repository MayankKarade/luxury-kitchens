import { brandLogos } from "./testimonialData";

export default function TrustedBrands() {
  return (
    <section className="border-y border-brand-gold/10 bg-brand-blush px-4 py-8 sm:px-10 md:px-16">
      <div className="mx-auto ">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-zinc-600">
          Trusted By Leading Brands &amp; Clients Worldwide
        </p>
        <div className="mt-7 grid grid-cols-2 items-center gap-6 text-center sm:grid-cols-3 lg:grid-cols-7">
          {brandLogos.map((brand) => (
            <div
              key={brand}
              className="font-display text-xl font-extrabold uppercase tracking-tight text-zinc-600 transition-colors hover:text-brand-gold sm:text-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
