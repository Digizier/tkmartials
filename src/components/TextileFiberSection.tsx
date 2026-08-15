"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  Layers, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';

export const TextileFiberSection: React.FC = () => {
  const { openInquiryModal } = useStore();

  return (
    <section id="textiles" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Textile Raw Materials Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Fiber & Sourcing Desk
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From farm-level cotton ginning to specialized synthetic yarns, Martials facilitates transparent spot pricing and reliable quality.
          </p>
        </div>

        {/* Studio Fiber Comparison Visual Card (Clean & Focused) */}
        <div className="bg-slate-800/80 rounded-2xl sm:rounded-3xl border border-slate-700/80 p-4 sm:p-6 shadow-2xl">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700">
            <img
              src="/assets/textile_fibers_catalog.jpg"
              alt="Martials Textile Raw Fibers & Synthetic Comparison Catalog"
              className="w-full h-auto object-cover max-h-[220px] sm:max-h-[420px]"
              loading="lazy"
            />
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <span className="text-xs sm:text-sm font-extrabold text-sky-400 uppercase tracking-wider block">
                  Raw Cotton • Silk • Pure Wool • Bamboo • Polyester • Nylon
                </span>
                <p className="text-[11px] sm:text-xs text-slate-300 hidden sm:block mt-0.5">
                  Direct mill-origin contracts with certified spot-rate index tracking.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => openInquiryModal({
                    title: 'Textile Raw Materials & Fiber Sourcing',
                    category: 'Textile Sourcing'
                  })}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Get Spot Rate</span>
                </button>

                <a
                  href="#contact"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors flex items-center gap-1.5"
                >
                  <span>Inquire Sourcing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
