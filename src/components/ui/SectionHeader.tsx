import React, { type ReactNode } from 'react';
import { cn } from "../../lib/utils";


interface SectionHeaderProps {
  title: string;
  action?: ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  action,
  className,
}) => {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      <h3 className="text-sm font-semibold text-gray-900 tracking-tight">
        {title}
      </h3>
      {action && (
        <div className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
