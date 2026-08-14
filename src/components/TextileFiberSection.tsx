"use client";

import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { 
  Layers, 
  MessageCircle, 
  Scale, 
  BadgeCheck
} from 'lucide-react';

export const TextileFiberSection: React.FC = () => {
  const { openInquiryModal } = useStore();
  const [selectedTab, setSelectedTab] = useState<'cotton' | 'yarn' | 'synthetics' | 'blends'>('cotton');

  const fiberSpecs = {
    cotton: {
      title: "Raw Natural Cotton",
      staple: "28mm – 32mm ELS",
      mic: "3.8 – 4.5 Mic Value",
      strength: "29 – 32 g/tex",
      bestFor: "Combed yarn spinning, apparel weaving, hygiene cotton",
      desc: "Sourced from certified ginning networks across Southern Punjab, Sindh, and international origins with guaranteed low-trash content."
    },
    yarn: {
      title: "Ring Spun & Combed Yarn",
      staple: "Counts 10s/1 to 80s/1",
      mic: "High CSP (2800+)",
      strength: "Low Uster CV% & Hairiness",
      bestFor: "Circular knitting, denim warp, high-density poplin weaving",
      desc: "Mill-direct contracts guaranteeing uniform twist, autoconer winding, and zero contamination for export-standard textile production."
    },
    synthetics: {
      title: "Synthetic Filaments & PSF",
      staple: "PSF, Nylon 6/66, Viscose",
      mic: "Denier: 1.2D to 6D",
      strength: "High Tenacity & Abrasion Resistance",
      bestFor: "Activewear, technical textiles, blended suitings",
      desc: "Direct supply relationships with major petrochemical fiber producers providing consistent dye affinity and moisture management."
    },
    blends: {
      title: "Engineered Blends (PC / CVC)",
      staple: "65/35 PC, 52/48 CVC",
      mic: "Engineered Ratio Precision",
      strength: "Breathability + Crease Resistance",
      bestFor: "Workwear, institutional uniforms, fashion knits",
      desc: "Custom blending advisory to help textile manufacturers achieve target fabric weight, thermal stability, and cost optimization."
    }
  };

  const current = fiberSpecs[selectedTab];

  return (
    <section id="textiles" className="py-10 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3 h-3" />
            <span>Textile Raw Materials Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Fiber & Sourcing Desk
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            From farm-level cotton ginning to specialized synthetic yarns, Martials facilitates transparent spot pricing and reliable quality.
          </p>
        </div>

        {/* Studio Fiber Comparison Visual Card */}
        <div className="bg-slate-800/80 rounded-2xl sm:rounded-3xl border border-slate-700/80 p-3.5 sm:p-6 shadow-xl space-y-4 sm:space-y-6">
          
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700">
            <img
              src="/assets/textile_fibers_catalog.jpg"
              alt="Martials Textile Raw Fibers & Synthetic Comparison Catalog"
              className="w-full h-auto object-cover max-h-[160px] sm:max-h-[340px]"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-2.5 sm:p-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Raw Cotton • Silk • Pure Wool • Bamboo • Polyester • Nylon
                </span>
              </div>

              <button
                onClick={() => openInquiryModal({
                  title: 'Textile Fiber Raw Materials',
                  category: 'Textile Sourcing'
                })}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] sm:text-xs flex items-center gap-1 shadow transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Get Spot Rate</span>
              </button>
            </div>
          </div>

          {/* Interactive Tabs (Horizontal Scrollable on Mobile) */}
          <div className="space-y-4">
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-700 pb-2">
              <button
                onClick={() => setSelectedTab('cotton')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTab === 'cotton'
                    ? 'bg-sky-500 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Raw Cotton
              </button>
              <button
                onClick={() => setSelectedTab('yarn')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTab === 'yarn'
                    ? 'bg-sky-500 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Spun Yarn
              </button>
              <button
                onClick={() => setSelectedTab('synthetics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTab === 'synthetics'
                    ? 'bg-sky-500 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Synthetics & PSF
              </button>
              <button
                onClick={() => setSelectedTab('blends')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTab === 'blends'
                    ? 'bg-sky-500 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Blends (PC/CVC)
              </button>
            </div>

            {/* Tab Details Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8 space-y-2.5">
                <div className="flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white">{current.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700">
                    <span className="text-slate-400 block">Staple / Count:</span>
                    <p className="text-white font-bold truncate">{current.staple}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700">
                    <span className="text-slate-400 block">Quality Param:</span>
                    <p className="text-white font-bold truncate">{current.mic}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700 col-span-2">
                    <span className="text-slate-400 block">Best For:</span>
                    <p className="text-emerald-400 font-semibold truncate">{current.bestFor}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-slate-900/90 rounded-xl p-3.5 border border-slate-700/80 space-y-2.5 text-center">
                <Scale className="w-6 h-6 text-sky-400 mx-auto" />
                <h4 className="font-bold text-xs sm:text-sm text-white">Direct Sourcing Order</h4>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Daily price index tracking with zero broker markups.
                </p>
                <button
                  onClick={() => openInquiryModal({
                    title: current.title,
                    category: 'Textile Raw Materials'
                  })}
                  className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow"
                >
                  Procurement Call
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
