import { createApp } from "vue";
import Antd from "ant-design-vue";

import "@/assets/styles/app.scss";
import "ant-design-vue/dist/antd.css";

import App from "./app.vue";
import router from "./router";
import store, { key } from "./store";

import "./registerServiceWorker";

const app = createApp(App).use(store, key).use(router).use(Antd);

app.mount("#app");
