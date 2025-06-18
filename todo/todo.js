const myInput = document.getElementById("input");
const myButton = document.getElementById("myButton");
const Todolists = document.getElementById("Todolist");
const TodoListo = document.getElementById("Todo-list");
const main = document.getElementsByClassName("main");

function addingtasks() {
  const inputValue = myInput.value;
  const Todolist = document.createElement("div");
  Todolist.innerText = inputValue;
  document.body.appendChild(Todolist);
}

myButton.addEventListener("click", addingtasks);
