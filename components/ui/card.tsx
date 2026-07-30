import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'bordered';
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'glass', hoverEffect = true, ...props }, ref) => {
    const baseStyles = 'rounded-2xl transition-all duration-300 relative overflow-hidden';

    const variants = {
      glass: hoverEffect ? 'glass-card' : 'glass-panel',
      solid: 'bg-slate-900 border border-slate-800 text-slate-100',
      bordered: 'bg-slate-950/80 border border-slate-800 hover:border-slate-700',
    };

    return (
      <div ref={ref} className={cn(baseStyles, variants[variant], className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('p-6 pb-3', className)} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('p-6 pt-0 mt-auto border-t border-slate-800/50', className)} {...props}>
    {children}
  </div>
);
