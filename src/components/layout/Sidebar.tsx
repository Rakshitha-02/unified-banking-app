import React from 'react';
import { NavLink } from 'react-router-dom';
import { useBankingContext } from '../../context/BankingContext';
import { LayoutDashboard, CreditCard, ArrowRightLeft, FileText, Settings, Briefcase, Users, Building, Activity } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const Sidebar: React.FC = () => {
  const { activeContext } = useBankingContext();

  const getLinks = () => {
    switch (activeContext) {
      case 'PERSONAL':
        return [
          { to: '/personal', icon: LayoutDashboard, label: 'Dashboard' },
          { to: '/personal/accounts', icon: CreditCard, label: 'Accounts' },
          { to: '/personal/transfers', icon: ArrowRightLeft, label: 'Transfers' },
          { to: '/personal/statements', icon: FileText, label: 'Statements' },
        ];
      case 'BUSINESS':
        return [
          { to: '/business', icon: Briefcase, label: 'Dashboard' },
          { to: '/business/accounts', icon: Building, label: 'Corporate Accounts' },
          { to: '/business/payments', icon: ArrowRightLeft, label: 'Payments & Approvals' },
          { to: '/business/users', icon: Users, label: 'User Management' },
        ];
      case 'UNIFIED':
        return [
          { to: '/unified', icon: Activity, label: 'Global Dashboard' },
          { to: '/personal', icon: LayoutDashboard, label: 'Personal Banking' },
          { to: '/business', icon: Briefcase, label: 'Business Banking' },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 hidden lg:block overflow-y-auto min-h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              )
            }
            end={link.to === '/personal' || link.to === '/business' || link.to === '/unified'}
          >
            <link.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 border-t border-gray-200 pt-4">
        <nav className="space-y-1">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              )
            }
          >
            <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
            Settings
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
