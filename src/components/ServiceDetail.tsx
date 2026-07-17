import React from 'react';
import { Service, Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck, Cpu, Database, HelpCircle, Layers } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onOpenConsultation: () => void;
}

export default function ServiceDetail({ service, onBack, onOpenConsultation }: ServiceDetailProps) {
  // Cross-reference any matching project / case study
  const relatedProject = PROJECTS.find(proj => proj.service === service.title) || PROJECTS[0];

  return (
    <div className="bg-[#0A1F44] min-h-screen text-[#C0C5CE] pt-24 pb-16" id={`service-detail-${service.id}`}>
      
      {/* 1. Service Hero section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#C0C5CE]/10">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1E3A8A]/30 filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#00C2FF]/10 filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#00C2FF] hover:text-[#D4AF37] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Service Directory
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-[#D4AF37] bg-[#D4AF37]/10 self-start px-2.5 py-1 rounded-md border border-[#D4AF37]/10">
                FJ NEXUS SPECIALIZATION
              </span>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#C0C5CE]/90 leading-relaxed max-w-xl">
                {service.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] font-sans font-semibold text-xs tracking-wider uppercase rounded-lg transition-all duration-300 shadow-lg shadow-[#D4AF37]/10 flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Initiate Scoping Consultation
                </button>
                <div className="flex items-center gap-2 bg-[#0B1120]/45 border border-[#C0C5CE]/10 px-4 py-2.5 rounded-lg text-xs font-mono text-[#C0C5CE]">
                  <Layers className="h-4 w-4 text-[#00C2FF]" />
                  Pricing: {service.pricing}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B1120] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-[#C0C5CE] block border-b border-[#C0C5CE]/10 pb-2 mb-4">
                TECHNOLOGY BLUEPRINT
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Engineered Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {service.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-[#0A1F44] border border-[#C0C5CE]/15 text-[10px] font-mono text-[#C0C5CE] rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <Database className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">SLA Deliverable Standard</span>
                    <span className="text-[11px] text-[#C0C5CE]/85 mt-1 block leading-relaxed">
                      All custom software modules are fully documented, containerized with Docker, covered by a 99.9% uptime SLA, and feature full source-code ownership transmission.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Modules / What's Included */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-sans font-extrabold text-2xl text-white tracking-tight">
              What Is Included In This Pillar
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/80 leading-relaxed">
              We compile comprehensive, high-fidelity blueprints. Every development package features secure configurations, administrative dashboards, and full API integration.
            </p>
            
            <div className="flex flex-col gap-3.5 mt-4">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#0B1120]/30 border border-[#C0C5CE]/5 rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-white leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service development timeline process */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-8">
            <h2 className="font-sans font-extrabold text-2xl text-white tracking-tight">
              Deployment Roadmap
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#C0C5CE]/80 leading-relaxed">
              Our 5-stage architectural pipeline ensures pixel-perfect and highly secure delivery on-time.
            </p>

            <div className="flex flex-col gap-4 mt-4 relative pl-4 border-l border-[#C0C5CE]/15">
              {service.process.map((step, i) => (
                <div key={i} className="relative flex items-start gap-4">
                  {/* Circle number */}
                  <div className="absolute -left-[27px] bg-[#0A1F44] border-2 border-[#D4AF37] w-5 h-5 rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-bold text-[#D4AF37]">{i + 1}</span>
                  </div>
                  <div>
                    <span className="font-sans font-bold text-xs sm:text-sm text-white block">
                      {step}
                    </span>
                    <span className="text-[11px] text-[#C0C5CE]/80 mt-0.5 block leading-relaxed">
                      SLA-backed deliverables compiled and benchmarked against rigorous OWASP safety audits.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Cross-Referenced Case Study Section */}
      {relatedProject && (
        <section className="bg-[#0B1120] py-16 sm:py-24 border-t border-b border-[#C0C5CE]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 mb-12">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                PROVEN RESULTS
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Case Study In Action
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-7 flex flex-col gap-5">
                <span className="text-xs font-mono text-[#00C2FF] font-semibold uppercase tracking-wider block">
                  {relatedProject.client}
                </span>
                <h3 className="font-sans font-bold text-xl text-white tracking-tight leading-snug">
                  {relatedProject.title}
                </h3>
                <div className="bg-[#0A1F44] p-4 rounded-xl border border-[#C0C5CE]/10 text-xs text-[#C0C5CE] leading-relaxed">
                  <span className="font-sans font-bold text-white block mb-1">Operational Challenge</span>
                  {relatedProject.challenge}
                </div>
                <div className="bg-[#0A1F44] p-4 rounded-xl border border-[#C0C5CE]/10 text-xs text-[#C0C5CE] leading-relaxed">
                  <span className="font-sans font-bold text-white block mb-1">Our Solution</span>
                  {relatedProject.solution}
                </div>

                <div className="flex flex-col gap-2.5 mt-2">
                  <span className="text-[11px] font-mono text-[#C0C5CE] uppercase tracking-wider block">Project Impact metrics</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedProject.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#0A1F44]/50 border border-[#C0C5CE]/5 p-3 rounded-lg text-xs font-sans text-white">
                        <CheckCircle2 className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                        {res}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client testimonial card */}
              <div className="lg:col-span-5 bg-[#0A1F44] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col gap-5 relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-9xl font-serif">“</div>
                <p className="font-sans italic text-sm text-white/95 leading-relaxed">
                  "{relatedProject.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-[#C0C5CE]/10 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#00C2FF] flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-xs text-white block">
                      {relatedProject.testimonial.author}
                    </span>
                    <span className="text-[10px] text-[#C0C5CE]/75 mt-0.5 block font-mono">
                      {relatedProject.testimonial.role}, {relatedProject.testimonial.company}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. Service Specific FAQ Section */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <HelpCircle className="h-6 w-6 text-[#D4AF37]" />
          <h2 className="font-sans font-extrabold text-2xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-xs text-[#C0C5CE]/80">
            Answers to crucial commercial and engineering questions for {service.title}.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {service.faq.map((faq, i) => (
            <div key={i} className="bg-[#0B1120] border border-[#C0C5CE]/10 rounded-xl p-5 sm:p-6">
              <span className="font-sans font-bold text-xs sm:text-sm text-white block leading-relaxed">
                Q: {faq.question}
              </span>
              <p className="font-sans text-xs text-[#C0C5CE]/95 mt-2.5 leading-relaxed pl-4 border-l border-[#D4AF37]/40">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0A1F44] to-[#1E3A8A] border border-[#C0C5CE]/10 rounded-2xl p-6 sm:p-8 mt-16 text-center flex flex-col items-center gap-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00C2FF] font-mono text-xs font-bold uppercase tracking-widest block">
            HAVE A UNIQUE REQUIREMENT?
          </span>
          <h3 className="font-sans font-bold text-white text-lg">
            Let's design a custom engineering solution.
          </h3>
          <button
            onClick={onOpenConsultation}
            className="mt-2 px-5 py-3 bg-[#D4AF37] hover:bg-[#F9E79F] text-[#0A1F44] font-sans font-bold text-xs tracking-wider uppercase rounded-lg transition-all"
          >
            Schedule Free Scoping Call
          </button>
        </div>
      </section>

    </div>
  );
}
