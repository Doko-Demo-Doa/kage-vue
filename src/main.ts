import { createApp } from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from './app.vue';
import router from './router';
import store from './store';

import './assets/scss/app.scss';
import './registerServiceWorker';

const app = createApp(App)
  .use(store)
  .use(router)
  // @ts-ignore
  .use(Buefy);

app.mount('#app');
