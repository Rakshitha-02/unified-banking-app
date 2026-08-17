import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from "../../lib/utils";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const variants = {
      primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-200',
      outline: 'border-2 border-gray-200 bg-transparent hover:bg-gray-50 text-gray-900 focus:ring-gray-200',
      ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-200',
      danger: 'bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
      icon: 'h-10 w-10',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
