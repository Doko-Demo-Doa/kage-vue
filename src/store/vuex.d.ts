import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { AppState } from "@/store/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<AppState>;
  }
}
