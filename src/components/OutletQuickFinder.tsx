"use client";

import React, { useState } from "react";
import { OUTLETS, Outlet } from "@/data/outlets";
import { MapPin, Phone, Navigation, Clock, CheckCircle2, ExternalLink } from "lucide-react";

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Earth radius in km
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

export default function OutletQuickFinder() {
  const [filterDineIn, setFilterDineIn] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(OUTLETS[0]);

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
          lng: pos.coords.longitude
        });
        setLocating(false);
      },
      () => {
        setLocating(false);
        alert("Could not access your location. Please select an outlet from the list.");
      }
    );
  };

  const displayedOutlets = [...OUTLETS]
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
    <section className="py-20 lg:py-28 bg-[#0c0e18] relative overflow-hidden" id="outlets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner from original site */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EA1E35]/15 border border-[#EA1E35]/30 text-[#EA1E35] text-xs font-black uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>8 Outlets & Growing</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            READY TO <span className="text-[#FFCA05]">OWN YOUR MESS?</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
            Things are about to get messy.... Visit your nearest Full&apos;r Burgers outlet, now at eight locations across Colombo and suburbs, with three fully open for dine-in, and more on the way. Experience burger options like nowhere else!
          </p>

          {/* Quick Filter & GPS Locate button */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={handleGetLocation}
              disabled={locating}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFCA05] text-[#0c0e18] font-bold text-xs uppercase tracking-wide shadow-md hover:bg-[#FAAD1B] active:scale-95 transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{locating ? "Detecting GPS..." : "Find Closest Outlet"}</span>
            </button>

            <button
              onClick={() => setFilterDineIn(!filterDineIn)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border transition-all ${
                filterDineIn
                  ? "bg-[#EA1E35] text-white border-[#EA1E35]"
                  : "bg-white/5 text-gray-300 border-white/10 hover:text-white"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dine-In Available Only</span>
            </button>
          </div>
        </div>

        {/* Responsive Grid of Outlets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedOutlets.map((outlet) => {
            const isSelected = selectedOutlet?.id === outlet.id;
            return (
              <div
                key={outlet.id}
                onClick={() => setSelectedOutlet(outlet)}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#1c2035] border-[#FFCA05] shadow-xl shadow-[#FFCA05]/10 scale-[1.02]"
                    : "bg-[#141726] border-white/10 hover:border-white/20 hover:bg-[#181c30]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-black text-white uppercase">
                      {outlet.name}
                    </h3>
                    {outlet.distanceKm !== null && (
                      <span className="px-2 py-0.5 rounded-full bg-[#FFCA05]/20 text-[#FFCA05] text-[10px] font-mono font-bold">
                        {outlet.distanceKm.toFixed(1)} km
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                    {outlet.address}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {outlet.dineIn ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                        Dine-In & Takeaway
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[10px] font-bold">
                        Takeaway & Delivery
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-gray-300 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#FFCA05]" />
                    <span>{outlet.hours}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-2">
                  <a
                    href={`tel:${outlet.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFCA05]" />
                    <span>Call</span>
                  </a>

                  <a
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#FFCA05] hover:bg-[#FAAD1B] text-[#0c0e18] text-xs font-bold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Visit Map</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
