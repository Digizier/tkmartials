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
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
            Comprehensive Advisory & Sourcing Verticals
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Delivering high-impact solutions to elevate manufacturing, mitigate commercial risk, and optimize enterprise productivity.
          </p>
        </div>

        {/* Services Grid (Compact & responsive on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-slate-50/80 hover:bg-white rounded-xl sm:rounded-2xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Admin Edit Trigger */}
              {editMode && (
                <button
                  onClick={() => openEditModal('service', service.id)}
                  className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow transition-colors"
                  title="Edit this Service"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Service Card Image */}
              <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-200 shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center shadow">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide drop-shadow">
                    Vertical 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-brand-navy font-semibold line-clamp-1">
                    {service.tagline}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-1 pt-2 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Key Scope:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-2 border-t border-slate-200/80">
                  <button
                    onClick={() => openInquiryModal({
                      title: service.title,
                      category: 'Consulting Advisory'
                    })}
                    className="w-full py-2 px-3 rounded-lg bg-brand-dark group-hover:bg-brand-green text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
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
