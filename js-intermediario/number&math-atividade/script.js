// Retorne um número aleatório
// entre 1050 e 2000
let valorMin = 1050;
let valorMax = 2000;

let numeroAleatorio =
  Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;

console.log(`o número aleatório é ${numeroAleatorio}`);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", "); // vai transformar a string em uma Array, para podermos transformar em Number e manipular
const maiorNumero = Math.max(...arrayNumeros);

console.log(maiorNumero);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
