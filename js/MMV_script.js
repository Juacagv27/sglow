const slides = document.querySelectorAll(".slides img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

slides[index].classList.add("active");

next.addEventListener("click", () => {

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

});


prev.addEventListener("click", () => {

slides[index].classList.remove("active");

index--;

if(index < 0){
index = slides.length -1;
}

slides[index].classList.add("active");

});