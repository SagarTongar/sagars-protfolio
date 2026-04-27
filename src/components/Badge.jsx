import React from 'react';
import { cn } from './Card';

export function Badge({ children, className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 border border-slate-200",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
