'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="glass-card rounded-2xl overflow-hidden border border-slate-800 transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg">{item.question}</span>
              <div
                className={cn(
                  'p-1.5 rounded-lg bg-slate-800 text-slate-400 shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180 bg-blue-600/20 text-blue-400'
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in-50 duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
