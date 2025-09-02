// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// o endereço completo é retornado ao clicar em buscar
const btnCep = document.querySelector(".btnCep");
const input = document.querySelector(".input");
const resultadoCep = document.querySelector(".resultadoCep");

function mostrarCep(event) {
  event.preventDefault();
  buscarCep(`https://viacep.com.br/ws/${input.value}/json/`);
}

async function buscarCep(cep) {
  const responseCep = await fetch(cep);
  const responseText = await responseCep.text();
  resultadoCep.innerText = responseText;
}

btnCep.addEventListener("click", mostrarCep);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const mostrarValorBitcoin = document.querySelector('.valorBitcoin');

async function valorBitcoin() {
  const responseBitcoin = await fetch("https://blockchain.info/ticker");
  const responseJson = await responseBitcoin.json();
  const valorCompra = +responseJson.BRL.buy;
  mostrarValorBitcoin.innerText = `o valor do bitcoin em real brasileiro está em ${valorCompra}`;
}

setInterval(() =>{
  valorBitcoin();
},30000)



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.querySelector(".btnPiada");
const piadaRadom = document.querySelector(".piadaRandom");

function novaPiada(event) {
  event.preventDefault();
  buscarPiada("https://api.chucknorris.io/jokes/random");
}

async function buscarPiada(piada) {
  const responsePiada = await fetch(piada);
  const responseJson = await responsePiada.json();
  piadaRadom.innerText = responseJson.value;
}

btnPiada.addEventListener("click", novaPiada);
