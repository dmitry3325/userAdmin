import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import axios, { AxiosResponse } from 'axios';
import { User } from '@/types/User';
import { UsersState } from '@/store/modules/users/types';

const getAllUsers = async (
  context: ActionContext<UsersState, RootState>,
): Promise<{ users?: User[]; error?: string }> => {
  const url = context.rootState.config.apiUrl;
  try {
    const res: AxiosResponse<User[]> = await axios.get(`${url}/users`);
    return { users: res.data };
  } catch (e) {
    return { error: e?.response?.data?.errorMessage ?? e.message };
  }
};

const actions: ActionTree<UsersState, RootState> = {
  getAllUsers,
};

export default actions;
