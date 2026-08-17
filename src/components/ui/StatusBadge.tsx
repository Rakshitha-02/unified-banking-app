import React from 'react';
import { cn } from "../../lib/utils";


interface StatusBadgeProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'default';
  label: string;
  className?: string;
  dot?: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status = 'default',
  label,
  className,
  dot = false,
}) => {
  const variants = {
    success: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20',
    warning: 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/20',
    error: 'bg-red-50 text-red-700 ring-1 ring-red-600/10',
    info: 'bg-blue-50 text-blue-700 ring-1 ring-blue-700/10',
    default: 'bg-gray-50 text-gray-600 ring-1 ring-gray-500/10',
  };

  const dotColors = {
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    default: 'bg-gray-500',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-inset',
        variants[status],
        className
      )}
    >
      {dot && (
        <svg className={cn("mr-1.5 h-1.5 w-1.5 rounded-full", dotColors[status])} viewBox="0 0 6 6" aria-hidden="true">
          <circle cx="3" cy="3" r="3" />
        </svg>
      )}
      {label}
    </span>
  );
};

export default StatusBadge;
