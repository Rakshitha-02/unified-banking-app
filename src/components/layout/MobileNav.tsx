import React from 'react';

import { useBankingContext } from '../../context/BankingContext';
import { LayoutDashboard, CreditCard, ArrowRightLeft, Briefcase, Activity } from 'lucide-react';
import BottomNavigation, { type BottomNavItem } from '../ui/BottomNavigation';

const MobileNav: React.FC = () => {
  const { activeContext } = useBankingContext();

  const getLinks = (): BottomNavItem[] => {
    switch (activeContext) {
      case 'PERSONAL':
        return [
          { to: '/personal', icon: <LayoutDashboard />, label: 'Home', end: true },
          { to: '/personal/accounts', icon: <CreditCard />, label: 'Accounts' },
          { to: '/personal/transfers', icon: <ArrowRightLeft />, label: 'Transfers' },
        ];
      case 'BUSINESS':
        return [
          { to: '/business', icon: <Briefcase />, label: 'Home', end: true },
          { to: '/business/accounts', icon: <CreditCard />, label: 'Accounts' },
          { to: '/business/payments', icon: <ArrowRightLeft />, label: 'Payments' },
        ];
      case 'UNIFIED':
        return [
          { to: '/unified', icon: <Activity />, label: 'Global', end: true },
          { to: '/personal', icon: <LayoutDashboard />, label: 'Personal', end: true },
          { to: '/business', icon: <Briefcase />, label: 'Business', end: true },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return <BottomNavigation items={links} />;
};

export default MobileNav;
