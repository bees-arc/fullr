"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INNOVATIONS } from "@/data/innovations";
import { Sparkles, ArrowRight } from "lucide-react";

export default function InnovationsPreview() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Marmite Mania", "Monster Series", "Limited Edition", "Sliders & Sides"];

  const filteredItems = filter === "All"
    ? INNOVATIONS.slice(0, 6)
    : INNOVATIONS.filter((item) => item.category === filter).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#090b14] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#EA1E35]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFCA05]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA1E35]/15 border border-[#EA1E35]/30 text-[#EA1E35] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Culinary Labs</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              FULL&apos;R <span className="text-[#FFCA05]">INNOVATIONS</span>
            </h2>
            <p className="font-script text-xl sm:text-2xl text-[#FFCA05] mt-1">
              When things got deliciously messy.
            </p>
          </div>

          <Link
            href="/innovations"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#FFCA05] hover:text-[#FAAD1B] hover:translate-x-1 transition-all"
          >
            <span>Explore All 24 Innovations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat
                  ? "bg-[#FFCA05] text-[#0c0e18] shadow-md shadow-[#FFCA05]/20"
                  : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#141726] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFCA05]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-square w-full bg-black/40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141726] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#EA1E35] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#FFCA05] tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-black text-white uppercase group-hover:text-[#FFCA05] transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-script text-base text-[#FAAD1B] mb-2">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">Limited & Seasonal</span>
                  <Link
                    href="/innovations"
                    className="font-bold text-[#FFCA05] hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
