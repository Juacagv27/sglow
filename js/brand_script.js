console.log("SCRIPT CARGADO");
document.addEventListener("DOMContentLoaded", function(){

const nodes = document.querySelectorAll(".node");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-text");

const nodeTitle = document.getElementById("nodeTitle");
const nodeText = document.getElementById("nodeText");

const content = {

n1:{
title:"ADN",
text:"El núcleo: valores, público y promesa de marca."
},

n2:{
title:"Identidad",
text:"Personalidad, Tono de voz, Estilo visual y Sensaciones. (Logo, paleta y recursos)"
},

n3:{
title:"Manual de marca",
text:"Las reglas de uso y aplicaciones de marca (Papelería/Digital)."
},

n4:{
title:"Ecosistema Digital",
text:"Diseño y construcción de la interfaz de su web o app."
},

n5:{
title:"posicionamiento",
text:"La estrategia de pauta, SEO y alcance en el mercado."
},

n6:{
title:"Gestion de contenidos",
text:"La comunicación viva, redes sociales y el día a día con la audiencia."
},

n7:{
title:"Analítica",
text:"Optimización: El cierre del 100%. Reportes de datos y mejoras constantes para que la marca crezca."
}

};

nodes.forEach(node => {

node.addEventListener("click", function(){

if(node.classList.contains("locked")) return;

const id = node.id;

if(node.classList.contains("active")){

node.classList.remove("active");
node.classList.add("completed");

unlockChildren(node);
showContent(id);

}

else if(node.classList.contains("completed")){

resetBranch(node);

node.classList.remove("completed");
node.classList.add("active");

}

updateProgress();

});

});

function unlockChildren(node){

const targets = node.dataset.unlocks;

if(!targets) return;

targets.split(",").forEach(id =>{

const child = document.getElementById(id.trim());

if(child && child.classList.contains("locked")){

child.classList.remove("locked");
child.classList.add("active");

}

});

}

function resetBranch(node){

const targets = node.dataset.unlocks;

if(!targets) return;

targets.split(",").forEach(id =>{

const child = document.getElementById(id.trim());

if(child){

child.classList.remove("active","completed");
child.classList.add("locked");

resetBranch(child);

}

});

}

function updateProgress(){

const total = nodes.length;

const completed = document.querySelectorAll(".node.completed").length;

const percent = Math.round((completed/total)*100);

if(progressFill) progressFill.style.width = percent + "%";

if(progressText) progressText.textContent = percent + "%";

}

function showContent(id){

const data = content[id];

if(!data) return;

if(nodeTitle) nodeTitle.textContent = data.title;

if(nodeText) nodeText.textContent = data.text;

}

});