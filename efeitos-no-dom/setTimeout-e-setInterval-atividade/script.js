// Mude a cor da tela para azul e depois para vermelho a cada 2s.
//const body = document.querySelector("body");

//const ChangeTela = setInterval(() => {
  //body.classList.toggle("active");
//}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo')

let  i = 0;
function startCronometro(){
  tempo.innerText = 0;
}

function teste(){
  console.log('teste')
}

iniciar.addEventListener('click',startCronometro);