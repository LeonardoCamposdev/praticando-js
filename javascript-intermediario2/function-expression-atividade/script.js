// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));
// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const jiuJtisu = 'prometo que vou melhorar!!!';

(() =>{
  const jiuJtisu = 'estou só apanhando mas vou me esforçar!!!';
  console.log(jiuJtisu)
})()

console.log(jiuJtisu)
// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function(){
  console.log('xeqselee')
})