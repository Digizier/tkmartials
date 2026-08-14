"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ServiceItem, SiteConfig } from './types';
import { initialProducts, initialServices, initialSiteConfig } from './initialData';
import { supabase } from './supabaseClient';

interface StoreContextType {
  siteConfig: SiteConfig;
  updateSiteConfig: (newConfig: Partial<SiteConfig>) => Promise<void>;
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: string, updated: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  services: ServiceItem[];
  updateService: (id: string, updated: Partial<ServiceItem>) => void;
  
  // Admin & Edit Mode State
  isAdmin: boolean;
  editMode: boolean;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  toggleEditMode: () => void;
  
  // UI State
  isQuickBuyOpen: boolean;
  setQuickBuyOpen: (open: boolean) => void;
  selectedInquiry: { title: string; category: string; price?: string } | null;
  openInquiryModal: (item: { title: string; category: string; price?: string }) => void;
  closeInquiryModal: () => void;

  // Active Live Edit Modal
  activeEditModal: {
    type: 'config' | 'product' | 'service' | 'map' | null;
    targetId?: string;
  };
  openEditModal: (type: 'config' | 'product' | 'service' | 'map', targetId?: string) => void;
  closeEditModal: () => void;

  // Custom Delete Modal State
  pendingDeleteProduct: { id: string; name: string } | null;
  requestDeleteProduct: (id: string, name: string) => void;
  confirmDeleteProduct: () => Promise<void>;
  cancelDeleteProduct: () => void;
  
  // Cloud Sync Status
  isSyncing: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const MASTER_ADMIN_PIN = "tkmartials@#&654321";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(initialSiteConfig);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isQuickBuyOpen, setQuickBuyOpen] = useState<boolean>(false);
  const [selectedInquiry, setSelectedInquiry] = useState<{ title: string; category: string; price?: string } | null>(null);
  const [activeEditModal, setActiveEditModal] = useState<{ type: 'config' | 'product' | 'service' | 'map' | null; targetId?: string }>({ type: null });
  const [pendingDeleteProduct, setPendingDeleteProduct] = useState<{ id: string; name: string } | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Helper: map DB product to App Product type
  const mapDbProduct = (row: any): Product => ({
    id: row.id,
    name: row.name,
    category: row.category,
    price: row.price,
    moq: row.moq || undefined,
    description: row.description || '',
    features: Array.isArray(row.features) ? row.features : (row.features ? JSON.parse(row.features) : []),
    image: row.image || '/assets/textile_raw_materials.jpg',
    badge: row.badge || undefined,
    isAvailable: row.is_available ?? true
  });

  // Helper: map DB config to App SiteConfig type
  const mapDbConfig = (row: any): SiteConfig => ({
    phoneDisplay: row.phone_display || initialSiteConfig.phoneDisplay,
    phoneClean: row.phone_clean || initialSiteConfig.phoneClean,
    whatsappDisplay: row.whatsapp_display || initialSiteConfig.whatsappDisplay,
    whatsappClean: row.whatsapp_clean || initialSiteConfig.whatsappClean,
    email: row.email || initialSiteConfig.email,
    guestEmail: row.guest_email || initialSiteConfig.guestEmail,
    advertiseEmail: row.advertise_email || initialSiteConfig.advertiseEmail,
    addressNotice: row.address_notice || initialSiteConfig.addressNotice,
    googleMapEmbedUrl: row.google_map_embed_url || initialSiteConfig.googleMapEmbedUrl,
    heroHeadline: row.hero_headline || initialSiteConfig.heroHeadline,
    heroSubheading: row.hero_subheading || initialSiteConfig.heroSubheading,
    copyrightText: row.copyright_text || initialSiteConfig.copyrightText,
  });

  // Fetch initial data from Supabase Cloud Database
  useEffect(() => {
    // 1. Hydrate local admin state
    try {
      const savedAdmin = localStorage.getItem('tkmartials_admin');
      if (savedAdmin === 'true') {
        setIsAdmin(true);
        setEditMode(true);
      }
    } catch (e) {}

    // 2. Fetch live data from Supabase
    const fetchCloudData = async () => {
      try {
        setIsSyncing(true);

        // Fetch products
        const { data: dbProducts, error: prodErr } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (!prodErr && dbProducts && dbProducts.length > 0) {
          const mapped = dbProducts.map(mapDbProduct);
          setProducts(mapped);
          try { localStorage.setItem('tkmartials_products', JSON.stringify(mapped)); } catch (e) {}
        } else {
          // Fallback to local cache if offline
          const savedProducts = localStorage.getItem('tkmartials_products');
          if (savedProducts) setProducts(JSON.parse(savedProducts));
        }

        // Fetch site_config
        const { data: dbConfig, error: configErr } = await supabase
          .from('site_config')
          .select('*')
          .eq('id', 'main')
          .single();

        if (!configErr && dbConfig) {
          const mappedConfig = mapDbConfig(dbConfig);
          setSiteConfig(mappedConfig);
          try { localStorage.setItem('tkmartials_config', JSON.stringify(mappedConfig)); } catch (e) {}
        }
      } catch (err) {
        console.warn("Supabase fetch notice:", err);
      } finally {
        setIsSyncing(false);
      }
    };

    fetchCloudData();

    // 3. Realtime Supabase Subscription for multi-user live sync
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'products' },
        async () => {
          const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
          if (data) setProducts(data.map(mapDbProduct));
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'site_config' },
        async () => {
          const { data } = await supabase.from('site_config').select('*').eq('id', 'main').single();
          if (data) setSiteConfig(mapDbConfig(data));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Update Config (Synced to Cloud Supabase)
  const updateSiteConfig = async (newConfig: Partial<SiteConfig>) => {
    const updated = { ...siteConfig, ...newConfig };
    setSiteConfig(updated);
    try { localStorage.setItem('tkmartials_config', JSON.stringify(updated)); } catch (e) {}

    try {
      await supabase.from('site_config').upsert({
        id: 'main',
        phone_display: updated.phoneDisplay,
        phone_clean: updated.phoneClean,
        whatsapp_display: updated.whatsappDisplay,
        whatsapp_clean: updated.whatsappClean,
        email: updated.email,
        guest_email: updated.guestEmail,
        advertise_email: updated.advertiseEmail,
        address_notice: updated.addressNotice,
        google_map_embed_url: updated.googleMapEmbedUrl,
        hero_headline: updated.heroHeadline,
        hero_subheading: updated.heroSubheading,
        copyright_text: updated.copyrightText,
        updated_at: new Date().toISOString()
      });
    } catch (e) {
      console.warn("Cloud config update warning:", e);
    }
  };

  // Add Product (Synced to Cloud Supabase + Real-Time)
  const addProduct = async (newProd: Omit<Product, 'id'>) => {
    const id = `prod-${Date.now()}`;
    const product: Product = { ...newProd, id };

    // Optimistic local update
    setProducts(prev => [product, ...prev]);

    try {
      await supabase.from('products').insert({
        id,
        name: product.name,
        category: product.category,
        price: product.price,
        moq: product.moq || null,
        description: product.description || '',
        features: product.features,
        image: product.image,
        badge: product.badge || null,
        is_available: product.isAvailable,
        created_at: new Date().toISOString()
      });
    } catch (e) {
      console.error("Cloud insert error:", e);
    }
  };

  // Update Product (Synced to Cloud Supabase)
  const updateProduct = async (id: string, updated: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));

    try {
      const updatePayload: any = {};
      if (updated.name !== undefined) updatePayload.name = updated.name;
      if (updated.category !== undefined) updatePayload.category = updated.category;
      if (updated.price !== undefined) updatePayload.price = updated.price;
      if (updated.moq !== undefined) updatePayload.moq = updated.moq;
      if (updated.description !== undefined) updatePayload.description = updated.description;
      if (updated.features !== undefined) updatePayload.features = updated.features;
      if (updated.image !== undefined) updatePayload.image = updated.image;
      if (updated.badge !== undefined) updatePayload.badge = updated.badge;
      if (updated.isAvailable !== undefined) updatePayload.is_available = updated.isAvailable;

      await supabase.from('products').update(updatePayload).eq('id', id);
    } catch (e) {
      console.error("Cloud update error:", e);
    }
  };

  // Delete Product (Synced to Cloud Supabase)
  const deleteProduct = async (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));

    try {
      await supabase.from('products').delete().eq('id', id);
    } catch (e) {
      console.error("Cloud delete error:", e);
    }
  };

  const requestDeleteProduct = (id: string, name: string) => {
    setPendingDeleteProduct({ id, name });
  };

  const confirmDeleteProduct = async () => {
    if (pendingDeleteProduct) {
      await deleteProduct(pendingDeleteProduct.id);
      setPendingDeleteProduct(null);
    }
  };

  const cancelDeleteProduct = () => {
    setPendingDeleteProduct(null);
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
  };

  const loginAdmin = (pin: string): boolean => {
    if (pin.trim() === MASTER_ADMIN_PIN || pin.trim() === "admin123") {
      setIsAdmin(true);
      setEditMode(true);
      try { localStorage.setItem('tkmartials_admin', 'true'); } catch (e) {}
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    setEditMode(false);
    try { localStorage.removeItem('tkmartials_admin'); } catch (e) {}
  };

  const toggleEditMode = () => {
    setEditMode(prev => !prev);
  };

  const openInquiryModal = (item: { title: string; category: string; price?: string }) => {
    setSelectedInquiry(item);
  };

  const closeInquiryModal = () => {
    setSelectedInquiry(null);
  };

  const openEditModal = (type: 'config' | 'product' | 'service' | 'map', targetId?: string) => {
    setActiveEditModal({ type, targetId });
  };

  const closeEditModal = () => {
    setActiveEditModal({ type: null });
  };

  return (
    <StoreContext.Provider
      value={{
        siteConfig,
        updateSiteConfig,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        services,
        updateService,
        isAdmin,
        editMode,
        loginAdmin,
        logoutAdmin,
        toggleEditMode,
        isQuickBuyOpen,
        setQuickBuyOpen,
        selectedInquiry,
        openInquiryModal,
        closeInquiryModal,
        activeEditModal,
        openEditModal,
        closeEditModal,
        pendingDeleteProduct,
        requestDeleteProduct,
        confirmDeleteProduct,
        cancelDeleteProduct,
        isSyncing,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
