import React from 'react';
import { useBankingContext } from '../context/BankingContext';

const UnifiedDashboard: React.FC = () => {
  const { user } = useBankingContext();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Unified Portfolio</h1>
        <p className="text-gray-500">Overview for {user.profile.name}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm border-l-4 border-l-blue-500">
          <h3 className="font-semibold text-lg text-gray-700">Personal Total</h3>
          <p className="mt-2 text-3xl font-bold">$12,450.00</p>
          <p className="text-sm text-gray-500 mt-2">1 Account</p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm border-l-4 border-l-indigo-600">
          <h3 className="font-semibold text-lg text-gray-700">Business Total ({user.businessRelationship.companyName})</h3>
          <p className="mt-2 text-3xl font-bold">$245,600.00</p>
          <p className="text-sm text-gray-500 mt-2">2 Accounts</p>
        </div>
      </div>
    </div>
  );
};

export default UnifiedDashboard;
