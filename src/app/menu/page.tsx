"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DIGITAL_MENU_PAGES, MENU_ITEMS, MenuItem } from "@/data/menu";
import { Search, Flame, ZoomIn, X, Phone, Utensils } from "lucide-react";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<"interactive" | "digital">("interactive");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Burgers", "Sliders", "Sides & Drumlets", "Beverages"];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#f8f9fa] min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA1E35]/10 border border-[#EA1E35]/20 text-[#EA1E35] text-xs font-black uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Handcrafted In Colombo</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#252960] uppercase tracking-tight">
            OUR <span className="text-[#EA1E35]">CRAVE-WORTHY</span> MENU
          </h1>

          <p className="font-script text-2xl text-[#FAAD1B] mt-1">
            Messy burgers, colossal stacks &amp; unmatched flavours
          </p>

          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Explore our signature items or browse the official high-resolution digital menus below. Every meal is freshly prepared to order.
          </p>

          {/* Toggle between Interactive Menu and Digital Boards */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-gray-200 mt-6 shadow-md">
            <button
              onClick={() => setActiveTab("interactive")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === "interactive"
                  ? "bg-[#EA1E35] text-white shadow-md shadow-[#EA1E35]/20 font-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Interactive Items &amp; Prices
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === "digital"
                  ? "bg-[#EA1E35] text-white shadow-md shadow-[#EA1E35]/20 font-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Digital Menus &amp; Boards
            </button>
          </div>
        </div>

        {/* --- VIEW 1: INTERACTIVE MENU --- */}
        {activeTab === "interactive" && (
          <div>
            {/* Search and Category Filter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? "bg-[#EA1E35] text-white shadow-md shadow-[#EA1E35]/20"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search burgers, sides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-900 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#EA1E35] transition-colors"
                />
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-3xl p-5 flex flex-col justify-between hover:border-[#EA1E35] hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div>
                    {item.image && (
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-gray-50 flex items-center justify-center p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.isPopular && (
                          <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#EA1E35] text-white text-[10px] font-black uppercase tracking-wider shadow">
                            Top Seller
                          </div>
                        )}
                        {item.isSpicy && (
                          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-red-100 text-[#EA1E35]">
                            <Flame className="w-4 h-4 fill-[#EA1E35]" />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl font-black text-[#252960] uppercase group-hover:text-[#EA1E35] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-base font-black text-[#EA1E35] font-mono whitespace-nowrap">
                        රු {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <a
                      href="tel:+94112116909"
                      className="px-4 py-1.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-gray-200">
                <p className="text-gray-500 text-sm">No items found matching your search. Try another query!</p>
              </div>
            )}
          </div>
        )}

        {/* --- VIEW 2: DIGITAL MENUS & BOARDS (ORIGINAL HIGH RES) --- */}
        {activeTab === "digital" && (
          <div className="space-y-8">
            <div className="bg-[#FFCA05]/20 border border-[#FFCA05]/40 rounded-2xl p-4 text-center text-xs text-gray-800 font-medium">
              💡 <span className="font-bold text-[#8A321C]">Tip:</span> Click on any digital menu board below to view in full-screen crystal-clear zoom!
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DIGITAL_MENU_PAGES.map((page) => (
                <div
                  key={page.id}
                  onClick={() => setLightboxImage(page.image)}
                  className="group bg-white border border-gray-200 rounded-3xl overflow-hidden cursor-pointer hover:border-[#EA1E35] hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] w-full bg-gray-100">
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      className="object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 text-[#EA1E35] text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Tap to Zoom</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-lg font-black text-[#252960] uppercase group-hover:text-[#EA1E35] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {page.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white text-gray-800 shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative w-full max-w-6xl max-h-[90vh] h-[80vh] bg-white rounded-3xl p-2 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Full'r Burgers Digital Menu"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
