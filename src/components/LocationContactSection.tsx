"use client";

import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Pencil, 
  Building2, 
  CheckCircle2, 
  Send 
} from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const { siteConfig, editMode, openEditModal } = useStore();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Textile Raw Materials Consulting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*New Consultation Request via Martials Website*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.service}\n` +
      `*Message:* ${formData.message}`
    );

    setSubmitted(true);
    window.open(`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3 h-3" />
            <span>Connect with Our Advisory Desk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Consultation & Procurement
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Our specialized consulting leads respond promptly to discuss your supply chain, risk coverage, or business advisory requirements.
          </p>
        </div>

        {/* Relocation Notification Banner */}
        <div className="mb-6 sm:mb-10 bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                Head Office Transition Notice
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-sky-200 text-sky-900">
                  Update
                </span>
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 max-w-3xl leading-relaxed">
                {siteConfig.addressNotice}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            {editMode && (
              <button
                onClick={() => openEditModal('map')}
                className="px-2.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1 shadow-sm"
              >
                <Pencil className="w-3 h-3" />
                <span>Map URL</span>
              </button>
            )}
            <a
              href={`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=Hello%20Martials%2C%20I%20would%20like%20to%20confirm%20your%20office%20location.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Location on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Left Column: Direct Contact Details & Live Map */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
              {/* Phone */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-brand-primary flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Phone</span>
                    <p className="font-bold text-slate-900 text-xs">{siteConfig.phoneDisplay}</p>
                  </div>
                </div>
                <a 
                  href={`tel:${siteConfig.phoneClean}`}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-700"
                >
                  Call
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-emerald-800 uppercase">WhatsApp</span>
                    <p className="font-bold text-slate-900 text-xs">{siteConfig.whatsappDisplay}</p>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=Hello%20Martials%20Advisory.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold"
                >
                  Chat
                </a>
              </div>

              {/* Email */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">Email</span>
                    <p className="font-bold text-slate-900 text-xs truncate max-w-[140px]">{siteConfig.email}</p>
                  </div>
                </div>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-700"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Google Map Container with Admin Edit Trigger */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow relative bg-slate-100 h-44 sm:h-56">
              <iframe
                title="Martials Corporate Location"
                src={siteConfig.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {editMode && (
                <div className="absolute top-2 right-2 z-10">
                  <button
                    onClick={() => openEditModal('map')}
                    className="px-2.5 py-1 rounded-md bg-brand-dark/95 text-white text-[10px] font-bold flex items-center gap-1 shadow border border-white/20"
                  >
                    <Pencil className="w-3 h-3 text-sky-400" />
                    <span>Change Map URL</span>
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 shadow">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Send an Official Consultation Inquiry
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mb-4">
              Complete the details below for immediate coordination from our desk.
            </p>

            {submitted && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Inquiry submitted! Opening WhatsApp chat window...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Mehmood"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="client@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Requirement of Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  >
                    <option>Textile Raw Materials Consulting</option>
                    <option>General Insurance Advisory</option>
                    <option>Technology Products & Utility Solutions</option>
                    <option>Student Education Advisory</option>
                    <option>HR Operations & Workforce Solutions</option>
                    <option>Direct Sales & Marketing Services</option>
                    <option>Spot Bulk Raw Cotton / Yarn Purchase</option>
                    <option>Guest Speaker / Interview Submission</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Message / Specifications *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your raw material quantity, insurance asset value, software requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-brand-green hover:bg-brand-greenHover text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry to Martials Desk</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
