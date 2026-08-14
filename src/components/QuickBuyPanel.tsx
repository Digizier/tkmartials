"use client";

import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { 
  ShoppingBag, 
  X, 
  MessageCircle, 
  Pencil, 
  Trash2, 
  PlusCircle
} from 'lucide-react';

export const QuickBuyPanel: React.FC = () => {
  const { 
    products, 
    isQuickBuyOpen, 
    setQuickBuyOpen, 
    openInquiryModal, 
    editMode, 
    openEditModal, 
    requestDeleteProduct,
    siteConfig 
  } = useStore();

  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Textile', 'Technology', 'Education', 'Insurance', 'Consulting'];

  const filteredProducts = filterCategory === 'All' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  return (
    <>
      {/* Floating Right Docked Trigger Button (Desktop Only) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button
          onClick={() => setQuickBuyOpen(true)}
          className="bg-brand-dark hover:bg-brand-navy text-white px-2.5 py-3.5 rounded-l-xl shadow-2xl border-l-2 border-t-2 border-b-2 border-sky-400/40 flex flex-col items-center gap-1.5 group transition-all transform hover:-translate-x-1"
          title="Martials Products & Quick Buy Panel"
        >
          <div className="w-7 h-7 rounded-full bg-brand-primary/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <span className="[writing-mode:vertical-rl] font-bold text-[11px] tracking-wider text-slate-200 group-hover:text-white uppercase py-0.5">
            Store
          </span>
          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold flex items-center justify-center shadow">
            {products.length}
          </span>
        </button>
      </div>

      {/* Slide-over Side Panel / Mobile Bottom-Sheet */}
      {isQuickBuyOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setQuickBuyOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex md:pl-10">
            <aside aria-label="Products drawer" className="w-screen max-w-lg bg-white shadow-2xl flex flex-col border-l border-slate-200">
              
              {/* Header */}
              <div className="p-3.5 sm:p-4 bg-gradient-to-r from-brand-dark via-brand-navy to-brand-dark text-white flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-brand-primary/20 text-sky-300 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                      Martials Products
                      <span className="text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        Spot Rates
                      </span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-300">Procure raw materials & enterprise solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {editMode && (
                    <button
                      onClick={() => openEditModal('product')}
                      className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1"
                      title="Add New Product"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setQuickBuyOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category Filter Pills (Horizontal Scroll) */}
              <div className="p-2 sm:p-2.5 bg-slate-50 border-b border-slate-200 flex gap-1 overflow-x-auto no-scrollbar shrink-0">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                      filterCategory === cat
                        ? 'bg-brand-primary text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Product List: Clean 2-Column Mobile Grid for dense, fast scanning */}
              <div className="flex-1 overflow-y-auto p-2.5 sm:p-4">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-40" />
                    <p className="text-xs font-medium">No products in this category.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {filteredProducts.map((prod) => (
                      <div 
                        key={prod.id}
                        className="bg-white rounded-xl border border-slate-200 hover:border-sky-300 p-2 sm:p-3 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
                      >
                        {/* Admin Controls */}
                        {editMode && (
                          <div className="absolute top-1.5 right-1.5 flex items-center gap-0.5 z-10 bg-white/95 backdrop-blur p-0.5 rounded shadow border border-slate-200">
                            <button
                              onClick={() => openEditModal('product', prod.id)}
                              className="p-1 text-sky-600 hover:bg-sky-50 rounded"
                              title="Edit Product"
                            >
                              <Pencil className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => requestDeleteProduct(prod.id, prod.name)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}

                        <div className="space-y-1.5">
                          {/* Image Thumbnail */}
                          <div className="relative h-24 sm:h-32 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            {prod.badge && (
                              <span className="absolute top-1 left-1 text-[8px] sm:text-[9px] font-bold text-emerald-800 bg-emerald-100/90 backdrop-blur px-1.5 py-0.5 rounded">
                                {prod.badge}
                              </span>
                            )}
                          </div>

                          {/* Info */}
                          <div>
                            <span className="text-[9px] font-bold text-sky-700 uppercase">
                              {prod.category}
                            </span>
                            <h4 className="font-bold text-slate-900 text-xs leading-snug line-clamp-2 mt-0.5" title={prod.name}>
                              {prod.name}
                            </h4>
                            <p className="text-[11px] text-brand-green font-extrabold mt-0.5">
                              {prod.price}
                            </p>
                            {prod.moq && (
                              <p className="text-[10px] text-slate-500 truncate">
                                MOQ: <span className="font-medium text-slate-700">{prod.moq}</span>
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Buy / Inquire Button */}
                        <div className="pt-2">
                          <button
                            onClick={() => {
                              setQuickBuyOpen(false);
                              openInquiryModal({
                                title: prod.name,
                                category: prod.category,
                                price: prod.price
                              });
                            }}
                            className="w-full py-1.5 px-2 rounded-lg bg-brand-green hover:bg-brand-greenHover text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>Inquire</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer WhatsApp direct */}
              <div className="p-2.5 sm:p-3 bg-slate-50 border-t border-slate-200 shrink-0">
                <a
                  href={`https://wa.me/${siteConfig.whatsappClean.replace('+', '')}?text=Hello%2C%20I%20would%20like%20to%20place%20a%20bulk%20procurement%20inquiry%20with%20Martials.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-lg bg-brand-dark hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Procurement Desk</span>
                </a>
              </div>

            </aside>
          </div>
        </div>
      )}
    </>
  );
};
