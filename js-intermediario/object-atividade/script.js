// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado){
  const verificar = Object.prototype.toString.call(dado);
  return verificar;
}

console.log(verificarDado([]));


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

Object.defineProperties(quadrado,{
  lados:{
    value: 4,
      writable:false,
  }

})
quadrado.lados = 50;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);
configuracao.width = 1000;
console.log(configuracao);


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const propiedadesString = Object.getOwnPropertyNames(String.prototype);
const propiedadesArray = Object.getOwnPropertyNames(Array.prototype);

console.log(propiedadesString);
console.log(propiedadesArray);