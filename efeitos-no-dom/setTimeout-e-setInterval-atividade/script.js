// Mude a cor da tela para azul e depois para vermelho a cada 2s.
//const body = document.querySelector("body");

//const ChangeTela = setInterval(() => {
//body.classList.toggle("active");
//}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

let i = 0;
let timer;

function startCronometro(){
  timer = setInterval (()=>{
    tempo.innerText = i++;
  },100)

  iniciar.disabled = true;
}

function pauseCronometro(){
  clearInterval(timer);

  iniciar.disabled = false;
}

function resetCronometro(){
  tempo.innerText = 0;
  i = 0;

}

iniciar.addEventListener('click', startCronometro);
pausar.addEventListener('click', pauseCronometro);
pausar.addEventListener('dblclick',resetCronometro);