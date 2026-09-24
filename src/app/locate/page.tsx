"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OUTLETS, Outlet } from "@/data/outlets";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Star } from "lucide-react";

const BRAND_COLORS = [
  { bg: "#EA1E35", light: "#fde8eb", text: "#EA1E35" },  // Red
  { bg: "#008A6B", light: "#e0f5f0", text: "#008A6B" },  // Green
  { bg: "#6851A1", light: "#ede8f7", text: "#6851A1" },  // Purple
  { bg: "#FAAD1B", light: "#fff8e1", text: "#8A321C" },  // Yellow (maroon text)
  { bg: "#8A321C", light: "#f7ece8", text: "#8A321C" },  // Maroon
  { bg: "#EA1E35", light: "#fde8eb", text: "#EA1E35" },
  { bg: "#008A6B", light: "#e0f5f0", text: "#008A6B" },
  { bg: "#6851A1", light: "#ede8f7", text: "#6851A1" },
];

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function StarRating({ rating = 4.5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i === Math.ceil(rating) && rating % 1 !== 0;
        return (
          <div key={i} className="relative w-4 h-4">
            {/* Empty star */}
            <Star className="w-4 h-4 text-gray-200 fill-gray-200 absolute inset-0" />
            {/* Filled or half star */}
            {(filled || half) && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: half ? "50%" : "100%" }}
              >
                <Star className="w-4 h-4 text-[#FAAD1B] fill-[#FAAD1B]" />
              </div>
            )}
          </div>
        );
      })}
      <span className="text-xs font-bold text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

export default function LocatePage() {
  const [filterDineIn, setFilterDineIn] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocating(false);
      },
      () => {
        setLocating(false);
        alert("Could not access your location. Please browse the outlets below.");
      }
    );
  };

  const outletsWithDistance = [...OUTLETS]
    .filter((o) => (filterDineIn ? o.dineIn : true))
    .map((o, idx) => {
      let distanceKm: number | null = null;
      if (userLocation) {
        distanceKm = calculateDistance(userLocation.lat, userLocation.lng, o.lat, o.lng);
      }
      return { ...o, distanceKm, colorIdx: idx };
    })
    .sort((a, b) => {
      if (a.distanceKm !== null && b.distanceKm !== null) return a.distanceKm - b.distanceKm;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#f7f7f7]">

      {/* ── Banner ─────────────────────────────────── */}
      <div className="bg-[#6851A1] pt-28 pb-14 px-4 text-center relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        <p className="font-script text-3xl sm:text-4xl text-[#FAAD1B] mb-1 drop-shadow">
          Find your nearest
        </p>
        <h1 className="font-display text-5xl sm:text-7xl font-black text-white uppercase tracking-tight drop-shadow-lg">
          Full&apos;r Burgers
        </h1>
        <p className="text-white/70 text-sm mt-3 max-w-xl mx-auto">
          Now across <strong className="text-white">8 locations</strong> in Colombo &amp; Suburbs — dine-in, takeaway &amp; delivery.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            onClick={handleGetLocation}
            disabled={locating}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAAD1B] text-[#3C2760] font-black text-xs uppercase tracking-wider shadow-lg hover:bg-yellow-400 active:scale-95 transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>{locating ? "Locating…" : "Auto-Sort By Nearest"}</span>
          </button>

          <button
            onClick={() => setFilterDineIn(!filterDineIn)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border-2 transition-all ${
              filterDineIn
                ? "bg-white text-[#6851A1] border-white shadow-md"
                : "bg-transparent text-white border-white/50 hover:border-white"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Show Dine-in Only</span>
          </button>
        </div>
      </div>

      {/* ── Cards Grid ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outletsWithDistance.map((outlet, i) => {
            const color = BRAND_COLORS[outlet.colorIdx % BRAND_COLORS.length];
            return (
              <div
                key={outlet.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover"
                  />
                  {/* Colored top stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: color.bg }}
                  />
                  {/* Distance badge */}
                  {outlet.distanceKm !== null && (
                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-xs font-black shadow-lg"
                      style={{ backgroundColor: color.bg }}
                    >
                      {outlet.distanceKm.toFixed(1)} km
                    </div>
                  )}
                  {/* Dine-in badge */}
                  <div
                    className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow"
                    style={{ backgroundColor: color.bg }}
                  >
                    {outlet.dineIn ? "Dine-In & Takeaway" : "Takeaway & Delivery"}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Star Rating */}
                  <StarRating rating={4.5} />

                  {/* Name */}
                  <h2
                    className="font-display text-xl font-black uppercase mt-2 mb-1"
                    style={{ color: "#3C2760" }}
                  >
                    {outlet.name}
                  </h2>

                  {/* Address */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {outlet.address}
                  </p>

                  {/* Hours */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: color.bg }} />
                    <span>{outlet.hours}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    {/* Phone — colored circle */}
                    <a
                      href={`tel:${outlet.phone}`}
                      title={`Call ${outlet.phoneDisplay}`}
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 active:scale-95 transition-all"
                      style={{ backgroundColor: "#EA1E35" }}
                    >
                      <Phone className="w-4 h-4" />
                    </a>

                    {/* Visit — colored pill */}
                    <a
                      href={outlet.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
                      style={{ backgroundColor: color.bg }}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Hotline Banner ─────────────────────────── */}
      <div className="bg-[#EA1E35] text-white py-12 px-4 text-center">
        <h3 className="font-display text-2xl sm:text-4xl font-black uppercase mb-2">
          Can&apos;t Make It In Person?
        </h3>
        <p className="text-white/80 text-sm max-w-md mx-auto mb-6">
          Call our hotline to order pickup or delivery straight to your doorstep!
        </p>
        <a
          href="tel:+94112116909"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FAAD1B] hover:bg-yellow-400 text-[#3C2760] font-black text-base uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5" />
          Order Hotline: 011 211 6909
        </a>
      </div>
    </div>
  );
}
