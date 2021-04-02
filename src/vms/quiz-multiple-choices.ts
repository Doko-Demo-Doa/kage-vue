import { QuizType } from "@/common/static-data";

// Single quiz object.
export default class QuizMultipleChoiceModel {
  id: string;
  type: QuizType;

  constructor() {
    this.id = "0";
    this.type = QuizType.MULTIPLE_CHOICE;
  }
}
