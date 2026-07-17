import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'full-light' | 'full-dark' | 'brand-display';
  className?: string;
}

export default function Logo({ variant = 'icon', className = 'h-10 w-10' }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id={`logo-${variant}`}>
      <svg
        viewBox="0 0 400 400"
        className="h-full w-auto flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold Metallic Gradients */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9A7B1C" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9E79F" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A640F" />
          </linearGradient>
          
          <linearGradient id="goldGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
          </linearGradient>

          {/* Silver/Chrome Metallic Gradients */}
          <linearGradient id="silverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5D6D7E" />
            <stop offset="25%" stopColor="#BDC3C7" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#AEB6BF" />
            <stop offset="100%" stopColor="#34495E" />
          </linearGradient>

          {/* Background Signature Gradient for Badge */}
          <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A1F44" />
            <stop offset="45%" stopColor="#1E3A8A" />
            <stop offset="75%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#00C2FF" />
          </linearGradient>

          {/* Shadow filters for depth */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* 1. Circular rings and circuit board logic */}
        
        {/* Right Silver Crescent Arc */}
        <path
          d="M 230 40 A 160 160 0 0 1 230 360 C 290 320 320 250 300 180 C 285 130 260 70 230 40 Z"
          fill="url(#silverGrad)"
          filter="url(#dropShadow)"
        />

        {/* Left Gold Circular Track and Circuit Lines */}
        <g stroke="url(#goldGrad)" strokeWidth="4" fill="none" filter="url(#dropShadow)">
          {/* Circular frame arc on the left */}
          <path d="M 170 360 A 160 160 0 0 1 170 40" strokeLinecap="round" />
          
          {/* Circuit branch 1 */}
          <path d="M 110 130 L 60 130 L 40 150" strokeLinecap="round" />
          <circle cx="40" cy="150" r="6" fill="url(#goldGrad)" stroke="none" />

          {/* Circuit branch 2 (center horizontal) */}
          <path d="M 120 180 L 80 180 L 60 200 L 30 200" strokeLinecap="round" />
          <circle cx="30" cy="200" r="6" fill="url(#goldGrad)" stroke="none" />

          {/* Circuit branch 3 */}
          <path d="M 110 230 L 70 230 L 50 250 L 35 250" strokeLinecap="round" />
          <circle cx="35" cy="250" r="6" fill="url(#goldGrad)" stroke="none" />

          {/* Circuit branch 4 (lower curves) */}
          <path d="M 130 280 L 95 280 L 80 300 L 65 300" strokeLinecap="round" />
          <circle cx="65" cy="300" r="6" fill="url(#goldGrad)" stroke="none" />

          {/* Connecting internal circuit lines */}
          <path d="M 100 180 L 90 150 L 75 150" strokeLinecap="round" />
          <circle cx="75" cy="150" r="4" fill="url(#goldGrad)" stroke="none" />
        </g>

        {/* 2. Core interlocking Letters: Gold F and Silver J */}

        {/* Silver J (positioned behind the F upper parts, but interlocking) */}
        <path
          d="M 230 115 L 230 230 C 230 290 180 310 145 285 C 158 275 168 260 168 245 C 168 220 148 210 135 230 C 120 255 130 305 175 315 C 235 325 278 280 278 215 L 278 115 Z"
          fill="url(#silverGrad)"
          filter="url(#dropShadow)"
        />

        {/* Gold F (dominant, majestic serif typography) */}
        <path
          d="M 130 100 L 255 100 L 255 125 L 225 125 L 180 125 L 180 170 L 230 170 L 230 195 L 180 195 L 180 260 L 165 290 L 145 290 L 155 260 L 155 125 L 130 125 Z"
          fill="url(#goldGrad)"
          filter="url(#dropShadow)"
        />
        
        {/* Additional serif flourishes to give a true premium look */}
        <path
          d="M 215 125 L 255 125 L 255 155 L 245 155 Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 195 170 L 230 170 L 230 195 L 220 195 Z"
          fill="url(#goldGrad)"
        />
      </svg>

      {/* Renders the full branding wordmarks based on variants */}
      {(variant === 'full-light' || variant === 'full-dark' || variant === 'brand-display') && (
        <div className="flex flex-col">
          {/* Main Title Wordmark */}
          <div className="flex items-baseline font-sans font-bold tracking-wider text-xl leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#8A640F]">
              FJ
            </span>
            <span className={`ml-1.5 font-semibold ${variant === 'full-light' ? 'text-[#0A1F44]' : 'text-white'}`}>
              NEXUS
            </span>
          </div>
          
          {/* Tagline / Subtitle */}
          <span className={`text-[9px] font-medium tracking-[0.22em] uppercase mt-1 leading-none ${
            variant === 'full-light' ? 'text-[#1E3A8A]/80' : 'text-[#C0C5CE]/85'
          }`}>
            SOFTWARE HOUSE
          </span>
        </div>
      )}
    </div>
  );
}
