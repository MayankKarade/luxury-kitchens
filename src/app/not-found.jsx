import Link from "next/link";
import { ArrowRight, Home, SearchX } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Cali Wood",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="w-full flex justify-center bg-brand-white">
      <div className="w-full max-w-[1800px]">
        <div
          className="h-[92px] bg-brand-dark sm:h-[112px]"
          aria-hidden="true"
        />
        <section className="bg-brand-white px-4 py-16 text-brand-dark sm:px-10 sm:py-20 md:px-16">
          <div className="mx-auto flex min-h-[58vh] max-w-[980px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/10 text-brand-gold">
              <SearchX className="h-8 w-8" strokeWidth={1.8} />
            </div>

            <p className="mt-7 font-sans text-xs font-extrabold uppercase tracking-[0.28em] text-brand-gold">
              404 Error
            </p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl md:text-[58px]">
              Page Not Found
            </h1>
            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-zinc-600 sm:text-base">
              The page you are looking for may have been moved, renamed, or is
              no longer available.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-brand-gold px-6 text-[12px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-[#7f0101]"
              >
                <Home className="h-4 w-4" />
                Go Home
              </Link>
              <Link
                href="/our-services"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-brand-gold px-6 text-[12px] font-extrabold uppercase tracking-wide text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
