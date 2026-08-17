import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { CustomerProfile } from '../types';
import { mockProfiles } from '../data/mockProfiles';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: CustomerProfile | null;
  login: (customerId: string, password?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CustomerProfile | null>(null);

  const login = async (customerId: string, password?: string) => {
    // Mock authentication check
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const profile = mockProfiles[customerId.toUpperCase()];
        if (profile && password === 'password123') {
          setCurrentUser(profile);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500); // Simulate network latency
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    isAuthenticated: !!currentUser,
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
