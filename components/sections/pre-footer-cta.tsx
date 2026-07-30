'use client';

import React from 'react';
import { Headphones, ChevronRight } from 'lucide-react';
import { useLeadModal } from '@/context/modal-context';

export const PreFooterCTA: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1D61E7] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-6 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mt-1">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => openLeadModal('Contact Us PreFooter')}
              className="px-6 py-3 bg-white text-[#1D61E7] hover:bg-slate-100 font-bold text-sm rounded-lg shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
