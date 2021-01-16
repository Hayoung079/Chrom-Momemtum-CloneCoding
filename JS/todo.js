const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

function paintToDo(text) {
    // li > span + button 생성해서 ul안에 넣기
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;
    const deletBtn = document.createElement("button");
    deletBtn.innerText = "❌";

    li.appendChild(span);
    li.appendChild(deletBtn);

    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function saveToDos() {
    
}

function loadToDos() {
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null){

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();