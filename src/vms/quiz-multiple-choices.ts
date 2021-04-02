import { QuizType } from "@/common/static-data";
import QuizModel from "@/vms/quiz";

type Choice = {
  id: number;
  label: string;
};

// Single quiz object.
export default class QuizMultipleChoiceModel extends QuizModel {
  type: QuizType;
  audioLink?: string;
  imageVideoLink?: string;
  correctIndex: number;
  choices: Choice[];

  constructor() {
    super();
    this.type = QuizType.MULTIPLE_CHOICE;
    this.correctIndex = 0;
    this.choices = [];
  }
}
