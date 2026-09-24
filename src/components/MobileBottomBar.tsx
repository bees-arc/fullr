"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Utensils, MapPin, Phone, Sparkles } from "lucide-react";

export default function MobileBottomBar() {
  const pathname = usePathname();

  const items = [
    { label: "Menu", href: "/menu", icon: Utensils },
    { label: "Innovations", href: "/innovations", icon: Sparkles },
    { label: "Locate Us", href: "/locate", icon: MapPin },
    { label: "Call Us", href: "tel:+94112116909", icon: Phone, isExternal: true },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200 px-2 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-gray-700 active:text-[#EA1E35] transition-all text-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#EA1E35] flex items-center justify-center text-white mb-1 shadow-md shadow-[#EA1E35]/30">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-gray-800">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all text-center ${
                isActive
                  ? "text-[#EA1E35] font-black"
                  : "text-gray-600 hover:text-[#EA1E35]"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors ${
                  isActive
                    ? "bg-[#EA1E35] text-white shadow-md shadow-[#EA1E35]/30"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-semibold leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
