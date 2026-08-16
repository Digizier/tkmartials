"use client";

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showSubtitle = true 
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-10 h-8 sm:w-11 sm:h-9',
    md: 'w-12 h-9 sm:w-14 sm:h-10',
    lg: 'w-16 h-12'
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      {/* Official Martials TK Monogram Logo Emblem */}
      <div className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center relative`}>
        <img 
          src={isDark ? "/martials_logo_transparent.png" : "/martials_logo_white_k.png"}
          alt="Martials TK Logo" 
          className="w-full h-full object-contain drop-shadow-sm"
          loading="eager"
        />
      </div>

      {/* Official Typography Wordmark (Untouched & Exact) */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center leading-none">
          <span className={`font-black tracking-tight ${textSizes[size]} ${isDark ? 'text-slate-950' : 'text-white'}`}>
            MARTIALS
          </span>
        </div>
        
        {showSubtitle && (
          <div className="flex flex-col mt-0.5 sm:mt-1 leading-tight space-y-0.5">
            <span className={`text-[9px] sm:text-[10.5px] font-extrabold tracking-widest uppercase ${isDark ? 'text-slate-800' : 'text-slate-200'}`}>
              Management Resource
            </span>
            <span className={`text-[8px] sm:text-[9.5px] font-bold tracking-widest uppercase ${isDark ? 'text-sky-700' : 'text-sky-300'}`}>
              Technology Solutions
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
