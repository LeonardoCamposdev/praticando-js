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
const  ravi = criarPessoa('Ravi', 'Muniz');
console.log(leonardo.andar());
console.log(leonardo.nadar());

console.log(ravi.andar());
console.log(ravi.nadar());




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

  function buttonPadding(value){
    element.style.padding = value + 'px';
    return this;
  }

  function buttonBorder(value){
    element.style.border = value;
    return this;
  }

  function buttonBorderRadius(value){
    element.style.borderRadius = value + 'px';
    return this;
  }

  function buttonFontSize(value){
    element.style.fontSize = value + 'px';
    return this;
  }

  return{
    element,
    addClass,
    buttonBG,
    buttonColor,
    buttonPadding,
    buttonBorder,
    buttonBorderRadius,
    buttonFontSize
  }
}


const btnComprar = $$('.btn-comprar');
const btnVender = $$('.btn-vender');

btnComprar.addClass('ativooo').buttonBG('blue').buttonColor('white').buttonPadding('16').buttonBorderRadius('17').buttonBorder('none').buttonFontSize('20');


btnVender.addClass('xesq').buttonBG('black').buttonColor('red').buttonPadding('25').buttonBorderRadius('21').buttonBorder('none').buttonFontSize('30');