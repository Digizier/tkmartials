"use client";

import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { 
  Phone, 
  MessageCircle, 
  ShoppingBag, 
  Lock, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { siteConfig, isAdmin, editMode, toggleEditMode, setQuickBuyOpen, products } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { loginAdmin } = useStore();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(pinInput)) {
      setShowLoginModal(false);
      setPinInput('');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      {/* Top Notification / Contact Ribbon */}
      <div className="bg-brand-dark text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Corporate Advisory & Fast Response Desk: BOTH visible on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-slate-300 w-full md:w-auto justify-between md:justify-start">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              Corporate Advisory & Raw Material Sourcing
            </span>
            <span className="text-slate-500">•</span>
            <a 
              href={`tel:${siteConfig.phoneClean}`}
              className="text-slate-200 hover:text-white font-medium whitespace-nowrap"
            >
              Desk: <span className="text-white font-bold">{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* WhatsApp & Portal: Hidden on mobile top area, visible on desktop/tablet */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <a 
              href={`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=Hello%20Martials%20Consulting%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Desk: {siteConfig.whatsappDisplay}</span>
            </a>
            
            <button 
              onClick={() => isAdmin ? toggleEditMode() : setShowLoginModal(true)}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-2 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3 text-slate-400" />
              <span>{isAdmin ? (editMode ? "Edit Mode ON" : "Admin Panel") : "Portal"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center shrink-0">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-brand-primary transition-colors">About Us</a>
            <a href="#services" className="hover:text-brand-primary transition-colors">Services</a>
            <a href="#textiles" className="hover:text-brand-primary transition-colors">Textiles & Fiber</a>
            <a href="#leadership" className="hover:text-brand-primary transition-colors">Leadership</a>
            <a href="#guest" className="hover:text-brand-primary transition-colors">Guest Talks</a>
            <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Buy Lengthwise Drawer Trigger */}
            <button
              onClick={() => setQuickBuyOpen(true)}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-brand-light text-brand-primary font-semibold text-xs hover:bg-sky-100 transition-colors shadow-sm cursor-pointer"
              title="Products to Buy from Martials"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Products</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-primary text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                {products.length}
              </span>
            </button>

            {/* Request Consultation CTA (Desktop) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-green hover:bg-brand-greenHover text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all"
            >
              <span>Consultation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2.5 shadow-xl animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2 font-medium text-slate-700 text-xs">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary"
              >
                About Us
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary"
              >
                Services & Verticals
              </a>
              <a 
                href="#textiles" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary"
              >
                Textile Raw Materials & Fiber Catalog
              </a>
              <a 
                href="#leadership" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary"
              >
                Management Leadership (CEO)
              </a>
              <a 
                href="#guest" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary"
              >
                Become a Guest with Martials
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg hover:bg-slate-50 hover:text-brand-primary"
              >
                Contact & Location
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuickBuyOpen(true);
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand-light text-brand-primary font-semibold text-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>View Products ({products.length})</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand-green text-white font-semibold text-xs"
              >
                <span>Request a Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Admin Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-brand-dark font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <span>Admin Portal Login</span>
              </div>
              <button 
                onClick={() => setShowLoginModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Enter the master PIN to activate front-end Live Edit Mode (Edit products, services, map URL, contact info).
            </p>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Master PIN</label>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter Master PIN"
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  autoFocus
                />
                {loginError && (
                  <p className="text-red-500 text-xs mt-1 font-medium">Invalid Master PIN. Please try again.</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-brand-primary hover:bg-sky-600 text-white font-semibold text-xs transition-colors shadow-md"
              >
                Unlock Edit Mode
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
