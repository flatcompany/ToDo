const inputTask = document.getElementById("header__input");
const ul = document.querySelector("ul.list");

ul.addEventListener("click", function(ev) {
  if (ev.target.id === "del") {
    const listit = ev.target.parentNode;
    listit.remove();
  } else {
    if (ev.target.id === "check") style(ev);
  }
});

function style(ev) {
  var inputtxt;
  const div = ev.target.parentNode;

  for (var i = 0; i < div.childNodes.length; i++) {
    if (div.childNodes[i].id === "txt") {
      inputtxt = div.childNodes[i];
      break;
    }
  }
  if (ev.target.checked) {
    inputtxt.classList.add("checked");
  } else inputtxt.classList.remove("checked");
}

function createNewElement() {
  const listitem = document.createElement("li");
  listitem.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "check";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "text";
  input.id = "txt";
  input.value = inputTask.value.trim();

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.id = "del";

  listitem.appendChild(checkbox);
  listitem.appendChild(input);
  listitem.appendChild(deleteButton);
  ul.appendChild(listitem);

  return listitem;
}

function addTask() {
  if (inputTask.value != "") {
    ul.appendChild(createNewElement());
    inputTask.value = "";
  } else {
    alert("Ведите текст");
  }
}

inputTask.addEventListener("keydown", function() {
  if (event.keyCode == 13) {
    addTask();
  }
});
