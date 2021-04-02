import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { AppState } from "@/store/types";

import SlideModel from "@/vms/slide";
import QuizDeckModel from "@/vms/quiz-deck";
import QuizMultipleChoiceModel from "@/vms/quiz-multiple-choices";

export const key: InjectionKey<Store<AppState>> = Symbol();

const store = createStore<AppState>({
  state: {
    composingSlides: Array<SlideModel>(),
    composingQuizMeta: new QuizDeckModel(),
    composingQuizCollection: [],
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
    newQuiz(state) {
      state.composingQuizCollection.push(new QuizMultipleChoiceModel());
    },
    changeQuizIndex(state, payload) {
      console.log(payload);
    },
    changeQuizDeckName(state, payload: string) {
      state.composingQuizMeta.name = payload;
    },
    changeQuizDeckInstruction(state, payload: string) {
      state.composingQuizMeta.instruction = payload;
    },
    // Multiple choice quiz specific:
    changeCorrectIndex(state, payload: { id: string; cIndex: number }) {
      const targetQuiz = state.composingQuizCollection.find((n) => n.id === payload.id);
    },
  },
  actions: {},
  modules: {},
});

export default store;

export function useStore() {
  return baseUseStore(key);
}
