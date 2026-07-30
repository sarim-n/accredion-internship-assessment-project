'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface TabOption {
  id: string;
  label: string;
  badge?: string;
}

export interface TabGroupProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: 'pills' | 'underline';
}

export const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  variant = 'pills',
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 overflow-x-auto no-scrollbar p-1.5 rounded-2xl',
        variant === 'pills' ? 'bg-slate-900/90 border border-slate-800' : 'border-b border-slate-800',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer flex items-center gap-2',
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 border border-blue-400/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            )}
          >
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider',
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
