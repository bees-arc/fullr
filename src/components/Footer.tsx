import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShieldCheck, MapPin, Phone, ExternalLink, Heart } from "lucide-react";
import { OUTLETS } from "@/data/outlets";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
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

export default function Footer() {
  return (
    <footer className="bg-[#EA1E35] text-white pt-16 pb-24 lg:pb-12 relative overflow-hidden">
      {/* Top Wave Shape Divider Matching Live Website (Fill #FAAD1B) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 30"
          preserveAspectRatio="none"
          className="w-full h-7 sm:h-9 fill-[#FAAD1B]"
        >
          <path d="M0,0 C150,25 350,30 500,15 C650,0 900,30 1200,5 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/20">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-14">
                <Image
                  src="/assets/logo-burgers-white.svg"
                  alt="Full'r Burgers"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-base font-medium text-white/90 leading-relaxed">
              Come visit us &amp; taste innovations at Full&apos;r Burgers. 100% locally sourced, freshly crafted patties and fearless culinary innovations.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-black tracking-wider uppercase">
              <span>🍔 OWN YOUR MESS</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/fullr_lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#EA1E35] hover:bg-[#FFCA05] hover:text-[#0c0e18] flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/fullrlk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#EA1E35] hover:bg-[#FFCA05] hover:text-[#0c0e18] flex items-center justify-center transition-all hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@fullr_lk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#EA1E35] hover:bg-[#FFCA05] hover:text-[#0c0e18] flex items-center justify-center transition-all hover:scale-110 shadow-md font-black text-xs"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black tracking-wider uppercase text-[#FFCA05]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-white/90">
              <li>
                <Link href="/" className="hover:text-[#FFCA05] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#FFCA05] transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link href="/innovations" className="hover:text-[#FFCA05] transition-colors">Innovations</Link>
              </li>
              <li>
                <Link href="/locate" className="hover:text-[#FFCA05] transition-colors">Locate Us</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFCA05] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#FFCA05] transition-colors">Join Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlets List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black tracking-wider uppercase text-[#FFCA05] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-white" />
              <span>Our Outlets</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-white/90">
              {OUTLETS.map((outlet) => (
                <li key={outlet.id} className="flex items-center justify-between hover:text-[#FFCA05] transition-colors group">
                  <a
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-semibold group-hover:underline"
                  >
                    <span>{outlet.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <a
                    href={`tel:${outlet.phone}`}
                    className="text-white/80 hover:text-white font-mono text-[11px]"
                  >
                    {outlet.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Trustindex 4.5 Google Verified Badge & Hotline */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black tracking-wider uppercase text-[#FFCA05]">
              Review Us
            </h4>

            {/* Google Trustindex Badge */}
            <div className="p-4 rounded-2xl bg-white text-[#0c0e18] shadow-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EA1E35] flex items-center justify-center font-black text-white text-sm">
                    G
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 text-[#FAAD1B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FAAD1B]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-900">4.5 Top Rated</span>
                  </div>
                </div>
                <ShieldCheck className="w-6 h-6 text-[#008A6B]" />
              </div>

              <p className="text-[11px] text-gray-600 leading-tight">
                Trustindex verifies that the company has a review score above 4.5, based on Google reviews over 12 months.
              </p>

              <a
                href="https://www.trustindex.io/?a=sys&c=wp-top-rated-badge&url=/the-trustindex-verified-badge/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-black text-[#EA1E35] hover:underline"
              >
                <span>Top Rated Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Hotline Call Box */}
            <div className="p-3.5 rounded-2xl bg-black/20 border border-white/20">
              <div className="text-xs font-bold text-white/80 uppercase">Delivery & Hotline</div>
              <a
                href="tel:+94112116909"
                className="text-lg font-black text-[#FFCA05] tracking-wide font-mono flex items-center gap-2 mt-0.5"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>011 211 6909</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80 text-center sm:text-left">
          <p>© 2024 Full’r. All Rights Reserved.</p>
          <p>
            Designed By{" "}
            <a
              href="https://envisionedgesolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFCA05] font-bold hover:underline"
            >
              Envision Edge Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
