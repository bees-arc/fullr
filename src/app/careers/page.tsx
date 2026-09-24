"use client";

import React, { useState } from "react";
import { Briefcase, Send, CheckCircle2, Phone, MapPin } from "lucide-react";

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
    },
    {
      title: "Shift Supervisor & Floor Lead",
      type: "Full-Time",
      outlet: "Colombo 05 & Crescat",
      desc: "Lead front-of-house teams, ensure top-tier guest experience, and coordinate kitchen speed.",
    },
    {
      title: "Kitchen Trainee / Prep Team",
      type: "Full-Time / Part-Time",
      outlet: "Nawala, Mount Lavinia & Welisara",
      desc: "Learn from culinary experts, prep fresh ingredients daily, and assist burger assembly.",
    },
    {
      title: "Full'r Delivery Fleet Crew",
      type: "Full-Time / Flexible",
      outlet: "All Greater Colombo Outlets",
      desc: "Fast, friendly delivery riders equipped to bring sizzling hot burgers straight to hungry foodies.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#f8f9fa] min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from original site */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA1E35]/10 border border-[#EA1E35]/20 text-[#EA1E35] text-xs font-black uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join The Full&apos;r Crew</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#252960] uppercase tracking-tight">
            APPLY TODAY, <span className="text-[#EA1E35]">SHAPE TOMORROW!</span>
          </h1>

          <p className="font-script text-2xl sm:text-3xl text-[#FAAD1B] mt-1">
            If you&apos;re not making a mess, you&apos;re not doing it right
          </p>

          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Are you passionate about food, excitement, and working with Sri Lanka&apos;s fastest growing gourmet burger brand? Join our energetic team and grow with us!
          </p>
        </div>

        {/* Positions & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Positions List */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl font-black text-[#252960] uppercase mb-4">
              OPEN ROLES
            </h2>

            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-3xl p-6 hover:border-[#EA1E35] transition-all shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-black text-[#252960] uppercase">
                    {pos.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#EA1E35] text-white text-[11px] font-black uppercase shadow-sm">
                    {pos.type}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#8A321C] font-semibold mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#EA1E35]" />
                  <span>{pos.outlet}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {pos.desc}
                </p>

                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, position: pos.title }));
                    const el = document.getElementById("apply-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-black uppercase tracking-wider text-[#EA1E35] hover:underline"
                >
                  Apply For This Role →
                </button>
              </div>
            ))}
          </div>

          {/* Right: Application Form (Crisp White Card, NO black) */}
          <div className="lg:col-span-5" id="apply-form">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl sticky top-28">
              <h2 className="font-display text-2xl font-black text-[#252960] uppercase mb-2">
                APPLICATION FORM
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                Fill in your details below and our talent team will reach out within 48 hours.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-gray-900">
                    APPLICATION RECEIVED!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Thank you for applying to Full&apos;r Burgers! We are reviewing your details and our recruitment team will call you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#EA1E35] text-white font-black text-xs uppercase shadow-md"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kasun Fernando"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="kasun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Role of Interest
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35]"
                    >
                      {positions.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Preferred Outlet Location
                    </label>
                    <select
                      value={formData.outlet}
                      onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35]"
                    >
                      <option value="Pita Kotte">Pita Kotte</option>
                      <option value="Crescat Boulevard">Crescat Boulevard (Colombo 03)</option>
                      <option value="Colombo 05">Colombo 05 (D.S. Fonseka)</option>
                      <option value="Nawala">Nawala</option>
                      <option value="Mount Lavinia">Mount Lavinia</option>
                      <option value="Welisara">Welisara</option>
                      <option value="Maharagama">Maharagama / Boralesgamuwa</option>
                      <option value="Thalawathugoda">Thalawathugoda</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Brief Experience or Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a little bit about yourself..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#EA1E35]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-[#EA1E35]/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT APPLICATION</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
