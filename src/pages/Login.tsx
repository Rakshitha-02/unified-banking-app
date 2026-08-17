import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useBankingContext } from '../context/BankingContext';
import Card, { CardContent } from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import IconButton from '../components/ui/IconButton';
import { Eye, EyeOff, Building2, Fingerprint } from 'lucide-react';

const Login: React.FC = () => {
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, currentUser } = useAuthContext();
  const { setActiveContext } = useBankingContext();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(customerId, password);

      // We need to wait for state to update, or resolve it manually.
      // Since login sets state, currentUser might not be available synchronously.
      // A better way is to return the profile from login, or use an effect.
      // We'll handle navigation in a separate useEffect, or modify login to return profile.
    } catch {
      setError('Invalid Customer ID or Password.');
    } finally {
      setIsLoading(false);
    }
  };

  // Listen for successful login and navigate
  React.useEffect(() => {
    if (currentUser) {
      if (currentUser.availableContexts.length > 1) {
        navigate('/banking-selection');
      } else if (currentUser.availableContexts.length === 1) {
        const context = currentUser.availableContexts[0];
        setActiveContext(context);
        navigate(`/${context.toLowerCase()}`);
      }
    }
  }, [currentUser, navigate, setActiveContext]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 flex flex-col items-center">
        <div className="h-16 w-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <Building2 className="text-white h-8 w-8" />
        </div>
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your Unified Banking account
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card elevated className="border-0 shadow-xl shadow-gray-200/40">
          <CardContent className="p-6 sm:p-8">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="customerId" className="block text-sm font-medium text-gray-700 mb-1">
                  Customer ID
                </label>
                <div className="mt-1">
                  <Input
                    id="customerId"
                    name="customerId"
                    type="text"
                    autoComplete="username"
                    required
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    placeholder="e.g. AKSHAY"
                    error={error ? ' ' : undefined} // Don't show text, just red border
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    error={error}
                    rightIcon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                  className="mt-2"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </div>

              <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-4">Or sign in with</p>
                  <div className="flex justify-center">
                      <IconButton
                        icon={<Fingerprint className="h-8 w-8 text-gray-900" />}
                        size="lg"
                        variant="secondary"
                        aria-label="Biometric login"
                        className="h-16 w-16"
                      />
                  </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
