import SlideModel from "@/vms/slide";
import QuizDeckModel from "@/vms/quiz-deck";

export interface AppState {
  composingSlides: Array<SlideModel>;
  composingQuizDeck: QuizDeckModel;
  selectedSlideIndex: number;
  activeAsset: null;
  backtrack: Array<string>;
}
