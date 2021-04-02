export default class QuizDeckModel {
  id: string;
  name: string;
  level: string;
  syllabus: string;
  instruction: string;
  selectedIndex: number;
  passingScore: number;

  constructor() {
    this.id = "0";
    this.name = "Tiêu đề quiz";
    this.level = "";
    this.syllabus = "";
    this.instruction = "Hướng dẫn làm bài";
    this.selectedIndex = -1;
    this.passingScore = 100;
  }
}
