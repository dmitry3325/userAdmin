import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import config from '@/store/modules/config';
import users from '@/store/modules/users';

export default new Vuex.Store({
  modules: {
    config,
    auth,
    users,
  },
});
