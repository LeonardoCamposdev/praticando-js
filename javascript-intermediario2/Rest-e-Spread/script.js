function sorteio(premio,...ganhadores){
  ganhadores.forEach((ganhador) =>{
    console.log(`${ganhador} ganhou ${premio}`);
  })
  console.log(ganhadores);
}

sorteio('uma Milhar ', 'Leo', 'Ravi', 'Luis', 'Palloma', 'Edileuza');


const frutas = ['Banana', 'Uva', 'Morango'];
const instrumentos = ['Bateria', 'Violão', 'Guitarra'];

const palavras = [...frutas, 'XesqdeleBrelele', ...instrumentos];
console.log(palavras);

const listaNumeros = [1,23,532,211,45,56,65];

const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

const btns = document.querySelectorAll('button');
console.log(btns);

const btnsArray = [...btns];
console.log(btnsArray);


const frase = 'Um dia vou ser bom no jiu-jitsu';
const fraseArray = [...frase];
console.log(fraseArray);
