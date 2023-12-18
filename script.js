let body = document.body;
let olsen = document.body.querySelector(".olsen");
let heart = document.body.querySelector(".heart");
console.log(body);
console.log(olsen);
console.log(heart);

let btn = document.body.querySelector(".btn");
let press = "run";
btn.addEventListener("click",()=>{
    if(press === "run"){
        body.classList.add("animate-color");
        olsen.classList.add("animate-pic");
        heart.classList.add("animate-heart");
        press = "stop";
    }else if(press === "stop"){
        body.classList.remove("animate-color");
        olsen.classList.remove("animate-pic");
        heart.classList.remove("animate-heart");
        press = "run";
    }
})