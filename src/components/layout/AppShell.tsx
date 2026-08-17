import React, { type ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import ContextSwitcher from '../shared/ContextSwitcher';
import MobileHeader from '../ui/MobileHeader';
import { useBankingContext } from '../../context/BankingContext';
import { Bell, Search } from 'lucide-react';
import IconButton from '../ui/IconButton';

interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { activeContext } = useBankingContext();

  const contextTitles = {
    PERSONAL: 'Personal Banking',
    BUSINESS: 'Business Banking',
    UNIFIED: 'Unified Overview',
  };

  return (
    <div className="min-h-screen bg-gray-50 md:bg-white text-gray-900 flex flex-col font-sans">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileHeader
          title={contextTitles[activeContext]}
          border
          rightAction={
            <div className="flex items-center gap-1">
              <IconButton icon={<Search />} size="sm" />
              <IconButton icon={<Bell />} size="sm" />
            </div>
          }
        />
      </div>

      {/* Mobile Context Switcher - optionally keep or remove if we use MobileHeader, keeping for now as requested */}
      <div className="md:hidden p-4 bg-white border-b border-gray-100">
        <ContextSwitcher />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="hidden md:flex" /> {/* Make sure sidebar is hidden on mobile */}

        {/* Adjust main padding for mobile vs desktop */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-24 md:pb-6 w-full max-w-md mx-auto md:max-w-none md:mx-0">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
};

export default AppShell;
