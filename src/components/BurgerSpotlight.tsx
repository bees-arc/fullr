"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_BURGERS, Burger } from "@/data/burgers";
import { Flame, Check, Sparkles, ChevronRight, X, Phone } from "lucide-react";

export default function BurgerSpotlight() {
  const [selectedBurger, setSelectedBurger] = useState<Burger>(FEATURED_BURGERS[0]);
  const [modalBurger, setModalBurger] = useState<Burger | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#0c0e18] relative overflow-hidden bg-grunge-pattern">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFCA05]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#EA1E35]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFCA05]/10 border border-[#FFCA05]/30 text-[#FFCA05] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stacked with Best-Sellers, Fun & Flavours</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            SIGNATURE <span className="text-[#FFCA05]">PATTY VERSE</span>
          </h2>

          <p className="font-script text-xl sm:text-2xl text-[#FFCA05] mt-1">
            Pick your favourite—every patty tells a story!
          </p>

          <p className="text-gray-400 text-sm sm:text-base mt-4">
            Embrace the chaos with our juicy, flavour-loaded burgers that are irresistibly messy. Handcrafted from scratch with 100% fresh local ingredients.
          </p>
        </div>

        {/* Burger Selector Tabs - Touch Friendly Horizontal Scroll on Mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FEATURED_BURGERS.map((burger) => {
            const isSelected = selectedBurger.id === burger.id;
            return (
              <button
                key={burger.id}
                onClick={() => setSelectedBurger(burger)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#FFCA05] text-[#0c0e18] shadow-lg shadow-[#FFCA05]/30 scale-105"
                    : "bg-[#141726] text-gray-300 hover:text-white hover:bg-[#1c2035] border border-white/5"
                }`}
              >
                <span>{burger.name}</span>
                {burger.spicyLevel >= 2 && (
                  <Flame className={`w-3.5 h-3.5 ${isSelected ? "text-[#EA1E35] fill-[#EA1E35]" : "text-[#EA1E35]"}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Hero Interactive Showcase Card */}
        <div className="bg-[#141726] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Burger Graphic with Floating Animation & Badges */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              {/* Backlight Ring */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#FFCA05]/20 to-[#EA1E35]/20 blur-3xl" />

              {/* Floating Cutout */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float transition-all duration-500">
                <Image
                  src={selectedBurger.image}
                  alt={selectedBurger.name}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  priority
                />
              </div>

              {/* Badges Floating Around Burger */}
              <div className="flex items-center gap-3 mt-4">
                {selectedBurger.isCheesy && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFCA05]/15 border border-[#FFCA05]/40 text-[#FFCA05] text-xs font-bold shadow-md">
                    <Image src="/assets/cheese_cr-f.svg" alt="Cheese" width={16} height={16} />
                    <span>Melted Cheese Loaded</span>
                  </div>
                )}
                {selectedBurger.spicyLevel > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EA1E35]/15 border border-[#EA1E35]/40 text-[#EA1E35] text-xs font-bold shadow-md">
                    <Image src="/assets/spicy-f.svg" alt="Spicy" width={16} height={16} />
                    <span>Spice Level {selectedBurger.spicyLevel}/3</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Burger Details & Ordering Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs uppercase font-extrabold tracking-widest text-[#FFCA05] mb-1">
                  {selectedBurger.category}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase">
                  {selectedBurger.name}
                </h3>
                <p className="font-script text-xl sm:text-2xl text-[#FAAD1B] mt-1">
                  &ldquo;{selectedBurger.tagline}&rdquo;
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-[#FFCA05] font-mono">
                  රු {selectedBurger.price.toFixed(2)}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  (Standard Menu Price)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {selectedBurger.description}
              </p>

              {/* Key Ingredients Breakdown */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                  Inside The Stack:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedBurger.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                      <div className="w-4 h-4 rounded-full bg-[#FFCA05]/20 text-[#FFCA05] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                <button
                  onClick={() => setModalBurger(selectedBurger)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#EA1E35]/30 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>HOW TO ORDER</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <Link
                  href="/locate"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider border border-white/15 active:scale-95 transition-all text-center"
                >
                  Locate Nearest Outlet
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Burger Quick Grid Preview */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {FEATURED_BURGERS.map((b) => (
            <div
              key={b.id}
              onClick={() => setSelectedBurger(b)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 text-center flex flex-col items-center justify-between border ${
                selectedBurger.id === b.id
                  ? "bg-[#1c2035] border-[#FFCA05] shadow-lg shadow-[#FFCA05]/20 scale-105"
                  : "bg-[#141726]/60 border-white/5 hover:bg-[#141726] hover:border-white/20"
              }`}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-2">
                <Image src={b.image} alt={b.name} fill className="object-contain" />
              </div>
              <div className="font-bold text-sm text-white">{b.name}</div>
              <div className="text-xs font-mono font-bold text-[#FFCA05] mt-1">
                රු {b.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Order Modal */}
      {modalBurger && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalBurger(null)}
        >
          <div
            className="bg-[#141726] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalBurger(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image src={modalBurger.image} alt={modalBurger.name} fill className="object-contain" />
              </div>
              <div>
                <h4 className="font-display text-2xl font-black text-white">{modalBurger.name}</h4>
                <p className="text-xs text-[#FFCA05] font-mono font-bold">රු {modalBurger.price.toFixed(2)}</p>
                <p className="text-xs text-gray-300 line-clamp-1">{modalBurger.tagline}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              Order your fresh, hot {modalBurger.name} for dine-in, takeaway, or speedy direct delivery via our Hotline or food delivery apps!
            </p>

            <div className="space-y-3">
              <a
                href="tel:+94112116909"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-[#EA1E35] text-white font-black text-sm uppercase tracking-wide hover:bg-[#c91328] transition-colors shadow-lg shadow-[#EA1E35]/30"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline (011 211 6909)</span>
              </a>

              <Link
                href="/locate"
                onClick={() => setModalBurger(null)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#FFCA05] text-[#0c0e18] font-black text-sm uppercase tracking-wide hover:bg-[#FAAD1B] transition-colors"
              >
                <span>Find Closest Outlet</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
