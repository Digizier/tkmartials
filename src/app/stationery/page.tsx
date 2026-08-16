"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CreditCard, 
  FileText, 
  Printer, 
  RotateCw, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Mail, 
  Globe, 
  MapPin, 
  Sliders, 
  Edit3
} from 'lucide-react';
import { Logo } from '../../components/Logo';

export default function StationeryStudio() {
  // Studio Mode State
  const [activeTab, setActiveTab] = useState<'letterhead' | 'card'>('letterhead');
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [cardTheme, setCardTheme] = useState<'navy' | 'white' | 'dualtone'>('navy');
  const [letterTheme, setLetterTheme] = useState<'corporate' | 'modern'>('corporate');

  // Form State for Visiting Card
  const [cardData, setCardData] = useState({
    name: "Talha Khan",
    title: "Founder & CEO",
    company: "MARTIALS",
    subCompany: "Management Resource Technology Solutions",
    tagline: "Integrated Consulting Across Trade, Risk, Technology & Talent",
    phone: "0301-8496800",
    whatsapp: "0315-4362911",
    personalEmail: "talha@tkmartials.com",
    officialEmail: "info@tkmartials.com",
    website: "www.tkmartials.com",
    address: "Corporate Advisory Hub, Main Boulevard, Lahore, Pakistan",
  });

  // Form State for Letterhead
  const [letterData, setLetterData] = useState({
    refNo: "MKT/TK/2026/08-01",
    date: "August 15, 2026",
    recipientName: "To: The Managing Director / Procurement Committee",
    recipientCompany: "Enterprise Client Operations",
    recipientAddress: "Industrial Area, Lahore / Karachi, Pakistan",
    subject: "Strategic Sourcing & Corporate Advisory Engagement Confirmation",
    salutation: "Dear Sir / Madam,",
    body: `We have the pleasure of submitting our official engagement proposal for enterprise raw material sourcing and strategic corporate advisory services.

Martials provides integrated end-to-end consulting spanning Textile Raw Materials (Grade-A Raw Cotton & Combed Ring-Spun Yarns), General Corporate Insurance (Marine Cargo & Property Coverage), Enterprise Productivity Utilities, and Strategic Human Resource Operations.

Our dedicated trade desks ensure complete price index transparency, certified quality parameters, and disciplined contract execution with zero broker markups. We look forward to establishing a long-term, mutually beneficial commercial partnership.`,
    closing: "Yours faithfully,",
    signatoryName: "Muhammad Talha Khan",
    signatoryTitle: "Chief Executive Officer (CEO)",
    showSignature: true,
    showStamp: true
  });

  // Handle Print Action
  const handlePrint = () => {
    window.print();
  };

  // Sample Letter Templates
  const applyLetterTemplate = (type: 'sourcing' | 'insurance' | 'hr') => {
    if (type === 'sourcing') {
      setLetterData(prev => ({
        ...prev,
        subject: "Raw Cotton & Combed Yarn Spot Rate & Allocation Confirmation",
        body: `We are pleased to confirm the allocation of export-standard textile raw materials for the upcoming manufacturing cycle.

Our team has locked verified spot rates directly from certified ginning and spinning networks. All consignments will adhere strictly to agreed staple length (28mm–32mm ELS), high CSP parameters, and low contamination metrics.

Please review the attached schedule of supplies and return a signed copy for immediate dispatch confirmation.`
      }));
    } else if (type === 'insurance') {
      setLetterData(prev => ({
        ...prev,
        subject: "Comprehensive Marine Cargo & Enterprise Asset Risk Advisory",
        body: `Following our risk assessment session, Martials is pleased to present the optimized underwriting structure for your corporate import/export operations.

This tailored policy includes full Institute Cargo Clauses (A) all-risk protection, inland transit extension, and expedited fast-track claim settlement terms negotiated with premier institutional underwriters.

Kindly authorize the proposal to initiate immediate policy placement.`
      }));
    } else if (type === 'hr') {
      setLetterData(prev => ({
        ...prev,
        subject: "Executive Search & HR Operations Facilitation Agreement",
        body: `Martials HR Solutions is pleased to formalize the talent recruitment and workforce optimization mandate for your organization.

Our executive headhunting desk will deploy strategic sourcing, competency assessments, and compliance structuring to place top-tier management professionals tailored to your corporate culture.

We remain committed to elevating your organization's human capital capabilities.`
      }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Top Studio Header (Hidden on Print) */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Website</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <Logo variant="light" size="sm" showSubtitle={false} />
            <div className="h-4 w-px bg-slate-700 hidden sm:block" />
            <span className="text-xs sm:text-sm font-bold text-slate-200">
              Corporate Stationery & Document Studio
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Main Tab Switcher */}
          <div className="bg-slate-800 p-1 rounded-xl flex items-center border border-slate-700">
            <button
              onClick={() => setActiveTab('letterhead')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'letterhead' 
                  ? 'bg-brand-primary text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Online Letterhead</span>
            </button>
            <button
              onClick={() => setActiveTab('card')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'card' 
                  ? 'bg-brand-primary text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Visiting Card</span>
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* Main Studio Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 print:block print:p-0 print:m-0">
        
        {/* Left Side: Live Customizer Panel (Hidden on Print) */}
        <div className="lg:col-span-5 space-y-5 print:hidden">
          
          {/* Letterhead Options Panel */}
          {activeTab === 'letterhead' && (
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-bold text-sm text-white">Live Letterhead Composer</h3>
                </div>
                
                <select
                  value={letterTheme}
                  onChange={(e: any) => setLetterTheme(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300 font-semibold focus:outline-none focus:border-emerald-500"
                >
                  <option value="corporate">Executive Crest (Standard)</option>
                  <option value="modern">Modern Minimalist</option>
                </select>
              </div>

              {/* Quick Preset Templates */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Quick Load Templates
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => applyLetterTemplate('sourcing')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    + Textile Sourcing
                  </button>
                  <button
                    onClick={() => applyLetterTemplate('insurance')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    + Risk / Insurance
                  </button>
                  <button
                    onClick={() => applyLetterTemplate('hr')}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    + HR Operations
                  </button>
                </div>
              </div>

              {/* Letter Meta Inputs */}
              <div className="space-y-2.5 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Reference Number</label>
                    <input
                      type="text"
                      value={letterData.refNo}
                      onChange={(e) => setLetterData({ ...letterData, refNo: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Letter Date</label>
                    <input
                      type="text"
                      value={letterData.date}
                      onChange={(e) => setLetterData({ ...letterData, date: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 font-medium mb-1 block">Recipient / Client Attention</label>
                  <input
                    type="text"
                    value={letterData.recipientName}
                    onChange={(e) => setLetterData({ ...letterData, recipientName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="text-slate-400 font-medium mb-1 block">Subject Line</label>
                  <input
                    type="text"
                    value={letterData.subject}
                    onChange={(e) => setLetterData({ ...letterData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 font-bold text-xs"
                  />
                </div>

                <div>
                  <label className="text-slate-400 font-medium mb-1 block">Letter Body Text</label>
                  <textarea
                    rows={8}
                    value={letterData.body}
                    onChange={(e) => setLetterData({ ...letterData, body: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500 text-xs leading-relaxed"
                  />
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={letterData.showSignature}
                      onChange={(e) => setLetterData({ ...letterData, showSignature: e.target.checked })}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-0"
                    />
                    <span className="text-slate-300">Show CEO Signature</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={letterData.showStamp}
                      onChange={(e) => setLetterData({ ...letterData, showStamp: e.target.checked })}
                      className="rounded border-slate-700 text-emerald-500 focus:ring-0"
                    />
                    <span className="text-slate-300">Show Official Seal</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Visiting Card Options Panel */}
          {activeTab === 'card' && (
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-400" />
                  <h3 className="font-bold text-sm text-white">Visiting Card Settings</h3>
                </div>
                
                <button
                  onClick={() => setCardSide(cardSide === 'front' ? 'back' : 'front')}
                  className="px-3 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold text-xs flex items-center gap-1.5 border border-sky-400/30 transition-all cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Viewing: {cardSide === 'front' ? 'Front Side' : 'Back Side'}</span>
                </button>
              </div>

              {/* Theme Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Design Theme Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCardTheme('navy')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                      cardTheme === 'navy'
                        ? 'bg-slate-800 border-sky-400 text-white shadow'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    1. Royal Navy
                  </button>
                  <button
                    onClick={() => setCardTheme('white')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                      cardTheme === 'white'
                        ? 'bg-slate-800 border-sky-400 text-white shadow'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    2. Swiss White
                  </button>
                  <button
                    onClick={() => setCardTheme('dualtone')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                      cardTheme === 'dualtone'
                        ? 'bg-slate-800 border-sky-400 text-white shadow'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    3. Dual-Tone
                  </button>
                </div>
              </div>

              {/* Live Card Data Fields */}
              <div className="space-y-2.5 text-xs">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Full Name</label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Designation / Title</label>
                    <input
                      type="text"
                      value={cardData.title}
                      onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500 font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Direct Phone</label>
                    <input
                      type="text"
                      value={cardData.phone}
                      onChange={(e) => setCardData({ ...cardData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">WhatsApp Line</label>
                    <input
                      type="text"
                      value={cardData.whatsapp}
                      onChange={(e) => setCardData({ ...cardData, whatsapp: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Personal Email</label>
                    <input
                      type="text"
                      value={cardData.personalEmail}
                      onChange={(e) => setCardData({ ...cardData, personalEmail: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 font-medium mb-1 block">Official Email</label>
                    <input
                      type="text"
                      value={cardData.officialEmail}
                      onChange={(e) => setCardData({ ...cardData, officialEmail: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 font-medium mb-1 block">Website Domain</label>
                  <input
                    type="text"
                    value={cardData.website}
                    onChange={(e) => setCardData({ ...cardData, website: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500 font-semibold text-sky-400"
                  />
                </div>

                <div>
                  <label className="text-slate-400 font-medium mb-1 block">Address / Office Location</label>
                  <textarea
                    rows={2}
                    value={cardData.address}
                    onChange={(e) => setCardData({ ...cardData, address: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-500 text-xs"
                    placeholder="Enter physical address or leave blank"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Live Display & Printable Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center justify-start print:block print:w-full print:m-0">
          
          {/* ========================================================================= */}
          {/* LETTERHEAD PREVIEW (Pixel-Perfect A4 Proportions with Natural Spacing)    */}
          {/* ========================================================================= */}
          {activeTab === 'letterhead' && (
            <div className="w-full flex justify-center print:block print:w-full">
              
              {/* Authentic A4 Paper Canvas */}
              <div 
                id="letterhead-printable-canvas"
                className="w-full max-w-[560px] aspect-[1/1.414] bg-white text-slate-900 rounded-2xl shadow-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden border border-slate-200 print:shadow-none print:border-none print:p-0 print:m-0"
              >
                
                {/* Subtle Official Watermark in Document Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="#0B192C" className="w-72 h-72">
                    <path d="M12 85H26V76H20V20H80V76H74V85H88V12H12V85Z" />
                    <path d="M28 76H36V54L28 58V76Z" />
                    <path d="M40 76H48V24L40 29V76Z" />
                    <path d="M52 76H60V35L52 40V76Z" />
                    <path d="M64 76H72V47L64 52V76Z" />
                  </svg>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* LETTERHEAD TOP HEADER                                              */}
                {/* ------------------------------------------------------------------ */}
                <div>
                  <div className="flex items-start justify-between gap-4 border-b-2 border-slate-900 pb-3">
                    
                    {/* Official Logo & Tagline (Updated: Trade • Risk • Technology • Talent) */}
                    <div>
                      <Logo variant="dark" size="sm" showSubtitle={true} />
                      <p className="text-[8.5px] sm:text-[9.5px] font-extrabold text-sky-900 tracking-wide mt-1">
                        Integrated Consulting Across Trade • Risk • Technology • Talent
                      </p>
                    </div>

                    {/* Corporate Metadata Box */}
                    <div className="text-right text-[8.5px] sm:text-[9.5px] space-y-0.5 text-slate-700">
                      <div className="font-bold text-slate-950 flex items-center justify-end gap-1">
                        <Phone className="w-2.5 h-2.5 text-sky-700" />
                        <span>{cardData.phone} / {cardData.whatsapp}</span>
                      </div>
                      <div className="text-slate-600 flex items-center justify-end gap-1">
                        <Mail className="w-2.5 h-2.5 text-sky-700" />
                        <span>{cardData.officialEmail}</span>
                      </div>
                      <div className="font-bold text-sky-700 flex items-center justify-end gap-1">
                        <Globe className="w-2.5 h-2.5 text-sky-700" />
                        <span>{cardData.website}</span>
                      </div>
                    </div>

                  </div>

                  {/* Ref No & Date Ribbon */}
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-semibold text-slate-600 pt-2 pb-0.5">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">Ref:</span>
                      <span className="font-mono font-bold text-slate-900">{letterData.refNo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">Date:</span>
                      <span className="font-bold text-slate-900">{letterData.date}</span>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* LETTER CONTENT & SIGNATURE FLOW (Natural Spacing, No Huge Gap)      */}
                {/* ------------------------------------------------------------------ */}
                <div className="py-2.5 space-y-3 text-slate-800 text-[10px] sm:text-[11px] leading-relaxed">
                  
                  {/* Recipient Box */}
                  <div className="space-y-0.5 font-medium text-slate-700">
                    <p className="font-bold text-slate-950">{letterData.recipientName}</p>
                    <p className="text-[9.5px] sm:text-[10px]">{letterData.recipientCompany}</p>
                    <p className="text-[8.5px] sm:text-[9px] text-slate-500">{letterData.recipientAddress}</p>
                  </div>

                  {/* Subject */}
                  <div className="pt-0.5">
                    <p className="font-extrabold text-slate-950 underline decoration-sky-600 underline-offset-2">
                      Subject: {letterData.subject}
                    </p>
                  </div>

                  <p className="font-semibold text-slate-900">{letterData.salutation}</p>

                  {/* Editable Body Paragraphs */}
                  <div className="whitespace-pre-line text-slate-800 text-justify leading-relaxed">
                    {letterData.body}
                  </div>

                  {/* Closing & Signature Block directly following body with compact margin */}
                  <div className="pt-3 flex items-end justify-between">
                    <div>
                      <p className="text-[9.5px] sm:text-[10px] text-slate-600 mb-0.5">{letterData.closing}</p>
                      
                      {/* CEO Signature Simulation */}
                      {letterData.showSignature && (
                        <div className="font-serif italic text-base sm:text-lg font-bold text-sky-900 tracking-wider py-0.5 border-b border-slate-300 inline-block">
                          M. Talha Khan
                        </div>
                      )}

                      <p className="font-bold text-slate-950 text-[9.5px] sm:text-[10.5px] mt-0.5">{letterData.signatoryName}</p>
                      <p className="text-[8.5px] sm:text-[9.5px] text-sky-700 font-semibold">{letterData.signatoryTitle}</p>
                      <p className="text-[8px] sm:text-[8.5px] text-slate-500">Martials Integrated Consulting</p>
                    </div>

                    {/* Official Corporate Seal Badge */}
                    {letterData.showStamp && (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-sky-700/60 p-1 flex flex-col items-center justify-center text-center text-sky-800 rotate-[-12deg] select-none opacity-85">
                        <span className="text-[6.5px] font-black tracking-widest uppercase">MARTIALS</span>
                        <span className="text-[5.5px] font-bold">OFFICIAL SEAL</span>
                        <span className="text-[5.5px] text-slate-600">LAHORE • PK</span>
                      </div>
                    )}
                  </div>

                </div>

                {/* ------------------------------------------------------------------ */}
                {/* CORPORATE BOTTOM FOOTER BAR                                        */}
                {/* ------------------------------------------------------------------ */}
                <div className="border-t border-slate-200 pt-2 text-center text-[7.5px] sm:text-[8.5px] text-slate-500 space-y-0.5 mt-auto">
                  <p className="font-semibold text-slate-700">
                    Martials Integrated Consulting • {cardData.address}
                  </p>
                  <p>
                    Phone: {cardData.phone} | WhatsApp: {cardData.whatsapp} | Email: {cardData.officialEmail} | Web: {cardData.website}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* VISITING CARD PREVIEW (Cleaned: Single Company Name at Top Only)          */}
          {/* ========================================================================= */}
          {activeTab === 'card' && (
            <div className="w-full flex flex-col items-center space-y-5 print:block print:w-full">
              
              <div 
                id="visitingcard-printable-canvas"
                className="relative w-full max-w-[460px] aspect-[1.75/1] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border border-slate-700/50 print:shadow-none print:border print:m-0"
              >
                
                {/* ------------------------------------------------------------------ */}
                {/* CARD FRONT SIDE                                                    */}
                {/* ------------------------------------------------------------------ */}
                {cardSide === 'front' && (
                  <div className={`w-full h-full p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden ${
                    cardTheme === 'navy' 
                      ? 'bg-gradient-to-br from-[#0B192C] via-[#0D213A] to-[#060D17] text-white' 
                      : cardTheme === 'white'
                      ? 'bg-white text-slate-900 border-2 border-slate-200'
                      : 'bg-gradient-to-r from-[#0B192C] via-[#0B192C] to-[#1B64B3] text-white'
                  }`}>
                    
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none w-48 h-48">
                      <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M12 85H26V76H20V20H80V76H74V85H88V12H12V85Z" />
                        <path d="M28 76H36V54L28 58V76Z" />
                        <path d="M40 76H48V24L40 29V76Z" />
                        <path d="M52 76H60V35L52 40V76Z" />
                        <path d="M64 76H72V47L64 52V76Z" />
                      </svg>
                    </div>

                    {/* Top Row: Logo with Full Subtitle Once */}
                    <div className="flex items-start justify-between gap-3 relative z-10">
                      <Logo 
                        variant={cardTheme === 'white' ? 'dark' : 'light'} 
                        size="sm" 
                        showSubtitle={true} 
                      />

                      <div className="text-right">
                        <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          cardTheme === 'white'
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                        }`}>
                          Executive
                        </span>
                      </div>
                    </div>

                    {/* Middle Section: Executive Name & Title (Clean: Redundant subtitle removed) */}
                    <div className="relative z-10 my-auto">
                      <h2 className={`text-xl sm:text-2xl font-black tracking-tight leading-tight ${
                        cardTheme === 'white' ? 'text-slate-950' : 'text-white'
                      }`}>
                        {cardData.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs sm:text-sm font-extrabold text-sky-400 tracking-wide">
                          {cardData.title}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Row: Contact Grid */}
                    <div className="relative z-10 pt-2 border-t border-white/10 grid grid-cols-2 gap-x-3 gap-y-1 text-[9.5px] sm:text-[10.5px]">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-sky-400 shrink-0" />
                        <span className="font-semibold">{cardData.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="font-semibold">{cardData.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span className="truncate">{cardData.personalEmail}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-sky-400 shrink-0" />
                        <span className="font-bold text-sky-400 truncate">{cardData.website}</span>
                      </div>
                      {cardData.address && (
                        <div className="col-span-2 flex items-center gap-1.5 text-[8.5px] text-slate-400 mt-0.5 truncate">
                          <MapPin className="w-2.5 h-2.5 text-rose-400 shrink-0" />
                          <span className="truncate">{cardData.address}</span>
                        </div>
                      )}
                    </div>

                  </div>
                )}

                {/* ------------------------------------------------------------------ */}
                {/* CARD BACK SIDE                                                     */}
                {/* ------------------------------------------------------------------ */}
                {cardSide === 'back' && (
                  <div className={`w-full h-full p-6 flex flex-col items-center justify-center text-center relative overflow-hidden ${
                    cardTheme === 'navy' 
                      ? 'bg-gradient-to-br from-[#0B192C] via-[#0D213A] to-[#060D17] text-white' 
                      : cardTheme === 'white'
                      ? 'bg-slate-900 text-white'
                      : 'bg-gradient-to-tr from-[#0B192C] via-[#1B64B3] to-[#0B192C] text-white'
                  }`}>
                    
                    <div className="absolute inset-2 border border-sky-400/30 rounded-xl pointer-events-none" />

                    <div className="w-16 h-16 sm:w-18 sm:h-18 mb-2.5 drop-shadow-md">
                      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                        <path d="M12 85H26V76H20V20H80V76H74V85H88V12H12V85Z" fill="#38BDF8" />
                        <path d="M28 76H36V54L28 58V76Z" fill="#38BDF8" />
                        <path d="M40 76H48V24L40 29V76Z" fill="#38BDF8" />
                        <path d="M52 76H60V35L52 40V76Z" fill="#38BDF8" />
                        <path d="M64 76H72V47L64 52V76Z" fill="#38BDF8" />
                      </svg>
                    </div>

                    <h1 className="text-xl sm:text-2xl font-black tracking-widest text-white">
                      MARTIALS
                    </h1>
                    <p className="text-[9px] sm:text-[10px] font-bold text-sky-300 uppercase tracking-widest mt-0.5">
                      Management Resource Technology Solutions
                    </p>

                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent my-2" />

                    <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium max-w-xs leading-relaxed px-4">
                      "Integrated Consulting Across Trade, Risk, Technology & Talent"
                    </p>

                    <div className="mt-2 text-[9px] font-bold text-sky-400 tracking-wider">
                      {cardData.website}
                    </div>

                  </div>
                )}

              </div>

              {/* Flip Button Control */}
              <div className="flex items-center gap-3 print:hidden">
                <button
                  onClick={() => setCardSide('front')}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    cardSide === 'front' 
                      ? 'bg-sky-500 text-white shadow' 
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Front Side View
                </button>
                <button
                  onClick={() => setCardSide('back')}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    cardSide === 'back' 
                      ? 'bg-sky-500 text-white shadow' 
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  Back Side View
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Global CSS for Clean High-Res Printing with Exact Standard A4 Proportions */}
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          html, body {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          header, nav, .print\\:hidden {
            display: none !important;
          }
          #letterhead-printable-canvas {
            width: 210mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            padding: 16mm 18mm 14mm 18mm !important;
            margin: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
          }
          #visitingcard-printable-canvas {
            width: 88.9mm !important;
            height: 50.8mm !important;
            margin: 30mm auto !important;
            border: 1px solid #cbd5e1 !important;
            box-shadow: none !important;
            page-break-inside: avoid !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

    </div>
  );
}
