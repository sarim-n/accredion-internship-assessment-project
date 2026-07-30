// Server Component — pure static logos, no hooks.

export const PartnersSection = () => {
  return (
    <section id="clients" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Our Proven <span className="text-[#1D61E7]">Partnerships</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg mt-2">
            Successful Collaborations With the <span className="text-[#1D61E7]">Industry’s Best</span>
          </p>
        </div>

        {/* 6 Logos Single Row Container */}
        <div className="w-full max-w-7xl mx-auto pt-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
            {/* 1. Reliance Industries Limited */}
            <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group hover:scale-105 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-center">
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-[#C59B27] mb-0.5" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 5 C30 5 15 20 15 40 C15 65 50 95 50 95 C50 95 85 65 85 40 C85 20 70 5 50 5 Z M50 25 C58 25 65 32 65 40 C65 55 50 75 50 75 C50 75 35 55 35 40 C35 32 42 25 50 25 Z" />
                  <circle cx="50" cy="38" r="8" fill="#F59E0B" />
                </svg>
                <span className="font-serif text-sm sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                  Reliance
                </span>
                <span className="text-[7px] sm:text-[9px] text-slate-600 font-semibold tracking-wider uppercase -mt-0.5">
                  Industries Limited
                </span>
              </div>
            </div>

            {/* 2. HCL */}
            <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group hover:scale-105 transition-transform duration-200">
              <span className="text-2xl sm:text-4xl font-black italic tracking-tighter text-[#0066B3]">
                HCL
              </span>
            </div>

            {/* 3. IBM (Official IBM 8-Bar Blue Logo SVG Vector) */}
            <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group hover:scale-105 transition-transform duration-200">
              <svg className="h-8 sm:h-11 w-auto text-[#052FAD]" viewBox="0 0 272 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* === I === (x: 0..60) */}
                <rect x="0" y="0" width="60" height="9" />
                <rect x="0" y="13" width="60" height="9" />
                <rect x="18" y="26" width="24" height="9" />
                <rect x="18" y="39" width="24" height="9" />
                <rect x="18" y="52" width="24" height="9" />
                <rect x="18" y="65" width="24" height="9" />
                <rect x="0" y="78" width="60" height="9" />
                <rect x="0" y="91" width="60" height="9" />

                {/* === B === (x: 76..154) */}
                <rect x="76" y="0" width="68" height="9" />
                <rect x="76" y="13" width="74" height="9" />
                <rect x="76" y="26" width="22" height="9" /><rect x="130" y="26" width="22" height="9" />
                <rect x="76" y="39" width="22" height="9" /><rect x="122" y="39" width="22" height="9" />
                <rect x="76" y="52" width="68" height="9" />
                <rect x="76" y="65" width="22" height="9" /><rect x="132" y="65" width="24" height="9" />
                <rect x="76" y="78" width="78" height="9" />
                <rect x="76" y="91" width="72" height="9" />

                {/* === M === (x: 170..272) */}
                <rect x="170" y="0" width="22" height="9" /><rect x="250" y="0" width="22" height="9" />
                <rect x="170" y="13" width="28" height="9" /><rect x="244" y="13" width="28" height="9" />
                <rect x="170" y="26" width="22" height="9" /><rect x="204" y="26" width="14" height="9" /><rect x="250" y="26" width="22" height="9" />
                <rect x="170" y="39" width="22" height="9" /><rect x="210" y="39" width="22" height="9" /><rect x="250" y="39" width="22" height="9" />
                <rect x="170" y="52" width="22" height="9" /><rect x="215" y="52" width="12" height="9" /><rect x="250" y="52" width="22" height="9" />
                <rect x="170" y="65" width="22" height="9" /><rect x="250" y="65" width="22" height="9" />
                <rect x="170" y="78" width="30" height="9" /><rect x="242" y="78" width="30" height="9" />
                <rect x="170" y="91" width="30" height="9" /><rect x="242" y="91" width="30" height="9" />
              </svg>
            </div>


            {/* 4. CRIF */}
            <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group hover:scale-105 transition-transform duration-200">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-3xl font-black italic tracking-tighter text-[#004B87]">
                  CRIF
                </span>
                <span className="text-[7px] sm:text-[9px] text-slate-500 font-medium italic -mt-1 hidden sm:block">
                  Together to the next level
                </span>
              </div>
            </div>

            {/* 5. ADP */}
            <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group hover:scale-105 transition-transform duration-200">
              <span className="text-2xl sm:text-4xl font-black tracking-tighter text-[#D0271D]">
                ADP®
              </span>
            </div>

            {/* 6. Bayer (Official Circular Bayer Cross Emblem Vector) */}
            <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group hover:scale-105 transition-transform duration-200">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#67B92A" strokeWidth="6" strokeDasharray="140 140" strokeDashoffset="0" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#00BCFF" strokeWidth="6" strokeDasharray="140 140" strokeDashoffset="140" />
                </svg>
                <div className="relative font-bold text-[9px] sm:text-[11px] text-[#004B87] tracking-widest text-center leading-none">
                  <div>B</div>
                  <div>A</div>
                  <div>Y E R</div>
                  <div>E</div>
                  <div>R</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
