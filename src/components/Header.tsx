"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Flame, Utensils, Sparkles, Briefcase, Info } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: Flame },
    { name: "Our Menu", href: "/menu", icon: Utensils },
    { name: "Innovations", href: "/innovations", icon: Sparkles },
    { name: "Locate Us", href: "/locate", icon: MapPin },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Join Us", href: "/careers", icon: Briefcase },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#EA1E35] py-3 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 sm:w-44 h-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo-burgers-white.svg"
                alt="Full'r Burgers - Own Your Mess"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#FFCA05] text-[#3C2760] shadow-md shadow-[#FFCA05]/30 font-black"
                      : "text-white hover:text-[#FFCA05] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action — empty, ORDER NOW and phone removed */}
          <div className="hidden lg:flex items-center gap-3" />

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl transition-all focus:outline-none bg-white/20 text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#EA1E35]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Bright White Background, NOT Black!) */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white text-gray-900 border-l border-gray-200 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div className="relative w-32 h-10">
                <Image
                  src="/assets/logo-112.png"
                  alt="Full'r Burgers"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slogan */}
            <p className="text-xs uppercase tracking-widest text-[#EA1E35] font-black mt-4 mb-6">
              OWN YOUR MESS • TASTE THE CHAOS
            </p>

            {/* Links */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                      isActive
                        ? "bg-[#EA1E35] text-white shadow-md shadow-[#EA1E35]/20 font-black"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#EA1E35]"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#EA1E35]"}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-gray-100 space-y-3">
            <a
              href="tel:+94112116909"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-2xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#EA1E35]" />
              <span>Hotline: 011 211 6909</span>
            </a>
            <Link
              href="/locate"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-[#FFCA05] text-[#0c0e18] font-black hover:bg-[#FAAD1B] shadow-md transition-transform active:scale-95"
            >
              <MapPin className="w-4 h-4" />
              <span>Find Nearest Outlet</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
