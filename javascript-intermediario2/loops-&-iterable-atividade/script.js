// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const listaLi = document.querySelectorAll('li');
for(li of listaLi){
  li.classList.add('deu-certo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const prop in window) {
  console.log(`${prop}: ${ window[prop]}`);
}