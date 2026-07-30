// Server Component — static course categories, no hooks.

import Image from 'next/image';

const SEGMENTS = [
  {
    title: 'Program Specific',
    subtitle: 'Certificate, Executive, Post Graduate Certificate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
  },
  {
    title: 'Industry Specific',
    subtitle: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&auto=format&fit=crop&q=80',
  },
  {
    title: 'Topic Specific',
    subtitle: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=80',
  },
  {
    title: 'Level Specific',
    subtitle: 'Senior Leadership, Mid-Career Professionals, Freshers',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=80',
  },
];

export const CourseSegmentationSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Tailored{' '}
            <span className="text-[#1D61E7]">Course Segmentation</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Explore{' '}
            <span className="text-[#1D61E7] font-semibold">Custom-fit Courses</span>{' '}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEGMENTS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-center"
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="px-4 py-4 space-y-1.5">
                <h3 className="text-base font-bold text-[#1D61E7]">{card.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-snug">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
