import React from "react";
import { Flame } from "lucide-react";

export default function MarqueeTicker() {
  const phrases = [
    "OWN YOUR MESS",
    "100% LOCALLY SOURCED",
    "JUICIEST BURGERS IN TOWN",
    "HANDCRAFTED FLAVOURS",
    "NO COMPROMISE ON CRUNCH",
    "BRACE YOURSELF FOR IMPACT",
    "MOLTEN CHEESE EXPLOSION"
  ];

  return (
    <div className="relative overflow-hidden bg-[#FFCA05] py-2.5 sm:py-3.5 border-y-2 border-black rotate-[-0.8deg] scale-[1.02] shadow-xl z-20">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-black font-black uppercase text-xs sm:text-sm tracking-wider">
        {[...phrases, ...phrases, ...phrases].map((phrase, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span>{phrase}</span>
            <Flame className="w-4 h-4 text-[#EA1E35] fill-[#EA1E35]" />
          </div>
        ))}
      </div>
    </div>
  );
}
