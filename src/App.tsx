import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BankingProvider, useBankingContext } from './context/BankingContext';
import AppShell from './components/layout/AppShell';
import { ProtectedRoute } from './components/shared/ProtectedRoute';

import Login from './pages/Login';
import BankingSelection from './pages/BankingSelection';
import PersonalDashboard from './pages/PersonalDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import UnifiedDashboard from './pages/UnifiedDashboard';

// Helper component to keep context in sync with routes when navigating directly
const ContextRouteSync: React.FC = () => {
  const { setActiveContext, activeContext } = useBankingContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/personal') && activeContext !== 'PERSONAL') {
      setActiveContext('PERSONAL');
    } else if (path.startsWith('/business') && activeContext !== 'BUSINESS') {
      setActiveContext('BUSINESS');
    } else if (path.startsWith('/unified') && activeContext !== 'UNIFIED') {
      setActiveContext('UNIFIED');
    }
  }, [location.pathname, setActiveContext, activeContext]);

  // Redirect root to current context dashboard
  useEffect(() => {
    if (location.pathname === '/') {
       navigate(`/${activeContext.toLowerCase()}`);
    }
  }, [location.pathname, activeContext, navigate]);

  return null;
};

// A dummy component for nested routes that we haven't built yet
const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-500 mt-2">This feature is coming soon.</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BankingProvider>
        <BrowserRouter>
          <ContextRouteSync />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />

            {/* Context Selection (requires auth, but outside AppShell) */}
            <Route
              path="/banking-selection"
              element={
                <ProtectedRoute>
                  <BankingSelection />
                </ProtectedRoute>
              }
            />

            {/* Protected Dashboard Routes inside AppShell */}
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <AppShell>
                    <Routes>
                      <Route path="/personal" element={<PersonalDashboard />} />
                      <Route path="/personal/accounts" element={<ComingSoon title="Personal Accounts" />} />
                      <Route path="/personal/transfers" element={<ComingSoon title="Personal Transfers" />} />
                      <Route path="/personal/statements" element={<ComingSoon title="Personal Statements" />} />

                      <Route path="/business" element={<BusinessDashboard />} />
                      <Route path="/business/accounts" element={<ComingSoon title="Corporate Accounts" />} />
                      <Route path="/business/payments" element={<ComingSoon title="Payments & Approvals" />} />
                      <Route path="/business/users" element={<ComingSoon title="User Management" />} />

                      <Route path="/unified" element={<UnifiedDashboard />} />

                      <Route path="/settings" element={<ComingSoon title="Settings" />} />

                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </AppShell>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </BankingProvider>
    </AuthProvider>
  );
}

export default App;
