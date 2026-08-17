import React from 'react';
import { useBankingContext } from '../../context/BankingContext';
import { useAuthContext } from '../../context/AuthContext';
import type { BankingContextType } from '../../types';
import { useNavigate } from 'react-router-dom';

const ContextSwitcher: React.FC = () => {
  const { activeContext, setActiveContext } = useBankingContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  // If there is no current user or they only have 1 context, don't show the switcher
  if (!currentUser || currentUser.availableContexts.length <= 1) {
    return null;
  }

  const handleContextChange = (context: BankingContextType) => {
    setActiveContext(context);
    navigate(`/${context.toLowerCase()}`);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
      {currentUser.availableContexts.includes('PERSONAL') && (
        <button
          onClick={() => handleContextChange('PERSONAL')}
          className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            activeContext === 'PERSONAL'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Personal
        </button>
      )}
      {currentUser.availableContexts.includes('BUSINESS') && (
        <button
          onClick={() => handleContextChange('BUSINESS')}
          className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            activeContext === 'BUSINESS'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Business
        </button>
      )}
      {currentUser.availableContexts.includes('UNIFIED') && (
        <button
          onClick={() => handleContextChange('UNIFIED')}
          className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            activeContext === 'UNIFIED'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Unified
        </button>
      )}
    </div>
  );
};

export default ContextSwitcher;
