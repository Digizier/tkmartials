"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../lib/store';
import { supabase } from '../lib/supabaseClient';
import { 
  X, 
  Save, 
  Upload, 
  Trash2, 
  AlertTriangle, 
  Sparkles,
  Loader2
} from 'lucide-react';
import { Product, ServiceItem } from '../lib/types';

export const AdminEditModals: React.FC = () => {
  const { 
    activeEditModal, 
    closeEditModal, 
    siteConfig, 
    updateSiteConfig,
    products,
    addProduct,
    updateProduct,
    services,
    updateService,
    pendingDeleteProduct,
    confirmDeleteProduct,
    cancelDeleteProduct
  } = useStore();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);

  // Local state for forms
  const [configForm, setConfigForm] = useState(siteConfig);
  const [mapUrl, setMapUrl] = useState(siteConfig.googleMapEmbedUrl);
  const [addressNotice, setAddressNotice] = useState(siteConfig.addressNotice);

  // Product Form
  const [prodForm, setProdForm] = useState<Partial<Product>>({
    name: '',
    category: 'Textile',
    price: '',
    moq: '',
    description: '',
    features: [''],
    image: '/assets/textile_raw_materials.jpg',
    badge: 'New',
    isAvailable: true
  });

  const [imageUploadType, setImageUploadType] = useState<'preset' | 'upload'>('preset');

  // Service Form
  const [serviceForm, setServiceForm] = useState<Partial<ServiceItem>>({
    title: '',
    tagline: '',
    description: '',
    bullets: [''],
    seoKeywords: ['']
  });

  useEffect(() => {
    setConfigForm(siteConfig);
    setMapUrl(siteConfig.googleMapEmbedUrl);
    setAddressNotice(siteConfig.addressNotice);

    if (activeEditModal.type === 'product' && activeEditModal.targetId) {
      const p = products.find(prod => prod.id === activeEditModal.targetId);
      if (p) {
        setProdForm(p);
        if (p.image && (p.image.startsWith('data:') || p.image.includes('supabase.co'))) {
          setImageUploadType('upload');
        } else {
          setImageUploadType('preset');
        }
      }
    } else if (activeEditModal.type === 'product' && !activeEditModal.targetId) {
      setProdForm({
        name: '',
        category: 'Textile',
        price: '',
        moq: '',
        description: '',
        features: ['Premium Quality'],
        image: '/assets/textile_raw_materials.jpg',
        badge: 'New',
        isAvailable: true
      });
      setImageUploadType('preset');
    }

    if (activeEditModal.type === 'service' && activeEditModal.targetId) {
      const s = services.find(serv => serv.id === activeEditModal.targetId);
      if (s) setServiceForm(s);
    }
  }, [activeEditModal, siteConfig, products, services]);

  // Handle custom image file upload via Supabase Cloud Storage
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB.");
      return;
    }

    setIsUploadingImage(true);

    // 1. Immediate local thumbnail preview
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setProdForm(prev => ({ ...prev, image: base64 }));
      setImageUploadType('upload');
    };
    reader.readAsDataURL(file);

    // 2. Upload to Supabase Storage 'product-images' bucket
    try {
      const fileExt = file.name.split('.').pop() || 'jpg';
      const fileName = `product-${Date.now()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(fileName, file, { cacheControl: '3600', upsert: true });

      if (!error && data) {
        const { data: urlData } = supabase.storage
          .from('product-images')
          .getPublicUrl(fileName);
        
        if (urlData && urlData.publicUrl) {
          setProdForm(prev => ({ ...prev, image: urlData.publicUrl }));
        }
      }
    } catch (err) {
      console.warn("Storage upload note:", err);
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Handle Config Save
  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSiteConfig(configForm);
    closeEditModal();
  };

  // Handle Map Save
  const handleSaveMap = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSiteConfig({
      googleMapEmbedUrl: mapUrl,
      addressNotice: addressNotice
    });
    closeEditModal();
  };

  // Handle Product Save
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodForm.name || !prodForm.price) return;

    if (activeEditModal.targetId) {
      await updateProduct(activeEditModal.targetId, prodForm);
    } else {
      await addProduct({
        name: prodForm.name || 'New Product',
        category: prodForm.category as any || 'Textile',
        price: prodForm.price || 'Call for Rate',
        moq: prodForm.moq,
        description: prodForm.description || '',
        features: (prodForm.features || []).filter(f => f.trim().length > 0),
        image: prodForm.image || '/assets/textile_raw_materials.jpg',
        badge: prodForm.badge,
        isAvailable: true
      });
    }
    closeEditModal();
  };

  // Handle Service Save
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeEditModal.targetId) {
      updateService(activeEditModal.targetId, serviceForm);
    }
    closeEditModal();
  };

  return (
    <>
      {/* 1. BEAUTIFUL CUSTOM DELETE CONFIRMATION MODAL */}
      {pendingDeleteProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-slate-900">
                Delete Product?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Are you sure you want to remove <span className="font-bold text-slate-900">"{pendingDeleteProduct.name}"</span> from the live catalog?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={cancelDeleteProduct}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteProduct}
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Yes, Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. ADMIN EDIT & ADD MODALS */}
      {activeEditModal.type && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 my-4 sm:my-8 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base sm:text-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
                <span>
                  {activeEditModal.type === 'config' && 'Edit Contact & Header Info'}
                  {activeEditModal.type === 'map' && 'Update Google Map Embed & Notice'}
                  {activeEditModal.type === 'product' && (activeEditModal.targetId ? 'Edit Product' : 'Add New Product')}
                  {activeEditModal.type === 'service' && 'Edit Service Details'}
                </span>
              </div>

              <button
                onClick={closeEditModal}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 pt-3">
              {/* 1. CONFIG MODAL */}
              {activeEditModal.type === 'config' && (
                <form onSubmit={handleSaveConfig} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Phone Display</label>
                      <input
                        type="text"
                        value={configForm.phoneDisplay}
                        onChange={e => setConfigForm({ ...configForm, phoneDisplay: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">WhatsApp Display</label>
                      <input
                        type="text"
                        value={configForm.whatsappDisplay}
                        onChange={e => setConfigForm({ ...configForm, whatsappDisplay: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Primary Email</label>
                      <input
                        type="email"
                        value={configForm.email}
                        onChange={e => setConfigForm({ ...configForm, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Editorial Guest Email</label>
                      <input
                        type="email"
                        value={configForm.guestEmail}
                        onChange={e => setConfigForm({ ...configForm, guestEmail: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Hero Subheading</label>
                    <textarea
                      rows={3}
                      value={configForm.heroSubheading}
                      onChange={e => setConfigForm({ ...configForm, heroSubheading: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeEditModal}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-brand-primary text-white font-bold flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </form>
              )}

              {/* 2. MAP MODAL */}
              {activeEditModal.type === 'map' && (
                <form onSubmit={handleSaveMap} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Google Maps Embed Iframe URL</label>
                    <input
                      type="text"
                      value={mapUrl}
                      onChange={e => setMapUrl(e.target.value)}
                      placeholder="https://www.google.com/maps/embed?pb=..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-[11px]"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      Tip: In Google Maps, click Share → Embed a map → Copy the URL inside src="..."
                    </p>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Office Relocation Notice</label>
                    <textarea
                      rows={3}
                      value={addressNotice}
                      onChange={e => setAddressNotice(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeEditModal}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-brand-primary text-white font-bold flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Map Settings</span>
                    </button>
                  </div>
                </form>
              )}

              {/* 3. PRODUCT MODAL WITH SUPABASE CLOUD IMAGE UPLOAD */}
              {activeEditModal.type === 'product' && (
                <form onSubmit={handleSaveProduct} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Product / Sourcing Name *</label>
                      <input
                        type="text"
                        required
                        value={prodForm.name}
                        onChange={e => setProdForm({ ...prodForm, name: e.target.value })}
                        placeholder="e.g. Combed Spun Cotton Yarn 30s/1"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Category</label>
                      <select
                        value={prodForm.category}
                        onChange={e => setProdForm({ ...prodForm, category: e.target.value as any })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="Textile">Textile</option>
                        <option value="Technology">Technology</option>
                        <option value="Education">Education</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Consulting">Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Rate / Price Display *</label>
                      <input
                        type="text"
                        required
                        value={prodForm.price}
                        onChange={e => setProdForm({ ...prodForm, price: e.target.value })}
                        placeholder="e.g. Call for Spot Rate, $450/Bale"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Minimum Order Quantity (MOQ)</label>
                      <input
                        type="text"
                        value={prodForm.moq || ''}
                        onChange={e => setProdForm({ ...prodForm, moq: e.target.value })}
                        placeholder="e.g. 50 Metric Tons, 20 Bales"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>
                  </div>

                  {/* CLOUD IMAGE UPLOADER */}
                  <div className="space-y-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <label className="block font-bold text-slate-800">
                        Product Image
                      </label>
                      
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => setImageUploadType('upload')}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                            imageUploadType === 'upload'
                              ? 'bg-sky-600 text-white shadow-sm'
                              : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          Custom Upload
                        </button>
                        <button
                          type="button"
                          onClick={() => setImageUploadType('preset')}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                            imageUploadType === 'preset'
                              ? 'bg-sky-600 text-white shadow-sm'
                              : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          Preset Gallery
                        </button>
                      </div>
                    </div>

                    {/* Image Preview & Upload Trigger */}
                    <div className="flex items-center gap-3 pt-1">
                      {/* Live Thumbnail Preview */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shrink-0 relative group flex items-center justify-center">
                        {isUploadingImage ? (
                          <Loader2 className="w-6 h-6 text-sky-600 animate-spin" />
                        ) : (
                          <img
                            src={prodForm.image || '/assets/textile_raw_materials.jpg'}
                            alt="Product Preview"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        {imageUploadType === 'upload' ? (
                          <div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              disabled={isUploadingImage}
                              className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-sky-50 border-2 border-dashed border-sky-400 text-sky-700 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                            >
                              {isUploadingImage ? (
                                <>
                                  <Loader2 className="w-4 h-4 text-sky-600 animate-spin" />
                                  <span>Uploading to Supabase Cloud...</span>
                                </>
                              ) : (
                                <>
                                  <Upload className="w-4 h-4 text-sky-600" />
                                  <span>Upload Image from Device</span>
                                </>
                              )}
                            </button>
                            <p className="text-[10px] text-slate-500 mt-1">
                              Image is automatically hosted on Supabase Cloud CDN.
                            </p>
                          </div>
                        ) : (
                          <div>
                            <select
                              value={prodForm.image}
                              onChange={e => setProdForm({ ...prodForm, image: e.target.value })}
                              className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs"
                            >
                              <option value="/assets/textile_raw_materials.jpg">Textile Raw Materials (Cotton Cones)</option>
                              <option value="/assets/textile_fibers_catalog.jpg">Textile Fibers Comparison Studio</option>
                              <option value="/assets/general_insurance_marine.jpg">General Marine Insurance</option>
                              <option value="/assets/technology_software_utility.jpg">Technology ERP Software</option>
                              <option value="/assets/student_education_advisory.jpg">Student Education Advisory</option>
                              <option value="/assets/sales_marketing_growth.jpg">B2B Sales & Growth Sprint</option>
                              <option value="/assets/engineering_project_insurance.jpg">Engineering & Construction</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Product Description</label>
                    <textarea
                      rows={3}
                      value={prodForm.description}
                      onChange={e => setProdForm({ ...prodForm, description: e.target.value })}
                      placeholder="Specifications, sourcing advantages, origin..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeEditModal}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 shadow cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Product</span>
                    </button>
                  </div>
                </form>
              )}

              {/* 4. SERVICE MODAL */}
              {activeEditModal.type === 'service' && (
                <form onSubmit={handleSaveService} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Service Title</label>
                    <input
                      type="text"
                      value={serviceForm.title}
                      onChange={e => setServiceForm({ ...serviceForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Tagline</label>
                    <input
                      type="text"
                      value={serviceForm.tagline}
                      onChange={e => setServiceForm({ ...serviceForm, tagline: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={serviceForm.description}
                      onChange={e => setServiceForm({ ...serviceForm, description: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={closeEditModal}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-brand-primary text-white font-bold flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Service</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
