"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  Network, 
  Target, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Network,
      title: "Multi-Sector Expertise",
      description: "Seamlessly bridging heavy industrial supply chains, corporate risk coverage, and digital utilities."
    },
    {
      icon: Target,
      title: "Execution-Focused",
      description: "We facilitate real procurement, negotiate spot prices, and streamline operations with speed."
    },
    {
      icon: Globe2,
      title: "Global Partner Network",
      description: "Direct ties with certified spinning mills, international cotton ginners, and top underwriters."
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Ethical",
      description: "Uncompromising compliance, clear pricing, and long-term partnership orientation."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Award className="w-3 h-3" />
            <span>Why Organizations Choose Martials</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Strategic Advisory for Measurable Growth
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            End-to-end facilitation across key economic sectors—aligning market intelligence, risk coverage, technology adoption, and workforce optimization.
          </p>
        </div>

        {/* 4 Feature Grid: Compact 2-Column Mobile Grid for high density */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-brand-light text-brand-primary flex items-center justify-center shadow-sm shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 border-t border-slate-100 flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-brand-primary mt-2">
                  <span>Advisory</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed About Us Corporate Banner (Compact Layout on Mobile) */}
        <div className="mt-8 sm:mt-14 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="inline-block px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              About Martials
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-brand-dark leading-snug">
              Enabling sustainable business growth through clarity and discipline.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              With strong industry linkages and a results-oriented mindset, we support manufacturers, industrial traders, corporates, SMEs, and professionals in navigating complex commercial landscapes.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] sm:text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Professional Integrity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Market-Driven Insights</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Long-Term Partnership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Continuous Improvement</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 sm:border-4 border-white">
              <img
                src="/assets/sales_marketing_growth.jpg"
                alt="Martials Corporate Strategy Session"
                className="w-full h-36 sm:h-56 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                <p className="text-[10px] sm:text-xs text-white font-medium">
                  "Navigating commercial complexity with tactical precision."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
