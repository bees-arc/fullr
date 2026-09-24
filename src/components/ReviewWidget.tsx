import React from "react";
import { TESTIMONIALS, TRUSTINDEX_INFO } from "@/data/testimonials";
import { Star, ShieldCheck, Quote, ExternalLink } from "lucide-react";

export default function ReviewWidget() {
  return (
    <section className="py-16 sm:py-24 bg-[#090a12] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Hero Card */}
        <div className="bg-[#141726] border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#EA1E35] to-[#FFCA05] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-lg">
              {TRUSTINDEX_INFO.score}
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFCA05] text-[#FFCA05]" />
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {TRUSTINDEX_INFO.status}
              </h3>
              <p className="text-xs text-gray-400">
                Based on {TRUSTINDEX_INFO.totalReviews} verified Google reviews over 12 months
              </p>
            </div>
          </div>

          <a
            href={TRUSTINDEX_INFO.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15"
          >
            <ShieldCheck className="w-4 h-4 text-[#00d084]" />
            <span>View Verified Certificate</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reviews Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#141726]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FFCA05]/30 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#FFCA05]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFCA05]" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-white/20" />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#EA1E35] flex items-center justify-center font-bold text-xs text-white">
                  {review.avatarText}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{review.name}</h4>
                  <span className="text-[10px] text-gray-400">{review.date} • Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
