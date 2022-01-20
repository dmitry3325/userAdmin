import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';
import { User } from '@/types/User';
import { UsersState } from '@/store/modules/users/types';

const getUser = (users: UsersState) => (): User[] => users.users;

const getters: GetterTree<UsersState, RootState> = {
  getUser,
};

export default getters;
