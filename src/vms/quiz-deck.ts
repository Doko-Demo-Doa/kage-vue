export default class QuizDeckModel {
  id: string;
  name: string;
  level: string;
  syllabus: string;
  instruction: string;

  constructor() {
    this.id = "0";
    this.name = "";
    this.level = "";
    this.syllabus = "shinkanzen-master-n3";
    this.instruction = "Hãy chọn một đáp án đúng trong số 4 đáp án A-B-C-D";
  }
}
