"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { Phone, MessageCircle, ShoppingBag, Send } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { siteConfig, setQuickBuyOpen, products } = useStore();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl md:hidden flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${siteConfig.phoneClean}`}
        className="flex-1 py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-4 h-4 text-brand-primary shrink-0" />
        <span className="truncate">Call Desk</span>
      </a>

      {/* Quick Buy Trigger */}
      <button
        onClick={() => setQuickBuyOpen(true)}
        className="flex-1 py-2 px-2.5 rounded-xl bg-sky-50 text-brand-primary font-bold text-xs flex items-center justify-center gap-1.5 border border-sky-200 transition-colors relative"
      >
        <ShoppingBag className="w-4 h-4 shrink-0" />
        <span className="truncate">Products</span>
        <span className="w-4 h-4 rounded-full bg-brand-primary text-white text-[9px] font-black flex items-center justify-center">
          {products.length}
        </span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=Hello%20Martials%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>
    </div>
  );
};
