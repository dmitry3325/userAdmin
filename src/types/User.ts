import { CurrencyCode } from '@/types/Currency';

export enum UserType {
  saving = 'SAVING',
  checking = 'CHECKING',
}

export interface User {
  id: number;
  accountNumber: string;
  type: UserType;
  name: string;
  currency: CurrencyCode;
}
