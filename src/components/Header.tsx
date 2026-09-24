"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.82 0-1.666.28-1.666 1.369v2.611h3.763l-.535 3.667H14.06v7.98H9.101Z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.25a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.91 1.63V6.89a4.85 4.85 0 0 1-1-.2z" />
    </svg>
  );
}

function LinktreeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z" />
    </svg>
  );
}

const NAV_LINKS = [
  { name: "Home",        href: "/" },
  { name: "About Us",   href: "/about" },
  { name: "Innovations",href: "/innovations" },
  { name: "Our Menu",   href: "/menu" },
  { name: "Join Us",    href: "/careers" },
  { name: "Locate Us",  href: "/locate" },
];

const SOCIAL_LINKS = [
  { name: "Facebook",  href: "https://www.facebook.com/fullrlk/",  icon: FacebookIcon },
  { name: "TikTok",    href: "https://www.tiktok.com/@fullr_lk",   icon: TikTokIcon },
  { name: "Instagram", href: "https://www.instagram.com/fullr_lk/", icon: InstagramIcon },
  { name: "Linktree",  href: "https://linktr.ee/fullr_lk",         icon: LinktreeIcon },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Fixed Desktop / Standard Top Bar ───────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#EA1E35] py-3 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 sm:w-44 h-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/logo-burgers-white.svg"
                alt="Full'r Burgers"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
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

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center lg:hidden p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all focus:outline-none active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      {/* ── Fullscreen Mobile Menu (Live Site Style: Full Screen Red + White Icons) ───────────────── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden bg-[#EA1E35] text-white flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ height: "100dvh", minHeight: "100svh" }}
      >
        {/* Top Bar inside Menu */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 flex-shrink-0">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative w-36 sm:w-44 h-11"
          >
            <Image
              src="/assets/logo-burgers-white.svg"
              alt="Full'r Burgers"
              fill
              priority
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#EA1E35] flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center: Large Navigation Links (Live Website Exact Layout) */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 overflow-y-auto">
          <nav className="flex flex-col items-center gap-4 sm:gap-5 text-center w-full max-w-sm my-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl sm:text-3xl font-black uppercase tracking-wider transition-all duration-200 py-1.5 px-4 rounded-2xl flex items-center gap-2 ${
                    isActive
                      ? "text-[#FFCA05] scale-105"
                      : "text-white hover:text-[#FFCA05] hover:scale-105 active:scale-95"
                  }`}
                >
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#FFCA05]" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: White Social Media Icons from Live Site & Tagline */}
        <div className="px-6 pb-8 pt-4 flex flex-col items-center gap-4 border-t border-white/10 flex-shrink-0">
          {/* Social Icons (Crisp White Icons matching live site) */}
          <div className="flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:border-white hover:bg-white hover:text-[#EA1E35] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Slogan */}
          <p className="text-[11px] font-black uppercase tracking-widest text-white/70 text-center">
            OWN YOUR MESS • TASTE THE CHAOS
          </p>
        </div>
      </div>
    </>
  );
}
