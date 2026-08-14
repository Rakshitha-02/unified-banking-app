import React from 'react';
import { useBankingContext } from '../context/BankingContext';

const BusinessDashboard: React.FC = () => {
  const { user } = useBankingContext();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Business Banking</h1>
        <p className="text-gray-500">{user.businessRelationship.companyName}</p>
        <p className="text-sm text-gray-400">Role: {user.businessRelationship.role}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards for Dashboard layout */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-700">Corporate Operating Account</h3>
          <p className="mt-2 text-3xl font-bold">$245,600.00</p>
          <p className="text-sm text-gray-500">Available Balance</p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg text-gray-700">Pending Approvals</h3>
          <p className="mt-2 text-3xl font-bold text-amber-600">4</p>
          <p className="text-sm text-gray-500">Payments requiring your signature</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
