"use client";

import React from 'react';
import { cultureValues } from '../lib/initialData';
import { 
  Sparkles, 
  Smile, 
  Users2, 
  Compass, 
  Handshake, 
  ShieldCheck, 
  Feather
} from 'lucide-react';

export const CultureValues: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />;
      case 1: return <Users2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />;
      case 2: return <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />;
      case 3: return <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />;
      case 4: return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 5: return <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />;
      default: return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />;
    }
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
            Our Culture & Values
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Six foundational pillars that govern our trade ethics and professional commitments.
          </p>
        </div>

        {/* 2-Column Mobile Grid for high information density */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {cultureValues.map((val, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200/80 hover:border-sky-300 transition-all space-y-1.5 sm:space-y-2.5 shadow-sm"
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                {getIcon(idx)}
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 leading-tight">
                {val.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
