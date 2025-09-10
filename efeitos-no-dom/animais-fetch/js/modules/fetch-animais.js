import initAnimaNumeros from './anima-numeros.js';
export default function initFetchAnimais(){
  async function fetchAnimais(url){
  const responseAnimais = await fetch(url);
  const animaisJSON = await responseAnimais.json();
  animaisJSON.forEach((animal)=>{
    animaisDom(animal)
    initAnimaNumeros();
  })
}

function animaisDom(animal){
  const div = document.createElement('div');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`; 
  const numerosGrid = document.querySelector('.numeros-grid');
  numerosGrid.appendChild(div);
  return div;
}

fetchAnimais('./animaisapi.json');
}

