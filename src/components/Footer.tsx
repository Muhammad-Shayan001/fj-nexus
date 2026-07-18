import React, { useState } from 'react';
import Logo from './Logo';
import { SERVICES, INDUSTRIES } from '../data';
import { Send, MapPin, Phone, Mail, Globe, Shield, Scale, ChevronRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectService: (serviceId: string) => void;
}

export default function Footer({ setActiveTab, onSelectService }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#0B1120] text-[#C0C5CE] border-t border-[#C0C5CE]/10 overflow-hidden"
    >
      {/* Connected Nodes Background Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Primary Columns Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Logo & Intro Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Logo variant="full-dark" className="h-16 w-auto" />
            <p className="font-sans text-sm text-[#C0C5CE]/80 leading-relaxed max-w-sm mt-3">
              Elite international software house shaping operational systems, digital transformations, custom ERP setups, and high-performance automated solutions for forward-thinking institutions.
            </p>
            <div className="flex flex-col gap-3 mt-4 text-xs font-mono text-[#C0C5CE]/60">
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                HQ Domain: fjnexus.studio
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                03171027397
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#D4AF37]" />
                muhammadshayan09277@gmail.com
              </span>
            </div>
          </div>

          {/* Core Services Links Col */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-[#C0C5CE]/10 pb-2">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3 text-xs font-sans">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv.id)}
                    className="hover:text-[#D4AF37] hover:translate-x-1 transition-all flex items-center gap-1.5 text-left"
                  >
                    <ChevronRight className="h-3 w-3 text-[#D4AF37]" />
                    {srv.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-[#00C2FF] font-semibold hover:underline"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions / Industries Links Col */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-[#C0C5CE]/10 pb-2">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3 text-xs font-sans">
              {INDUSTRIES.slice(0, 5).map((ind) => (
                <li key={ind.id}>
                  <button
                    onClick={() => handleLinkClick('industries')}
                    className="hover:text-[#D4AF37] hover:translate-x-1 transition-all flex items-center gap-1.5 text-left"
                  >
                    <ChevronRight className="h-3 w-3 text-[#D4AF37]" />
                    {ind.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup Col */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white border-b border-[#C0C5CE]/10 pb-2">
              Newsletter
            </h4>
            <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed">
              Stay ahead with regular engineering updates, tech reports, and system insights from our creative laboratory.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2" id="newsletter-form">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0A1F44] border border-[#C0C5CE]/20 rounded-lg py-2 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#D4AF37] font-sans"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] rounded-md transition-colors flex items-center justify-center"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>
              {submitted && (
                <span className="text-[10px] text-[#D4AF37] font-mono animate-fade-in">
                  ✓ Successfully subscribed to our ledger list.
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Separator / Disclaimer */}
        <div className="mt-16 pt-8 border-t border-[#C0C5CE]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-sans text-[#C0C5CE]/60">
            <span>© 2026 FJ NEXUS. All rights reserved.</span>
            <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">Company</button>
            <button onClick={() => handleLinkClick('pricing')} className="hover:text-white transition-colors">Pricing</button>
            <a href="https://github.com/Muhammad-Shayan001" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">GitHub</a>
            <a href="https://instagram.com/fjnexus001" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
            <a href="https://linktr.ee/muhammadshayan001" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C2FF] font-semibold transition-colors">Linktree</a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]/80 uppercase">
              Solo-Founder-Led Studio
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
