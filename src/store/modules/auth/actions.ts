import { ActionContext, ActionTree } from 'vuex';
import { AuthState } from '@/store/modules/auth/types';
import { RootState } from '@/store/types';
import axios, { AxiosResponse } from 'axios';
import { User } from '@/types/User';
import { BaseResponse } from '@/types/ApiResponse';

const getAuthUser = async (context: ActionContext<AuthState, RootState>): Promise<{ user?: User; error?: string }> => {
  const id = localStorage.getItem('id');
  if (!id) return {};
  const url = context.rootState.config.apiUrl;
  try {
    const res: AxiosResponse<User> = await axios.get(`${url}/users/${id}/`);
    context.state.user = res.data;
    return { user: res.data };
  } catch (e) {
    return { error: e.message };
  }
};

const logout = async (context: ActionContext<AuthState, RootState>): Promise<boolean> => {
  localStorage.removeItem('id');
  context.state.user = undefined;
  return true;
};

const createUser = async (
  context: ActionContext<AuthState, RootState>,
  user: User,
): Promise<{ user?: User; error?: string }> => {
  const url = context.rootState.config.apiUrl;
  try {
    const res: AxiosResponse<BaseResponse<{ id: number }>> = await axios.post(`${url}/users/`, user);
    localStorage.setItem('id', res.data.data.id.toString());
    return await getAuthUser(context);
  } catch (e) {
    return { error: e?.response?.data?.errorMessage ?? e.message };
  }
};

const loadUser = async (
  context: ActionContext<AuthState, RootState>,
  args: { name: string; accountNumber: string },
): Promise<{ user?: User; error?: string }> => {
  const url = context.rootState.config.apiUrl;
  try {
    const res: AxiosResponse<User[]> = await axios.get(
      `${url}/users?name=${args.name}&accountNumber=${args.accountNumber}`,
    );
    if (res.data.length !== 1) {
      return { error: 'User not found' };
    }
    const user = res.data[0];
    localStorage.setItem('id', user.id.toString());
    context.state.user = user;
    return { user };
  } catch (e) {
    return { error: e?.response?.data?.errorMessage ?? e.message };
  }
};

const actions: ActionTree<AuthState, RootState> = {
  getAuthUser,
  loadUser,
  createUser,
  logout,
};

export default actions;
