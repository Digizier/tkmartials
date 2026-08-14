"use client";

import React from 'react';
import { Preloader } from '../components/Preloader';
import { AdminBar } from '../components/AdminBar';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { TextileFiberSection } from '../components/TextileFiberSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { CultureValues } from '../components/CultureValues';
import { GuestSection } from '../components/GuestSection';
import { BlogSection } from '../components/BlogSection';
import { LocationContactSection } from '../components/LocationContactSection';
import { Footer } from '../components/Footer';
import { QuickBuyPanel } from '../components/QuickBuyPanel';
import { MobileStickyBar } from '../components/MobileStickyBar';
import { InquiryModal } from '../components/InquiryModal';
import { AdminEditModals } from '../components/AdminEditModals';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 2-Second Brand Loading Screen */}
      <Preloader />

      {/* Admin Floating Live Toolbar */}
      <AdminBar />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Hero Section with High-Impact Imagery */}
      <HeroSection />

      {/* Why Choose Us & About Martials */}
      <WhyChooseUs />

      {/* 6 Core Strategic Verticals */}
      <ServicesSection />

      {/* Textile Raw Materials & Fiber Intelligence Studio */}
      <TextileFiberSection />

      {/* Executive Leadership (CEO Muhammad Talha Khan & Director Arooj Khalid) */}
      <LeadershipSection />

      {/* Culture & Organizational Values */}
      <CultureValues />

      {/* Become a Guest with Martials / Business Talks Media Forum */}
      <GuestSection />

      {/* Market Intelligence & Insights */}
      <BlogSection />

      {/* Location, Relocation Update & Direct Consultation Form */}
      <LocationContactSection />

      {/* Footer */}
      <Footer />

      {/* Right-Docked Lengthwise Products Showcase & Mobile Drawer */}
      <QuickBuyPanel />

      {/* Mobile Sticky Quick Contact Bar */}
      <MobileStickyBar />

      {/* Interactive WhatsApp Inquiry Modal */}
      <InquiryModal />

      {/* Admin In-Line Live Visual Edit Modals */}
      <AdminEditModals />
    </main>
  );
}
