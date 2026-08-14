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

  return (
    <section id="guest" className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-3 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Mic className="w-3 h-3" />
              <span>Martials Business Forum</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Become a Guest With Martials & Share Industry Insights
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Seeking corporate leaders and specialists to appear on our short business talks and interview series, broadcasting insights to our extensive executive manager network.
            </p>

            <div className="space-y-2 text-[11px] sm:text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Broadcasting across FMCG, Textile, Tech, Healthcare, and Finance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Non-promotional educational interviews telecast free</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
              <a
                href={`mailto:${siteConfig.guestEmail}?subject=Guest%20Interview%20Proposal%20-%20Martials%20Business%20Talks`}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <Mic className="w-3.5 h-3.5" />
                <span>Guest Proposal (Free)</span>
              </a>

              <a
                href={`mailto:${siteConfig.advertiseEmail}?subject=Advertising%20%26%20Sponsorship%20Inquiry`}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-colors flex items-center justify-center gap-1.5"
              >
                <Megaphone className="w-3.5 h-3.5 text-sky-400" />
                <span>Promote Products</span>
              </a>
            </div>
          </div>

          {/* Right Showcase Box */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700 shadow-xl space-y-3 sm:space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Editorial & Media Desk</h3>
                    <p className="text-[10px] text-slate-400">Direct guest submissions</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  Open
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/80 space-y-1">
                  <span className="text-sky-400 font-bold uppercase tracking-wider text-[9px]">
                    Non-Promotional Talks
                  </span>
                  <p className="text-[11px] text-slate-300">
                    Email talking points to: <span className="text-emerald-400 font-semibold">{siteConfig.guestEmail}</span>
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-700/80 space-y-1">
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-[9px]">
                    Brand Visibility & Ads
                  </span>
                  <p className="text-[11px] text-slate-300">
                    Sponsorship inquiries: <span className="text-sky-300 font-semibold">{siteConfig.advertiseEmail}</span>
                  </p>
                </div>
              </div>

              <div className="pt-1 text-center">
                <button
                  onClick={() => openInquiryModal({
                    title: 'Guest Interview & Media Feature',
                    category: 'Editorial Desk'
                  })}
                  className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Media Coordination via WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
