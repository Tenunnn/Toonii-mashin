const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operations = document.getElementById("operations");
const resultDiv = document.getElementById("result");

function operation() {
  const num1 = +number1.value;
  const num2 = +number2.value;
  const op = operations.value;

  let result;

  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num1 / num2;
  }

  resultDiv.innerText = result;
}
