import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, leftIcon, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative rounded-xl shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              'w-full bg-slate-900/80 border text-slate-100 placeholder-slate-500 text-sm rounded-xl py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
              leftIcon ? 'pl-10 pr-4' : 'px-4',
              error ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-blue-500',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400 font-medium pl-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
