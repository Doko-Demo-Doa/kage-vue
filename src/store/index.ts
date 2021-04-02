import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { AppState } from "@/store/types";

import SlideModel from "@/vms/slide";
import QuizDeckModel from "@/vms/quiz-deck";
import QuizMultipleChoiceModel from "@/vms/quiz-multiple-choices";
import { QuizType } from "@/common/static-data";

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
    changeQuizIndex(state, payload: number) {
      state.composingQuizMeta.selectedIndex = payload;
    },
    changeQuizDeckName(state, payload: string) {
      state.composingQuizMeta.name = payload;
    },
    changeQuizDeckInstruction(state, payload: string) {
      state.composingQuizMeta.instruction = payload;
    },
    changeSingleQuizType(state, payload: { index: number; newType: QuizType }) {
      if (payload.index < 0) return;
      const targetQuiz = state.composingQuizCollection[payload.index];
      targetQuiz.type = payload.newType;
    },
    // Multiple choice quiz specific:
    changeCorrectIndex(state, payload: { id: string; cIndex: number }) {
      const targetQuiz = state.composingQuizCollection.find(
        (n) => n.id === payload.id && n.type === QuizType.MULTIPLE_CHOICE
      ) as QuizMultipleChoiceModel;
      if (targetQuiz) {
        targetQuiz.correctIndex = payload.cIndex;
      }
    },
    onChangeMultipleChoiceQuestion(state, payload: { index: number; newQuestion: string }) {
      const targetQuiz = state.composingQuizCollection[payload.index] as QuizMultipleChoiceModel;
      if (targetQuiz) {
        targetQuiz.title = payload.newQuestion;
      }
    },
  },
  actions: {},
  modules: {},
});

export default store;

export function useStore() {
  return baseUseStore(key);
}
