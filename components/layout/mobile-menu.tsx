'use client';

import React from 'react';
import { X, Phone, ArrowRight, Building2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { useLeadModal } from '@/context/modal-context';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { openLeadModal } = useLeadModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-100 text-lg">Accredian</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="py-6 space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded-full border border-blue-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-slate-800 space-y-3">
          <Button
            variant="glow"
            className="w-full"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              onClose();
              openLeadModal('Mobile Menu CTA');
            }}
          >
            Contact Sales
          </Button>

          <a
            href="tel:+918001234567"
            className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-200 py-2"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>+91 (800) 123-4567</span>
          </a>
        </div>
      </div>
    </div>
  );
};
