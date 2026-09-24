"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Flame, Utensils, Sparkles, Briefcase, Info, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home",        href: "/",            icon: Flame,    color: "#EA1E35", light: "#fde8eb" },
  { name: "Our Menu",   href: "/menu",         icon: Utensils, color: "#008A6B", light: "#e0f5f0" },
  { name: "Innovations",href: "/innovations",  icon: Sparkles, color: "#6851A1", light: "#ede8f7" },
  { name: "Locate Us",  href: "/locate",       icon: MapPin,   color: "#FAAD1B", light: "#fff8e1" },
  { name: "About Us",   href: "/about",        icon: Info,     color: "#8A321C", light: "#f7ece8" },
  { name: "Join Us",    href: "/careers",      icon: Briefcase,color: "#EA1E35", light: "#fde8eb" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setIsOpen(false); }, [pathname]);

  // prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#EA1E35] py-3 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 sm:w-44 h-11 transition-transform duration-300 group-hover:scale-105">
              <Image src="/assets/logo-burgers-white.svg" alt="Full'r Burgers" fill priority className="object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#FFCA05] text-[#3C2760] shadow-md font-black"
                      : "text-white hover:text-[#FFCA05] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3" />

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 lg:hidden p-2.5 rounded-xl bg-white/20 text-white transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ── Full-screen Mobile Menu ─────────────────── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Panel — slides up from bottom on mobile */}
        <div
          className={`absolute inset-x-0 bottom-0 flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ maxHeight: "calc(100dvh - 64px)", marginTop: "64px" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable body */}
          <div className="bg-white flex-1 overflow-y-auto rounded-t-3xl px-4 pt-5 pb-6 shadow-2xl">
            {/* Tagline */}
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-5 text-center">
              OWN YOUR MESS • TASTE THE CHAOS
            </p>

            {/* Nav rows — each with its own brand color */}
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all active:scale-[0.98]"
                    style={
                      isActive
                        ? { backgroundColor: link.color, color: "#fff" }
                        : { backgroundColor: link.light, color: link.color }
                    }
                  >
                    {/* Icon circle */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: isActive ? "rgba(255,255,255,0.2)" : link.color }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <span className="font-black text-lg uppercase tracking-wide flex-1">
                      {link.name}
                    </span>

                    <ChevronRight
                      className="w-5 h-5 opacity-50"
                    />
                  </Link>
                );
              })}
            </div>

            {/* Footer CTAs */}
            <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:+94112116909"
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-gray-50 border-2 border-gray-100 font-bold text-gray-700 text-sm active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 text-[#EA1E35]" />
                Hotline: 011 211 6909
              </a>
              <Link
                href="/locate"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#FAAD1B] text-[#3C2760] font-black text-sm active:scale-95 transition-all shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                Find Nearest Outlet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
