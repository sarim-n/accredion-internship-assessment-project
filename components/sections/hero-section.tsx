'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '@/config/landing-data';
import { useLeadModal } from '@/context/modal-context';

export const HeroSection: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section
      id="home"
      className="w-full bg-[#F8FAFC] flex items-center justify-center min-h-[calc(100vh-56px)]"
    >
      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Floating Light Blue Hero Card */}
        <div className="bg-[#EBF3FF] rounded-[32px] border border-[#D0E2FF] shadow-[0_16px_50px_-10px_rgba(29,97,231,0.14)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-10 sm:py-14 px-6 sm:px-10 lg:px-14">
            
            {/* Copy Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-slate-900 tracking-tight leading-[1.14]">
                {HERO_DATA.titleStart}{' '}
                <span className="text-[#1D61E7]">{HERO_DATA.titleHighlight1}</span>
                <br />
                {HERO_DATA.titleMiddle}{' '}
                <span className="text-[#1D61E7]">{HERO_DATA.titleHighlight2}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium max-w-xl leading-relaxed">
                {HERO_DATA.subtitle}
              </p>

              {/* Checklist */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 text-sm font-semibold text-slate-800 pt-1">
                {HERO_DATA.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 fill-emerald-100 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => openLeadModal('Hero Enquire Now')}
                  className="px-8 py-3.5 bg-[#1D61E7] hover:bg-[#154ec2] text-white font-semibold text-base rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
                >
                  {HERO_DATA.ctaText}
                </button>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center">
                <Image
                  src="/download.webp"
                  alt="Accredian Enterprise Upskilling"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

