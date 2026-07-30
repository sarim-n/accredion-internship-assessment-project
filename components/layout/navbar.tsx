'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    // Cache section offsets — only recompute on resize, not on every scroll tick.
    // Reading offsetTop/offsetHeight on every scroll event forces synchronous
    // layout recalculations (layout thrashing), causing scroll jank.
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

    // Throttle: only execute one scroll check per animation frame.
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 100;
        for (const section of sectionsCache) {
          if (scrollPosition >= section.top && scrollPosition < section.bottom) {
            setActiveSection(section.id);
            break;
          }
        }
        ticking = false;
      });
    };

    // passive: true — browser can scroll immediately on compositor thread
    // without waiting for this JS handler to return.
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', computeOffsets, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', computeOffsets);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/98 border-b border-slate-200 shadow-sm py-3.5 transition-[background-color,box-shadow,border-color] duration-200">
      <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Pushed Left */}
        <a href="#home" className="flex items-center gap-2 -ml-1 sm:-ml-2">
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-[#1E3A8A]">
              accredian
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wider -mt-1">
              credentials that matter
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Increased Spacing & Medium-Semibold Weight */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors py-1 relative ${
                  isActive ? 'text-[#1D61E7]' : 'text-slate-900 hover:text-[#1D61E7]'
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-900 hover:bg-slate-100 hover:text-[#1D61E7]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
