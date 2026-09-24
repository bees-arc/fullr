import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* ─────────────────────────────────────────────
          1. HERO POSTER — Purple block, text over image
      ───────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#3C2760]">
        <Image
          src="/assets/Dragon-Bait-banner.jpg"
          alt="Full'r Burgers"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C2760] via-[#3C2760]/60 to-transparent" />
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 pb-16 pt-40">
          <p className="font-script text-[#FAAD1B] text-2xl sm:text-3xl mb-2 drop-shadow">
            The Full&apos;r Burgers Story
          </p>
          <h1 className="font-display text-6xl sm:text-8xl lg:text-[10rem] font-black text-white uppercase leading-none tracking-tighter drop-shadow-2xl">
            ABOUT<br />
            <span className="text-[#EA1E35]">FULL&apos;R</span>
          </h1>
          <p className="text-white/60 text-base sm:text-xl mt-4 max-w-lg font-light italic">
            &ldquo;If you&apos;re not making a mess, you&apos;re not doing it right!&rdquo;
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2. RED BAND — Origin tagline
      ───────────────────────────────────────────── */}
      <section className="bg-[#EA1E35] py-10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Colombo Born &amp; Bred
          </p>
          <div className="w-full sm:w-px h-px sm:h-12 bg-white/30" />
          <p className="font-display text-3xl sm:text-5xl font-black text-[#FAAD1B] uppercase tracking-tight text-right">
            Own Your Mess Since Day One
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          3. STORY — Split: image left, green text right
      ───────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="relative min-h-[420px] lg:min-h-auto overflow-hidden">
          <Image
            src="/assets/Dragon-Bait-banner.jpg"
            alt="Full'r Dragon Bait Burger"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#008A6B] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#008A6B]/80 to-transparent lg:hidden" />
        </div>
        <div className="bg-[#008A6B] p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
          <span className="text-white/50 text-xs font-black uppercase tracking-widest mb-3">
            More Than Just A Burger
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
            IT&apos;S AN<br />
            <span className="text-[#FAAD1B]">EXPERIENCE</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
            Full&apos;r Burgers originates from the notion of better, tastier and juicier burgers that keep your hands and tummy full—filling you with happiness. You can&apos;t be fully into burgers without trying Full&apos;r Burgers.
          </p>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
            The brand crafts flavourful burgers, conceptualized from scratch by our in-house team of culinary experts. Striving forward with innovation and excitement at the forefront, Full&apos;r remains true to its core values, using 100% locally sourced ingredients, as well as fresh &amp; high quality produce that is unmatched in the marketplace.
          </p>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
            All these wonderful things ensure that every bite leads to a delicious mess, and this makes these burgers so irresistible and satisfying.
          </p>
          <Link
            href="/menu"
            className="self-start inline-flex items-center gap-3 px-8 py-4 bg-white text-[#008A6B] hover:bg-[#FAAD1B] hover:text-[#3C2760] font-black text-sm uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            EXPLORE OUR FOOD →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          4. PILLARS — 4 full-color blocks poster style
      ───────────────────────────────────────────── */}
      <section>
        <div className="bg-[#3C2760] py-12 px-6 text-center">
          <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">What Sets Us Apart</p>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase">
            WHAT SETS US <span className="text-[#FAAD1B]">APART</span>
          </h2>
          <p className="text-white/50 text-sm mt-2">
            The uncompromising quality principles behind every Full&apos;r meal
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Red */}
          <div className="relative bg-[#EA1E35] p-10 sm:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden group">
            <Image src="/assets/Mighty-Marmite.jpg" alt="" fill className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="font-display text-8xl font-black text-white/20 leading-none select-none">01</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-3">
                100% Locally<br />Sourced
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We empower Sri Lankan farmers and poultry producers, sourcing fresh farm produce and dairy daily.
              </p>
            </div>
          </div>

          {/* Yellow */}
          <div className="relative bg-[#FAAD1B] p-10 sm:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden group">
            <Image src="/assets/Gojira.jpg" alt="" fill className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="font-display text-8xl font-black text-[#8A321C]/20 leading-none select-none">02</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#3C2760] uppercase leading-tight mb-3">
                Crafted From<br />Scratch
              </h3>
              <p className="text-[#3C2760]/70 text-sm leading-relaxed">
                Every patty, glaze, slaw, and secret sauce is conceptualized and prepared in-house by our culinary artists.
              </p>
            </div>
          </div>

          {/* Green */}
          <div className="relative bg-[#008A6B] p-10 sm:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden group">
            <Image src="/assets/Kong.jpg" alt="" fill className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="font-display text-8xl font-black text-white/20 leading-none select-none">03</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-3">
                Unmatched<br />Juiciness
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Our smash technique and slow-cooking methods lock in natural juices for that signature messy bite.
              </p>
            </div>
          </div>

          {/* Purple */}
          <div className="relative bg-[#6851A1] p-10 sm:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden group">
            <Image src="/assets/Mr-Hyde.jpg" alt="" fill className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative z-10">
              <span className="font-display text-8xl font-black text-white/20 leading-none select-none">04</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase leading-tight mb-3">
                Fearless<br />Innovation
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                From the viral Marmite range to the towering Gojira burger, we constantly redefine the burger frontier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          5. CTA — Yellow banner, giant ghost text
      ───────────────────────────────────────────── */}
      <section className="relative bg-[#FAAD1B] py-20 px-6 text-center overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[15vw] font-black text-[#8A321C]/10 uppercase leading-none select-none pointer-events-none whitespace-nowrap">
          OWN YOUR MESS
        </p>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-5xl sm:text-7xl font-black text-[#8A321C] uppercase leading-tight mb-4">
            READY TO OWN<br />YOUR MESS?
          </h2>
          <p className="text-[#8A321C]/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Things are about to get messy.... Visit your nearest Full&apos;r Burgers outlet, now at eight locations, with three fully open for dine-in, and more on the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/locate"
              className="w-full sm:w-auto px-10 py-4 bg-[#8A321C] hover:bg-[#6e2614] text-white font-black text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Locate Outlets
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-gray-100 text-[#8A321C] font-black text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
