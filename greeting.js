const form = document.querySelector(".js-from"), // form태그
    input = form.querySelector("input"), //input태그
    greeting = document.querySelector(".js-greetings"); //h4태그

const USER_LS = "currentUser", // localStorage key값
    SHOWING_CN = "showing"; // className = showing

// lacalStorage에 입력받은 값 저장
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// form태그에서 submit할 때
function handleSubmit(event){
    event.preventDefault(); 
    const currentValue = input.value; // input태그 값
    paintGreeting(currentValue); 
    saveName(currentValue);
}

//input태그 보이게
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// h4태그 보이게
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

// lacalStorage에 있는 이름을 h4에 올리기
function loadName(){
    const currentUser = localStorage.getItem(USER_LS); 
    if(currentUser === null){  
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();