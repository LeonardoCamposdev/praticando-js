function criarPessoa(nome, sobrenome){
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar(){
    return `${nomeCompleto} ANDOU`; 
  }

  function nadar(){
    return `${nomeCompleto} NADOU`;
  }

  return{
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

const leonardo = criarPessoa('Leonardo', 'Campos');
cost  
console.log(leonardo.andar());
console.log(leonardo.nadar());

function $$(selectedElement){
  const element = document.querySelector(selectedElement);

  function addClass(classe){
    element.classList.add(classe);
    return this;
  }

  function buttonBG(backgroundColor){
    element.style.backgroundColor = backgroundColor;
    return this;
  }

    function buttonColor(color){
    element.style.color = color;
    return this;
  }


  return{
    element,
    addClass,
    buttonBG,
    buttonColor,
  }
}


const button = $$('button');

button.addClass('ativooo').buttonBG('blue').buttonColor('white');