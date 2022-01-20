import { Module } from 'vuex';
import { ConfigState } from './types';
import { RootState } from '@/store/types';
import actions from './actions';

const config: Module<ConfigState, RootState> = {
  namespaced: true,
  actions,
};

export default config;
