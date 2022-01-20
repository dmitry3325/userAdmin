import { Module } from 'vuex';
import { AuthState } from './types';
import { RootState } from '@/store/types';
import actions from './actions';
import mutations from './mutations';

const config: Module<AuthState, RootState> = {
  namespaced: true,
  actions,
  mutations,
};

export default config;
