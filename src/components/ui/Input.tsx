import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from "../../lib/utils";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, error, disabled, ...props }, ref) => {
    return (
      <div className="w-full relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
            leftIcon && 'pl-11',
            rightIcon && 'pr-11',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
            {rightIcon}
          </div>
        )}
        {error && (
          <p className="mt-1.5 text-sm text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
