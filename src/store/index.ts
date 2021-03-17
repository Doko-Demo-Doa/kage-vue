import { createStore } from "vuex";
import SlideModel from "@/vms/slide";

export default createStore({
  state: {
    composingSlides: Array<SlideModel>(),
    activeAsset: null,
    // Action history, useful for undo-repo actions.
    backtrack: Array<string>(),
  },
  mutations: {},
  actions: {},
  modules: {},
});
