//btn
let preBtn = document.getElementById('pre-power');
let powerBtn = document.getElementById('power');
let postBtn = document.getElementById('post-power');
let bibBtn = document.getElementById('biblio-btn');

//div
const preDiv = document.getElementById("pre-txt");
const powerDiv = document.getElementById("power-txt");
const postDiv = document.getElementById("post-txt");
const bibDiv = document.getElementById("biblio");

preBtn.addEventListener('click', preHandler);
function preHandler(){
    preDiv.classList.toggle('hidden');
}
powerBtn.addEventListener('click', powerHandler);
function powerHandler(){
    powerDiv.classList.toggle('hidden');
}
postBtn.addEventListener('click', postHandler);
function postHandler(){
    postDiv.classList.toggle('hidden');
}
bibBtn.addEventListener('click', biblioHandler);
function biblioHandler(){
    bibDiv.classList.toggle('hidden');
}