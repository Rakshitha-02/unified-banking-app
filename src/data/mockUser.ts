import type { MockUser } from '../types';

export const mockUser: MockUser = {
  profile: {
    id: 'u-12345',
    name: 'Rakshitha R',
    email: 'rakshitha.r@example.com',
  },
  personalRelationship: {
    id: 'pr-123',
    name: 'Rakshitha R',
  },
  businessRelationship: {
    id: 'br-456',
    companyName: 'ABC Enterprises Pvt Ltd',
    role: 'Administrator / Authorized Signatory',
  },
};
