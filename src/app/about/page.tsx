import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, HeartHandshake, Award, Flame, Utensils, MapPin } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "100% Locally Sourced",
      desc: "We empower Sri Lankan farmers and poultry producers, sourcing fresh farm produce and dairy daily.",
      icon: HeartHandshake,
      color: "text-[#EA1E35]",
    },
    {
      title: "Crafted From Scratch",
      desc: "Every patty, glaze, slaw, and secret sauce is conceptualized and prepared in-house by our culinary artists.",
      icon: Sparkles,
      color: "text-[#FAAD1B]",
    },
    {
      title: "Unmatched Juiciness",
      desc: "Our smash technique and slow-cooking methods lock in natural juices for that signature messy bite.",
      icon: Flame,
      color: "text-[#EA1E35]",
    },
    {
      title: "Fearless Innovation",
      desc: "From the viral Marmite range to the towering Gojira burger, we constantly redefine the burger frontier.",
      icon: Award,
      color: "text-[#6851A1]",
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EA1E35]/10 border border-[#EA1E35]/20 text-[#EA1E35] text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Full&apos;r Burgers Story</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#252960] uppercase tracking-tight">
            ABOUT <span className="text-[#EA1E35]">FULL&apos;R</span>
          </h1>

          <p className="font-script text-2xl sm:text-3xl text-[#FAAD1B] mt-1">
            If you&apos;re not making a mess, you&apos;re not doing it right!
          </p>
        </div>

        {/* Story Section with Hero Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 group">
              <Image
                src="/assets/Dragon-Bait-banner.jpg"
                alt="Full'r Burgers Kitchen"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3.5 py-1 rounded-full bg-[#EA1E35] text-white text-xs font-black uppercase tracking-wider shadow">
                  Colombo Born &amp; Bred
                </span>
                <h3 className="font-display text-2xl font-black text-white uppercase mt-2 drop-shadow">
                  Own Your Mess Since Day One
                </h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#252960] uppercase leading-tight">
              MORE THAN JUST A BURGER, <br />
              <span className="text-[#EA1E35]">IT&apos;S AN EXPERIENCE</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Full&apos;r Burgers originates from the notion of better, tastier and juicier burgers that keep your hands and tummy full—filling you with happiness. You can&apos;t be fully into burgers without trying Full&apos;r Burgers.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The brand crafts flavourful burgers, conceptualized from scratch by our in-house team of culinary experts. Striving forward with innovation and excitement at the forefront, Full&apos;r remains true to its core values, using 100% locally sourced ingredients, as well as fresh &amp; high quality produce that is unmatched in the marketplace, giving our customers the juiciest burgers in town.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              All these wonderful things ensure that every bite leads to a delicious mess, and this makes these burgers so irresistible and satisfying.
            </p>

            <div className="pt-2">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EA1E35] hover:bg-[#c91328] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-[#EA1E35]/30 transition-all hover:scale-105"
              >
                <Utensils className="w-4 h-4" />
                <span>EXPLORE OUR FOOD</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-black text-[#252960] uppercase">
              WHAT SETS US <span className="text-[#EA1E35]">APART</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              The uncompromising quality principles behind every Full&apos;r meal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8f9fa] border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-black text-[#252960] uppercase mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ready to Own Your Mess CTA (Bright Yellow, NO black) */}
        <div className="bg-[#FAAD1B] text-[#8A321C] rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <h3 className="font-display text-3xl sm:text-5xl font-black uppercase mb-3 leading-tight">
            READY TO OWN YOUR MESS?
          </h3>
          <p className="text-base sm:text-lg max-w-xl mx-auto mb-8 font-semibold leading-relaxed">
            Things are about to get messy.... Visit your nearest Full&apos;r Burgers outlet, now at eight locations, with three fully open for dine-in, and more on the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/locate"
              className="w-full sm:w-auto px-8 py-4 rounded-none bg-[#8A321C] hover:bg-[#6e2614] text-white font-black text-sm uppercase tracking-wider shadow-lg transition-transform active:scale-95"
            >
              Locate Outlets
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-none bg-white hover:bg-gray-100 text-[#8A321C] font-black text-sm uppercase tracking-wider transition-colors shadow"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
