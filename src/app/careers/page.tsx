"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, MapPin } from "lucide-react";

const ROLE_COLORS = [
  { bg: "#EA1E35", light: "#fde8eb" },
  { bg: "#008A6B", light: "#e0f5f0" },
  { bg: "#6851A1", light: "#ede8f7" },
  { bg: "#FAAD1B", light: "#fff8e1" },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "Burger Grill Master / Line Cook",
    outlet: "Pita Kotte",
    message: "",
  });

  const positions = [
    {
      title: "Burger Grill Master / Line Cook",
      type: "Full-Time",
      outlet: "All Outlets",
      desc: "Prepare gourmet patties, manage smash-grill stations, and ensure supreme flavour standards.",
      image: "/assets/Dragon-Bait-banner.jpg",
    },
    {
      title: "Shift Supervisor & Floor Lead",
      type: "Full-Time",
      outlet: "Colombo 05 & Crescat",
      desc: "Lead front-of-house teams, ensure top-tier guest experience, and coordinate kitchen speed.",
      image: "/assets/Gojira.jpg",
    },
    {
      title: "Kitchen Trainee / Prep Team",
      type: "Full-Time / Part-Time",
      outlet: "Nawala, Mount Lavinia & Welisara",
      desc: "Learn from culinary experts, prep fresh ingredients daily, and assist burger assembly.",
      image: "/assets/Kong.jpg",
    },
    {
      title: "Full'r Delivery Fleet Crew",
      type: "Full-Time / Flexible",
      outlet: "All Greater Colombo Outlets",
      desc: "Fast, friendly delivery riders equipped to bring sizzling hot burgers straight to hungry foodies.",
      image: "/assets/Loaded-Fries.jpg",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* ── Hero Banner ───────────────────────────── */}
      <section className="relative bg-[#6851A1] pt-28 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-script text-3xl sm:text-4xl text-[#FAAD1B] mb-2 drop-shadow">
            Join The Full&apos;r Crew
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-lg">
            APPLY TODAY,<br />
            <span className="text-[#FAAD1B]">SHAPE TOMORROW!</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Are you passionate about food, excitement, and working with Sri Lanka&apos;s fastest growing gourmet burger brand? Join our energetic team and grow with us!
          </p>
        </div>
      </section>

      {/* ── Yellow divider band ──────────────────── */}
      <div className="bg-[#FAAD1B] py-5 px-6 text-center">
        <p className="font-display text-2xl sm:text-3xl font-black text-[#8A321C] uppercase tracking-tight">
          If you&apos;re not making a mess, you&apos;re not doing it right!
        </p>
      </div>

      {/* ── Content Grid ─────────────────────────── */}
      <div className="bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Open Roles ───────────────── */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-10 rounded-full bg-[#EA1E35]" />
              <h2 className="font-display text-3xl font-black text-[#3C2760] uppercase">
                Open Roles
              </h2>
            </div>

            {positions.map((pos, idx) => {
              const color = ROLE_COLORS[idx % ROLE_COLORS.length];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5 flex"
                  style={{ borderLeft: `5px solid ${color.bg}` }}
                >
                  {/* Side food image */}
                  <div className="relative w-28 sm:w-36 flex-shrink-0 hidden sm:block">
                    <Image
                      src={pos.image}
                      alt={pos.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{ backgroundColor: color.bg }}
                    />
                  </div>

                  {/* Card content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3
                        className="font-display text-xl font-black uppercase leading-tight"
                        style={{ color: "#3C2760" }}
                      >
                        {pos.title}
                      </h3>
                      <span
                        className="px-3 py-1 rounded-full text-white text-[11px] font-black uppercase shadow-sm flex-shrink-0"
                        style={{ backgroundColor: color.bg }}
                      >
                        {pos.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold mb-3" style={{ color: color.bg }}>
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{pos.outlet}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                      {pos.desc}
                    </p>

                    <button
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, position: pos.title }));
                        document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="self-start text-xs font-black uppercase tracking-wider transition-all hover:opacity-80"
                      style={{ color: color.bg }}
                    >
                      Apply For This Role →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Application Form ─────────── */}
          <div className="lg:col-span-5" id="apply-form">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl sticky top-24"
            >
              {/* Form header */}
              <div className="bg-[#EA1E35] px-6 py-6">
                <h2 className="font-display text-2xl font-black text-white uppercase">
                  Application Form
                </h2>
                <p className="text-white/70 text-xs mt-1">
                  Fill in your details — our talent team will reach out within 48 hours.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                      style={{ backgroundColor: "#008A6B" }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#3C2760]">
                      APPLICATION RECEIVED!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Thank you for applying to Full&apos;r Burgers! Our recruitment team will call you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#EA1E35] text-white font-black text-xs uppercase shadow-md hover:bg-[#c91328] transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: "Your Full Name *", key: "name", type: "text", placeholder: "e.g. Kasun Fernando", required: true },
                      { label: "Contact Number *", key: "phone", type: "tel", placeholder: "e.g. 077 123 4567", required: true },
                      { label: "Email Address", key: "email", type: "email", placeholder: "kasun@example.com", required: false },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required={f.required}
                          placeholder={f.placeholder}
                          value={formData[f.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35] transition-colors"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                        Role of Interest
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35] transition-colors"
                      >
                        {positions.map((p) => (
                          <option key={p.title} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                        Preferred Outlet
                      </label>
                      <select
                        value={formData.outlet}
                        onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35] transition-colors"
                      >
                        {["Pita Kotte","Crescat Boulevard","Colombo 05","Nawala","Mount Lavinia","Welisara","Maharagama","Thalawathugoda"].map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-1.5">
                        Brief Experience or Note
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us a little bit about yourself..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#EA1E35] hover:bg-[#c91328] text-white font-black text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────── */}
      <section className="bg-[#008A6B] py-12 px-4 text-center">
        <p className="font-script text-3xl text-[#FAAD1B] mb-1">Ready to own your mess?</p>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase">
          Come Be Part of The Full&apos;r Family
        </h2>
        <p className="text-white/60 text-sm mt-3 max-w-md mx-auto">
          8 outlets and counting — there&apos;s a role for every kind of food lover.
        </p>
      </section>

    </div>
  );
}
