import { Module } from 'vuex';
import { AuthState } from './types';
import { RootState } from '@/store/types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const auth: Module<AuthState, RootState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
};

export default auth;
