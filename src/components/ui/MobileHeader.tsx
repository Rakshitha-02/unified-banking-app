import React, { type ReactNode } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IconButton from './IconButton';
import { cn } from "../../lib/utils";


interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: ReactNode;
  className?: string;
  border?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  title,
  showBack = false,
  onBack,
  rightAction,
  className,
  border = false,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md px-4 h-14 flex items-center justify-between',
        border && 'border-b border-gray-100',
        className
      )}
    >
      <div className="flex items-center flex-1">
        {showBack ? (
          <IconButton
            icon={<ChevronLeft />}
            variant="ghost"
            onClick={handleBack}
            className="-ml-2 mr-2"
            aria-label="Go back"
          />
        ) : (
          <div className="w-10" /> // Spacer for alignment
        )}
      </div>

      <div className="flex-1 flex justify-center">
        <h1 className="text-base font-semibold text-gray-900 truncate">{title}</h1>
      </div>

      <div className="flex items-center justify-end flex-1">
        {rightAction || <div className="w-10" />}
      </div>
    </header>
  );
};

export default MobileHeader;
