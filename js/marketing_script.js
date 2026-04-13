const textos = document.querySelectorAll(".texto");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
},{
threshold:0.4
});

textos.forEach(t=>{
observer.observe(t);
});