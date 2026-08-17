import React, { type ReactNode } from 'react';
import { cn } from "../../lib/utils";


interface QuickActionProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

const QuickAction: React.FC<QuickActionProps> = ({
  icon,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-2 group focus:outline-none',
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-900 transition-all group-hover:bg-gray-100 group-hover:scale-105 group-active:scale-95 group-focus:ring-2 group-focus:ring-gray-900 group-focus:ring-offset-2">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900">
        {label}
      </span>
    </button>
  );
};

export default QuickAction;
