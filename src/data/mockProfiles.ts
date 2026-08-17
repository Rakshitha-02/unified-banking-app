import type { CustomerProfile } from '../types';

export const mockProfiles: Record<string, CustomerProfile> = {
  AKSHAY: {
    customerId: 'AKSHAY',
    name: 'Akshay',
    segment: 'SME',
    customerType: 'Business',
    availableContexts: ['PERSONAL', 'BUSINESS'],
    dashboardType: 'SME_UNIFIED',
  },
  ABHISHEK: {
    customerId: 'ABHISHEK',
    name: 'Abhishek',
    segment: 'HNI',
    customerType: 'Retail',
    availableContexts: ['PERSONAL'],
    dashboardType: 'HNI_RETAIL',
  },
};
