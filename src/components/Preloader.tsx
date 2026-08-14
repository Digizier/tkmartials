"use client";

import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Completely remove from DOM after fade-out finishes (2.0s total)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#0B192C] via-[#0D213A] to-[#060D17] transition-opacity duration-500 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Martials Consulting"
      role="status"
    >
      <div className="relative flex flex-col items-center justify-center p-6 text-center max-w-xs sm:max-w-sm">
        
        {/* Soft Ambient Brand Glow (Deep Blue / Cyan Aura) */}
        <div className="absolute w-44 h-44 sm:w-56 sm:h-56 bg-sky-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

        {/* Logo Container with Smooth Pulse Animation */}
        <div className="relative z-10 flex flex-col items-center space-y-4 animate-in fade-in zoom-in-90 duration-700">
          
          {/* Animated Official Emblem */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
            {/* Subtle Expanding Outer Ripple */}
            <div className="absolute inset-0 rounded-2xl bg-sky-400/20 animate-ping duration-1000 opacity-40" />
            
            {/* Architectural Crest Container */}
            <div className="relative w-full h-full p-3 bg-white/10 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)] transition-transform duration-500 animate-pulse"
              >
                {/* Outer Architectural Square Frame */}
                <path 
                  d="M12 85H26V76H20V20H80V76H74V85H88V12H12V85Z" 
                  fill="#38BDF8" 
                />
                
                {/* Column 1 (Left Short) */}
                <path 
                  d="M28 76H36V54L28 58V76Z" 
                  fill="#38BDF8" 
                />
                
                {/* Column 2 (Center-Left Tallest) */}
                <path 
                  d="M40 76H48V24L40 29V76Z" 
                  fill="#38BDF8" 
                />
                
                {/* Column 3 (Center-Right Medium-Tall) */}
                <path 
                  d="M52 76H60V35L52 40V76Z" 
                  fill="#38BDF8" 
                />
                
                {/* Column 4 (Right Medium) */}
                <path 
                  d="M64 76H72V47L64 52V76Z" 
                  fill="#38BDF8" 
                />
              </svg>
            </div>
          </div>

          {/* Typography Brand Name with Crystal-Clear Contrast */}
          <div className="flex flex-col items-center space-y-1 text-center">
            <h1 className="font-black text-2xl sm:text-3xl text-white tracking-tight leading-none drop-shadow-md">
              MARTIALS
            </h1>
            <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-slate-300">
              Management Resource
            </p>
            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-sky-400">
              Technology Solutions
            </p>
          </div>

          {/* Sleek Gradient Loading Progress Bar */}
          <div className="w-36 sm:w-44 h-1 bg-white/15 rounded-full overflow-hidden mt-3 shadow-inner">
            <div className="h-full bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-500 rounded-full w-full animate-[progress_1.6s_ease-in-out_infinite] shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          </div>

        </div>

      </div>
    </div>
  );
};
