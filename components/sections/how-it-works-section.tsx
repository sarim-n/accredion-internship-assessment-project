// Server Component — static 3-step workflow, no hooks.

import { TrendingUp, Presentation, Tv2 } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Skill Gap Analysis',
    description: 'Assess team skill gaps and developmental needs.',
    icon: <TrendingUp className="w-7 h-7 text-white" />,
  },
  {
    step: 2,
    title: 'Customized Training Plan',
    description: 'Create a tailored roadmap addressing organizational goals.',
    icon: <Presentation className="w-7 h-7 text-white" />,
  },
  {
    step: 3,
    title: 'Flexible Program Delivery',
    description: 'Deliver adaptable programs aligned with industry and organizational needs.',
    icon: <Tv2 className="w-7 h-7 text-white" />,
  },
];

export const HowItWorksSection = () => {

  return (
    <section id="howItWorks" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            How We <span className="text-[#1D61E7]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg mt-2">
            A Structured Three-Step Approach to <span className="text-[#1D61E7]">Skill Development</span>
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item) => (
            <div key={item.step} className="flex items-center gap-2">
              {/* Left Vertical Blue Bar */}
              <div className="w-1.5 h-36 bg-[#1D61E7] rounded-full shrink-0 shadow-sm" />

              {/* Central Card */}
              <div className="flex-1 bg-[#EBF3FF] border border-[#BFDBFE] rounded-2xl p-6 sm:p-8 relative shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between min-h-[260px]">
                {/* Top-Left Step Number */}
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-white border border-[#1D61E7] text-[#1D61E7] font-bold text-xs flex items-center justify-center shadow-sm">
                  {item.step}
                </div>

                {/* Center Circle Icon */}
                <div className="w-14 h-14 rounded-full bg-[#1D61E7] flex items-center justify-center shadow-md shadow-blue-500/20 mt-2">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2 mt-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[220px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Vertical Blue Bar */}
              <div className="w-1.5 h-36 bg-[#1D61E7] rounded-full shrink-0 shadow-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
