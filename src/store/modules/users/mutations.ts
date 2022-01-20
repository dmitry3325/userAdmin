import { MutationTree } from 'vuex';
import { User } from '@/types/User';
import { UsersState } from '@/store/modules/users/types';

const setUsers = (authState: UsersState, users: User[]) => {
  authState.users = users;
};

const mutations: MutationTree<UsersState> = {
  setUsers,
};

export default mutations;
