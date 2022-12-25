const div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "Black";

function addwidth(){
    div.style.width = (parseInt(div.style.width)+50)+"px"
}

function decwidth(){
    div.style.width = (parseInt(div.style.width)-50)+"px"
}



const root = document.querySelector(".root");
root.appendChild(div);


const dec = document.querySelector(".decrease-width");

dec.addEventListener("click",decwidth);



const add = document.querySelector(".increase-width");

add.addEventListener("click",addwidth);
