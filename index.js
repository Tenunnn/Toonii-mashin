const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const operations2 = document.getElementById("operations2");
const number3 = document.getElementById("number3");
const operations = document.getElementById("operations");
const resultDiv = document.getElementById("result");

function operation() {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  const op = operations.value;
  const num3 = Number(number3.value);
  const op2 = operations2.value;

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
  let result2;
  if (op2 === "+") {
    result2 = result + num3;
  } else if (op2 === "-") {
    result2 = result - num3;
  } else if (op2 === "*") {
    result2 = result * num3;
  } else if (op2 === "/") {
    result2 = result / num3;
  }

  resultDiv.innerText = `result: ${result2}`;
}
