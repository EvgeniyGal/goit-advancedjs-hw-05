import { concatenetion } from "./concantenation.js";

const button = document.querySelector("button");
const input = document.querySelector("input");

if (button && input) {
  button.addEventListener("click", () =>
    concatenetion(input.value, ", hello!!!")
  );
}
