"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INNOVATIONS, InnovationItem } from "@/data/innovations";
import { Sparkles, Search, X, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function InnovationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModal, setActiveModal] = useState<InnovationItem | null>(null);

  const categories = [
    "All",
    "Limited Edition",
    "Marmite Mania",
    "Monster Series",
    "Sliders & Sides",
  ];

  const filtered = INNOVATIONS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#f8f9fa] min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA1E35]/10 border border-[#EA1E35]/20 text-[#EA1E35] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Full&apos;r Innovation Lab</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#252960] uppercase tracking-tight">
            WHEN THINGS GOT <span className="text-[#EA1E35]">MESSY</span>
          </h1>

          <p className="font-script text-2xl text-[#FAAD1B] mt-1">
            24 Boundary-pushing burger concepts and limited editions
          </p>

          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            From the cult-favourite Marmite infused burgers and monstrous stacks like Gojira &amp; Kong, to seasonal holiday creations. Here is our hall of culinary fame!
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#EA1E35] text-white shadow-md shadow-[#EA1E35]/20 font-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search innovations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-900 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#EA1E35] transition-colors"
            />
          </div>
        </div>

        {/* 24 Innovations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModal(item)}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden cursor-pointer hover:border-[#EA1E35] transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EA1E35] text-white text-[10px] font-black uppercase tracking-wider shadow">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] uppercase font-bold text-[#EA1E35] tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-black text-[#252960] uppercase group-hover:text-[#EA1E35] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-script text-sm text-[#FAAD1B] mb-2 line-clamp-1">
                    &ldquo;{item.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="w-full py-2.5 rounded-full bg-gray-100 group-hover:bg-[#EA1E35] group-hover:text-white text-gray-700 text-xs font-bold uppercase tracking-wider text-center transition-colors">
                  View Innovation Story
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={activeModal.image}
                  alt={activeModal.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#EA1E35] text-white text-xs font-black uppercase tracking-wider shadow">
                    {activeModal.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs uppercase font-extrabold text-[#EA1E35] tracking-widest block mb-1">
                  {activeModal.category}
                </span>
                <h3 className="font-display text-2xl font-black text-[#252960] uppercase">
                  {activeModal.name}
                </h3>
                <p className="font-script text-xl text-[#FAAD1B] mb-3">
                  &ldquo;{activeModal.tagline}&rdquo;
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {activeModal.description}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:+94112116909"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#EA1E35] text-white font-black text-xs uppercase tracking-wider hover:bg-[#c91328] transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Inquire Availability</span>
                  </a>
                  <Link
                    href="/locate"
                    onClick={() => setActiveModal(null)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#252960] text-white font-black text-xs uppercase tracking-wider hover:bg-[#1a1d48] transition-colors shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Visit Outlet</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
