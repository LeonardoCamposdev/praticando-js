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
const moto = {};

Object.defineProperties(moto,{
  rodas:{
    value: 2,
    writable: false,
  },

  cor:{
    value: 'Vermelha',
    writable: false,
  }
})

moto.cor = 'azul';
console.log(moto)

// Previna qualquer mudança
// no objeto abaixo


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
