import { ActionContext, ActionTree } from 'vuex';
import { ConfigState } from '@/store/modules/config/types';
import { RootState } from '@/store/types';

import config from '@/assets/config/api.json';

const initConfig = (context: ActionContext<ConfigState, RootState>) => {
  context.state = config;
};

const actions: ActionTree<ConfigState, RootState> = {
  initConfig,
};

export default actions;
