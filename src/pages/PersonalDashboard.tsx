import React from 'react';
import { useBankingContext } from '../context/BankingContext';

const PersonalDashboard: React.FC = () => {
  const { user } = useBankingContext();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Personal Banking</h1>
        <p className="text-gray-500">Welcome back, {user.personalRelationship.name}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards for Dashboard layout */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-700">Accounts</h3>
          <p className="mt-2 text-3xl font-bold">$12,450.00</p>
          <p className="text-sm text-gray-500">Available Balance</p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-700">Recent Transactions</h3>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Grocery Store</span>
              <span className="font-medium">-$84.20</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Salary Deposit</span>
              <span className="font-medium text-green-600">+$3,200.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;
