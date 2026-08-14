"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Sparkles, 
  Pencil,
  CheckCircle2
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { siteConfig, editMode, openEditModal, setQuickBuyOpen } = useStore();

  return (
    <section className="relative min-h-auto lg:min-h-[80vh] flex items-center overflow-hidden bg-brand-dark text-white">
      {/* Background Hero Image with Deep Corporate Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_consulting_industrial.jpg"
          alt="Martials Integrated Consulting & Global Trade"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Main Hero Copy (Compact & readable on mobile) */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-5">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-light/10 border border-sky-400/30 text-sky-300 text-[10px] sm:text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-sky-400 shrink-0" />
              <span>Multi-Sector Sourcing & Facilitation</span>
              {editMode && (
                <button
                  onClick={() => openEditModal('config')}
                  className="ml-1 p-0.5 rounded bg-sky-500 text-white hover:bg-sky-400"
                  title="Edit Headline"
                >
                  <Pencil className="w-2.5 h-2.5" />
                </button>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Integrated Consulting Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-emerald-400">
                Trade, Risk, Technology & Talent
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[11px] sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {siteConfig.heroSubheading}
            </p>

            {/* Compact Action Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3.5 pt-1">
              <a
                href="#contact"
                className="col-span-2 sm:col-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-brand-green hover:bg-brand-greenHover text-white font-bold text-xs sm:text-sm shadow hover:shadow-emerald-900/40 transition-all"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#services"
                className="col-span-1 inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-[11px] sm:text-xs border border-white/20 backdrop-blur-md transition-all text-center"
              >
                <span>Our Services</span>
              </a>

              <button
                onClick={() => setQuickBuyOpen(true)}
                className="col-span-1 inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold text-[11px] sm:text-xs border border-sky-400/30 backdrop-blur-md transition-all text-center cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Products Store</span>
              </button>
            </div>

            {/* Key Value Badges */}
            <div className="pt-2 sm:pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">Textile Sourcing</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">General Insurance</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">Software Utilities</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">Study Abroad & HR</span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Card on Hero Right (Desktop only) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                  Corporate Advisory Hub
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Raw Material Sourcing</h4>
                    <p className="text-slate-400 text-[11px]">Cotton, Ring Spun Yarn, Greige & Dyed Fabrics.</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Corporate Risk Protection</h4>
                    <p className="text-slate-400 text-[11px]">Marine Cargo, Property & Project Insurance.</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Direct Growth & Talent</h4>
                    <p className="text-slate-400 text-[11px]">B2B Lead Acceleration & People Operations.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#contact"
                  className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 group"
                >
                  <span>Connect with our Senior Advisory Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
