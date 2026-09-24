"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Utensils, MapPin, Volume2, VolumeX, Play, Pause, Flame, Sparkles } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may need user gesture in strict browsers
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 lg:pt-0">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 pointer-events-none"
      >
        <source src="/assets/fullr-hero.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e18] via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA1E35]/90 border border-[#FFCA05]/40 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-[#EA1E35]/40 mb-6 animate-pulse">
          <Flame className="w-4 h-4 text-[#FFCA05] fill-[#FFCA05]" />
          <span>COLOMBO&apos;S JUICIEST BURGERS</span>
          <Sparkles className="w-4 h-4 text-[#FFCA05]" />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] drop-shadow-2xl">
          OWN YOUR <span className="text-[#FFCA05] drop-shadow-[0_0_35px_rgba(255,202,5,0.6)]">MESS</span>
        </h1>

        {/* Script Accent Subhead */}
        <p className="font-script text-2xl sm:text-4xl text-[#FFCA05] mt-2 -rotate-1 drop-shadow-md">
          If you&apos;re not making a mess, you&apos;re not doing it right!
        </p>

        {/* Description from original site */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mt-5 mb-8 leading-relaxed font-medium drop-shadow">
          You&apos;re entering our burgerverse. Brace yourself for bold flavours, juicy patties, and mouthwatering toppings in every irresistibly satisfying bite!
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/menu"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFCA05] hover:bg-[#FAAD1B] text-[#0c0e18] font-black text-base sm:text-lg tracking-wider uppercase shadow-xl shadow-[#FFCA05]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <Utensils className="w-5 h-5 text-[#0c0e18]" />
            <span>EXPLORE OUR MENU</span>
          </Link>

          <Link
            href="/locate"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base sm:text-lg tracking-wider uppercase border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
          >
            <MapPin className="w-5 h-5 text-[#EA1E35]" />
            <span>FIND NEAREST OUTLET</span>
          </Link>
        </div>

        {/* Quick Highlights Pills */}
        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-6 text-center text-xs sm:text-sm font-semibold text-white/90">
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm">
            <span className="text-[#FFCA05] font-bold block text-sm sm:text-base">8 Outlets</span>
            <span className="text-gray-400 text-[11px] sm:text-xs">Across Greater Colombo</span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm">
            <span className="text-[#FFCA05] font-bold block text-sm sm:text-base">100% Local</span>
            <span className="text-gray-400 text-[11px] sm:text-xs">Fresh Premium Produce</span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-sm">
            <span className="text-[#FFCA05] font-bold block text-sm sm:text-base">4.5 ★ Rating</span>
            <span className="text-gray-400 text-[11px] sm:text-xs">Google Verified</span>
          </div>
        </div>
      </div>

      {/* Floating Video Controls in Bottom Right */}
      <div className="hidden sm:flex absolute bottom-6 right-6 z-30 items-center gap-2">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          title={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          title={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FFCA05]" />}
        </button>
      </div>
    </section>
  );
}
