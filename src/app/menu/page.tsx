"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DIGITAL_MENU_PAGES, MENU_ITEMS } from "@/data/menu";
import { Search, Flame, ZoomIn, X, Phone } from "lucide-react";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; pill: string; pillText: string }> = {
  "All":              { bg: "#EA1E35", text: "white",    pill: "#EA1E35", pillText: "white" },
  "Burgers":          { bg: "#EA1E35", text: "white",    pill: "#EA1E35", pillText: "white" },
  "Sliders":          { bg: "#008A6B", text: "white",    pill: "#008A6B", pillText: "white" },
  "Sides & Drumlets": { bg: "#6851A1", text: "white",    pill: "#6851A1", pillText: "white" },
  "Beverages":        { bg: "#FAAD1B", text: "#3C2760",  pill: "#FAAD1B", pillText: "#3C2760" },
};

const CARD_ACCENT = ["#EA1E35", "#008A6B", "#6851A1", "#FAAD1B", "#8A321C"];

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

  const activeCat = CATEGORY_COLORS[selectedCategory] ?? CATEGORY_COLORS["All"];

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      {/* ── Hero banner ───────────────────────────── */}
      <div
        className="pt-28 pb-14 px-4 text-center relative overflow-hidden"
        style={{ backgroundColor: "#EA1E35" }}
      >
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

        <p className="font-script text-3xl sm:text-4xl text-[#FAAD1B] mb-2 drop-shadow">
          Handcrafted In Colombo
        </p>
        <h1 className="font-display text-5xl sm:text-7xl font-black text-white uppercase tracking-tight drop-shadow-lg leading-tight">
          OUR CRAVE-<br className="sm:hidden" />WORTHY MENU
        </h1>
        <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">
          Messy burgers, colossal stacks &amp; unmatched flavours — freshly prepared to order.
        </p>

        {/* Tab Toggle */}
        <div className="inline-flex p-1.5 rounded-full bg-white/20 mt-8 gap-1">
          {(["interactive", "digital"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all ${
                activeTab === tab
                  ? "bg-white text-[#EA1E35] shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {tab === "interactive" ? "Interactive Menu" : "Digital Boards"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main content ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ─ INTERACTIVE VIEW ─ */}
        {activeTab === "interactive" && (
          <div>
            {/* Filter bar */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              {/* Category pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar flex-wrap">
                {categories.map((cat) => {
                  const c = CATEGORY_COLORS[cat] ?? CATEGORY_COLORS["All"];
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all border-2"
                      style={
                        isActive
                          ? { backgroundColor: c.pill, color: c.pillText, borderColor: c.pill }
                          : { backgroundColor: "transparent", color: "#6b7280", borderColor: "#e5e7eb" }
                      }
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72 flex-shrink-0">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search burgers, sides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#EA1E35] transition-colors"
                />
              </div>
            </div>

            {/* Section label */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6 shadow"
              style={{ backgroundColor: activeCat.bg }}
            >
              <span>{selectedCategory === "All" ? "All Items" : selectedCategory}</span>
              <span className="bg-white/20 rounded-full px-2 py-0.5">{filteredItems.length}</span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, i) => {
                const accent = CARD_ACCENT[i % CARD_ACCENT.length];
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col group"
                    style={{ borderTop: `4px solid ${accent}` }}
                  >
                    {/* Image area */}
                    {item.image && (
                      <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center p-2"
                        style={{ backgroundColor: accent + "12" }}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.isPopular && (
                          <div
                            className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-white text-[10px] font-black uppercase tracking-wider shadow"
                            style={{ backgroundColor: accent }}
                          >
                            Top Seller
                          </div>
                        )}
                        {item.isSpicy && (
                          <div className="absolute top-2 right-2 p-1.5 rounded-full bg-red-50">
                            <Flame className="w-4 h-4 fill-[#EA1E35] text-[#EA1E35]" />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3
                          className="font-display text-xl font-black uppercase leading-tight"
                          style={{ color: "#3C2760" }}
                        >
                          {item.name}
                        </h3>
                        <span
                          className="text-base font-black font-mono whitespace-nowrap mt-0.5"
                          style={{ color: accent }}
                        >
                          රු {item.price}
                        </span>
                      </div>

                      <span
                        className="text-[10px] font-black uppercase tracking-widest mb-2"
                        style={{ color: accent }}
                      >
                        {item.category}
                      </span>

                      <p className="text-xs text-gray-500 leading-relaxed flex-1">
                        {item.description}
                      </p>

                      <div className="pt-4 mt-4 border-t border-gray-100">
                        <a
                          href="tel:+94112116909"
                          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white text-xs font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md"
                          style={{ backgroundColor: accent }}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-sm">No items found — try another search!</p>
              </div>
            )}
          </div>
        )}

        {/* ─ DIGITAL BOARDS VIEW ─ */}
        {activeTab === "digital" && (
          <div className="space-y-8">
            <div className="bg-[#FAAD1B]/20 border border-[#FAAD1B]/40 rounded-2xl p-4 text-center text-xs text-[#8A321C] font-bold">
              💡 Click any menu board to view in full-screen crystal-clear zoom!
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DIGITAL_MENU_PAGES.map((page, i) => {
                const accent = CARD_ACCENT[i % CARD_ACCENT.length];
                return (
                  <div
                    key={page.id}
                    onClick={() => setLightboxImage(page.image)}
                    className="group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
                    style={{ borderTop: `5px solid ${accent}` }}
                  >
                    <div className="relative aspect-video w-full bg-gray-50">
                      <Image
                        src={page.image}
                        alt={page.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                        style={{ backgroundColor: accent }}
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        Tap to Zoom
                      </div>
                    </div>
                    <div className="p-5">
                      <h3
                        className="font-display text-lg font-black uppercase"
                        style={{ color: "#3C2760" }}
                      >
                        {page.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{page.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white text-gray-800 shadow-xl hover:scale-110 transition-transform"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-6xl max-h-[90vh] h-[80vh] bg-white rounded-2xl p-2 shadow-2xl overflow-hidden"
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
  );
}
