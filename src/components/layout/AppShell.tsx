import React, { type ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import ContextSwitcher from '../shared/ContextSwitcher';

interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />

      {/* Mobile Context Switcher */}
      <div className="md:hidden p-4 bg-gray-50 border-b border-gray-200">
        <ContextSwitcher />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 lg:pb-6">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
};

export default AppShell;
