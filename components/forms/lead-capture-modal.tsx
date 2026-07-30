'use client';

import React from 'react';
import Image from 'next/image';
import { X, Sparkles, Building2 } from 'lucide-react';
import { useLeadModal } from '@/context/modal-context';
import { LeadCaptureForm } from '@/components/forms/lead-capture-form';

export const LeadCaptureModal: React.FC = () => {
  const { isLeadModalOpen, closeLeadModal } = useLeadModal();

  if (!isLeadModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={closeLeadModal}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side Corporate Office Image & Overlay (Hidden on mobile) */}
        <div className="hidden md:block md:w-5/12 relative bg-slate-900 overflow-hidden">
          <Image
            src="/enquire-now-bg.png"
            alt="Accredian Modern Corporate Enterprise Office"
            fill
            sizes="40vw"
            className="object-cover opacity-90 scale-105"
            priority
          />

          {/* Dark Gradient Overlay & Text Badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold self-start border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Enterprise Upskilling</span>
            </div>

            <div className="space-y-2 text-white">
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Accredian Enterprise</span>
              </div>
              <h4 className="text-xl font-bold text-white leading-tight">
                Empower Your Team With High-Impact Learning
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our corporate advisors to get a custom roadmap and cohort proposal.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto relative bg-white">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">Enquire Now</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill out the form below to connect with an enterprise learning strategist.
              </p>
            </div>
            <button
              onClick={closeLeadModal}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <LeadCaptureForm onSuccess={closeLeadModal} variant="modal" />
        </div>
      </div>
    </div>
  );
};
