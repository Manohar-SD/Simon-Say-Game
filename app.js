let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"]

let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        leveUp()
    }


})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },200)
}

function leveUp(){
    userSeq=[];
    level++
    h2.innerText=`Level ${level}`
    let randomNum = Math.ceil(Math.random()*3);
    let randomColor = btns[randomNum];

    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    
    gameFlash(randomBtn)
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}

function checkAns(index){
    if(gameSeq[index]==userSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(leveUp,1000);
        }
        
    }else{
        h2.innerHTML=`Game over ! Your Score :<b>${level-1}</b> <br>  Press any key to start`
        document.body.style.backgroundColor="red";
        setTimeout(function(){
            document.body.style.backgroundColor="white"
        },250)
        reset();
    }
    
    
}


function btnPress(){
    let btn = this;
    let userBtn = this.classList[1];
    userFlash(btn);
    userSeq.push(userBtn);
    checkAns(userSeq.length-1);
}

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}





