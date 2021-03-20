import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import SlideModel from "@/vms/slide";
import { AppState } from "./types";

export const key: InjectionKey<Store<AppState>> = Symbol();

const store = createStore<AppState>({
  state: {
    composingSlides: Array<SlideModel>(),
    selectedSlideIndex: -1,
    activeAsset: null,
    // Action history, useful for undo-repo actions.
    backtrack: Array<string>(),
  },
  mutations: {
    newSlide(state) {
      state.composingSlides.push(new SlideModel());
    },
    removeSlide(state) {
      state.composingSlides.pop();
    },
  },
  actions: {},
  modules: {},
});

export default store;

export function useStore() {
  return baseUseStore(key);
}
