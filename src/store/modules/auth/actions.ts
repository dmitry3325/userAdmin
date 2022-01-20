import { ActionContext, ActionTree } from 'vuex';
import { AuthState } from '@/store/modules/auth/types';
import { RootState } from '@/store/types';

const fetchUser = (context: ActionContext<AuthState, RootState>, accountNumber: string) => {};

const actions: ActionTree<AuthState, RootState> = {
  fetchUser,
};

export default actions;
