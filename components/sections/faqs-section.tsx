'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/config/landing-data';
import { ChevronDown } from 'lucide-react';
import { useLeadModal } from '@/context/modal-context';

export const FAQsSection: React.FC = () => {
  const { openLeadModal } = useLeadModal();
  const [activeCategoryId, setActiveCategoryId] = useState<string>('course');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const activeCategory =
    FAQ_DATA.find((cat) => cat.id === activeCategoryId) || FAQ_DATA[0];

  const toggleQuestion = (question: string) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Left-Aligned Header */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#1D61E7]">Questions</span>
          </h2>
        </div>

        {/* 2-Column FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category Selection Buttons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 items-start">
            {FAQ_DATA.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setOpenQuestion(null);
                  }}
                  className={`w-56 py-3.5 px-6 rounded-lg font-bold text-sm text-center transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#1D61E7] border border-transparent shadow-[0_6px_25px_rgba(0,0,0,0.08)]'
                      : 'bg-white border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Right Accordion Questions (8 cols) */}
          <div className="lg:col-span-8 space-y-6 pt-1">
            {activeCategory.items.map((item, idx) => {
              const isOpen = openQuestion === item.question;
              return (
                <div key={idx} className="border-b border-slate-100/80 pb-4">
                  <button
                    onClick={() => toggleQuestion(item.question)}
                    className="w-full text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-6 hover:text-[#1D61E7] transition-colors cursor-pointer py-1"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#1D61E7]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Centered Enquire Now Button */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={() => openLeadModal('FAQ Enquire Now')}
            className="px-8 py-3 bg-[#1D61E7] hover:bg-[#154ec2] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};
