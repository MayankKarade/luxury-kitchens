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
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-3 lg:pt-5 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col items-start group shrink-0">
          <div className="relative">
            <div className="relative w-[140px] h-14">
              <Image
                src={"/logo/logo.png"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-brand-gold tracking-[0.22em] font-medium uppercase my-1">
              LUXURY KITCHENS & INTERIORS
            </span>
          </div>
        </a>

        {/* Desktop view */}
        <div className="hidden xl:flex flex-col items-end gap-3.5">
          <div className="flex items-center gap-5 text-[11px] text-gray-300 font-sans tracking-wider">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>USA +1 (123) 456-7890</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#"
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
          <div className="flex items-center gap-8 pl-5 py-2 bg-brand-gold/5 rounded-md">
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
            <button
              onClick={openModal}
              className="px-5 py-3 bg-brand-gold hover:bg-[#eec176] text-[#08090d] font-sans text-xs font-bold tracking-[0.16em] rounded-[3px] transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <span>BOOK CONSULTATION</span>
              <Calendar className="w-4 h-4 text-[#08090d]" />
            </button>
          </div>
        </div>

        {/* Mobile actions (hamburger + book button) */}
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

      {/* Mobile Drawer Navigation - ADDED explicit X close button inside */}
      <div
        className={`xl:hidden fixed inset-x-0 top-0 h-screen bg-[#07080b]/98 backdrop-blur-lg z-40 transition-all duration-300 transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-24 gap-6 relative">
          {/* ========== NEW CLOSE BUTTON INSIDE DRAWER ========== */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {/* ================================================== */}

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
