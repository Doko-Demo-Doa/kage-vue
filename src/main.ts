import { createApp } from 'vue';
// @ts-ignore
import Reveal from 'reveal.js';
// @ts-ignore
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';

import App from './app.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
