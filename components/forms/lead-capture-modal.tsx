'use client';

import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useLeadModal } from '@/context/modal-context';
import { LeadCaptureForm } from '@/components/forms/lead-capture-form';

export const LeadCaptureModal: React.FC = () => {
  const { isLeadModalOpen, closeLeadModal } = useLeadModal();

  if (!isLeadModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in"
      onClick={closeLeadModal}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Handshake Image Column (Hidden on small screens) */}
        <div className="hidden md:block md:w-1/2 relative bg-slate-900 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
            alt="Accredian Team Consultation"
            fill
            sizes="50vw"
            className="object-cover opacity-90"
          />
        </div>

        {/* Right Form Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto relative">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <h3 className="text-2xl font-extrabold text-slate-900">Enquire Now</h3>
            <button
              onClick={closeLeadModal}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <LeadCaptureForm onSuccess={closeLeadModal} />
        </div>
      </div>
    </div>
  );
};
