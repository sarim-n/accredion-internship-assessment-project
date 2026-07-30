'use client';

import React from 'react';
import { LeadCaptureForm } from '@/components/forms/lead-capture-form';
import { 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle,
  Building,
  GraduationCap,
  Users2
} from 'lucide-react';

export const LeadCaptureSection: React.FC = () => {
  return (
    <section id="lead-capture-section" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-[#F0F6FF] to-white relative overflow-hidden">
      {/* Background Decorative Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#1D61E7]/12 to-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1D61E7] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast-Track Enterprise Upskilling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Ready to Upskill Your Enterprise Workforce? <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#1D61E7] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Get a Customized Learning Proposal
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Partner with Accredian’s corporate learning strategists to design a high-impact AI, Data, and Leadership roadmap tailored specifically for your team.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Value Highlights & Trust Features */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Value Banner Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-blue-100/90 shadow-[0_10px_30px_rgba(29,97,231,0.06)] space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#1D61E7]" />
                Why Leading Enterprises Choose Accredian
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D61E7] shrink-0 mt-0.5 border border-blue-100">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">24-Hour Custom Proposal</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Receive tailored cohort curriculum, milestone schedules, and transparent corporate pricing within one business day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D61E7] shrink-0 mt-0.5 border border-blue-100">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Global University Credentials</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Co-certified certifications backed by premier academic institutions & industry experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D61E7] shrink-0 mt-0.5 border border-blue-100">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Pre & Post Skill Benchmarking</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Measure employee proficiency gains with real-world capstone projects and baseline assessment diagnostics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#1D61E7] shrink-0 mt-0.5 border border-blue-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Enterprise NDA & Data Privacy</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Strict compliance with corporate security protocols, custom LMS integrations, and data protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Social Proof Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1D61E7] to-indigo-600 text-white flex items-center justify-between shadow-lg shadow-blue-500/20">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-300 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-blue-100 uppercase tracking-wider">Enterprise Rating</p>
                  <p className="text-sm font-bold">4.9/5 Across 100+ Cohorts</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs font-medium bg-white/15 px-3 py-1.5 rounded-full backdrop-blur-xs">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>Verified Partners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Glass Lead Capture Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_-10px_rgba(29,97,231,0.12)] border border-blue-100 relative overflow-hidden backdrop-blur-xl">
              
              {/* Top Accent Gradient Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D61E7] via-sky-400 to-indigo-600" />

              <div className="mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Connect With Our Learning Team
                  </h3>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    ● Advisors Online
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out your corporate details below to receive a custom capability assessment & schedule a consultation.
                </p>
              </div>

              {/* Lead Capture Form */}
              <LeadCaptureForm variant="inline" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
