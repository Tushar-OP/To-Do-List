var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var div = document.createElement("div");
  var btn = document.createElement("button");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  btn.appendChild(document.createTextNode("Delete"));
  div.setAttribute("id", input.value);
  li.setAttribute("onclick", "taskdone(this.parentElement.id)");
  btn.setAttribute("onclick", "DelTask(this.parentElement.id)");
  div.appendChild(li);
  div.appendChild(btn);
  ul.appendChild(div);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function DelTask(taskname) {
  // var rem = document.getElementById(taskname);
  ul.removeChild(document.getElementById(taskname));
}

function taskdone(id) {
  document.getElementById(id).classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
