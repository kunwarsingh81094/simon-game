let gameseq=[];
let userseq=[];

let btns =["red","yellow","green","purple"];
let started = false;
let level=0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
   // console.log("games started");
if(started==false)
{
    console.log("game is started");
    started=true;

levelup();

}

});



function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;


let randidx = Math.floor(Math.random()*3);
let randomcolor = btns[randidx];
let randbtn = document.querySelector(`.${randomcolor}`);

// console.log(randidx);
// console.log(randomcolor);
// console.log(randbtn);

gameseq.push(randomcolor);
console.log(gameseq);
    gameflash(randbtn);
}


function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},500);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
    };

 
    function  checkans (index){
        //console.log("level is :",level);


if (userseq[index] === gameseq[index])
{
if(userseq.length  == gameseq.length)
{
   setTimeout(levelup,1000);
}

}
else{
    h2.innerHTML=`game is over! Your Score was <b>${level}</b> <br> Please press any key to start` ;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}

    };

    


function btnpress(){
    console.log(this);
    let btn =this;
    userflash(btn);
let usercolor = btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);

checkans(userseq.length-1);
}



let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}



function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
