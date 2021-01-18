const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const deleteLi = event.target.parentNode;
    toDoList.removeChild(deleteLi);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(deleteLi.id); 
    });
    // toDos(array).filter : 함수의 테스트를 통과한,ㄴ 모든 요소들을 모아서 새로운 배열로 반환함
    toDos = cleanToDos;
    saveToDo();
    // 페이지 새로고침
    window.location.reload();
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}
// JSON.stringify(toDos) : localstorage는 string값만 저장되기 때문에 object를 string으로 변환해야 함

function paintToDo(text) {
    // li > span + button 생성해서 ul안에 넣기
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deletBtn = document.createElement("button");
    const newId = toDos.length + 1;
    span.innerText = text;
    deletBtn.innerText = "❌";
    deletBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(deletBtn);
    li.id = newId;
    toDoList.appendChild(li);

    // todo를 object로 만들어 array에 넣기
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);

    // localstrage에 저장
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODO_LS);
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        // JSON.parse(loadToDos) : String -> Object
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        // parsedToDos(array).forEach : array안의 요소를 하나씩 접근하여 함수를 실행함
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();