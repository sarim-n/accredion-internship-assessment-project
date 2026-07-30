// Server Component — no interactivity, no hooks. Removing 'use client'
// eliminates JS hydration cost for this purely static section.

const stats = [
    {
      number: '10K+',
      description: 'Professionals Trained For Exceptional Career Success',
    },
    {
      number: '200+',
      description: 'Sessions Delivered With Unmatched Learning Excellence',
    },
    {
      number: '5K+',
      description: 'Active Learners Engaged In Dynamic Courses',
    },
];

export const StatsSection = () => {
  return (
    <section id="stats" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Our <span className="text-[#1D61E7]">Track Record</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg mt-2">
            The Numbers Behind <span className="text-[#1D61E7]">Our Success</span>
          </p>
        </div>

        {/* 3 Columns Grid with Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 max-w-5xl mx-auto pt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="py-6 md:py-0 px-6 flex flex-col items-center justify-center text-center space-y-4"
            >
              {/* Blue Pill Badge */}
              <div className="bg-[#E0EDFF] text-[#1D61E7] font-extrabold text-xl sm:text-2xl px-8 py-2.5 rounded-full shadow-sm">
                {stat.number}
              </div>

              {/* Bold Subtitle Text */}
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug max-w-[240px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
