import Countdown from "./countdown.js";

const tempoParaAniversario = new Countdown("10 February 2026 23:59:59 GMT-0300");
console.log(tempoParaAniversario.total);

async function AniversarioDom(){
  const div = document.querySelector('.div');
  div.innerText = JSON.stringify(tempoParaAniversario.total);
}

setInterval(AniversarioDom, 1000);
AniversarioDom();