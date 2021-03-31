import QuizModel from "@/vms/quiz";

export default class QuizDeckModel {
  id: string;
  name: string;
  level: string;
  syllabus: string;
  instruction: string;
  selectedIndex: number;
  quizCollection: Array<QuizModel>;

  constructor() {
    this.id = "0";
    this.name = "";
    this.level = "";
    this.syllabus = "";
    this.instruction = "";
    this.selectedIndex = 0;
    this.quizCollection = [];
  }
}
