'use client';

import React from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { useLeadModal } from '@/context/modal-context';

export const TopBanner: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-slate-100 text-xs py-2 px-4 border-b border-blue-500/20 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2">
          <span className="bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-blue-400/30">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Enterprise Q3 Cohort
          </span>
          <span className="text-slate-300 hidden md:inline">
            Custom Executive Upskilling in AI & Data Science in partnership with top IIMs & IITs.
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-300 font-medium">
          <a
            href="tel:+918001234567"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 hidden lg:flex"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>+91 (800) 123-4567</span>
          </a>
          <button
            onClick={() => openLeadModal('Enterprise Consultation')}
            className="text-cyan-400 hover:text-white font-semibold flex items-center gap-1 hover:underline cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
