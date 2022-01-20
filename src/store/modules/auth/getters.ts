import { GetterTree } from 'vuex';
import { AuthState } from '@/store/modules/auth/types';
import { RootState } from '@/store/types';
import { User } from '@/types/User';

const getUser = (auth: AuthState) => (): User | undefined => auth.user;

const getters: GetterTree<AuthState, RootState> = {
  getUser,
};

export default getters;
