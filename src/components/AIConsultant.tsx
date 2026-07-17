import React, { useState } from 'react';
import { ProjectEstimate } from '../types';
import { Sparkles, ArrowRight, Loader2, Cpu, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function AIConsultant() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('schools');
  const [budget, setBudget] = useState('growth');
  const [serviceType, setServiceType] = useState('software-dev');
  
  const [loading, setLoading] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [estimate, setEstimate] = useState<ProjectEstimate | null>(null);
  const [error, setError] = useState('');

  // Sample templates to pre-fill the consultant
  const TEMPLATES = [
    {
      label: 'School ERP',
      name: 'Oakridge Academy ERP',
      desc: 'Create an educational portal for 1,200 students. Needs attendance tracking, online fee payment with credit card integration, automated report card generators, parent portals, and a mobile-friendly staff schedule planner.',
      ind: 'schools',
      service: 'school-erp',
      budget: 'growth'
    },
    {
      label: 'Hospital CRM',
      name: 'St. Mary Specialized Clinic Care',
      desc: 'Build a HIPAA-compliant medical scheduler. Doctors should see their rosters on tablet screens, patients should book online appointments, and laboratory results should securely sync with patient electronic health records (EHR).',
      ind: 'hospitals',
      service: 'hospital-erp',
      budget: 'enterprise'
    },
    {
      label: 'Retail Multi-POS',
      name: 'MetroMart Chain POS System',
      desc: 'Develop an offline-resilient POS register for 3 grocery store locations. Need live centralized inventory syncing, barcode scanners, multi-drawer billing counters, and customer frequency loyalty report logs.',
      ind: 'retail',
      service: 'pos-system',
      budget: 'growth'
    }
  ];

  const handleTemplateSelect = (tmpl: typeof TEMPLATES[0]) => {
    setProjectName(tmpl.name);
    setDescription(tmpl.desc);
    setIndustry(tmpl.ind);
    setServiceType(tmpl.service);
    setBudget(tmpl.budget);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName || !description) return;

    setLoading(true);
    setError('');
    setEstimate(null);
    setProgressStep(0);

    // Simulate progress stages to feel like a multi-million dollar tech firm system
    const intervals = [
      setTimeout(() => setProgressStep(1), 800),
      setTimeout(() => setProgressStep(2), 1800),
      setTimeout(() => setProgressStep(3), 2800),
    ];

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName,
          description,
          industry,
          budget,
          serviceType
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to connect with AI Systems.');
      }

      setEstimate(data.estimate);
    } catch (err: any) {
      setError(err.message || 'The FJ Nexus AI Engine is currently processing peak loads. Please try again.');
    } finally {
      intervals.forEach(clearTimeout);
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#0B1120] rounded-2xl border border-[#C0C5CE]/10 overflow-hidden shadow-2xl relative" id="ai-consultant">
      
      {/* Visual Header Strip with AI Badge */}
      <div className="bg-gradient-to-r from-[#6C5CE7] to-[#00C2FF] p-4 sm:p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-md">
            <Cpu className="h-6 w-6 text-white animate-pulse" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-base sm:text-lg text-white">
              AI Project Architecture Estimator
            </h3>
            <p className="text-[11px] text-white/80 font-sans tracking-wide">
              Power by FJ Nexus Automation Core & Gemini 3.5
            </p>
          </div>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
          <Sparkles className="h-3 w-3 text-[#D4AF37] animate-spin" />
          SYSTEM ONLINE
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Parameters Form */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C0C5CE]">Quick Presets</span>
            <div className="flex flex-wrap gap-2">
              {TEMPLATES.map((tmpl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleTemplateSelect(tmpl)}
                  className="px-3 py-1.5 bg-[#0A1F44] hover:bg-[#1E3A8A] text-[#C0C5CE] hover:text-white border border-[#C0C5CE]/15 text-[11px] font-sans font-medium rounded-lg transition-all"
                >
                  {tmpl.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleGenerate} className="flex flex-col gap-4">
            
            {/* Project Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Project Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Oakridge Academy ERP"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="bg-[#0A1F44] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#00C2FF] transition-all"
              />
            </div>

            {/* Select Industry */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white">Sector / Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="bg-[#0A1F44] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-2 text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                >
                  <option value="schools">Schools / Academies</option>
                  <option value="hospitals">Hospitals & Clinics</option>
                  <option value="restaurants">Restaurants</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="retail">Retail Stores</option>
                  <option value="enterprise">Corporate Enterprise</option>
                </select>
              </div>

              {/* Service Focus */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white">Service Pillar</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="bg-[#0A1F44] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-2 text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                >
                  <option value="software-dev">Custom Software</option>
                  <option value="school-erp">School ERP</option>
                  <option value="hospital-erp">Hospital ERP</option>
                  <option value="pos-system">POS System</option>
                  <option value="crm-software">CRM Software</option>
                  <option value="ai-automation">AI & Automation</option>
                </select>
              </div>
            </div>

            {/* Budget Bracket */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Project Budget Scale</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'starter', label: 'Starter ($5K - $15K)' },
                  { value: 'growth', label: 'Growth ($15K - $40K)' },
                  { value: 'enterprise', label: 'Enterprise ($40K+)' }
                ].map((b) => (
                  <button
                    key={b.value}
                    type="button"
                    onClick={() => setBudget(b.value)}
                    className={`py-2 px-2 border rounded-lg text-[10px] font-semibold text-center transition-all ${
                      budget === b.value
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#0A1F44] border-[#C0C5CE]/10 text-[#C0C5CE] hover:text-white'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Project description requirements */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Detailed Scope of Work</label>
              <textarea
                required
                rows={5}
                placeholder="Briefly explain the functional requirements, active users, reporting panels, systems to migrate, or visual targets..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-[#0A1F44] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#00C2FF] resize-none leading-relaxed transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 px-5 bg-gradient-to-r from-[#D4AF37] to-[#F9E79F] hover:from-[#F9E79F] hover:to-[#D4AF37] disabled:from-[#0A1F44] disabled:to-[#0A1F44] text-[#0A1F44] disabled:text-[#C0C5CE] font-sans font-bold text-xs tracking-wider uppercase rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Engineering Architectural Core...
                </>
              ) : (
                <>
                  Generate Custom Software Proposal
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Right Side: Estimates Output */}
        <div className="lg:col-span-7 flex flex-col justify-center min-h-[420px] bg-[#0A1F44]/50 border border-[#C0C5CE]/10 rounded-xl p-6 relative">
          
          {/* Default Placeholder State */}
          {!loading && !estimate && !error && (
            <div className="flex flex-col items-center justify-center text-center p-8 gap-4 max-w-md mx-auto">
              <div className="bg-[#1E3A8A]/20 p-4 rounded-full border border-[#2F80ED]/30">
                <Zap className="h-8 w-8 text-[#00C2FF] animate-bounce" />
              </div>
              <h4 className="font-sans font-bold text-white text-base">
                Architectural Ledger Ready
              </h4>
              <p className="font-sans text-xs text-[#C0C5CE]/80 leading-relaxed">
                Provide your parameters on the left or click a quick template preset to generate an elite structural estimation report.
              </p>
            </div>
          )}

          {/* Loading Animation & Logs State */}
          {loading && (
            <div className="flex flex-col items-center justify-center p-8 gap-6 text-center max-w-sm mx-auto">
              <Loader2 className="h-10 w-10 text-[#D4AF37] animate-spin" />
              
              <div className="flex flex-col gap-2 font-sans">
                <h4 className="font-bold text-white text-sm">
                  Connecting with FJ NEXUS AI Engine
                </h4>
                
                {/* Progress Log Lines */}
                <div className="flex flex-col gap-1.5 text-left font-mono text-[10px] text-[#C0C5CE]/80 bg-[#0A1F44] border border-[#C0C5CE]/10 rounded-lg p-3 w-64">
                  <span className={progressStep >= 0 ? 'text-[#00C2FF]' : 'text-gray-600'}>
                    ● Initializing system audit...
                  </span>
                  <span className={progressStep >= 1 ? 'text-[#00C2FF]' : 'text-gray-600'}>
                    ● Parsing database schema constraints...
                  </span>
                  <span className={progressStep >= 2 ? 'text-[#00C2FF]' : 'text-[#D4AF37] animate-pulse'}>
                    ● Mapping module developmental sprints...
                  </span>
                  <span className={progressStep >= 3 ? 'text-green-400' : 'text-gray-600'}>
                    ● Finalizing architectural cost ledger...
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Error Display State */}
          {error && (
            <div className="flex flex-col items-center justify-center text-center p-8 gap-4 max-w-sm mx-auto">
              <div className="bg-red-500/15 p-3 rounded-full border border-red-500/30">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <h4 className="font-sans font-bold text-white text-sm">System Overload</h4>
              <p className="font-sans text-xs text-red-400/90 leading-relaxed">{error}</p>
            </div>
          )}

          {/* Successful Estimation Proposal Report! */}
          {estimate && (
            <div className="flex flex-col gap-6 animate-fade-in" id="estimate-report">
              
              {/* Report Header Block */}
              <div className="border-b border-[#C0C5CE]/15 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-bold font-mono tracking-widest uppercase text-[#D4AF37]">
                    PROPOSAL BLUEPRINT
                  </span>
                  <h4 className="font-sans font-extrabold text-white text-lg tracking-tight mt-1">
                    {estimate.projectName}
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-3 py-1 rounded-md">
                    <span className="text-[10px] font-mono text-[#D4AF37] font-semibold uppercase block">Cost Range</span>
                    <span className="text-xs font-bold text-white">{estimate.costEstimation}</span>
                  </div>
                  <div className="bg-[#00C2FF]/15 border border-[#00C2FF]/30 px-3 py-1 rounded-md">
                    <span className="text-[10px] font-mono text-[#00C2FF] font-semibold uppercase block">Timeline</span>
                    <span className="text-xs font-bold text-white">{estimate.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Architectural Overview Block */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-[#C0C5CE]/80 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-green-400" />
                  Recommended Core Architecture
                </span>
                <p className="font-sans text-xs text-[#C0C5CE] leading-relaxed bg-[#0A1F44] border border-[#C0C5CE]/10 rounded-lg p-3">
                  {estimate.recommendedArchitecture}
                </p>
              </div>

              {/* Modular Breakdown List */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#C0C5CE]/80 font-bold uppercase tracking-wider">
                  Operational Sprint Modules
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {estimate.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="bg-[#0A1F44]/40 border border-[#C0C5CE]/5 rounded-lg p-3 hover:border-[#00C2FF]/35 transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="font-sans font-bold text-xs text-white block">
                          {mod.name}
                        </span>
                        <p className="font-sans text-[11px] text-[#C0C5CE]/85 mt-1 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                      <span className="text-[9px] font-mono text-[#00C2FF] font-semibold bg-[#00C2FF]/10 self-start px-2 py-0.5 rounded-full mt-2">
                        {mod.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used Grid */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-[#C0C5CE]/80 font-bold uppercase tracking-wider">
                  Suggested Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {estimate.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#1E3A8A]/30 border border-[#2F80ED]/20 text-[10px] font-mono text-white rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strategic Risk Warning */}
              {estimate.risks && estimate.risks.length > 0 && (
                <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-3 flex gap-2.5">
                  <AlertTriangle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1 text-[11px]">
                    <span className="font-sans font-bold text-white uppercase">Architect Advisory Risk Parameters</span>
                    {estimate.risks.map((risk, i) => (
                      <span key={i} className="text-[#C0C5CE]/90 leading-relaxed block">
                        • {risk}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
