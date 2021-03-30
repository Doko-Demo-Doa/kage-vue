// Module dùng để verify xem file quiz có đúng định dạng hay không.
import { has } from "rambdax";

export const verifyQuiz = (inputJson: Record<string, unknown>): boolean => {
  if (!has("id", inputJson)) return false;
  if (!has("name", inputJson)) return false;
  if (!inputJson.syllabus) return false;
  if (!inputJson.instruction) return false;
  if (!has("passing_score", inputJson)) return false;

  return true;
};
