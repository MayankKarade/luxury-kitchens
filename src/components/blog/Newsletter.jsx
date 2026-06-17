import Image from "next/image";
import { Mail, Send } from "lucide-react";

import heroImg from "../../assets/images/luxury_kitchen_hero_1780070314375.png";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="bg-brand-white px-4 pb-10 sm:px-10 md:px-16"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#080b0e] px-6 py-8 text-white shadow-xl sm:px-10">
        <Image
          src={heroImg}
          alt="Newsletter background"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />

        <div className="relative z-10 grid grid-cols-1 gap-7 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-gold">
              STAY INSPIRED
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium">
              Subscribe To Our Newsletter
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
              Get the latest design trends, expert tips, and exclusive updates
              delivered straight to your inbox.
            </p>
          </div>

          <form className="flex flex-col overflow-hidden rounded-md border border-white/15 bg-black/35 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="flex flex-1 items-center gap-3 px-5 py-4">
              <Mail className="h-5 w-5 text-zinc-500" />
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 bg-brand-gold px-8 py-4 text-xs font-extrabold tracking-wide text-black transition-colors hover:bg-[#eec176]"
            >
              SUBSCRIBE
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
