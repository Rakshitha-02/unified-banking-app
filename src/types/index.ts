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

export interface MockUser {
  profile: UserProfile;
  personalRelationship: PersonalRelationship;
  businessRelationship: BusinessRelationship;
}
