export type BankingContextType = 'PERSONAL' | 'BUSINESS' | 'UNIFIED';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface PersonalRelationship {
  id: string;
  name: string;
}

export interface BusinessRelationship {
  id: string;
  companyName: string;
  role: string;
}

export interface CustomerProfile {
  customerId: string;
  name: string;
  segment: 'SME' | 'HNI' | 'RETAIL' | 'CORPORATE';
  customerType: 'Retail' | 'Business';
  availableContexts: BankingContextType[];
  dashboardType: string;
}

export interface MockUser {
  profile: UserProfile;
  personalRelationship: PersonalRelationship;
  businessRelationship: BusinessRelationship;
}
