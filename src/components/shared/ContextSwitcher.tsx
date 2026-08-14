import React from 'react';
import { useBankingContext } from '../../context/BankingContext';
import type { BankingContextType } from '../../types';
import { useNavigate } from 'react-router-dom';

const ContextSwitcher: React.FC = () => {
  const { activeContext, setActiveContext } = useBankingContext();
  const navigate = useNavigate();

  const handleContextChange = (context: BankingContextType) => {
    setActiveContext(context);
    navigate(`/${context.toLowerCase()}`);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => handleContextChange('PERSONAL')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          activeContext === 'PERSONAL'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Personal
      </button>
      <button
        onClick={() => handleContextChange('BUSINESS')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          activeContext === 'BUSINESS'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Business
      </button>
      <button
        onClick={() => handleContextChange('UNIFIED')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          activeContext === 'UNIFIED'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Unified
      </button>
    </div>
  );
};

export default ContextSwitcher;
