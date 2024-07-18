let gameSeq=[];
let userSeq=[];

let highScore = 0;

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let leval = 0;
let body = document.querySelector("body");

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if (started == false) {
        console.log("game started");
        started = true;

        levalUp();
        
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}

function levalUp() {
    userSeq = [];
    leval++;
    h2.innerText = `Leval ${leval}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    Score();
}

function checkAns(idx) {
    
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levalUp, 1000);
        }
        
    }else{
        
        h2.innerHTML = `Game Ove! Your score was <b>${leval}</b> <br> press any key to start`;
        let h3 = document.querySelector("h3");
        h3.innerText = `High Score : ${highScore}`;
        body.style.backgroundColor = 'red';
        setTimeout(function(){
            body.style.backgroundColor = 'white';
        },1000);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    
    userSeq.push(userColor);
    console.log("high score is ", highScore);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    leval = 0;
}
function Score() {
    if (highScore < leval) {
        highScore = leval;
    }
}