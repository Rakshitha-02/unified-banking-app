import React from 'react';
import { NavLink } from 'react-router-dom';
import { useBankingContext } from '../../context/BankingContext';
import { LayoutDashboard, CreditCard, ArrowRightLeft, Briefcase, Activity } from 'lucide-react';
import { cn } from './Sidebar';

const MobileNav: React.FC = () => {
  const { activeContext } = useBankingContext();

  const getLinks = () => {
    switch (activeContext) {
      case 'PERSONAL':
        return [
          { to: '/personal', icon: LayoutDashboard, label: 'Home' },
          { to: '/personal/accounts', icon: CreditCard, label: 'Accounts' },
          { to: '/personal/transfers', icon: ArrowRightLeft, label: 'Transfers' },
        ];
      case 'BUSINESS':
        return [
          { to: '/business', icon: Briefcase, label: 'Home' },
          { to: '/business/accounts', icon: CreditCard, label: 'Accounts' },
          { to: '/business/payments', icon: ArrowRightLeft, label: 'Payments' },
        ];
      case 'UNIFIED':
        return [
          { to: '/unified', icon: Activity, label: 'Global' },
          { to: '/personal', icon: LayoutDashboard, label: 'Personal' },
          { to: '/business', icon: Briefcase, label: 'Business' },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2 pb-safe z-50">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            cn(
              'flex flex-col items-center justify-center w-16 p-1 text-xs transition-colors',
              isActive ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-900'
            )
          }
          end={link.to === '/personal' || link.to === '/business' || link.to === '/unified'}
        >
          <link.icon className="h-6 w-6 mb-1" />
          <span className="truncate w-full text-center">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileNav;
