import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { SERVICES, INDUSTRIES } from '../data';
import { ChevronDown, AlignRight, X, Sparkles, MessageSquare } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onSelectService: (serviceId: string) => void;
}

export default function Header({ activeTab, setActiveTab, onOpenConsultation, onSelectService }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'industries' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleServiceClick = (serviceId: string) => {
    onSelectService(serviceId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'pt-4 px-4 sm:px-6 lg:px-8' : 'pt-7 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-[#041126]/85 backdrop-blur-xl border border-white/10 shadow-[0_16px_50px_rgba(0,0,0,0.6)] py-4.5 px-8'
            : 'bg-[#041126]/40 backdrop-blur-md border border-white/5 py-6 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Horizontal Lockup */}
          <div
            className="cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
            onClick={() => handleTabClick('home')}
            id="header-logo-container"
          >
            <Logo variant="full-dark" className="h-16 w-auto" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5" id="desktop-nav">
            
            {/* Home */}
            <button
              onClick={() => handleTabClick('home')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'home' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">Home</span>
            </button>

            {/* Services Mega Menu Trigger */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 flex items-center gap-1.5 transition-all duration-300 ${
                  activeDropdown === 'services' || activeTab.startsWith('service-')
                    ? 'active text-white font-bold'
                    : 'text-[#C0C5CE]/80 hover:text-white'
                }`}
              >
                <span className="gold-shimmer-text">Services</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${
                  activeDropdown === 'services' ? 'rotate-180 text-[#D4AF37]' : 'text-[#C0C5CE]/60'
                }`} />
              </button>

              {/* Mega Dropdown Panel */}
              {activeDropdown === 'services' && (
                <div
                  id="services-mega-menu"
                  className="absolute top-full -left-24 w-[520px] bg-[#0B1120]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-[0_24px_50px_rgba(0,0,0,0.6)] grid grid-cols-2 gap-4 mt-2 transition-all duration-300 animate-fade-in"
                >
                  <div className="col-span-2 pb-2.5 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#D4AF37] animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">FJ Nexus Core Specs</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#D4AF37]">PRODUCTION READY</span>
                  </div>
                  {SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => handleServiceClick(srv.id)}
                      className="group/item flex flex-col p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 cursor-pointer transition-all duration-200"
                    >
                      <span className="font-sans font-bold text-xs text-white group-hover/item:text-[#D4AF37] transition-colors">
                        {srv.title}
                      </span>
                      <span className="text-[10px] text-[#C0C5CE]/70 mt-1 line-clamp-1">
                        {srv.description}
                      </span>
                    </div>
                  ))}
                  <div className="col-span-2 pt-2.5 border-t border-white/10 text-center">
                    <button
                      onClick={() => handleTabClick('services')}
                      className="text-[10px] font-bold text-[#00C2FF] hover:text-[#00C2FF]/80 tracking-widest uppercase transition-colors"
                    >
                      View All 24+ Custom Specializations →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown Trigger */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 flex items-center gap-1.5 transition-all duration-300 ${
                  activeDropdown === 'industries' || activeTab === 'industries'
                    ? 'active text-white font-bold'
                    : 'text-[#C0C5CE]/80 hover:text-white'
                }`}
              >
                <span className="gold-shimmer-text">Solutions</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${
                  activeDropdown === 'industries' ? 'rotate-180 text-[#D4AF37]' : 'text-[#C0C5CE]/60'
                }`} />
              </button>

              {/* Solutions Dropdown Panel */}
              {activeDropdown === 'industries' && (
                <div
                  id="industries-mega-menu"
                  className="absolute top-full -left-12 w-[340px] bg-[#0B1120]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4.5 shadow-[0_24px_50px_rgba(0,0,0,0.6)] flex flex-col gap-1.5 mt-2 transition-all duration-300 animate-fade-in"
                >
                  <div className="pb-2 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C0C5CE]">Industry Alignments</span>
                    <span className="text-[9px] font-mono text-[#00C2FF]">Active SLA</span>
                  </div>
                  {INDUSTRIES.map((ind) => (
                    <div
                      key={ind.id}
                      onClick={() => {
                        setActiveDropdown(null);
                        handleTabClick('industries');
                      }}
                      className="group/ind flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 cursor-pointer transition-all duration-200"
                    >
                      <span className="font-sans font-medium text-xs text-white group-hover/ind:text-[#D4AF37] transition-colors">
                        {ind.title}
                      </span>
                      <span className="text-[9px] font-mono text-[#C0C5CE]/40 group-hover/ind:text-[#D4AF37]/60">→</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/10 text-center">
                    <button
                      onClick={() => handleTabClick('industries')}
                      className="text-[10px] font-bold text-[#00C2FF] hover:text-[#00C2FF]/80 tracking-widest uppercase transition-colors"
                    >
                      Browse Industry Blueprints →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <button
              onClick={() => handleTabClick('portfolio')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'portfolio' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">Case Studies</span>
            </button>

            {/* About */}
            <button
              onClick={() => handleTabClick('about')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'about' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">About</span>
            </button>

            {/* Pricing */}
            <button
              onClick={() => handleTabClick('pricing')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'pricing' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">Pricing</span>
            </button>

            {/* Careers */}
            <button
              onClick={() => handleTabClick('careers')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'careers' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">Careers</span>
            </button>

            {/* Insights */}
            <button
              onClick={() => handleTabClick('blog')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'blog' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">Insights</span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleTabClick('contact')}
              className={`gold-shimmer-hover relative font-sans font-medium text-xs tracking-widest uppercase py-2.5 px-3.5 transition-all duration-300 group ${
                activeTab === 'contact' ? 'active text-white font-bold' : 'text-[#C0C5CE]/80 hover:text-white'
              }`}
            >
              <span className="gold-shimmer-text">Contact</span>
            </button>
          </nav>

          {/* Consultation Button Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="header-consultation-btn"
              onClick={onOpenConsultation}
              className="relative font-sans font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B38F1E] text-[#0A1F44] rounded-lg transition-all duration-300 hover:scale-[1.04] shadow-[0_4px_16px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.4)] flex items-center gap-2 border border-[#F9E79F]/40 cursor-pointer overflow-hidden group"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Book free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#C0C5CE] hover:text-white p-2.5 focus:outline-none rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> : <AlignRight className="h-5 w-5 transition-transform duration-300 hover:rotate-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Floating Mobile Nav Drawer Card */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-4 right-4 bg-[#0B1120]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 space-y-4 shadow-2xl mt-2 animate-fade-in"
        >
          <nav className="flex flex-col gap-1 text-sm">
            <button
              onClick={() => handleTabClick('home')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'home' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleTabClick('services')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                activeTab === 'services' || activeTab.startsWith('service-') ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              <span>Services</span>
              <span className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{SERVICES.length} Specs</span>
            </button>
            <button
              onClick={() => handleTabClick('industries')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                activeTab === 'industries' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              <span>Solutions</span>
              <span className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{INDUSTRIES.length} Sectors</span>
            </button>
            <button
              onClick={() => handleTabClick('portfolio')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'portfolio' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleTabClick('about')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'about' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleTabClick('pricing')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'pricing' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleTabClick('careers')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'careers' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleTabClick('blog')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'blog' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              Insights
            </button>
            <button
              onClick={() => handleTabClick('contact')}
              className={`text-left py-2.5 px-3 rounded-xl transition-all ${
                activeTab === 'contact' ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full text-center py-3 bg-gradient-to-r from-[#D4AF37] to-[#B38F1E] text-[#0A1F44] font-bold text-xs tracking-wider uppercase rounded-xl transition-colors shadow-lg shadow-[#D4AF37]/20 border border-[#F9E79F]/30"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}
