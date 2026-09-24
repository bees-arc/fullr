"use client";

import React, { useState } from "react";
import { OUTLETS, Outlet } from "@/data/outlets";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ExternalLink } from "lucide-react";

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
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
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
    .map((o) => {
      let distanceKm: number | null = null;
      if (userLocation) {
        distanceKm = calculateDistance(userLocation.lat, userLocation.lng, o.lat, o.lng);
      }
      return { ...o, distanceKm };
    })
    .sort((a, b) => {
      if (a.distanceKm !== null && b.distanceKm !== null) {
        return a.distanceKm - b.distanceKm;
      }
      return 0;
    });

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#f8f9fa] min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA1E35]/10 border border-[#EA1E35]/20 text-[#EA1E35] text-xs font-black uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Your Nearest Outlet</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#252960] uppercase tracking-tight">
            LOCATE <span className="text-[#EA1E35]">FULL&apos;R BURGERS</span>
          </h1>

          <p className="font-script text-2xl text-[#FAAD1B] mt-1">
            Now across 8 strategic locations in Colombo &amp; Suburbs
          </p>

          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Things are about to get messy.... Visit your nearest Full&apos;r Burgers outlet, now at eight locations, with three fully open for dine-in, and more on the way. Experience burger options like nowhere else.
          </p>

          {/* Quick Action Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={handleGetLocation}
              disabled={locating}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFCA05] text-[#0c0e18] font-black text-xs uppercase tracking-wider shadow-md hover:bg-[#FAAD1B] active:scale-95 transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>{locating ? "Calculating Distance..." : "Auto-Sort By Nearest"}</span>
            </button>

            <button
              onClick={() => setFilterDineIn(!filterDineIn)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                filterDineIn
                  ? "bg-[#EA1E35] text-white border-[#EA1E35] shadow-md shadow-[#EA1E35]/20"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Show Dine-in Only</span>
            </button>
          </div>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outletsWithDistance.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:border-[#EA1E35] transition-all hover:-translate-y-1 shadow-md hover:shadow-2xl"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-2xl font-black text-[#252960] uppercase">
                    {outlet.name}
                  </h3>
                  {outlet.distanceKm !== null && (
                    <span className="px-2.5 py-1 rounded-full bg-[#FFCA05]/20 text-[#8A321C] text-xs font-mono font-bold">
                      {outlet.distanceKm.toFixed(1)} km
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {outlet.address}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {outlet.dineIn ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        ✓ Dine-In &amp; Takeaway
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 text-[11px] font-bold">
                        ✓ Takeaway &amp; Delivery
                      </span>
                    )}
                  </div>

                  {outlet.highlight && (
                    <p className="text-[11px] text-[#8A321C] font-semibold">
                      ⭐ {outlet.highlight}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-xs text-gray-600 pt-1">
                    <Clock className="w-3.5 h-3.5 text-[#EA1E35]" />
                    <span>{outlet.hours}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <a
                  href={`tel:${outlet.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA1E35]" />
                  <span>Call {outlet.phoneDisplay}</span>
                </a>

                <a
                  href={outlet.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Central Delivery & Hotline Info Banner (Bright Red, NO black) */}
        <div className="mt-16 bg-[#EA1E35] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="font-display text-2xl sm:text-4xl font-black uppercase mb-2">
            CAN&apos;T MAKE IT IN PERSON?
          </h3>
          <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Call our centralized hotline directly to order for pickup or speedy delivery straight to your doorstep across Colombo!
          </p>
          <a
            href="tel:+94112116909"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFCA05] hover:bg-[#FAAD1B] text-[#0c0e18] font-black text-base uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>ORDER HOTLINE: 011 211 6909</span>
          </a>
        </div>
      </div>
    </div>
  );
}
