// Retorne um número aleatório
// entre 1050 e 2000
let valorMin = 1050;
let valorMax = 2000;

let numeroAleatorio = Math.floor(Math.random() * (valorMax - valorMin +1)) + valorMin;


console.log(`o número aleatório entre 1050 e 2000 é (${numeroAleatorio})`);


// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

const numerosArray = numeros.split(',');
console.log(numerosArray)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

