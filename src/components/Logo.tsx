import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  variant?: 'icon' | 'full-light' | 'full-dark' | 'brand-display';
  className?: string;
}

export default function Logo({ variant = 'icon', className = 'h-10 w-auto' }: LogoProps) {
  // We use the same image for all variants as requested, but keep the interface
  // so we don't break existing consumers.
  return (
    <div className={`inline-flex items-center select-none ${className}`} id={`logo-${variant}`}>
      <img
        src={logoImg}
        alt="FJ NEXUS Logo"
        className="h-full w-auto object-contain"
        style={{ maxHeight: '100%' }}
      />
    </div>
  );
}
