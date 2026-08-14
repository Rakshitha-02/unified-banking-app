import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { BankingContextType, MockUser } from '../types';
import { mockUser } from '../data/mockUser';

interface BankingContextState {
  user: MockUser;
  activeContext: BankingContextType;
  setActiveContext: (context: BankingContextType) => void;
}

const BankingContext = createContext<BankingContextState | undefined>(undefined);

export const BankingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeContext, setActiveContext] = useState<BankingContextType>('PERSONAL');

  const value = {
    user: mockUser,
    activeContext,
    setActiveContext,
  };

  return (
    <BankingContext.Provider value={value}>
      {children}
    </BankingContext.Provider>
  );
};

export const useBankingContext = (): BankingContextState => {
  const context = useContext(BankingContext);
  if (context === undefined) {
    throw new Error('useBankingContext must be used within a BankingProvider');
  }
  return context;
};
