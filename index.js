"use strict"
const numberOfQuestions = 10;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let str = "";
let isNum = 0;

window.onkeydown = e=>{
  e.preventDefault();
  main(e.key.toUpperCase());
}

function init(){
  str = "";
  isNum = 0;
  for(let i = 0;i < numberOfQuestions;i++) str += alphabet[Math.round(Math.random()*25)];
  document.getElementById("frame").textContent = str;
}

function main(inputKey){
  if(str.charAt(0)===inputKey){
    isNum++;
    if(isNum < numberOfQuestions){
      str = str.slice(1, str.length);
      document.getElementById("frame").textContent = str;
    }else{
      document.getElementById("frame").textContent = "終了します";
    }
  }
}

init();