"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_BURGERS, Burger } from "@/data/burgers";
import { OUTLETS } from "@/data/outlets";
import {
  ChevronRight,
  MapPin,
  Phone,
  X,
  Utensils,
} from "lucide-react";

export default function HomePage() {
  const [selectedBurgerModal, setSelectedBurgerModal] = useState<Burger | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ============================================================== */}
      {/* 1. HERO SECTION: Video Background + Bottom Bar (Spicy Full'r)   */}
      {/* ============================================================== */}
      <section
        className="relative flex flex-col justify-between overflow-hidden bg-gray-950"
        style={{ height: "100dvh", minHeight: "100svh" }}
      >
        {/* Upper Area: Autoplaying Video */}
        <div className="relative flex-1 w-full min-h-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="/assets/fullr-hero.mp4" type="video/mp4" />
          </video>

          {/* Soft, light bottom gradient to blend smoothly */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none" />

          {/* Slogan on top of the red part, overlaid on the video, positioned upwards */}
          <div className="absolute inset-x-0 bottom-8 sm:bottom-14 md:bottom-16 z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 flex justify-center items-center pointer-events-none">
            <h2 className="font-display font-[family-name:var(--font-baloo)] font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-[#f5f4ef] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] tracking-wide text-center">
              LET&apos;S MAKE A MESS
            </h2>
          </div>
        </div>

        {/* Bottom Bar: Warning Logo + Action Buttons (Under the Video) */}
        <div
          className="relative z-10 w-full bg-[#EA1E35] border-t-4 border-[#FFCA05] text-white shadow-2xl px-4 sm:px-8 py-4 sm:py-5 flex-shrink-0"
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 1rem))" }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
            {/* Left: Huge WARNING! BURGERS AHEAD Logo */}
            <div className="flex items-center flex-shrink-0 py-2 sm:py-3">
              <div className="w-40 h-20 sm:w-56 sm:h-28 md:w-72 md:h-36 relative flex-shrink-0 drop-shadow-lg transition-transform hover:scale-105">
                <Image
                  src="/assets/spicy-f.svg"
                  alt="Warning! Burgers Ahead"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: CTA Buttons */}
            {/* Mobile: 3 Compact Round Buttons */}
            <div className="flex sm:hidden flex-row items-center gap-2.5 justify-end flex-shrink-0">
              <Link
                href="/menu"
                aria-label="Explore Menu"
                className="w-11 h-11 rounded-full bg-white text-[#EA1E35] flex items-center justify-center shadow-lg active:scale-90 transition-all font-bold"
              >
                <Utensils className="w-5 h-5" />
              </Link>
              <a
                href="tel:+94112116909"
                aria-label="Order Now"
                className="w-11 h-11 rounded-full bg-[#FFCA05] text-[#3C2760] flex items-center justify-center shadow-lg active:scale-90 transition-all font-bold"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Link
                href="/locate"
                aria-label="Locate Us"
                className="w-11 h-11 rounded-full bg-white text-[#3C2760] flex items-center justify-center shadow-lg active:scale-90 transition-all font-bold"
              >
                <MapPin className="w-5 h-5" />
              </Link>
            </div>

            {/* sm+: Full Text Action Buttons */}
            <div className="hidden sm:flex flex-row items-center gap-3 sm:gap-4 flex-shrink-0">
              <Link
                href="/menu"
                className="px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-[#EA1E35] font-black text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
              </Link>
              <a
                href="tel:+94112116909"
                className="px-6 py-3 rounded-full bg-[#FFCA05] hover:bg-[#faad1b] text-[#3C2760] font-black text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Order Now</span>
              </a>
              <Link
                href="/locate"
                className="px-6 py-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#3C2760] font-black text-sm uppercase tracking-wider border-2 border-white/50 shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Locate Outlets</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================== */}
      {/* 2. BRIGHT RED CONTAINER (#EA1E35): Burgerverse & Spicy Section  */}
      {/* ============================================================== */}
      <section className="bg-[#EA1E35] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Burgerverse text + Our Menu Button */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug sm:leading-relaxed text-white">
              You&apos;re entering our burgerverse. Brace yourself for bold flavours, juicy patties, and mouthwatering toppings in every irresistibly satisfying bite!
            </p>

            <div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#EA1E35] hover:bg-gray-100 font-black text-xl sm:text-2xl uppercase tracking-wider rounded-none shadow-2xl transition-all hover:translate-x-1.5 active:scale-95"
              >
                <span>Our Menu</span>
                <div className="w-7 h-7 rounded-full bg-[#EA1E35] text-white flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Original White Card holding Dragon Bait Photo */}
          <div className="flex justify-center">
            <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-2xl max-w-md w-full border-4 border-white/50 group overflow-hidden">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50">
                <Image
                  src="/assets/Dragon-Bait-banner.jpg"
                  alt="Full'r Dragon Bait"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4 text-center">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#EA1E35]">
                  Featured Sensation
                </span>
                <h3 className="font-display text-2xl font-black text-[#252960] uppercase mt-0.5">
                  Dragon Bait
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. BRIGHT EMERALD GREEN CONTAINER (#008A6B): Cheesy Section    */}
      {/* ============================================================== */}
      <section className="bg-[#008A6B] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Cheese Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 animate-float">
              <Image
                src="/assets/cheese_cr-f.svg"
                alt="Full'r Molten Cheese"
                fill
                className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
              />
            </div>
          </div>

          {/* Right Column: Signature Yellow Quote on Emerald Green */}
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFCA05] leading-snug sm:leading-relaxed">
              Embrace the chaos with our juicy, flavour-loaded burgers that are irresistibly messy, pick your favourite—every patty tells a story!
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. BRIGHT ROYAL PURPLE BANNER (#6851A1): Best-Sellers Headline */}
      {/* ============================================================== */}
      <section className="bg-[#6851A1] text-white py-12 sm:py-16 px-4 text-center shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-script text-3xl sm:text-5xl md:text-6xl text-white font-normal drop-shadow-md">
            Stacked with best-sellers, Fun &amp; Flavours
          </h2>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. PRODUCT SHOWCASE: Clean White Cards with Transparent PNGs   */}
      {/* ============================================================== */}
      <section className="bg-[#f8f9fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {FEATURED_BURGERS.map((burger) => (
              <div
                key={burger.id}
                className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
              >
                <div>
                  {/* Transparent Cutout */}
                  <div className="relative aspect-square w-full mb-3 flex items-center justify-center p-2">
                    <Image
                      src={burger.image}
                      alt={burger.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                    />
                  </div>

                  {/* Category */}
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-1">
                    Uncategorized
                  </div>

                  {/* Title in Deep Purple (#3C2760) matching original CSS */}
                  <h3 className="font-display text-xl font-black text-[#3C2760] uppercase group-hover:text-[#EA1E35] transition-colors leading-tight">
                    {burger.name}
                  </h3>

                  {/* Price */}
                  <div className="text-lg font-black text-[#EA1E35] font-mono mt-1 mb-3">
                    රු {burger.price.toFixed(2)}
                  </div>
                </div>

                {/* Read More / Order Button */}
                <button
                  onClick={() => setSelectedBurgerModal(burger)}
                  className="w-full py-2.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>Read more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. BRIGHT YELLOW CONTAINER (#FAAD1B): Ready to Own Your Mess?   */}
      {/* ============================================================== */}
      <section className="bg-[#FAAD1B] text-[#8A321C] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Paragraph in Maroon (#8A321C) */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#8A321C] leading-[0.95]">
              READY TO <br />
              OWN YOUR MESS?
            </h2>

            <p className="text-base sm:text-xl font-bold leading-relaxed text-[#8A321C]/95 max-w-2xl">
              Things are about to get messy.... Visit your nearest Full&apos;r Burgers outlet, now at seven locations, with three fully open for dine-in, and more on the way. Experience burger options like nowhere else. Your new favourite burger spot awaits. Get ready to embrace the mess!
            </p>
          </div>

          {/* Right Column: Locate Us Button in Maroon */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/locate"
              className="inline-flex items-center gap-4 px-8 py-5 rounded-none bg-[#8A321C] hover:bg-[#6e2614] text-white font-black text-xl sm:text-2xl uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#8A321C] flex items-center justify-center">
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </div>
              <span>locate us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. ALL 8 OUTLETS SECTION: Bright & Clean White Backdrop        */}
      {/* ============================================================== */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-gray-900 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full bg-[#EA1E35] text-white text-xs font-black uppercase tracking-wider shadow-sm">
              8 Outlets Across Colombo
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#252960] uppercase mt-3">
              FIND YOUR NEAREST <span className="text-[#EA1E35]">FULL&apos;R</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Dine-in at our flagship locations or grab speedy takeaway and delivery right to your door!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OUTLETS.map((outlet) => (
              <div
                key={outlet.id}
                className="bg-[#f8f9fa] border border-gray-200 rounded-3xl p-5 flex flex-col justify-between hover:border-[#EA1E35] hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-black text-[#252960] uppercase">
                      {outlet.name}
                    </h3>
                    {outlet.dineIn && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Dine-in
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                    {outlet.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center gap-2">
                  <a
                    href={`tel:${outlet.phone}`}
                    className="flex-1 py-2.5 rounded-full bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#EA1E35]" />
                    <span>Call</span>
                  </a>
                  <a
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white text-xs font-black uppercase text-center flex items-center justify-center gap-1 transition-colors shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Map</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. INNOVATIONS HIGHLIGHT BANNER: Come visit us & taste inno     */}
      {/* ============================================================== */}
      <section className="bg-[#6851A1] py-16 px-4 text-white text-center shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-script text-2xl sm:text-4xl text-[#FFCA05]">
            Come visit us &amp; taste innovations at Full&apos;r Burgers
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white">
            24 Boundary-Pushing Creations From Our In-House Culinary Labs
          </h2>
          <div className="pt-3">
            <Link
              href="/innovations"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFCA05] hover:bg-[#FAAD1B] text-[#0c0e18] font-black text-sm uppercase tracking-wider shadow-xl transition-transform active:scale-95"
            >
              <span>Explore All Innovations</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. BURGER DETAIL MODAL (Pure White Card, No Black)             */}
      {/* ============================================================== */}
      {selectedBurgerModal && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedBurgerModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#0c0e18] border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBurgerModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={selectedBurgerModal.image}
                  alt={selectedBurgerModal.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-[#EA1E35] tracking-wider">
                  Signature Burger
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#252960] uppercase leading-tight">
                  {selectedBurgerModal.name}
                </h4>
                <p className="text-xl font-black text-[#EA1E35] font-mono mt-0.5">
                  රු {selectedBurgerModal.price.toFixed(2)}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
              {selectedBurgerModal.description}
            </p>

            <div className="mb-6 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Ingredients:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedBurgerModal.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+94112116909"
                className="w-full sm:flex-1 py-3.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-[#EA1E35]/30 transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call (011 211 6909)</span>
              </a>

              <Link
                href="/locate"
                onClick={() => setSelectedBurgerModal(null)}
                className="w-full sm:flex-1 py-3.5 rounded-full bg-[#252960] hover:bg-[#1a1d48] text-white font-black text-xs uppercase tracking-wider text-center transition-colors"
              >
                <span>Find Outlet</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
