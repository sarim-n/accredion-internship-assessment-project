'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Cache section offsets — only recompute on resize, not on every scroll tick.
    type SectionCache = { id: string; top: number; bottom: number };
    let sectionsCache: SectionCache[] = [];

    const computeOffsets = () => {
      sectionsCache = siteConfig.navLinks
        .map((link) => {
          const id = link.href.replace('#', '');
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.offsetTop;
          return { id, top, bottom: top + el.offsetHeight };
        })
        .filter(Boolean) as SectionCache[];
    };

    computeOffsets();

    // Throttle: schedule scroll check via RAF
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 120;
        for (const section of sectionsCache) {
          if (scrollPosition >= section.top && scrollPosition < section.bottom) {
            setActiveSection(section.id);
            break;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', computeOffsets, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', computeOffsets);
    };
  }, []);

  // Smooth scroll handler using Lenis if available
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (!el) return;

      if (window.__lenis) {
        window.__lenis.scrollTo(el, {
          offset: -80,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setIsMobileOpen(false);
    },
    []
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 transition-[background-color,box-shadow,border-color] duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Aligned Far Left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 shrink-0"
        >
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-[#1E3A8A]">
              accredian
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider -mt-1">
              credentials that matter
            </span>
          </div>
        </a>

        {/* Desktop Navigation Group - All Aligned to the Right Half */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 ml-auto">
          <nav className="flex items-center gap-5 xl:gap-7">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs xl:text-sm font-semibold transition-colors py-1 relative cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#1D61E7]'
                      : 'text-slate-700 hover:text-[#1D61E7]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1D61E7] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary Action CTA Button - Smooth Scrolls to #lead-capture-section */}
          <a
            href="#lead-capture-section"
            onClick={(e) => handleNavClick(e, '#lead-capture-section')}
            className="ml-2 px-4.5 py-2 bg-[#1D61E7] hover:bg-[#154ec2] active:scale-[0.99] text-white font-bold text-xs xl:text-sm rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Get Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1D61E7]/10 text-[#1D61E7]'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D61E7]" />
                )}
              </a>
            );
          })}

          <div className="pt-2">
            <a
              href="#lead-capture-section"
              onClick={(e) => handleNavClick(e, '#lead-capture-section')}
              className="w-full py-3 bg-[#1D61E7] hover:bg-[#154ec2] text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
