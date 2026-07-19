import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, Loader2, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('software-dev');
  const [budget, setBudget] = useState('growth');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');


  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, service, budget, message })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Connection failure.');
      }

      setSuccessMsg(data.message);
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Server under maintenance. Please email muhammadshayan09277@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-panel">
      
      {/* Left Column: Validation Contact Form */}
      <div className="lg:col-span-7 bg-[#0A1F44]/45 border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 shadow-xl">
        <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight">
          Request a Consultation
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/80 mt-2 leading-relaxed">
          Fill out the secure ledger below. A Senior Systems Consultant will analyze your parameters and schedule a free scoping session.
        </p>

        <form onSubmit={handleContactSubmit} className="flex flex-col gap-5 mt-8" id="scoping-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Muhammad Shayan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0B1120] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Corporate Email *</label>
              <input
                type="email"
                required
                placeholder="shayan@fjnexus.studio"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0B1120] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company / Institution Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Company Name</label>
              <input
                type="text"
                placeholder="Apex Healthcare Group"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-[#0B1120] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            {/* Service Pillar */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-white">Service Interest</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-[#0B1120] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="software-dev">Custom Software Engineering</option>
                <option value="school-erp">School ERP Systems</option>
                <option value="hospital-erp">Hospital Management ERP</option>
                <option value="pos-system">Point of Sale (POS)</option>
                <option value="crm-software">CRM & Sales Pipelines</option>
                <option value="ai-automation">AI & Workflow Automation</option>
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-white">Target Budget Threshold</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="bg-[#0B1120] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="starter">Starter Pilot (PKR 1.5M - 4.5M)</option>
              <option value="growth">Accelerated Expansion (PKR 4.5M - 12M)</option>
              <option value="enterprise">Corporate Enterprise (PKR 12M+)</option>
              <option value="not-sure">Undetermined Scopes</option>
            </select>
          </div>

          {/* Message Prompt */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-white">Brief Scoping Instructions *</label>
            <textarea
              required
              rows={4}
              placeholder="Outline project deliverables, timeline expectations, or security clearances needed..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#0B1120] border border-[#C0C5CE]/20 rounded-lg py-2.5 px-3 text-xs text-white placeholder-[#C0C5CE]/40 focus:outline-none focus:border-[#D4AF37] resize-none leading-relaxed transition-colors"
            />
          </div>

          {/* Submit Actions */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto self-start mt-2 py-3 px-6 bg-[#D4AF37] hover:bg-[#F9E79F] disabled:bg-[#0B1120] text-[#0A1F44] disabled:text-[#C0C5CE]/40 font-sans font-bold text-xs tracking-wider uppercase rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Transmitting Scoping Parameters...
              </>
            ) : (
              <>
                Submit Scoping Request
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>

          {/* Feedback messages */}
          {successMsg && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg text-xs leading-relaxed font-sans">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-xs leading-relaxed font-sans">
              {errorMsg}
            </div>
          )}
        </form>
      </div>

      {/* Right Column: Calendly-like Interactive consultation scheduler & office details */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        
        {/* Office details */}
        <div className="flex flex-col gap-5 bg-[#0B1120]/40 border border-[#C0C5CE]/5 rounded-xl p-6">
          <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wide">
            Direct Studio Intake
          </h4>
          <div className="flex flex-col gap-4 text-xs font-sans">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">HQ Domain</span>
                <span className="text-[#C0C5CE]/85 mt-1 block">
                  fjnexus.studio — Solo-Founder-Led Studio
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">WhatsApp & Phone</span>
                <span className="text-[#C0C5CE]/85 mt-0.5 block">03171027397</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">Direct Communications</span>
                <span className="text-[#C0C5CE]/85 mt-0.5 block">muhammadshayan09277@gmail.com</span>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}
