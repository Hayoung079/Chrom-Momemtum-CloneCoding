const form = document.querySelector(".js-from"), 
    input = form.querySelector("input"), 
    greeting = document.querySelector(".js-greetings"); //h4태그

const USER_LS = "currentUser", // localStorage key값
    SHOWING_CN = "showing"; // className = showing

// lacalStorage에 입력받은 값 저장
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// submit할 때
function handleSubmit(event){
    event.preventDefault();
    // event.preventDefault(); : submit할 때 새로고침 되는 형상을 방지함
    const currentValue = input.value; 
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

// lacalStorage에 있는 이름을 가져와 h4에 올리기
function loadName(){ 
    const currentUser = localStorage.getItem(USER_LS); 

    if(currentUser === null){  // 저장된 유저가 없을 때
        askForName();
    }else{  // 저장된 유저가 있을 때
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();