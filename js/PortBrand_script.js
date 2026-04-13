const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateSlider(){

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

}

dots.forEach((dot,i)=>{

dot.addEventListener("click",()=>{

index = i;

updateSlider();

})

});


function autoSlide(){

index++;

if(index >= slides.length){

index = 0;

}

updateSlider();

}

setInterval(autoSlide,4000);