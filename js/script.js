const poon = document.querySelectorAll('.poon');
const kunti = document.querySelectorAll('.kunti');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let poonSebelumnya;
let selesai;
let skor;

function randomPoon(poon){ 
    let apakahSama = true;
    let p;
    
    do {
        p = Math.floor(Math.random() * poon.length);
        
        if(p !== poonSebelumnya){
            apakahSama = false;
            poonSebelumnya = p; 
        } 
    } 
    while (apakahSama === true)
    let pRandom = poon[p];
    return pRandom;
}

function randomWaktuPenampakan(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanKunti(){
    const pRandom = randomPoon(poon);
    const wRandom = randomWaktuPenampakan(300, 1000);
    pRandom.classList.add('muncul');
    setTimeout(() => {
        pRandom.classList.remove('muncul');
        if (!selesai){
            munculkanKunti();
        }
    }, wRandom);
}

function mulai(){
    selesai = false;
    skor = 0;
    munculkanKunti();
    setTimeout(() => {
        selesai = true;
        totalSkor();
    }, 15000);
}

function totalSkor(){
    document.getElementById('result').innerHTML = `Your total score is ${papanSkor.textContent}`
}
function pukul(){
    skor++;
    this.parentNode.classList.remove('muncul')
    pop.play();
    papanSkor.textContent = skor;
}

kunti.forEach(t => {
   t.addEventListener('click', pukul);
});