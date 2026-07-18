"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import { useConsultation } from "@/context/ConsultationContext";
import { ContactIcon } from "./ContactIcons";
import { contactMethods, serviceOptions } from "./contactData";
import axios from "axios";
import { API_ENDPOINTS } from "@/config";
import { toast } from "react-toastify";

const subjectOptions = [
  "New Project Inquiry",
  "Consultation Request",
  "Support",
  "Partnership",
];

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

export default function ContactMain() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { openModal } = useConsultation();

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    const payload = {
      name: fullName,
      email,
      mobile: phone,
      subject,
      service,
      message,
    };

    try {
      const response = await axios.post(API_ENDPOINTS.Contact.contact, payload);

      if (response?.data) {
        toast.success(response?.data?.msg);
        setSubmitted(true);
        // Optional: reset form
        setFullName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setService("");
        setMessage("");
        setAgreed(false);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-brand-white px-4 py-8 text-brand-dark sm:px-10 md:px-16">
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-serif text-3xl font-medium leading-tight sm:text-[36px]">
            Send Us A Message
          </h2>
          <p className="mt-3 text-sm font-medium text-zinc-600">
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Full Name">
              <input
                required
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-gold"
              />
            </Field>
            <Field label="Email Address">
              <input
                required
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-gold"
              />
            </Field>
            <Field label="Phone Number">
              <input
                required
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-gold"
              />
            </Field>
            <Field label="Subject">
              <select
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-zinc-500 outline-none transition-colors focus:border-brand-gold"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Service Interested In">
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="h-12 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-zinc-500 outline-none transition-colors focus:border-brand-gold"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Your Message">
              <textarea
                required
                rows={5}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-gold"
              />
            </Field>
          </div>

          <label className="mt-5 flex items-center gap-3 text-xs font-semibold text-zinc-600">
            <input
              required
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-neutral-300 accent-brand-gold"
            />
            I agree to the Privacy Policy and Terms &amp; Conditions.
          </label>

          <button
            type="submit"
            disabled={loading}
            className="group mt-6 flex h-13 w-full items-center justify-center gap-5 rounded-md bg-brand-gold text-xs font-extrabold tracking-wide text-white transition-colors hover:bg-[#9A0101] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          {error && (
            <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}

          {submitted && !error && (
            <p className="mt-4 rounded-md bg-brand-gold/10 px-4 py-3 text-sm font-semibold text-zinc-800">
              Thank you. Your message has been sent to the Netsaarthi team.
            </p>
          )}
        </form>

        <aside className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-3xl font-medium leading-tight sm:text-[34px]">
            Get In Touch
          </h2>
          <p className="mt-2 text-sm font-medium text-zinc-600">
            We&apos;re here to help you create spaces that inspire.
          </p>

          <div className="mt-6 divide-y divide-neutral-200">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={(event) => {
                  if (method.icon === "calendar") {
                    event.preventDefault();
                    openModal();
                  }
                }}
                className="flex gap-4 py-5 first:pt-0"
              >
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#010129] text-white">
                  <ContactIcon name={method.icon} className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-brand-dark">
                    {method.title}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-zinc-800">
                    {method.primary}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-zinc-500">
                    {method.secondary}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="font-serif text-3xl font-medium text-brand-dark">
              Follow Us
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-600">
              Stay connected for design inspiration and updates.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {[
                {
                  href: "https://www.facebook.com/Calikitchensgh",
                  aria: "Facebook",
                  Icon: FaFacebookF,
                },
                {
                  href: "https://www.instagram.com/calikitchensgh/",
                  aria: "Instagram",
                  Icon: FaInstagram,
                },
                {
                  href: "https://www.tiktok.com/@calikitchensgh",
                  aria: "TikTok",
                  Icon: FaTiktok,
                },
              ].map((social) => (
                <a
                  key={social.aria}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.aria}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#010129] text-white transition-colors hover:bg-brand-gold hover:text-white"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
