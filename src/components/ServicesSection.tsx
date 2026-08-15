"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  Layers, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Check, 
  Pencil, 
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services, editMode, openEditModal, openInquiryModal } = useStore();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-brand-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Comprehensive Advisory & Sourcing Verticals
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Delivering high-impact solutions to elevate manufacturing, mitigate commercial risk, and optimize enterprise productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Admin Edit Trigger */}
              {editMode && (
                <button
                  onClick={() => openEditModal('service', service.id)}
                  className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow transition-colors"
                  title="Edit this Service"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              )}

              {/* Service Card Image */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-200 shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide drop-shadow">
                    Vertical 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body with High Contrast & Larger Readable Fonts */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-brand-primary transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy font-bold">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-1.5 pt-2.5 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Key Scope:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-2 border-t border-slate-200">
                  <button
                    onClick={() => openInquiryModal({
                      title: service.title,
                      category: 'Consulting Advisory'
                    })}
                    className="w-full py-2.5 px-3 rounded-xl bg-brand-dark group-hover:bg-brand-green text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire for Advisory</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
