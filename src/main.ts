import { createApp } from "vue";
import ElementPlus from "element-plus";
import "@/assets/styles/app.scss";
import "element-plus/lib/theme-chalk/index.css";

import App from "./app.vue";
import router from "./router";
import store, { key } from "./store";

import "./registerServiceWorker";

const app = createApp(App).use(store, key).use(router).use(ElementPlus);

app.mount("#app");
