"use client";

import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { 
  X, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const InquiryModal: React.FC = () => {
  const { selectedInquiry, closeInquiryModal, siteConfig } = useStore();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');

  if (!selectedInquiry) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*Procurement & Advisory Inquiry — Martials*\n\n` +
      `*Item/Service:* ${selectedInquiry.title}\n` +
      `*Category:* ${selectedInquiry.category}\n` +
      (selectedInquiry.price ? `*Rate Reference:* ${selectedInquiry.price}\n` : '') +
      `*Client Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      (quantity ? `*Target Quantity / Volume:* ${quantity}\n` : '') +
      (notes ? `*Specifications / Note:* ${notes}` : '')
    );

    closeInquiryModal();
    window.open(`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=${waText}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">
                {selectedInquiry.category}
              </span>
              <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                {selectedInquiry.title}
              </h3>
            </div>
          </div>

          <button
            onClick={closeInquiryModal}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSend} className="space-y-4 pt-4">
          {selectedInquiry.price && (
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Reference Rate:</span>
              <span className="font-bold text-brand-green">{selectedInquiry.price}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="0300-1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="company@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Target Volume / Quantity (Optional)</label>
            <input
              type="text"
              placeholder="e.g. 50 Metric Tons, 25 Bales, 1 Enterprise License"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Additional Specifications or Notes</label>
            <textarea
              rows={3}
              placeholder="Delivery destination, testing requirements, policy terms..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-brand-green hover:bg-brand-greenHover text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp for Immediate Confirmation</span>
          </button>
        </form>

      </div>
    </div>
  );
};
