"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  Mic, 
  Tv, 
  Megaphone, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export const GuestSection: React.FC = () => {
  const { siteConfig, openInquiryModal } = useStore();

  const guestEmail = siteConfig.guestEmail || "editor@tkmartials.com";
  const advertiseEmail = siteConfig.advertiseEmail || "advertise@tkmartials.com";

  return (
    <section id="guest" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Mic className="w-4 h-4" />
              <span>Martials Business Forum</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Become a Guest With Martials & Share Industry Insights
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Seeking corporate leaders and specialists to appear on our short business talks and interview series, broadcasting insights to our extensive executive manager network.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Broadcasting across FMCG, Textile, Tech, Healthcare, and Finance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Non-promotional educational interviews telecast free</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href={`mailto:${guestEmail}?subject=Guest%20Interview%20Proposal%20-%20Martials%20Business%20Talks`}
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow transition-colors flex items-center justify-center gap-2"
              >
                <Mic className="w-4 h-4" />
                <span>Guest Proposal (Free)</span>
              </a>

              <a
                href={`mailto:${advertiseEmail}?subject=Advertising%20%26%20Sponsorship%20Inquiry`}
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Megaphone className="w-4 h-4 text-sky-400" />
                <span>Promote Products</span>
              </a>
            </div>
          </div>

          {/* Right Showcase Box */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-700 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">Editorial & Media Desk</h3>
                    <p className="text-xs text-slate-400">Direct guest submissions</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  Open
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/80 space-y-1.5">
                  <span className="text-sky-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                    Non-Promotional Talks
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Email talking points to: <a href={`mailto:${guestEmail}`} className="text-emerald-400 font-semibold hover:underline">{guestEmail}</a>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/80 space-y-1.5">
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                    Brand Visibility & Ads
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Sponsorship inquiries: <a href={`mailto:${advertiseEmail}`} className="text-sky-300 font-semibold hover:underline">{advertiseEmail}</a>
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => openInquiryModal({
                    title: 'Guest Interview & Media Feature',
                    category: 'Editorial Desk'
                  })}
                  className="text-xs sm:text-sm text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Media Coordination via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
