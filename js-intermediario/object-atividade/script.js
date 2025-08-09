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


// Previna qualquer mudança
// no objeto abaixo


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
