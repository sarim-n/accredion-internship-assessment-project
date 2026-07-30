// Server Component — static timeline rendering, no hooks.

import { ACCREDIAN_EDGE_NODES } from '@/config/landing-data';
import {
  Lightbulb,
  UserCheck,
  RefreshCw,
  Cpu,
  Maximize2,
  Target,
  Package,
  ChevronsRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-6 h-6 text-white" />,
  UserCheck: <UserCheck className="w-6 h-6 text-white" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-white" />,
  Cpu: <Cpu className="w-6 h-6 text-white" />,
  Maximize2: <Maximize2 className="w-6 h-6 text-white" />,
  Target: <Target className="w-6 h-6 text-white" />,
  Package: <Package className="w-6 h-6 text-white" />,
};

export const AccredianEdgeSection = () => {
  return (
    <section id="accredianEdge" className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            The <span className="text-[#1D61E7]">Accredian Edge</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg mt-1">
            Key Aspects of <span className="text-[#1D61E7]">Our Strategic Training</span>
          </p>
        </div>

        {/* Desktop Wave Timeline Graphic (Hidden on mobile) */}
        <div className="hidden lg:block relative py-12">
          {/* Curved Dotted Wave Background SVG */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <svg className="w-full h-32 text-slate-300" viewBox="0 0 1200 120" fill="none">
              <path
                d="M 50 60 Q 200 120 350 60 T 650 60 T 950 60 T 1150 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* 7 Columns Timeline Grid */}
          <div className="grid grid-cols-7 gap-4 relative z-10">
            {ACCREDIAN_EDGE_NODES.map((node, index) => {
              const isTop = node.position === 'top';
              return (
                <div key={node.id} className="flex flex-col items-center justify-between min-h-[380px] relative">
                  {/* Top Text Content Box */}
                  <div className="h-[150px] flex flex-col justify-end items-center w-full px-2">
                    {isTop ? (
                      <div className="text-left space-y-1 w-full relative pb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#1D61E7]" />
                          <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                            {node.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium pl-3.5">
                          {node.description}
                        </p>

                        {/* Connector Line down to circle */}
                        <div className="absolute left-0 bottom-0 w-0.5 h-4 bg-[#1D61E7]/40" />
                      </div>
                    ) : null}
                  </div>

                  {/* Middle Circle Node */}
                  <div className="relative my-4 group">
                    <div
                      className={`w-20 h-20 rounded-full p-1 bg-gradient-to-tr ${node.circleColor} shadow-lg shadow-blue-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer`}
                    >
                      <div className="w-full h-full rounded-full bg-[#1D61E7] border-2 border-white/80 flex items-center justify-center shadow-inner">
                        {iconMap[node.iconName]}
                      </div>
                    </div>

                    {/* Chevron Indicator between circles */}
                    {index < ACCREDIAN_EDGE_NODES.length - 1 && (
                      <div className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronsRight className="w-5 h-5 text-slate-300" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Text Content Box */}
                  <div className="h-[150px] flex flex-col justify-start items-center w-full px-2">
                    {!isTop ? (
                      <div className="text-left space-y-1 w-full relative pt-4">
                        {/* Connector Line up to circle */}
                        <div className="absolute left-0 top-0 w-0.5 h-4 bg-[#1D61E7]/40" />

                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#1D61E7]" />
                          <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                            {node.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium pl-3.5">
                          {node.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet View (Vertical Stack) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {ACCREDIAN_EDGE_NODES.map((node) => (
            <div
              key={node.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-all"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${node.circleColor} p-0.5 shrink-0 shadow-md`}
              >
                <div className="w-full h-full rounded-[14px] bg-[#1D61E7] flex items-center justify-center">
                  {iconMap[node.iconName]}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">{node.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {node.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
