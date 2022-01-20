import { MutationTree } from 'vuex';
import { AuthState } from '@/store/modules/auth/types';
import { User } from '@/types/User';

const setUser = (authState: AuthState, user: User) => {
  authState.user = user;
};

const mutations: MutationTree<AuthState> = {
  setUser,
};

export default mutations;
