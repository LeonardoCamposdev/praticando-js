// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nomeAtribuido, idadeAtribuida){
  this.nome = nomeAtribuido;
  this.idade = idadeAtribuida;
  andar = function() {
    console.log(this.nome + ' andou');
  }
}

const vandelson = new Pessoa('Vandelson', 39);
console.log(vandelson);

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(){
  this.seletor = 'li';
   const elements = document.querySelectorAll(this.seletor);

   elements.forEach((element)=>{
    this.ativo = function(){
      element.classList.add('ativo');
    }
   })
}



const novali = new Dom('li');
console.log(novali.ativo());

