import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useBankingContext } from '../context/BankingContext';
import type { BankingContextType } from '../types';
import MobileHeader from '../components/ui/MobileHeader';
import Card, { CardContent } from '../components/ui/Card';
import { Briefcase, User, ChevronRight } from 'lucide-react';

const contextDetails: Record<BankingContextType, { title: string; description: string; icon: React.ReactNode }> = {
  PERSONAL: {
    title: 'Personal Banking',
    description: 'Manage your savings, retail accounts, and personal wealth.',
    icon: <User className="h-6 w-6" />,
  },
  BUSINESS: {
    title: 'Business Banking',
    description: 'Manage corporate accounts, payroll, and business expenses.',
    icon: <Briefcase className="h-6 w-6" />,
  },
  UNIFIED: {
    title: 'Unified Dashboard',
    description: 'View personal and business accounts together.',
    icon: <User className="h-6 w-6" />, // Or another icon
  }
};

const BankingSelection: React.FC = () => {
  const { currentUser } = useAuthContext();
  const { setActiveContext } = useBankingContext();
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated or only has 1 context, they shouldn't be here
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.availableContexts.length === 1) {
      const context = currentUser.availableContexts[0];
      setActiveContext(context);
      navigate(`/${context.toLowerCase()}`);
    }
  }, [currentUser, navigate, setActiveContext]);

  if (!currentUser) return null;

  const handleSelectContext = (context: BankingContextType) => {
    setActiveContext(context);
    navigate(`/${context.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <MobileHeader title="Select Account" border />

      <main className="flex-1 p-4 md:p-6 max-w-md mx-auto w-full">
        <div className="mb-6 mt-4">
          <h2 className="text-xl font-bold text-gray-900">Welcome, {currentUser.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Please select which account you want to access.</p>
        </div>

        <div className="space-y-4">
          {currentUser.availableContexts.map((context) => (
            <Card
              key={context}
              elevated
              className="cursor-pointer hover:border-gray-300 transition-colors group"
              onClick={() => handleSelectContext(context)}
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                  {contextDetails[context]?.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {contextDetails[context]?.title || context}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {contextDetails[context]?.description}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BankingSelection;
