"use strict"
const numberOfQuestions = 10; // 問題数
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const restart = document.getElementById("restart");
const frame = document.getElementById("frame");
let str = ""; // 問題文
let count = 0; // 何問目

const init = ()=>{
    str = "";
    count = 0;
    for(let i = 0;i < numberOfQuestions;i++) str += alphabet[Math.round(Math.random()*25)];
    document.getElementById("frame").textContent = str;
}

const main = inputKey=>{
    if(str.charAt(0) === inputKey){
        count++;
        if(count < numberOfQuestions){
            str = str.slice(1, str.length);
            frame.textContent = str;
        }else{
            frame.textContent = "終了します\nリセットボタンを押してください";
        }
    }
}

restart.addEventListener("click", ()=>{
    init();
});

window.onkeydown = e=>{
    e.preventDefault();
    main(e.key.toUpperCase());
}

window.onload = init();