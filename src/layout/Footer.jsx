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

export default function Footer() {
  const { openModal } = useConsultation();

  const handleWhatsappClick = () => {
    window.open("https://wa.me/11234567890", "_blank");
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 px-4 sm:px-10 md:px-16 pt-16 pb-8 relative text-neutral-400 text-sm overflow-hidden select-none">
      {/* Subtly glowing luxury ambiance light backing */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto  relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-0 pb-10 border-b border-white/5">
          {/* Column 1: Logo and Professional Bio */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-6 lg:border-r lg:border-white/10 lg:pr-8">
            <a href="#home" className="flex items-center gap-3 group">
              {/* Droplet blue modern layered brand logo matching image */}
              <div className="relative w-36 h-14">
                <Image
                  src={"/logo/logo.png"}
                  loading="eager"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </a>
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
              {[
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Process", href: "#process" },
                { name: "Blog", href: "#blog" },
                { name: "Contact Us", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
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
              {[
                "Modular Kitchens",
                "Wardrobes",
                "Interior Design",
                "Renovations",
                "Commercial Interiors",
                "Custom Furniture",
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
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
              {["USA", "Canada", "UK", "Europe", "Ghana"].map(
                (location, idx) => (
                  <li key={idx}>
                    <span className="cursor-default hover:text-white transition-colors duration-200">
                      {location}
                    </span>
                  </li>
                ),
              )}
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
                className="mt-4 w-full py-3.5 px-5 bg-brand-gold hover:bg-[#ebd0a3] text-neutral-900 font-sans text-xs font-bold tracking-[0.16em] uppercase rounded-sm flex items-center justify-between transition-all duration-300 shadow-[0_12px_24px_rgba(223,171,86,0.15)] group cursor-pointer focus:outline-none"
              >
                <span>BOOK CONSULTATION</span>
                <Calendar className="w-[18px] h-[18px] text-neutral-900 shrink-0 opacity-80" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans tracking-wide text-zinc-500">
          <p>© 2025 Netsaarthi. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <a
              href="#privacy"
              className="hover:text-brand-gold transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-brand-gold transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating circular chat button */}
      <button
        onClick={handleWhatsappClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#1ebd52] text-white w-14 h-14 rounded-full shadow-[0_16px_32px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-108 active:scale-95 flex items-center justify-center group cursor-pointer"
        aria-label="Contact Netsaarthi on WhatsApp"
        title="Contact on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2C6.485 2 2 6.484 2 12.011c0 1.908.533 3.761 1.543 5.378L2.015 22l4.774-1.253a9.945 9.945 0 005.223 1.488c5.526 0 10.012-4.485 10.012-10.011a9.946 9.946 0 00-2.932-7.078A9.95 9.95 0 0012.012 2zm5.727 13.916c-.244.686-1.238 1.258-1.745 1.348-.475.084-1.077.105-1.737-.107a10.06 10.06 0 01-3.692-2.316 11.036 11.036 0 01-2.483-3.52c-.347-.59-.556-1.272-.556-1.956.002-1.393.722-2.115 1.034-2.42.274-.268.618-.328.857-.328.24 0 .479.002.688.012.22.01.455-.08.718.555.263.636.9 2.203.978 2.364.078.16.13.348.02.569-.11.22-.24.36-.379.522-.14.163-.294.34-.419.497-.13.163-.263.34-.11.604a8.675 8.675 0 001.597 1.986 7.697 7.697 0 002.308 1.424c.264.13.42.11.574-.07.155-.183.676-.788.857-1.057.179-.269.359-.224.604-.134.246.09 1.557.734 1.826.87a.916.916 0 01.378.411c.092.416-.062 1.524-.306 2.21z" />
        </svg>
      </button>
    </footer>
  );
}
