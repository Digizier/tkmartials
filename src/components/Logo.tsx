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
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      {/* Official Martials Architectural Crest Emblem */}
      <div className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer Square Architectural Frame */}
          <path 
            d="M12 85H26V76H20V20H80V76H74V85H88V12H12V85Z" 
            fill="#1B64B3" 
          />
          
          {/* Column 1 (Left Short) */}
          <path 
            d="M28 76H36V54L28 58V76Z" 
            fill="#1B64B3" 
          />
          
          {/* Column 2 (Center-Left Tallest) */}
          <path 
            d="M40 76H48V24L40 29V76Z" 
            fill="#1B64B3" 
          />
          
          {/* Column 3 (Center-Right Medium-Tall) */}
          <path 
            d="M52 76H60V35L52 40V76Z" 
            fill="#1B64B3" 
          />
          
          {/* Column 4 (Right Medium) */}
          <path 
            d="M64 76H72V47L64 52V76Z" 
            fill="#1B64B3" 
          />
        </svg>
      </div>

      {/* Official Typography Wordmark (Bigger, Darker, Sharper) */}
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
