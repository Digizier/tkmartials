"use client";

import React from 'react';
import { useStore } from '../lib/store';
import { 
  Pencil, 
  PlusCircle, 
  MapPin, 
  PhoneCall, 
  LogOut, 
  Eye, 
  Sparkles,
  Settings
} from 'lucide-react';

export const AdminBar: React.FC = () => {
  const { 
    isAdmin, 
    editMode, 
    toggleEditMode, 
    logoutAdmin, 
    openEditModal 
  } = useStore();

  if (!isAdmin) return null;

  return (
    <aside aria-label="Admin live toolbar" className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-brand-dark to-slate-900 text-white px-4 py-2.5 shadow-xl border-b border-sky-500/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-sky-300 uppercase tracking-wider text-[11px]">
            Martials Live Visual CMS
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-300">
            Pencil icons are visible across sections to edit in real time
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          {/* Add Product Button */}
          <button
            onClick={() => openEditModal('product')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors shadow-sm"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </button>

          {/* Edit Contact / Header Config */}
          <button
            onClick={() => openEditModal('config')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Edit Phone/Emails</span>
          </button>

          {/* Edit Google Map */}
          <button
            onClick={() => openEditModal('map')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium transition-colors shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Edit Map URL</span>
          </button>

          {/* Toggle Edit Mode */}
          <button
            onClick={toggleEditMode}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors shadow-sm ${
              editMode ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{editMode ? 'Edit Mode ON' : 'Preview Mode'}</span>
          </button>

          {/* Logout */}
          <button
            onClick={logoutAdmin}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-red-950/60 hover:bg-red-900 text-red-300 transition-colors"
            title="Logout Admin"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
