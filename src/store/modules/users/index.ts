import { Module } from 'vuex';
import { UsersState } from './types';
import { RootState } from '@/store/types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const users: Module<UsersState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
};

export default users;
