import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import ElementPlus from 'element-plus';
import { createI18n } from 'vue-i18n';

import en from '@/assets/languages/en.json';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
  },
});

createApp(App).use(router).use(store).use(ElementPlus).use(i18n).mount('#app');
