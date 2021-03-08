import { createApp } from "vue";
import ElementPlus from "element-plus";
import "@/assets/styles/app.styl";
import "element-plus/lib/theme-chalk/index.css";

import App from "./app.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";

const app = createApp(App).use(store).use(router).use(ElementPlus);

app.mount("#app");
