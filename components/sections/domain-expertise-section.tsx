'use client';

import React from 'react';
import { DOMAIN_EXPERTISE_CARDS } from '@/config/landing-data';
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Cog,
  Globe,
  CreditCard,
} from 'lucide-react';
import { useLeadModal } from '@/context/modal-context';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-8 h-8 text-[#1D61E7]" />,
  Brain: <Brain className="w-8 h-8 text-[#1D61E7]" />,
  Users: <Users className="w-8 h-8 text-[#1D61E7]" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-[#1D61E7]" />,
  Cog: <Cog className="w-8 h-8 text-[#1D61E7]" />,
  Globe: <Globe className="w-8 h-8 text-[#1D61E7]" />,
  CreditCard: <CreditCard className="w-8 h-8 text-[#1D61E7]" />,
};

export const DomainExpertiseSection: React.FC = () => {
  const { openLeadModal } = useLeadModal();

  const mainSix = DOMAIN_EXPERTISE_CARDS.slice(0, 6);
  const seventhCard = DOMAIN_EXPERTISE_CARDS[6];

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Our <span className="text-[#1D61E7]">Domain Expertise</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-1">
            <span className="text-[#1D61E7] font-semibold">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        {/* 7 Cards Container */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* First 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {mainSix.map((card) => (
              <div
                key={card.id}
                onClick={() => openLeadModal(`Domain: ${card.title}`)}
                className="bg-white rounded-xl px-5 py-5 shadow-[0_4px_20px_rgba(29,97,231,0.06)] border border-slate-200/80 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
              >
                <div className="p-1 group-hover:scale-110 transition-transform duration-200">
                  {iconMap[card.iconName]}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>

          {/* 7th Centered Card */}
          {seventhCard && (
            <div className="flex justify-center">
              <div
                onClick={() => openLeadModal(`Domain: ${seventhCard.title}`)}
                className="w-full sm:w-[calc(33.33%-0.875rem)] max-w-xs bg-white rounded-xl px-5 py-5 shadow-[0_4px_20px_rgba(29,97,231,0.06)] border border-slate-200/80 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-lg hover:border-blue-300 transition-all duration-200 cursor-pointer group"
              >
                <div className="p-1 group-hover:scale-110 transition-transform duration-200">
                  {iconMap[seventhCard.iconName]}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {seventhCard.title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
