const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    // 시스템 시간을 가져오는 객체
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 삼항연산자 : 시계의 숫자가 한자리 수 일때 숫자 앞에 0이 붙도록
    clockTitle.innerText = `${hours <10 ? `0${hours}` : hours}:${
        minutes <10 ? `0${minutes}` :minutes
    }:${seconds <10 ? `0${seconds}` : seconds}`; 
}

function init(){
    getTime();

    //자동으로 새로고침. (fn, 시간(ms단위))
    setInterval(getTime, 1000); 
}

init();