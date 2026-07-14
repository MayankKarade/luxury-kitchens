"use client";

import React from "react";
import { Phone, Mail, Clock, Calendar } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import FloatingSocialWidget from "./FloatingSocialWidget";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/our-services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "Modular Kitchens", href: "/our-services/designs/modular-kitchens" },
  { name: "Luxury Wardrobes", href: "/our-services/designs/luxury-wardrobes" },
  { name: "Interior Design", href: "/our-services/designs/interior-design" },
  { name: "Renovation Services", href: "/our-services/designs/renovation-services" },
  { name: "Commercial Interiors", href: "/our-services/designs/commercial-interiors" },
  { name: "Custom Furniture", href: "/our-services/designs/custom-furniture" },
];

const locationLinks = [
  { name: "USA", href: "/locations#usa" },
  { name: "Canada", href: "/locations#canada" },
  { name: "UK", href: "/locations#uk" },
  { name: "Europe", href: "/locations#europe" },
  { name: "Ghana", href: "/locations#ghana" },
];

export default function Footer() {
  const { openModal } = useConsultation();

  return (
    <footer className="bg-brand-dark border-t border-white/5 px-4 sm:px-10 md:px-16 pt-16 pb-8 relative text-neutral-400 text-sm overflow-hidden select-none">
      {/* Subtly glowing luxury ambiance light backing */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1500px] mx-auto  relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-0 pb-10 border-b border-white/5">
          {/* Column 1: Logo and Professional Bio */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-6 lg:border-r lg:border-white/10 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo/CaliWood.jpeg"
                loading="eager"
                alt="CaliWood"
                width={180}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 font-sans text-[13.5px] leading-relaxed max-w-xs sm:max-w-sm">
              We create luxury kitchens and interiors that inspire. Delivering
              excellence across USA, Canada, UK, Europe and Ghana.
            </p>

            {/* Circular Social Outline Buttons */}
            <div className="flex items-center gap-2 mt-2">
              {[
                {
                  href: "https://facebook.com",
                  aria: "Facebook",
                  Icon: FaFacebookF,
                },
                {
                  href: "https://instagram.com",
                  aria: "Instagram",
                  Icon: FaInstagram,
                },
                {
                  href: "https://twitter.com",
                  aria: "Twitter / X",
                  Icon: FaXTwitter,
                },
                {
                  href: "https://linkedin.com",
                  aria: "LinkedIn",
                  Icon: FaLinkedinIn,
                },
                {
                  href: "https://youtube.com",
                  aria: "YouTube",
                  Icon: FaYoutube,
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.aria}
                  className="w-8.5 h-8.5 rounded-full border border-white/15 flex items-center justify-center hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 group cursor-pointer"
                >
                  <social.Icon className="w-3.8 h-3.8 text-zinc-400 group-hover:text-brand-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-5 lg:border-r lg:border-white/10 lg:pl-8 lg:pr-4">
            <h4 className="text-brand-gold font-sans text-[11px] font-bold tracking-[0.2em] uppercase leading-none">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[13.5px] text-zinc-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-5 lg:border-r lg:border-white/10 lg:pl-8 lg:pr-4">
            <h4 className="text-brand-gold font-sans text-[11px] font-bold tracking-[0.2em] uppercase leading-none">
              OUR SERVICES
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[13.5px] text-zinc-400">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-5 lg:border-r lg:border-white/10 lg:pl-8 lg:pr-4">
            <h4 className="text-brand-gold font-sans text-[11px] font-bold tracking-[0.2em] uppercase leading-none">
              LOCATIONS
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-[13.5px] text-zinc-400">
              {locationLinks.map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get In Touch */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 flex flex-col gap-5 lg:pl-8">
            <h4 className="text-brand-gold font-sans text-[11px] font-bold tracking-[0.2em] uppercase leading-none">
              GET IN TOUCH
            </h4>

            <div className="flex flex-col gap-4 font-sans text-[13.5px] text-zinc-400">
              {/* Phone item */}
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 hover:text-white transition-all group"
              >
                <Phone className="w-[19px] h-[19px] text-brand-gold shrink-0" />
                <span>+1 (123) 456-7890</span>
              </a>

              {/* Email item */}
              <a
                href="mailto:info@netsaarthi.com"
                className="flex items-center gap-3 hover:text-white transition-all group"
              >
                <Mail className="w-[19px] h-[19px] text-brand-gold shrink-0" />
                <span className="break-all">info@netsaarthi.com</span>
              </a>

              {/* Clock/Hours item */}
              <div className="flex items-center gap-3">
                <Clock className="w-[19px] h-[19px] text-brand-gold shrink-0" />
                <span>Mon - Sat: 09:00 AM - 06:00 PM</span>
              </div>

              {/* Book Consultation Solid Rounded Card Button matching image layout */}
              <button
                onClick={openModal}
                className="mt-4 w-full py-3.5 px-5 bg-brand-gold hover:bg-[#9A0101] text-white font-sans text-xs font-bold tracking-[0.16em] uppercase rounded-sm flex items-center justify-between transition-all duration-300 shadow-[0_12px_24px_rgba(154,1,1,0.15)] group cursor-pointer focus:outline-none"
              >
                <span>BOOK CONSULTATION</span>
                <Calendar className="w-[18px] h-[18px] text-white shrink-0 opacity-80" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans tracking-wide text-zinc-500">
          <p>&copy; 2025 Netsaarthi. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-gold transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-brand-gold transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <FloatingSocialWidget />
    </footer>
  );
}
