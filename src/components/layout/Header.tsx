import React from 'react';
import ContextSwitcher from '../shared/ContextSwitcher';
import NotificationArea from '../shared/NotificationArea';
import ProfileMenu from '../shared/ProfileMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 sticky top-0">
      <div className="flex items-center">
        <div className="text-xl font-bold text-blue-600 mr-8">UniBank</div>
        <div className="hidden md:block">
          <ContextSwitcher />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <NotificationArea />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
