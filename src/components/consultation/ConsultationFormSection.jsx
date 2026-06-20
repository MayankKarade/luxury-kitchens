"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Clock3 } from "lucide-react";

import { ConsultationIcon } from "./ConsultationIcons";
import {
  countries,
  loungeImg,
  projectTypes,
  serviceOptions,
  whyItems,
} from "./consultationData";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-zinc-700">
        {label} <span className="text-brand-gold">*</span>
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-gold";

export default function ConsultationFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="consultation-form"
      className="bg-brand-white px-4 pb-10 text-brand-dark sm:px-10 md:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.9fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-serif text-3xl font-medium leading-tight sm:text-[36px]">
            Book A Consultation
          </h2>
          <p className="mt-3 text-sm font-medium text-zinc-600">
            Fill out the form below and our team will contact you to confirm
            your appointment.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Full Name">
              <input
                required
                type="text"
                placeholder="Enter your full name"
                className={inputClass}
              />
            </Field>
            <Field label="Email Address">
              <input
                required
                type="email"
                placeholder="Enter your email address"
                className={inputClass}
              />
            </Field>
            <Field label="Phone Number">
              <input
                required
                type="tel"
                placeholder="Enter your phone number"
                className={inputClass}
              />
            </Field>
            <Field label="Country">
              <select
                required
                defaultValue=""
                className={`${inputClass} text-zinc-500`}
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </Field>
            <Field label="Service Interested In">
              <select
                required
                defaultValue=""
                className={`${inputClass} text-zinc-500`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </Field>
            <Field label="Project Type">
              <select
                required
                defaultValue=""
                className={`${inputClass} text-zinc-500`}
              >
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </Field>

            <label className="block">
              <span className="mb-2 block text-xs font-bold text-zinc-700">
                Preferred Date
              </span>
              <span className="relative block">
                <input type="date" className={`${inputClass} pr-11`} />
                <Calendar className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold text-zinc-700">
                Preferred Time
              </span>
              <span className="relative block">
                <input type="time" className={`${inputClass} pr-11`} />
                <Clock3 className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              </span>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-bold text-zinc-700">
              Project Details
            </span>
            <textarea
              rows={5}
              placeholder="Tell us about your project, your requirements, style preferences, budget range, etc."
              className="w-full resize-none rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-gold"
            />
          </label>

          <label className="mt-5 flex items-center gap-3 text-xs font-semibold text-zinc-600">
            <input
              required
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-300 accent-brand-gold"
            />
            I agree to the Privacy Policy and Terms &amp; Conditions.
          </label>

          <button className="group mt-6 flex h-13 w-full items-center justify-center gap-5 rounded-md bg-brand-gold text-xs font-extrabold tracking-wide text-black transition-colors hover:bg-[#eec176]">
            BOOK CONSULTATION
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {submitted && (
            <p className="mt-4 rounded-md bg-brand-gold/10 px-4 py-3 text-sm font-semibold text-zinc-800">
              Thank you. Your consultation request is ready for the Netsaarthi
              team.
            </p>
          )}
        </form>

        <aside className="relative overflow-hidden rounded-lg bg-[#071014] p-6 text-white shadow-sm sm:p-8">
          <Image
            src={loungeImg}
            alt="Luxury consultation lounge"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover opacity-38"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071014] via-[#071014]/90 to-[#071014]/50" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-medium text-brand-gold sm:text-[34px]">
              Why Book A Consultation?
            </h2>
            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-zinc-200">
              A personalized consultation helps us understand your needs and
              deliver a solution that fits your style, space, and budget
              perfectly.
            </p>

            <div className="mt-8 space-y-7">
              {whyItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <ConsultationIcon
                    name={item.icon}
                    className="mt-1 h-9 w-9 shrink-0 text-brand-gold"
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
