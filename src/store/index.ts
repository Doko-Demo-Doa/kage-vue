import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { AppState } from "@/store/types";

import SlideModel from "@/vms/slide";
import QuizDeckModel from "@/vms/quiz-deck";

export const key: InjectionKey<Store<AppState>> = Symbol();

const emptyDeck = new QuizDeckModel();

const store = createStore<AppState>({
  state: {
    composingSlides: Array<SlideModel>(),
    composingQuizDeck: emptyDeck,
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
