// Mude a cor da tela para azul e depois para vermelho a cada 2s.
//const body = document.querySelector("body");

//const ChangeTela = setInterval(() => {
//body.classList.toggle("active");
//}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");
pausar.disabled = true;

let i = 0;
let timer;
function startCronometro() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.disabled = true;
  pausar.disabled = false;
}

function pauseCronometro() {
  clearInterval(timer);
  iniciar.disabled = false;
}

function cleanCronometro() {
  tempo.innerText = 0;
  i = i.innerText = 0;
  pausar.disabled = true;
}

iniciar.addEventListener("click", startCronometro);
pausar.addEventListener("click", pauseCronometro);
pausar.addEventListener("dblclick", cleanCronometro);
