"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  ArrowUp, 
  Layers
} from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { siteConfig, setQuickBuyOpen } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-10 pb-20 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-3">
            <Logo variant="light" size="md" />

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Enabling sustainable business growth across Textile Raw Materials, General Insurance, Technology Utilities, Education Advisory, and HR Operations.
            </p>

            <div className="pt-1">
              <button
                onClick={() => setQuickBuyOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold text-xs border border-sky-400/30 flex items-center gap-1.5 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Products Catalog</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Core Verticals</a></li>
              <li><a href="#textiles" className="hover:text-sky-400 transition-colors">Textiles & Fibers</a></li>
              <li><a href="#leadership" className="hover:text-sky-400 transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Advisory Verticals */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sectors</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Raw Cotton & Yarn</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Marine Insurance</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Business Software</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Study Abroad</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Outsourced HR</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="col-span-2 lg:col-span-1 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contacts</h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{siteConfig.whatsappDisplay}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">{siteConfig.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>{siteConfig.copyrightText}</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
