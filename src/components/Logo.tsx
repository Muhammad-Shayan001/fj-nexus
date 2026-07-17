import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'full-light' | 'full-dark' | 'brand-display';
  className?: string;
}

export default function Logo({ variant = 'icon', className = 'h-10 w-10' }: LogoProps) {
  // We use the same logo image for all variants since the uploaded image contains the full logo.
  // We adjust the default class name if it's not provided or based on where it's used, 
  // but we respect the provided className.
  
  let imageClass = className;
  if (variant === 'full-light' || variant === 'full-dark' || variant === 'brand-display') {
    // For full variants, we might want it to be a bit wider if a custom className isn't forcing it
    if (className === 'h-10 w-10') {
      imageClass = 'h-12 w-auto';
    }
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${imageClass}`} id={`logo-${variant}`}>
      <img
        src="/logo.png"
        alt="FJ Nexus Logo"
        className="h-full w-auto object-contain flex-shrink-0"
      />
    </div>
  );
}
