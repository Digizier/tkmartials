"use client";

import React from 'react';
import { blogPosts } from '../lib/initialData';
import { 
  BookOpen, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { useStore } from '../lib/store';

export const BlogSection: React.FC = () => {
  const { openInquiryModal } = useStore();

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-12 gap-3">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-light text-brand-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3 h-3" />
              <span>Insights & Market Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">
              Latest Industry Analysis
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Practical guidance across trade, risk mitigation, technology, and operations.
            </p>
          </div>

          <button
            onClick={() => openInquiryModal({
              title: 'Subscribe to Martials Market Intelligence Briefs',
              category: 'Market Newsletter'
            })}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-brand-dark font-bold text-xs border border-slate-200 shadow-sm transition-colors self-start sm:self-auto shrink-0"
          >
            Get Monthly Briefs
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 hover:border-sky-300 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-32 sm:h-44 w-full overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-brand-dark/90 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openInquiryModal({
                      title: `Inquiry on: ${post.title}`,
                      category: 'Market Intelligence'
                    })}
                    className="text-[11px] sm:text-xs font-bold text-brand-primary group-hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>Read Brief</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
