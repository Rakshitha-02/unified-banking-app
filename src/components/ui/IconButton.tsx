import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from "../../lib/utils";


export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, icon, variant = 'ghost', size = 'md', disabled, ...props },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96]';

    const variants = {
      primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-200',
      ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-200',
      outline: 'border border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-200',
    };

    const sizes = {
      sm: 'h-8 w-8 [&>svg]:h-4 [&>svg]:w-4',
      md: 'h-10 w-10 [&>svg]:h-5 [&>svg]:w-5',
      lg: 'h-12 w-12 [&>svg]:h-6 [&>svg]:w-6',
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
