import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from "../../lib/utils";


export interface BottomNavItem {
  icon: React.ReactNode;
  label: string;
  to: string;
}

interface BottomNavigationProps {
  items: BottomNavItem[];
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items, className }) => {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe md:hidden',
        className
      )}
    >
      <nav className="flex h-16 max-w-md mx-auto">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex flex-1 flex-col items-center justify-center gap-1 transition-colors relative',
                isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              )
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={cn(
                    'flex flex-col items-center justify-center w-full h-full relative',
                    isActive && 'after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bg-gray-900 after:rounded-b-full'
                  )}
                >
                  <div className={cn("mb-1 transition-transform", isActive && "scale-110")}>
                     {item.icon}
                  </div>
                  <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;
