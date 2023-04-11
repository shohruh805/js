"use strict"
mySilder.oninput = showMyslider;

function showMyslider (){
 result.innerText = this.value; 
 if(result.innerText = this.value <=30){
    body.classList.add("body1");
    result.innerText = this.value;
    result.style.color = "#fff";
 }
 else if(result.innerText = this.value <=60){
    body.classList.add("body2");
    result.innerText = this.value;
    result.style.color = "red";
 }
 else if(result.innerText = this.value <=90){
    body.classList.add("body3");
    result.innerText = this.value;
    result.style.color = "green";
 }
 else if(result.innerText = this.value <=100){
    body.classList.add("body4");
    result.innerText = this.value;
    result.style.color = "blue";
 }
}



const body = document.querySelector(".body"),
      card = document.querySelector(".card");
      console.log(card);