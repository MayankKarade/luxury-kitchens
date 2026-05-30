"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  Calendar,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useConsultation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home", active: true },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services", hasDropdown: true },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "LOCATIONS", href: "#locations", hasDropdown: true },
    { name: "PROCESS", href: "#process" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c10]/98 shadow-2xl border-b border-white/5"
          : "bg-black/25 backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 lg:py-5 flex justify-between items-center">
        {/* Brand Logo - Flame/Water Droplet Modern Blue Shape + Text */}
        <a href="#home" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative">
            {/* Elegant wavy futuristic flame logo from image - multiple shades of blue */}
            <div className="w-11 h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_8px_rgba(29,78,216,0.4)]"
              >
                <defs>
                  <linearGradient
                    id="blueGrad1"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient
                    id="blueGrad2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                </defs>
                {/* Wavy luxury leaves/flame petals matching the NetSaarthi logo perfectly */}
                <path
                  d="M50,15 C68,40 85,55 85,72 C85,88 70,95 50,95 C30,95 15,88 15,72 C15,55 32,40 50,15 Z"
                  fill="url(#blueGrad2)"
                />
                <path
                  d="M50,22 C64,43 78,56 78,70 C78,82 66,88 50,88 C34,88 22,82 22,70 C22,56 36,43 50,22 Z"
                  fill="url(#blueGrad1)"
                  opacity="0.9"
                />
                {/* Internal accent curves */}
                <path
                  d="M50,35 C58,50 68,60 68,72 C68,80 60,84 50,84 C40,84 32,80 32,72 C32,60 42,50 50,35 Z"
                  fill="#ffffff"
                  opacity="0.9"
                />
                <path
                  d="M50,45 C54,55 60,62 60,70 C60,75 55,78 50,78 C45,78 40,75 40,70 C40,62 46,55 50,45 Z"
                  fill="#1d4ed8"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-wide leading-none">
              Netsaarthi
            </div>
            <span className="text-[9px] text-brand-gold tracking-[0.22em] font-medium uppercase mt-1">
              LUXURY KITCHENS & INTERIORS
            </span>
          </div>
        </a>

        {/* Right side container: floats contacts on top and links on bottom for desktop */}
        <div className="hidden xl:flex flex-col items-end gap-3.5">
          {/* Top row Contacts layout (exactly matching reference image layout and golden icons) */}
          <div className="flex items-center gap-5 text-[11px] text-gray-300 font-sans tracking-wider">
            <a
              href="tel:+11234567890"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>USA +1 (123) 456-7890</span>
            </a>
            <span className="text-white/20">|</span>

            <a
              href="mailto:info@netsaarthi.com"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>info@netsaarthi.com</span>
            </a>
            <span className="text-white/20">|</span>

            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>Mon - Sat: 09.00 AM - 06.00 PM</span>
            </div>
          </div>

          {/* Bottom row: nav links and gold button matching the golden theme */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[12px] font-medium tracking-tight transition-all duration-300 flex items-center gap-1 py-1 relative group ${
                    link.active
                      ? "text-brand-gold"
                      : "text-gray-300 hover:text-brand-gold"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 opacity-70" />
                  )}
                  {link.active && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-[2.5px] bg-brand-gold"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Book Consultation target */}
            <button
              onClick={openModal}
              className="px-5 py-3 bg-brand-gold hover:bg-[#eec176] text-[#08090d] font-sans text-xs font-bold tracking-[0.16em] rounded-[3px] transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <span>BOOK CONSULTATION</span>
              <Calendar className="w-4 h-4 text-[#08090d]" />
            </button>
          </div>
        </div>

        {/* Small/Tablet screen actions */}
        <div className="flex xl:hidden items-center gap-3">
          <button
            onClick={openModal}
            className="px-4 py-2 text-xs bg-brand-gold text-[#08090d] font-bold tracking-wider rounded-[3px]"
          >
            BOOK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <div
        className={`xl:hidden fixed inset-x-0 top-0 h-screen bg-[#07080b]/98 backdrop-blur-lg z-40 transition-all duration-300 transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-24 gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold tracking-widest py-3 border-b border-white/5 flex justify-between items-center ${
                  link.active
                    ? "text-brand-gold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 bg-brand-gold hover:bg-[#eec176] text-black font-bold tracking-widest text-xs rounded transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-sans mt-4">
              <p>USA: +1 (123) 456-7890</p>
              <p>Email: info@netsaarthi.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
