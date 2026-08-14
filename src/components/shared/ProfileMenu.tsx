import React from 'react';
import { useBankingContext } from '../../context/BankingContext';

const ProfileMenu: React.FC = () => {
  const { user } = useBankingContext();

  return (
    <div className="flex items-center space-x-3 ml-4">
      <div className="flex flex-col items-end hidden md:flex">
        <span className="text-sm font-medium text-gray-900">{user.profile.name}</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
        {user.profile.name.charAt(0)}
      </div>
    </div>
  );
};

export default ProfileMenu;
