// Server Component — static testimonials display, no hooks.

import { TESTIMONIALS_DATA } from '@/config/landing-data';
import { Quote } from 'lucide-react';

// Defined at module scope to avoid JSX re-creation on every render.
const brandLogos = [
  {
    name: 'Reliance Industries',
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-[#C59B27]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5 C30 5 15 20 15 40 C15 65 50 95 50 95 C50 95 85 65 85 40 C85 20 70 5 50 5 Z M50 25 C58 25 65 32 65 40 C65 55 50 75 50 75 C50 75 35 55 35 40 C35 32 42 25 50 25 Z" />
          <circle cx="50" cy="38" r="8" fill="#F59E0B" />
        </svg>
        <span className="font-serif text-sm font-bold text-slate-900">Reliance</span>
      </div>
    ),
  },
  {
    name: 'HCL Tech',
    logo: (
      <span className="text-xl font-black italic tracking-tighter text-[#0066B3]">
        HCL
      </span>
    ),
  },
  {
    name: 'IBM Enterprise',
    logo: (
      <span className="text-xl font-black tracking-widest text-[#052FAD]">
        IBM
      </span>
    ),
  },
];

export const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Testimonials from <span className="text-[#1D61E7]">Our Partners</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg mt-2">
            What Our <span className="text-[#1D61E7]">Clients Are Saying</span>
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Brand Logo Header & Quote Icon */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                {brandLogos[idx % brandLogos.length].logo}
                <Quote className="w-7 h-7 text-[#1D61E7]/30 group-hover:text-[#1D61E7]/60 transition-colors" />
              </div>

              {/* Quote Body */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                "{item.quote}"
              </p>

              {/* Client Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1D61E7]">
                <span className="uppercase tracking-wider">Corporate Partner</span>
                <span className="text-slate-500 font-medium">Verified Partner</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
