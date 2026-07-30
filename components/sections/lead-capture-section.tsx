'use client';

import React from 'react';
import { LeadCaptureForm } from '@/components/forms/lead-capture-form';
import { Sparkles, Building2, Users, ShieldCheck, Award } from 'lucide-react';

export const LeadCaptureSection: React.FC = () => {
  return (
    <section id="lead-form" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1D61E7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Social Proof */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D61E7]/20 border border-[#1D61E7]/40 text-[#4B83FB] text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Corporate Upskilling Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transform Your Workforce With <span className="text-[#3B82F6]">Tailored AI & Tech Programs</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Connect with our enterprise learning experts to design a customized upskilling road map for your teams. Fill out the form to request a consultation, sample curriculum, or cohort pricing.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                <Building2 className="w-6 h-6 text-[#3B82F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Customized Curriculum</h4>
                  <p className="text-xs text-slate-400">Tailored case studies & industry real-world projects.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                <Users className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Cohort Assessment</h4>
                  <p className="text-xs text-slate-400">Pre-training skill benchmarking & progress tracking.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                <Award className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Global University Certification</h4>
                  <p className="text-xs text-slate-400">Co-branded certificates with top academic partners.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Enterprise Privacy</h4>
                  <p className="text-xs text-slate-400">NDA compliant & secure corporate data handling.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Lead Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Request Custom Enterprise Training
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below to receive a custom proposal & schedule a discovery call.
                </p>
              </div>

              <LeadCaptureForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
