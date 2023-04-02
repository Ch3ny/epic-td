const play = document.getElementById("play");
const lore = document.getElementById("lore");
const story = document.getElementById("story");
const mainmenu = document.getElementById("mainmenu");
const maingame = document.getElementById("maingame");
const plus = document.getElementById("plus");
const plusimga = document.getElementById("plusimga");
const plusimgb = document.getElementById("plusimgb");
const plusimgc = document.getElementById("plusimgc");
const plusimgd = document.getElementById("plusimgd");
const plusimge = document.getElementById("plusimge");
const plusimgf = document.getElementById("plusimgf");
const plusimgg = document.getElementById("plusimgg");
const plusimgh = document.getElementById("plusimgh");
const towera = document.getElementsByClassName("tower-1");
const towerb = document.getElementsByClassName("tower-2");
const towerc = document.getElementsByClassName("tower-3");
const towerd = document.getElementsByClassName("tower-4");
const towere = document.getElementsByClassName("tower-5");
const towerf = document.getElementsByClassName("tower-6");
const towerg = document.getElementsByClassName("tower-7");
const towerh = document.getElementsByClassName("tower-8");






window.onload = () =>{
document.body.style.backgroundImage = "url(./res/img/forest.jpg)";
}


play.onclick = () =>{
mainmenu.style.display="none";
maingame.style.display="block";
document.body.style.backgroundImage = "url(./res/img/path.jpg)";
}

lore.onclick = () =>{
    mainmenu.style.display="none";
    story.style.display="block";
}

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-1');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-2');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-3');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-4');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-5');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-6');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-7');
        document.body.appendChild(newEl);
}, 1000);

setInterval(() => {
    let newEl = document.createElement('div');
        newEl.classList.add('bullet-8');
        document.body.appendChild(newEl);
}, 1000);

 