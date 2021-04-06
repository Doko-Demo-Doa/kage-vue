import SlideModel from "@/vms/slide";
import QuizDeckModel from "@/vms/quiz-deck";
import QuizModel from "@/vms/quiz";

export interface AppState {
  isPreview: boolean;
  composingSlides: Array<SlideModel>;
  composingQuizMeta: QuizDeckModel;
  composingQuizCollection: Array<QuizModel>;
  selectedSlideIndex: number;
  activeAsset: null;
  backtrack: Array<string>;
}
