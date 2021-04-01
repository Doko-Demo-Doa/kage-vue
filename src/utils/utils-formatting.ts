export function furiganaTemplateToHTML(inputStr: string) {
  if (inputStr.includes("{") && inputStr.includes("}")) {
    const ruby = inputStr
      .replace("{", "<ruby>")
      .replace("}", "</ruby>")
      .replace("(", "<rt>")
      .replace(")", "</rt>");
    return ruby;
  }

  return inputStr;
}
