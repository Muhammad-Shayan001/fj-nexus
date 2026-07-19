import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ServiceDetail from './components/ServiceDetail';
import Logo from './components/Logo';
import { SERVICES, INDUSTRIES, PROJECTS, TEAM, BLOGS, JOBS } from './data';
import { Service, Project, Industry, JobRole, BlogPost } from './types';
import { 
  Sparkles, ArrowRight, ShieldCheck, Heart, Users, Compass, 
  MapPin, Phone, Mail, ChevronRight, HelpCircle, GraduationCap, 
  Activity, BookOpen, Utensils, Home, ShoppingBag, Terminal, CheckCircle2,
  TrendingUp, Award, Clock, ArrowUpRight, Zap, Briefcase, FileText
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeHeroNode, setActiveHeroNode] = useState<'hub' | 'erp' | 'clinic' | 'pos' | 'ai'>('hub');
  
  // Scopes Filter for Portfolio
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  // Blog category filter
  const [blogFilter, setBlogFilter] = useState('all');

  // Contact form triggers
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Animated numbers state for statistics counter
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [industriesCount, setIndustriesCount] = useState(0);
  const [uptimeCount, setUptimeCount] = useState(0);

  useEffect(() => {
    // Scroll to top on tab change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Clear individual service view when swapping tabs
    if (!activeTab.startsWith('service-')) {
      setSelectedService(null);
    }
  }, [activeTab]);

  useEffect(() => {
    // Counter animations for homepage stats
    if (activeTab === 'home') {
      const duration = 1200;
      const steps = 30;
      const stepTime = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setDeliveredCount(Math.min(150, Math.floor((150 / steps) * step)));
        setIndustriesCount(Math.min(40, Math.floor((40 / steps) * step)));
        setUptimeCount(Number((90 + (9.9 / steps) * step).toFixed(1)));
        
        if (step >= steps) {
          clearInterval(interval);
          setDeliveredCount(150);
          setIndustriesCount(40);
          setUptimeCount(99.9);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Handle service selection from grids
  const handleSelectServiceById = (serviceId: string) => {
    const srv = SERVICES.find(s => s.id === serviceId);
    if (srv) {
      setSelectedService(srv);
      setActiveTab(`service-${serviceId}`);
    }
  };

  // Handler to quickly trigger contact & scroll
  const triggerConsultation = () => {
    setActiveTab('contact');
    setTimeout(() => {
      const el = document.getElementById('contact-panel');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const filteredProjects = portfolioFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.industry.toLowerCase().includes(portfolioFilter));

  const filteredBlogs = blogFilter === 'all'
    ? BLOGS
    : BLOGS.filter(b => b.category.toLowerCase().includes(blogFilter.toLowerCase()));

  return (
    <div className="bg-[#0A1F44] min-h-screen text-[#C0C5CE] flex flex-col font-sans antialiased">
      


      {/* Primary Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenConsultation={triggerConsultation}
        onSelectService={handleSelectServiceById}
      />

      {/* Main Body Switcher */}
      <main className="flex-grow">
        
        {/* Dynamic Individual Service Template Details */}
        {activeTab.startsWith('service-') && selectedService && (
          <ServiceDetail 
            service={selectedService} 
            onBack={() => setActiveTab('services')} 
            onOpenConsultation={triggerConsultation} 
          />
        )}

        {/* 1. HOMEPAGE VIEW */}
        {activeTab === 'home' && (
          <div id="homepage-view" className="animate-fade-in">
            
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 bg-[#0A1F44] border-b border-[#C0C5CE]/10">
              {/* Subtle ambient lighting layers */}
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1E3A8A]/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00C2FF]/15 rounded-full blur-[100px] mix-blend-screen pointer-events-none translate-y-1/3"></div>
              <div className="absolute inset-0 bg-dot-texture opacity-[0.05] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1F44]/50 to-[#0A1F44] pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side: Pitch copy */}
                <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase text-[#D4AF37] self-start shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                    </span>
                    <span>SOLO-FOUNDER-LED STUDIO • GLOBAL ENTERPRISE ENG</span>
                  </div>
                  
                  <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.12]">
                    Software that moves your business{' '}
                    <span className="relative inline-block py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#B38F1E]">
                      forward.
                    </span>{' '}
                    <span className="text-[#C0C5CE]/60">Not sideways.</span>
                  </h1>
                  
                  <p className="font-sans text-sm sm:text-base text-[#C0C5CE]/85 leading-relaxed max-w-2xl mt-1">
                    Bespoke, elite enterprise databases, HIPAA-compliant hospital clinical workflows, synchronized multi-branch retail POS networks, and server-side AI integrations engineered for standalone data security.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-3">
                    <button
                      onClick={triggerConsultation}
                      className="relative px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B38F1E] hover:from-[#F9E79F] hover:to-[#D4AF37] text-[#0A1F44] font-sans font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:scale-[1.03] flex items-center gap-2 border border-[#F9E79F]/30 cursor-pointer overflow-hidden group"
                    >
                      <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                      <span>Book a Free Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab('portfolio')}
                      className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02] cursor-pointer"
                    >
                      Explore Our Work
                    </button>
                  </div>

                  {/* Micro Trust Indicators under buttons */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#C0C5CE]/50">
                      <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                      <span>No Templates • 100% Hand-Crafted</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#C0C5CE]/50">
                      <ShieldCheck className="h-4 w-4 text-[#00C2FF]" />
                      <span>Complete Data Isolation Vault</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Abstract Interactive SVG Node Network */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative z-10">
                  <div className="absolute inset-0 bg-[#00C2FF]/10 rounded-full filter blur-3xl opacity-35 pointer-events-none"></div>
                  
                  {/* Interactive Diagram Container */}
                  <div className="w-full max-w-[380px] bg-[#0B1120]/45 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl relative group/card hover:border-[#D4AF37]/35 transition-all duration-500">
                    
                    {/* Floating Glow Indicator */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-[8px] font-mono text-[#C0C5CE]/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-ping" />
                      <span>LIVE SYSTEM ARCH</span>
                    </div>

                    <h3 className="text-xs font-mono font-bold text-white tracking-widest uppercase mb-4 text-[#C0C5CE]/60">
                      Interactive Architecture Blueprint
                    </h3>

                    {/* SVG Graphic with Node Interactions */}
                    <svg viewBox="0 0 400 400" className="w-full h-auto relative">
                      <defs>
                        <linearGradient id="activeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#00C2FF" />
                        </linearGradient>
                        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="8" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      
                      {/* Grid Lines */}
                      <line x1="50" y1="200" x2="350" y2="200" stroke="#C0C5CE" strokeOpacity="0.06" strokeDasharray="5,5" />
                      <line x1="200" y1="50" x2="200" y2="350" stroke="#C0C5CE" strokeOpacity="0.06" strokeDasharray="5,5" />
                      
                      {/* Outer connecting network rings */}
                      <circle cx="200" cy="200" r="110" fill="none" stroke="#C0C5CE" strokeOpacity="0.04" strokeWidth="1" />
                      <circle cx="200" cy="200" r="145" fill="none" stroke="#C0C5CE" strokeOpacity="0.03" strokeWidth="1" />

                      {/* Connection lines to Central Hub */}
                      <line 
                        x1="200" y1="200" x2="110" y2="110" 
                        stroke={activeHeroNode === 'erp' ? 'url(#activeGlow)' : '#C0C5CE'} 
                        strokeOpacity={activeHeroNode === 'erp' ? '0.8' : '0.15'} 
                        strokeWidth={activeHeroNode === 'erp' ? '3' : '1.5'} 
                        className="transition-all duration-300"
                      />
                      <line 
                        x1="200" y1="200" x2="290" y2="110" 
                        stroke={activeHeroNode === 'clinic' ? 'url(#activeGlow)' : '#C0C5CE'} 
                        strokeOpacity={activeHeroNode === 'clinic' ? '0.8' : '0.15'} 
                        strokeWidth={activeHeroNode === 'clinic' ? '3' : '1.5'} 
                        className="transition-all duration-300"
                      />
                      <line 
                        x1="200" y1="200" x2="110" y2="290" 
                        stroke={activeHeroNode === 'pos' ? 'url(#activeGlow)' : '#C0C5CE'} 
                        strokeOpacity={activeHeroNode === 'pos' ? '0.8' : '0.15'} 
                        strokeWidth={activeHeroNode === 'pos' ? '3' : '1.5'} 
                        className="transition-all duration-300"
                      />
                      <line 
                        x1="200" y1="200" x2="290" y2="290" 
                        stroke={activeHeroNode === 'ai' ? 'url(#activeGlow)' : '#C0C5CE'} 
                        strokeOpacity={activeHeroNode === 'ai' ? '0.8' : '0.15'} 
                        strokeWidth={activeHeroNode === 'ai' ? '3' : '1.5'} 
                        className="transition-all duration-300"
                      />

                      {/* Nodes */}
                      
                      {/* 1. ERP ENGINE (Top-Left) */}
                      <g 
                        className="cursor-pointer group/node" 
                        onMouseEnter={() => setActiveHeroNode('erp')}
                        onClick={() => setActiveHeroNode('erp')}
                      >
                        <circle 
                          cx="110" cy="110" r="28" 
                          fill={activeHeroNode === 'erp' ? '#1E3A8A' : '#0B1120'} 
                          stroke={activeHeroNode === 'erp' ? '#D4AF37' : '#C0C5CE'} 
                          strokeOpacity={activeHeroNode === 'erp' ? '1' : '0.25'} 
                          strokeWidth="2" 
                          className="transition-all duration-300"
                        />
                        <text x="110" y="114" fill={activeHeroNode === 'erp' ? '#D4AF37' : '#C0C5CE'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ERP</text>
                        {activeHeroNode === 'erp' && (
                          <circle cx="110" cy="110" r="34" fill="none" stroke="#D4AF37" strokeOpacity="0.4" strokeWidth="1" className="animate-ping" />
                        )}
                      </g>

                      {/* 2. CLINICAL EHR (Top-Right) */}
                      <g 
                        className="cursor-pointer group/node" 
                        onMouseEnter={() => setActiveHeroNode('clinic')}
                        onClick={() => setActiveHeroNode('clinic')}
                      >
                        <circle 
                          cx="290" cy="110" r="28" 
                          fill={activeHeroNode === 'clinic' ? '#1E3A8A' : '#0B1120'} 
                          stroke={activeHeroNode === 'clinic' ? '#00C2FF' : '#C0C5CE'} 
                          strokeOpacity={activeHeroNode === 'clinic' ? '1' : '0.25'} 
                          strokeWidth="2" 
                          className="transition-all duration-300"
                        />
                        <text x="290" y="114" fill={activeHeroNode === 'clinic' ? '#00C2FF' : '#C0C5CE'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EHR</text>
                        {activeHeroNode === 'clinic' && (
                          <circle cx="290" cy="110" r="34" fill="none" stroke="#00C2FF" strokeOpacity="0.4" strokeWidth="1" className="animate-ping" />
                        )}
                      </g>

                      {/* 3. POS NETWORK (Bottom-Left) */}
                      <g 
                        className="cursor-pointer group/node" 
                        onMouseEnter={() => setActiveHeroNode('pos')}
                        onClick={() => setActiveHeroNode('pos')}
                      >
                        <circle 
                          cx="110" cy="290" r="28" 
                          fill={activeHeroNode === 'pos' ? '#1E3A8A' : '#0B1120'} 
                          stroke={activeHeroNode === 'pos' ? '#2F80ED' : '#C0C5CE'} 
                          strokeOpacity={activeHeroNode === 'pos' ? '1' : '0.25'} 
                          strokeWidth="2" 
                          className="transition-all duration-300"
                        />
                        <text x="110" y="294" fill={activeHeroNode === 'pos' ? '#2F80ED' : '#C0C5CE'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">POS</text>
                        {activeHeroNode === 'pos' && (
                          <circle cx="110" cy="290" r="34" fill="none" stroke="#2F80ED" strokeOpacity="0.4" strokeWidth="1" className="animate-ping" />
                        )}
                      </g>

                      {/* 4. AI CORE (Bottom-Right) */}
                      <g 
                        className="cursor-pointer group/node" 
                        onMouseEnter={() => setActiveHeroNode('ai')}
                        onClick={() => setActiveHeroNode('ai')}
                      >
                        <circle 
                          cx="290" cy="290" r="28" 
                          fill={activeHeroNode === 'ai' ? '#1E3A8A' : '#0B1120'} 
                          stroke={activeHeroNode === 'ai' ? '#6C5CE7' : '#C0C5CE'} 
                          strokeOpacity={activeHeroNode === 'ai' ? '1' : '0.25'} 
                          strokeWidth="2" 
                          className="transition-all duration-300"
                        />
                        <text x="290" y="294" fill={activeHeroNode === 'ai' ? '#6C5CE7' : '#C0C5CE'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">AI</text>
                        {activeHeroNode === 'ai' && (
                          <circle cx="290" cy="290" r="34" fill="none" stroke="#6C5CE7" strokeOpacity="0.4" strokeWidth="1" className="animate-ping" />
                        )}
                      </g>

                      {/* 5. FJ CENTRAL HUB (Center) */}
                      <g 
                        className="cursor-pointer" 
                        onMouseEnter={() => setActiveHeroNode('hub')}
                        onClick={() => setActiveHeroNode('hub')}
                      >
                        <circle 
                          cx="200" cy="200" r="38" 
                          fill="#0A1F44" 
                          stroke="url(#activeGlow)" 
                          strokeWidth="3.5" 
                          filter={activeHeroNode === 'hub' ? 'url(#glowFilter)' : ''}
                          className="transition-all duration-500"
                        />
                        <circle cx="200" cy="200" r="8" fill="#F9E79F" />
                        <text x="200" y="252" fill="#C0C5CE" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="1.5">NEXUS CORE</text>
                      </g>
                    </svg>

                    {/* Spec details dashboard overlay panel */}
                    <div className="mt-4 p-3.5 bg-[#0A1F44]/80 border border-white/10 rounded-xl flex flex-col gap-1 transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase font-bold">
                          {activeHeroNode === 'hub' && 'NEXUS Hub Core'}
                          {activeHeroNode === 'erp' && 'Custom ERP Engine'}
                          {activeHeroNode === 'clinic' && 'Clinical EHR Vault'}
                          {activeHeroNode === 'pos' && 'POS Sync Gateway'}
                          {activeHeroNode === 'ai' && 'AI Fine-Tuning Module'}
                        </span>
                        <span className="text-[8px] font-mono text-[#00C2FF] bg-[#00C2FF]/10 px-1.5 py-0.5 rounded uppercase font-bold">
                          {activeHeroNode === 'hub' && 'Active Hub'}
                          {activeHeroNode === 'erp' && 'Latency <12ms'}
                          {activeHeroNode === 'clinic' && 'HIPAA Guard'}
                          {activeHeroNode === 'pos' && 'Offline-First'}
                          {activeHeroNode === 'ai' && 'Inference API'}
                        </span>
                      </div>
                      <h4 className="text-white text-xs font-sans font-bold mt-1">
                        {activeHeroNode === 'hub' && 'Distributed High-Security Cloud'}
                        {activeHeroNode === 'erp' && 'High-Fidelity Database Architecture'}
                        {activeHeroNode === 'clinic' && 'Secure Clinical Workflow Systems'}
                        {activeHeroNode === 'pos' && 'Multi-Branch POS Network Registry'}
                        {activeHeroNode === 'ai' && 'Autonomous Server-Side LLM fine-tunes'}
                      </h4>
                      <p className="text-[10px] text-[#C0C5CE]/80 font-sans mt-0.5 leading-relaxed">
                        {activeHeroNode === 'hub' && 'Centrally routing encrypted state streams with a 99.99% guaranteed SLA uptime. Built for high-volume enterprise commands.'}
                        {activeHeroNode === 'erp' && 'Designed specifically for multi-campus schools and enterprise databases. Replaces sluggish templates with high-performance native queries.'}
                        {activeHeroNode === 'clinic' && 'Ensures absolute physician safety and compliance with integrated health exchange interfaces and offline database backups.'}
                        {activeHeroNode === 'pos' && 'Maintains register databases offline and instantly synchronizes multi-branch ledger systems upon active connection.'}
                        {activeHeroNode === 'ai' && 'Utilizes Gemini 1.5 & custom Llama parameters to automate email drafts, extract clinical fields, or auto-estimate project requirements.'}
                      </p>
                    </div>

                    <div className="mt-3 flex justify-between items-center text-[9px] font-mono text-[#C0C5CE]/40">
                      <span>Interactive Simulation • Hover Nodes</span>
                      <span>SECURE Standalone</span>
                    </div>

                  </div>
                </div>

              </div>
            </section>

            {/* Trust Bar Section / Corporate Clients */}
            <section className="bg-[#0B1120] py-10 border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5">
                <span className="text-[10px] font-mono tracking-widest text-[#C0C5CE]/60 uppercase font-bold">
                  TRUSTED BY LEADING ENTERPRISES, SCHOOLS, AND CLINICS ACROSS EUROPE & ASIA
                </span>
                
                {/* Logo cloud */}
                <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 opacity-35 grayscale mt-2">
                  <span className="font-heading font-black text-sm tracking-widest text-white">APEX CLINIC</span>
                  <span className="font-sans font-bold text-sm tracking-widest text-white">BEACON INTL</span>
                  <span className="font-mono font-bold text-sm tracking-widest text-white">METROMART</span>
                  <span className="font-heading font-extrabold text-sm tracking-widest text-white">OAKRIDGE</span>
                  <span className="font-sans font-medium text-sm tracking-widest text-white">VANCE REALTY</span>
                </div>
              </div>
            </section>

            {/* Stat Counters Section */}
            <section className="bg-[#0A1F44] py-16 sm:py-20 border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                
                <div className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                    {deliveredCount}+
                  </span>
                  <span className="text-xs font-sans text-[#C0C5CE]/80 font-medium">Projects Engineered</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                    {industriesCount}+
                  </span>
                  <span className="text-xs font-sans text-[#C0C5CE]/80 font-medium">Industries Served</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                    {uptimeCount}%
                  </span>
                  <span className="text-xs font-sans text-[#C0C5CE]/80 font-medium">SLA Production Uptime</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                    24/7
                  </span>
                  <span className="text-xs font-sans text-[#C0C5CE]/80 font-medium">SRE Infrastructure Support</span>
                </div>

              </div>
            </section>

            {/* Services Overview section */}
            <section className="py-20 sm:py-28 bg-[#0B1120] border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col items-center text-center gap-3 mb-16">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                    OUR CORE SPECIALIZATIONS
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                    Enterprise Engineering Solutions
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 max-w-xl">
                    Whether modernizing complex multi-campus academies or establishing secure medical EHR servers, we build digital frameworks that deliver outcome-led business metrics.
                  </p>
                </div>

                {/* 6 Grid Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
                  {SERVICES.slice(0, 6).map((srv) => (
                    <div
                      key={srv.id}
                      className="group bg-[#0A1F44]/50 border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[280px]"
                    >
                      <div className="flex flex-col gap-4">
                        <span className="text-[9px] font-mono text-[#D4AF37] font-bold uppercase tracking-wider bg-[#D4AF37]/10 self-start px-2 py-0.5 rounded">
                          {srv.category}
                        </span>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                          {srv.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/80 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#C0C5CE]/5 flex items-center justify-between">
                        <button
                          onClick={() => handleSelectServiceById(srv.id)}
                          className="font-sans font-bold text-xs text-[#00C2FF] group-hover:text-[#D4AF37] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          View System Specs
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                        <span className="text-[10px] font-mono text-[#C0C5CE]/50">SLA Active</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={() => setActiveTab('services')}
                    className="font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 border border-[#C0C5CE]/15 hover:border-[#D4AF37] text-[#C0C5CE] hover:text-white rounded-lg transition-all"
                  >
                    Explore All Specializations ({SERVICES.length}+)
                  </button>
                </div>

              </div>
            </section>

            {/* Flagship ERP Solutions spotlight */}
            <section className="py-20 sm:py-28 bg-[#0A1F44] border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                      FLAGSHIP PLATFORMS
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-2">
                      Targeted Multi-Tenant Verticals
                    </h2>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 max-w-md">
                    Our customized, standalone system designs outperform bloated global subscription packages by tuning directly to native local laws, schedules, and operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* School ERP panel */}
                  <div className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-[#00C2FF] font-bold uppercase bg-[#00C2FF]/10 px-2 py-0.5 rounded">
                          SCHOOL MANAGEMENT
                        </span>
                        <GraduationCap className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                      <h3 className="font-heading font-extrabold text-lg text-white mb-3">
                        Nexus Academy EduConnect ERP
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 leading-relaxed">
                        Unify admissions, tuition invoices with auto-triggered SMS receipts, secure gradebooks, schedules, staff rosters, and mobile parent portals under one seamless, lightweight cloud platform.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 mt-6">
                        {['Parent & Student Portals', 'Tuition Ledger Auto-Invoices', 'Gradebook Exporters', 'Roster Auto-Scheduler'].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-white">
                            <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleSelectServiceById('school-erp')}
                      className="mt-8 py-3 px-5 bg-[#0A1F44] hover:bg-[#1E3A8A] text-[#C0C5CE] hover:text-white border border-[#C0C5CE]/15 rounded-lg text-xs font-semibold text-center transition-all"
                    >
                      View Educational System Blueprint
                    </button>
                  </div>

                  {/* Hospital ERP panel */}
                  <div className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-[#00C2FF] font-bold uppercase bg-[#00C2FF]/10 px-2 py-0.5 rounded">
                          HEALTHCARE SYSTEMS
                        </span>
                        <Activity className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                      <h3 className="font-heading font-extrabold text-lg text-white mb-3">
                        Apex HIPAA-Compliant Healthcare ERP
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 leading-relaxed">
                        Secure, zero-leak medical framework that connects medical profiles, physician schedulers, billing pipelines, pharmacy logs, and telemetry interfaces into a single encrypted server.
                      </p>

                      <div className="grid grid-cols-2 gap-2 mt-6">
                        {['HIPAA/GDPR Security', 'Centralized EHR Records', 'Doctors Shift Roster', 'Pharmacy Stock Track'].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-white">
                            <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleSelectServiceById('hospital-erp')}
                      className="mt-8 py-3 px-5 bg-[#0A1F44] hover:bg-[#1E3A8A] text-[#C0C5CE] hover:text-white border border-[#C0C5CE]/15 rounded-lg text-xs font-semibold text-center transition-all"
                    >
                      View Healthcare System Blueprint
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* Why FJ NEXUS Section */}
            <section className="py-20 sm:py-28 bg-[#0B1120] border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col items-center text-center gap-3 mb-16">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                    OUR BRAND GUARANTEES
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    Engineered For Global Trust
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: 'Enterprise Security', desc: 'Compliant with OWASP top standards, full AES database encryption, and optional on-premise hardware deployments.' },
                    { title: 'Scalable Architecture', desc: 'No-bottleneck servers utilizing microservices and Kubernetes, designed to double throughput seamlessly on peak sales cycles.' },
                    { title: 'Dedicated Support', desc: 'Bespoke maintenance SLAs. Access direct developer support channels via dedicated Telegram, Slack, or hotlines.' },
                    { title: 'Global Delivery', desc: 'Experienced digital consultants bridging international timelines across London, Dubai, Islamabad, and Singapore.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex flex-col gap-3 bg-[#0A1F44]/40 border border-[#C0C5CE]/5 p-6 rounded-xl hover:border-[#D4AF37]/30 transition-all">
                      <div className="bg-[#D4AF37]/10 w-9 h-9 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-white mt-1">
                        {feat.title}
                      </h4>
                      <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Process Section Timeline */}
            <section className="py-20 sm:py-28 bg-[#0A1F44] border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col items-center text-center gap-3 mb-16">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                    SYSTEMATIC EXECUTION
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    The Scoping & Delivery Pipeline
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-12">
                  {[
                    { step: '1. Discover', title: 'Audit Scopes', desc: 'We inventory legacy operations and map structural user paths.' },
                    { step: '2. Design', title: 'UX Prototypes', desc: 'High-fidelity Figma files outlining exact system visual coordinates.' },
                    { step: '3. Develop', title: 'Agile Coding', desc: 'SLA-backed continuous integrations using secure Docker units.' },
                    { step: '4. Deploy', title: 'OWASP Launch', desc: 'Comprehensive penetration scanning followed by global CDN activation.' },
                    { step: '5. Support', title: 'SRE Monitor', desc: 'Continuous backups, threat hunting, and seamless patch runs.' }
                  ].map((p, i) => (
                    <div key={i} className="flex flex-col gap-3 relative">
                      <div className="text-[10px] font-mono text-[#D4AF37] font-extrabold tracking-widest uppercase">
                        {p.step}
                      </div>
                      <h4 className="font-heading font-bold text-sm text-white">
                        {p.title}
                      </h4>
                      <p className="font-sans text-xs text-[#C0C5CE]/85 leading-relaxed">
                        {p.desc}
                      </p>
                      
                      {/* Connection bar on desktop */}
                      {i < 4 && (
                        <div className="hidden md:block absolute top-1.5 left-full w-full h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent z-0 opacity-20"></div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* AI/Automation callout band */}

            {/* Case Studies / Portfolio Preview */}
            <section className="py-20 sm:py-28 bg-[#0B1120] border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                      PROVEN COMMERCIAL METRICS
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-2">
                      Elite Portfolio Showcases
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className="font-sans font-bold text-xs text-[#00C2FF] hover:underline flex items-center gap-1"
                  >
                    Browse Complete Portfolio Index ({PROJECTS.length}+ Case Studies) →
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.id}
                      className="bg-[#0A1F44] border border-[#C0C5CE]/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
                    >
                      <div className="p-6 sm:p-8 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono text-[#00C2FF] uppercase font-bold">
                            {proj.industry}
                          </span>
                          <span className="text-[10px] font-mono text-[#D4AF37] font-bold bg-[#D4AF37]/10 px-2.5 py-1 rounded">
                            {proj.metric}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                          {proj.title}
                        </h3>
                        <p className="font-sans text-xs text-[#C0C5CE]/85 leading-relaxed line-clamp-3">
                          {proj.solution}
                        </p>
                      </div>

                      <div className="bg-[#0B1120]/40 p-6 border-t border-[#C0C5CE]/10 text-center">
                        <button
                          onClick={() => {
                            setActiveTab('portfolio');
                          }}
                          className="font-sans font-bold text-xs text-white hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1 cursor-pointer"
                        >
                          Deconstruct Operational Results
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Testimonials Carousel Section */}
            <section className="py-20 sm:py-28 bg-[#0A1F44] border-b border-[#C0C5CE]/10">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                  CLIENT TESTIMONIAL VERDICTS
                </span>
                
                <div className="relative p-6 sm:p-8 bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl shadow-2xl">
                  <p className="font-sans italic text-base sm:text-lg text-white leading-relaxed">
                    "FJ NEXUS unifies corporate reliability with advanced AI capabilities. They delivered a centralized Hospital ERP that completely streamlined our patient scheduling and saved us hundreds of staff administrative hours."
                  </p>
                  
                  <div className="flex flex-col items-center gap-2 mt-8 border-t border-[#C0C5CE]/10 pt-6">
                    <span className="font-heading font-bold text-xs text-white">
                      Dr. Evelyn Foster
                    </span>
                    <span className="text-[10px] font-mono text-[#C0C5CE]/70 uppercase">
                      Chief Medical Officer, Apex Healthcare Group
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Insights / Blog preview */}
            <section className="py-20 sm:py-28 bg-[#0B1120] border-b border-[#C0C5CE]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                      OUR RECENT INTEL
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-2">
                      Technical Ledger & Insights
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveTab('blog')}
                    className="font-sans font-bold text-xs text-[#00C2FF] hover:underline"
                  >
                    View All Articles →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {BLOGS.map((blog) => (
                    <div
                      key={blog.id}
                      className="group bg-[#0A1F44] border border-[#C0C5CE]/10 rounded-xl overflow-hidden hover:border-[#00C2FF]/40 transition-all flex flex-col justify-between"
                    >
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#C0C5CE]/75">
                          <span>{blog.category}</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {blog.title}
                        </h4>
                        <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed mt-1 line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>

                      <div className="p-6 border-t border-[#C0C5CE]/5 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#C0C5CE]/60">By {blog.author}</span>
                        <button
                          onClick={() => setActiveTab('blog')}
                          className="text-[#00C2FF] font-semibold group-hover:underline"
                        >
                          Read Article →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* CTA Scoping Consultation Band */}
            <section className="bg-gradient-to-r from-[#0A1F44] via-[#1E3A8A] to-[#0A1F44] py-20 border-b border-[#C0C5CE]/10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-dot-texture pointer-events-none"></div>
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E79F] to-[#D4AF37] font-mono text-xs font-bold uppercase tracking-widest block">
                  LET'S BUILD WHAT'S NEXT
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Modernize operations. Secure database pipelines.
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/90 leading-relaxed max-w-xl mx-auto">
                  FJ NEXUS engineers custom multi-tenant backends, HIPAA medical ERPs, and fast POS pipelines backed by complete source-code ownership.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <button
                    onClick={triggerConsultation}
                    className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] font-sans font-bold text-xs tracking-wider uppercase rounded-lg transition-all shadow-xl"
                  >
                    Schedule Free Consultation Call
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('ai-consultant');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-lg transition-all border border-white/10"
                  >
                    Try AI Blueprint Estimator
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* 2. SERVICES DIRECTORY HUB TAB */}
        {activeTab === 'services' && (
          <div id="services-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                COMPLETE ENGINEERING INDEX
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Our Functional Capabilities
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                We engineer standalone platforms that completely bypass cookie-cutter SaaS subscription traps. Select any specialization to view timeline maps, security standards, and tech stacks.
              </p>
            </div>

            {/* Categorized Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 hover:border-[#D4AF37]/45 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-mono text-[#00C2FF] bg-[#00C2FF]/10 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        {srv.category}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/80 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#C0C5CE]/5 flex items-center justify-between">
                    <button
                      onClick={() => handleSelectServiceById(srv.id)}
                      className="font-sans font-bold text-xs text-[#00C2FF] hover:text-[#D4AF37] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Learn System Specs →
                    </button>
                    <span className="text-[10px] font-mono text-[#C0C5CE]/60">SLA Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. INDUSTRIES / SOLUTIONS TAB */}
        {activeTab === 'industries' && (
          <div id="solutions-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                SECTOR ALIGNMENTS
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Industry-Specific Platforms
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                We design ERP architectures, multi-tenant databases, and custom user portals aligned directly to your target sector rules and laws.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.id}
                  className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[320px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#D4AF37]/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                      {ind.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/80 leading-relaxed">
                      {ind.details}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#C0C5CE]/10 flex flex-col gap-2">
                    <span className="text-[10px] font-mono text-white font-bold uppercase tracking-wider block">Engineered Modules</span>
                    <div className="flex flex-col gap-1.5 mt-1">
                      {ind.solutions.map((sol, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#C0C5CE]/85">
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                          {sol}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. PORTFOLIO CASE STUDIES TAB */}
        {activeTab === 'portfolio' && (
          <div id="portfolio-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-12">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                SLA COMMERCIAL OUTCOMES
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Case Studies & Portfolio
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                Explore real, objective developmental challenge reports, engineered architectures, and outcomes we delivered for global enterprise clients.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {['all', 'hospital', 'school', 'estate'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-xs font-sans font-bold uppercase tracking-wider transition-all border ${
                    portfolioFilter === filter
                      ? 'bg-[#D4AF37] text-[#0A1F44] border-[#D4AF37]'
                      : 'bg-[#0B1120] text-[#C0C5CE] border-[#C0C5CE]/10 hover:border-white'
                  }`}
                >
                  {filter === 'all' ? 'All Systems' : filter + 's'}
                </button>
              ))}
            </div>

            {/* Deconstructed detailed case studies cards */}
            <div className="flex flex-col gap-12">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl"
                >
                  <div className="lg:col-span-7 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#00C2FF] font-semibold uppercase tracking-wider block">
                        Client: {proj.client}
                      </span>
                      <span className="text-xs font-mono text-[#D4AF37] font-bold bg-[#D4AF37]/10 px-3 py-1 rounded">
                        Outcome: {proj.metric}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                      {proj.title}
                    </h3>
                    
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="bg-[#0A1F44] p-4 rounded-xl border border-[#C0C5CE]/10 text-xs text-[#C0C5CE] leading-relaxed">
                        <span className="font-sans font-bold text-white block mb-1">Operational challenge</span>
                        {proj.challenge}
                      </div>
                      
                      <div className="bg-[#0A1F44] p-4 rounded-xl border border-[#C0C5CE]/10 text-xs text-[#C0C5CE] leading-relaxed">
                        <span className="font-sans font-bold text-white block mb-1">Engineered custom solution</span>
                        {proj.solution}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <span className="text-[11px] font-mono text-[#C0C5CE] uppercase tracking-wider font-bold">Results ledger</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {proj.results.map((res, i) => (
                          <div key={i} className="flex items-center gap-2 bg-[#0A1F44]/50 border border-[#C0C5CE]/5 p-3 rounded-lg text-xs text-white">
                            <CheckCircle2 className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                            {res}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Client Testimonial card */}
                  <div className="lg:col-span-5 bg-[#0A1F44] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between min-h-[260px] relative">
                    <p className="font-sans italic text-xs sm:text-sm text-white/90 leading-relaxed">
                      "{proj.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3 border-t border-[#C0C5CE]/10 pt-4 mt-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#00C2FF] flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-xs text-white block">
                          {proj.testimonial.author}
                        </span>
                        <span className="text-[9px] font-mono text-[#C0C5CE]/75 mt-0.5 block">
                          {proj.testimonial.role}, {proj.testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. ABOUT COMPANY TAB */}
        {activeTab === 'about' && (
          <div id="about-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                CORPORATE MISSION
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                About FJ NEXUS
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                We are a global software house of elite architects and digital consultants engineering high-security ERP platforms and AI tools.
              </p>
            </div>

            {/* Vision Mission Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-8">
                <Compass className="h-8 w-8 text-[#D4AF37] mb-4" />
                <h3 className="font-heading font-extrabold text-lg text-white mb-2">Our Vision</h3>
                <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 leading-relaxed">
                  To become one of the world's leading boutique software companies by delivering elite, high-fidelity systems, automation models, and custom ERP software that completely empowers corporate scaling.
                </p>
              </div>

              <div className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-8">
                <Users className="h-8 w-8 text-[#D4AF37] mb-4" />
                <h3 className="font-heading font-extrabold text-lg text-white mb-2">Our Mission</h3>
                <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 leading-relaxed">
                  To replace bloated software subscription systems with reliable, high-performance standalone architectures that clients own 100%. We secure databases and optimize human-centric UX models.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="flex flex-col gap-6 mb-20">
              <h2 className="font-heading font-extrabold text-xl text-white tracking-tight uppercase border-b border-[#C0C5CE]/10 pb-2">
                Our Foundational Guardrails
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: 'Architectural Honesty', desc: 'No bloated tech jargon or false metrics. We build exactly what is scoped, using robust, readable, and clean codebases.' },
                  { title: 'Absolute Data Security', desc: 'Compliant with HIPAA, GDPR, and OWASP. We build zero-leak database wrappers to safeguard institutional assets.' },
                  { title: 'Outcome-Led Engineering', desc: 'Every line of code and UI pixel is designed to drive a direct objective client metric, e.g. reducing administrative hours.' }
                ].map((val, i) => (
                  <div key={i} className="bg-[#0A1F44] border border-[#C0C5CE]/5 p-6 rounded-xl hover:border-[#D4AF37]/25 transition-all">
                    <h4 className="font-heading font-bold text-sm text-white">{val.title}</h4>
                    <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed mt-2">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Team Grid */}
            <div className="flex flex-col gap-6 mb-16">
              <h2 className="font-heading font-extrabold text-xl text-white tracking-tight uppercase border-b border-[#C0C5CE]/10 pb-2">
                Executive Leadership
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {TEAM.map((member) => (
                  <div key={member.id} className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl overflow-hidden shadow-lg hover:border-[#D4AF37]/35 transition-all">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-48 object-cover opacity-85 hover:opacity-100 transition-opacity"
                    />
                    <div className="p-6 flex flex-col gap-2">
                      <span className="font-heading font-bold text-xs text-[#D4AF37] uppercase tracking-wide font-mono">{member.role}</span>
                      <h4 className="font-heading font-extrabold text-base text-white">{member.name}</h4>
                      <p className="font-sans text-xs text-[#C0C5CE]/85 leading-relaxed mt-1">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. TIERED PRICING COMPARISON TAB */}
        {activeTab === 'pricing' && (
          <div id="pricing-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                COMMERCIAL CLARITY
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Predictable Scalable Pricing
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                Simple, clear developmental budgets. No monthly per-user license traps. Full IP and source code ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-20">
              
              {/* Starter Package Card */}
              <div className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-[#C0C5CE]/60 uppercase tracking-widest">STARTER PILOT</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-white">$12,500</span>
                    <span className="text-xs text-[#C0C5CE]/60">Flat One-Time</span>
                  </div>
                  <p className="font-sans text-xs text-[#C0C5CE]/85 leading-relaxed mt-1">
                    Perfect for startups launching a custom SaaS mockup, a standalone POS checkout terminal, or an early MVP.
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-4 border-t border-[#C0C5CE]/15 pt-4 text-xs">
                    {['Single View Frontend Layout', 'JWT Secure Session Login', 'Relational database (PostgreSQL)', 'Continuous 30-day bug warranty'].map((f) => (
                      <span key={f} className="flex items-center gap-2 text-[#C0C5CE]/80">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={triggerConsultation}
                  className="w-full mt-8 py-3 bg-[#0A1F44] hover:bg-[#1E3A8A] border border-[#C0C5CE]/15 hover:border-[#D4AF37] text-white rounded-lg text-xs font-bold uppercase transition-all"
                >
                  Initiate Pilot Package
                </button>
              </div>

              {/* Growth Package Card */}
              <div className="bg-[#0B1120] border-2 border-[#D4AF37] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[490px] shadow-2xl relative">
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-[#D4AF37] text-[#0A1F44] font-mono text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded">
                  MOST POPULAR SYSTEM
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">ACCELERATED EXPANSION</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-white">$32,000</span>
                    <span className="text-xs text-[#C0C5CE]/60">Flat One-Time</span>
                  </div>
                  <p className="font-sans text-xs text-[#C0C5CE]/85 leading-relaxed mt-1">
                    Designed for established educational campuses, specialized clinics, and multi-branch retail registers.
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-4 border-t border-[#C0C5CE]/15 pt-4 text-xs">
                    {['Dynamic admin dashboards', 'Online payment gateway gates', 'SLA-backed microservices', 'Complete source-code IP buyout', 'Continuous 90-day patch warranty'].map((f) => (
                      <span key={f} className="flex items-center gap-2 text-[#C0C5CE]/90">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={triggerConsultation}
                  className="w-full mt-8 py-3 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] rounded-lg text-xs font-bold uppercase transition-all shadow-lg"
                >
                  Initiate System Scopes
                </button>
              </div>

              {/* Enterprise Package Card */}
              <div className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-[#C0C5CE]/60 uppercase tracking-widest">CORPORATE CUSTOM</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-black text-2xl text-white">Custom Quote</span>
                  </div>
                  <p className="font-sans text-xs text-[#C0C5CE]/85 leading-relaxed mt-1">
                    Bespoke high-exposure medical clinics, multi-campus university modules, and complex legacy migrations.
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-4 border-t border-[#C0C5CE]/15 pt-4 text-xs">
                    {['Zero-trust security vaults', 'Automated LLM workflow integrations', 'On-Premise hardware installs', 'Direct SRE hotlines', 'Bespoke maintenance SLAs'].map((f) => (
                      <span key={f} className="flex items-center gap-2 text-[#C0C5CE]/80">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={triggerConsultation}
                  className="w-full mt-8 py-3 bg-[#0A1F44] hover:bg-[#1E3A8A] border border-[#C0C5CE]/15 hover:border-[#D4AF37] text-white rounded-lg text-xs font-bold uppercase transition-all"
                >
                  Request Custom Quote
                </button>
              </div>

            </div>
          </div>
        )}

        {/* 7. RECENT BLOG INSIGHTS TAB */}
        {activeTab === 'blog' && (
          <div id="blog-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                ENGINEERING INTELLIGENCE
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Technical Ledger & Insights
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOGS.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl overflow-hidden hover:border-[#00C2FF]/35 transition-all flex flex-col justify-between"
                >
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#C0C5CE]/65">
                      <span>{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base text-white tracking-tight leading-snug">
                      {blog.title}
                    </h3>
                    <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="p-6 border-t border-[#C0C5CE]/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#C0C5CE]/60">Written by {blog.author}</span>
                    <span className="text-[#00C2FF] font-bold">{blog.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. CAREERS TAB */}
        {activeTab === 'careers' && (
          <div id="careers-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                JOIN OUR RETAIL LABS
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Build Digital Futures
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                We are actively looking for elite software architects, AI integration engineers, and human-centric designers to craft secure global platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
              {JOBS.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs font-mono">
                      <span className="text-[#D4AF37] font-bold">{job.department}</span>
                      <span className="text-[#00C2FF] font-semibold">{job.location}</span>
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-3">
                      {job.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-col gap-2 mt-6">
                      <span className="text-[10px] font-mono text-white uppercase font-bold tracking-wider">Candidate Requirements</span>
                      <div className="flex flex-col gap-1.5 mt-1 text-xs">
                        {job.requirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-2 text-[#C0C5CE]/80 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={triggerConsultation}
                    className="w-full mt-8 py-3 bg-[#0A1F44] hover:bg-[#1E3A8A] text-[#C0C5CE] hover:text-white border border-[#C0C5CE]/15 rounded-lg text-xs font-bold uppercase transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            
            {/* Internship program callout */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0A1F44] border border-[#C0C5CE]/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 max-w-4xl mx-auto">
              <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-widest uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/10">
                FJ NEXUS FELLOWSHIP PROGRAM
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white">
                Undergraduate Systems Fellowship
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/85 leading-relaxed max-w-xl">
                A highly intensive, paid, 6-month developmental sandbox program designed for computer science and design graduates to work on real HIPAA-compliant medical servers, microservice integrations, and model parameters.
              </p>
              <button
                onClick={triggerConsultation}
                className="mt-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] rounded-lg text-xs font-bold uppercase transition-all shadow-lg"
              >
                Inquire About Internship
              </button>
            </div>
          </div>
        )}

        {/* 9. CONTACT CENTER TAB */}
        {activeTab === 'contact' && (
          <div id="contact-tab-view" className="pt-28 pb-20 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold">
                COMMERCIAL INTAKE
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Secure Scoping Channels
              </h1>
              <p className="font-sans text-sm text-[#C0C5CE]/90 max-w-xl">
                Initiate contact with our Senior Architects. Schedule scoped evaluations, analyze legacy networks, and secure developmental timelines.
              </p>
            </div>

            {/* Split layout Contact Form */}
            <ContactForm />
          </div>
        )}

        {/* 10. PREMIUM UTILITY PAGES TOGGLER (FOR SCREENSHOT/PREVIEW DEMO) */}
        {['404', 'coming-soon', 'maintenance'].includes(activeTab) && (
          <div className="pt-32 pb-24 flex items-center justify-center min-h-[600px] bg-[#0A1F44] px-4 animate-fade-in">
            <div className="max-w-md w-full bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-8 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#00C2FF] to-[#D4AF37]"></div>
              
              <Logo variant="icon" className="h-16 w-16" />
              
              {activeTab === '404' && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-[#D4AF37] font-bold tracking-widest uppercase">ERROR 404: ADVISORY BROKEN</span>
                  <h1 className="font-heading font-black text-2xl text-white tracking-tight">Coordinate Void</h1>
                  <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed mt-1">
                    The sector path you are trying to intercept does not exist in our systems. It may have been retired or shifted under different security clearances.
                  </p>
                </div>
              )}

              {activeTab === 'coming-soon' && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-[#00C2FF] font-bold tracking-widest uppercase">PIPELINE UNRELEASED</span>
                  <h1 className="font-heading font-black text-2xl text-white tracking-tight">System Provisioning</h1>
                  <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed mt-1">
                    Our AI engineers are compiling this specialized microservice segment. The OWASP penetration scanning will initiate shortly.
                  </p>
                </div>
              )}

              {activeTab === 'maintenance' && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-orange-400 font-bold tracking-widest uppercase">SRE LOCKDOWN ACTIVE</span>
                  <h1 className="font-heading font-black text-2xl text-white tracking-tight">Database Scrubbing</h1>
                  <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed mt-1">
                    Our server registers are currently undergoing scheduled compliance ledger backup runs. Our direct support Telegram remains active.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                <button
                  onClick={() => setActiveTab('home')}
                  className="flex-1 py-2.5 px-4 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] font-sans font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  Return HQ Home
                </button>
                <button
                  onClick={triggerConsultation}
                  className="flex-1 py-2.5 px-4 bg-transparent hover:bg-white/10 text-white border border-[#C0C5CE]/15 text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                >
                  Contact SRE Sprints
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Corporate Utility Previews (Quick Anchor Rail in Footer Area) */}
      <div className="bg-[#0B1120] border-t border-[#C0C5CE]/5 py-4 px-4 sm:px-6 text-center z-40 relative">
        <span className="text-[10px] font-mono tracking-wider text-[#C0C5CE]/60 mr-4">PREVIEW UTILITY MODULES:</span>
        <div className="inline-flex gap-4">
          <button onClick={() => setActiveTab('404')} className="text-[10px] font-mono text-[#00C2FF] hover:underline">404 Page</button>
          <button onClick={() => setActiveTab('coming-soon')} className="text-[10px] font-mono text-[#00C2FF] hover:underline">Coming Soon</button>
          <button onClick={() => setActiveTab('maintenance')} className="text-[10px] font-mono text-[#00C2FF] hover:underline">Maintenance</button>
        </div>
      </div>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} onSelectService={handleSelectServiceById} />

    </div>
  );
}
