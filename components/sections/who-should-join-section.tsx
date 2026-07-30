// Server Component — static role cards, no hooks.

import Image from 'next/image';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

export const WhoShouldJoinSection = () => {
  return (
    <section id="who-should-join" className="py-8 sm:py-12 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Main Solid Blue Container */}
        <div className="bg-[#1D61E7] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-lg shadow-blue-600/15 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Content & Strategic Skill Illustration (5 cols) */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-1.5">
                <span className="text-blue-100 font-semibold text-base block">
                  Who Should Join?
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>

              {/* Strategic Skill Transparent Vector Illustration */}
              <div className="pt-2 flex justify-start">
                <div className="w-full max-w-sm h-[210px] sm:h-[240px] relative flex items-center justify-center">
                  <Image
                    src="/strategic-skills.png"
                    alt="Strategic Skill Enhancement Team"
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right 2x2 Grid of Role Cards (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Role 1: Tech Professionals */}
              <div className="space-y-2 text-left">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <MonitorCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">Tech Professionals</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                  Enhance expertise, embrace tech, drive innovation.
                </p>
              </div>

              {/* Role 2: Non-Tech Professionals */}
              <div className="space-y-2 text-left">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <MonitorX className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">Non-Tech Professionals</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                  Adapt digitally, collaborate in tech environments.
                </p>
              </div>

              {/* Role 3: Emerging Professionals */}
              <div className="space-y-2 text-left">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">Emerging Professionals</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                  Develop powerful skills for rapid career growth.
                </p>
              </div>

              {/* Role 4: Senior Professionals */}
              <div className="space-y-2 text-left">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">Senior Professionals</h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                  Strengthen leadership, enhance strategic decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
