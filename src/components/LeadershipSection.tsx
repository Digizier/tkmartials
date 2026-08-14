"use client";

import React from 'react';
import { leadershipData } from '../lib/initialData';
import { 
  Award, 
  Mail, 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { useStore } from '../lib/store';

export const LeadershipSection: React.FC = () => {
  const { siteConfig, openInquiryModal } = useStore();

  return (
    <section id="leadership" className="py-10 sm:py-16 lg:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Award className="w-3 h-3" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Strategic Multi-Sector Governance
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Combining decades of execution in global trade, corporate underwriting, and enterprise scaling.
          </p>
        </div>

        {/* CEO Spotlight Feature Card */}
        <div className="mb-6 sm:mb-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md p-4 sm:p-8 lg:p-10">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 items-center">
            
            {/* CEO Photo (Clean left alignment on desktop, compact on mobile) */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-4 flex justify-center sm:justify-start">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-md bg-slate-100 aspect-[3/4] w-full max-w-[160px] sm:max-w-[260px]">
                <img
                  src={leadershipData[0].image}
                  alt={leadershipData[0].name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* CEO Content & Action CTAs (Clean right column alignment on Desktop!) */}
            <div className="col-span-12 sm:col-span-8 lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Executive Leadership</span>
                </div>
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-brand-dark">
                  {leadershipData[0].name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-primary">
                  {leadershipData[0].role}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {leadershipData[0].bio}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium pt-1">
                {leadershipData[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Neatly aligned inside the right column on desktop & mobile */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => openInquiryModal({
                    title: 'Executive Consultation with CEO Muhammad Talha Khan',
                    category: 'Leadership Advisory'
                  })}
                  className="px-4 py-2.5 rounded-xl bg-brand-dark hover:bg-brand-navy text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Executive Briefing</span>
                </button>

                <a
                  href={`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=Hello%20Mr.%20Talha%20Khan%2C%20I%20am%20reaching%20out%20for%20a%20strategic%20corporate%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Line</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Director Profile Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
            <div className="col-span-12 sm:col-span-3 lg:col-span-3 flex justify-center sm:justify-start">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[3/4] w-full max-w-[130px] sm:max-w-[180px]">
                <img
                  src={leadershipData[1].image}
                  alt={leadershipData[1].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-span-12 sm:col-span-9 lg:col-span-9 space-y-2">
              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-50 text-sky-700 text-[10px] sm:text-xs font-bold">
                  <Briefcase className="w-3 h-3 shrink-0" />
                  <span>Operations</span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-brand-dark">
                  {leadershipData[1].name}
                </h3>
                <p className="text-xs font-semibold text-brand-primary">
                  {leadershipData[1].role}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {leadershipData[1].bio}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
