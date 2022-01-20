import { ConfigState } from '@/store/modules/config/types';
import { AuthState } from '@/store/modules/auth/types';
import { UsersState } from '@/store/modules/users/types';

export interface RootState {
  config: ConfigState;
  auth: AuthState;
  users: UsersState;
}
