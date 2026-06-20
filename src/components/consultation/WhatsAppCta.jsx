"use client";

import { ArrowRight } from "lucide-react";

export default function WhatsAppCta() {
  return (
    <section className="bg-brand-white px-4 pb-8 text-white sm:px-10 md:px-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg bg-[#071014] shadow-sm lg:grid-cols-[280px_1fr_280px]">
        <div className="relative hidden min-h-[130px] overflow-hidden bg-black/30 lg:block">
          <div className="absolute left-16 top-8 h-24 w-14 rotate-[-16deg] rounded-[18px] border-4 border-zinc-900 bg-white shadow-2xl">
            <div className="mx-auto mt-2 h-1 w-5 rounded-full bg-zinc-300" />
            <div className="mt-5 flex justify-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25d366] text-sm font-black text-white">
                W
              </span>
            </div>
            <div className="mt-2 text-center text-[7px] font-bold text-[#25d366]">
              WhatsApp
            </div>
          </div>
        </div>

        <div className="px-6 py-7 sm:px-8">
          <h2 className="font-serif text-2xl font-medium sm:text-[30px]">
            Quick Question? Chat On WhatsApp
          </h2>
          <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-zinc-300">
            Connect with our team instantly on WhatsApp for quick answers and
            support.
          </p>
        </div>

        <div className="flex items-center px-6 pb-7 sm:px-8 lg:pb-0">
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-13 w-full items-center justify-center gap-4 rounded-md bg-brand-gold text-[11px] font-extrabold tracking-wide text-black transition-colors hover:bg-[#eec176]"
          >
            CHAT ON WHATSAPP
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
