// Server Component — static framework display, no hooks.

import { Fragment } from 'react';
import { Lightbulb, Laptop, Cog, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  {
    phase: 'Phase 1',
    title: 'Concept',
    description: 'Foundational knowledge for deep subject understanding.',
    icon: <Lightbulb className="w-8 h-8 text-[#1D61E7]" />,
  },
  {
    phase: 'Phase 2',
    title: 'Application',
    description: 'Practical implementation through real-world scenarios.',
    icon: <Laptop className="w-8 h-8 text-[#1D61E7]" />,
  },
  {
    phase: 'Phase 3',
    title: 'Tools',
    description: 'Resources and techniques for effective skill mastery.',
    icon: <Cog className="w-8 h-8 text-[#1D61E7]" />,
  },
];

export const CATFrameworkSection = () => {

  return (
    <section id="cat" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            The <span className="text-[#1D61E7]">CAT Framework</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg mt-2">
            Our Proven Approach to <span className="text-[#1D61E7]">Learning Excellence</span>
          </p>
        </div>

        {/* 3 Box Cards with Connecting Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <Fragment key={idx}>
              {/* Card Container */}
              <div className="w-full md:w-1/3 bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#1D61E7]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col text-left space-y-4 relative group">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm group-hover:border-[#1D61E7]/30 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-[#1D61E7] uppercase tracking-wider bg-[#EBF3FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
                    {step.phase}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Arrow between cards */}
              {idx < steps.length - 1 && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#EBF3FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D61E7] shadow-sm">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Mobile Down Arrow */}
                  <div className="flex md:hidden items-center justify-center my-1 shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#EBF3FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D61E7] shadow-sm">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </div>
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
