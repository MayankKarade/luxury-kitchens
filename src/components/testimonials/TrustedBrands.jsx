import { brandLogos } from "./testimonialData";

export default function TrustedBrands() {
  return (
    <section className="border-y border-white/10 bg-[#010129] px-4 py-8 sm:px-10 md:px-16">
      <div className="mx-auto ">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-zinc-400">
          Trusted By Leading Brands &amp; Clients Worldwide
        </p>
        <div className="mt-7 grid grid-cols-2 items-center gap-6 text-center sm:grid-cols-3 lg:grid-cols-7">
          {brandLogos.map((brand) => (
            <div
              key={brand}
              className="font-display text-xl font-extrabold uppercase tracking-tight text-white/55 transition-colors hover:text-white sm:text-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
