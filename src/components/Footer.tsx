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

  const primaryEmail = siteConfig.email || "info@tkmartials.com";

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-10 pb-20 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Logo variant="light" size="md" />

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Enabling sustainable business growth across Textile Raw Materials, General Insurance, Technology Utilities, Education Advisory, and HR Operations.
            </p>

            <div className="pt-1">
              <button
                onClick={() => setQuickBuyOpen(true)}
                className="px-3.5 py-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold text-xs sm:text-sm border border-sky-400/30 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>Products Catalog</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Core Verticals</a></li>
              <li><a href="#textiles" className="hover:text-sky-400 transition-colors">Textiles & Fibers</a></li>
              <li><a href="#leadership" className="hover:text-sky-400 transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Advisory Verticals */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Sectors</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Raw Cotton & Yarn</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Marine Insurance</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Business Software</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Study Abroad</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Outsourced HR</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Contacts</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{siteConfig.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.whatsappDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${primaryEmail}`} className="truncate hover:text-white transition-colors">{primaryEmail}</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with explicitly written Textile, Insurance, Technology, Education & HR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
          <p className="text-center sm:text-left leading-relaxed">
            <span className="font-semibold text-slate-300">© 2026 Martials Integrated Consulting</span> — 
            <span className="text-sky-400 font-medium"> Textile</span> • 
            <span className="text-emerald-400 font-medium"> Insurance</span> • 
            <span className="text-sky-300 font-medium"> Technology</span> • 
            <span className="text-amber-300 font-medium"> Education</span> • 
            <span className="text-indigo-300 font-medium"> HR Operations</span>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
