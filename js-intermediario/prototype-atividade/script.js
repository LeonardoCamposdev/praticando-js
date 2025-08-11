// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome,sobrenome,idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
  return this.nome + this.sobrenome;
}

const leonardo = new Pessoa('Leonardo',' Campos', 24);
const ravi = new Pessoa('Ravi', ' Campos', 5);
console.log(leonardo)
console.log(leonardo.nomeCompleto());
console.log(ravi);
console.log(ravi.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLAllCollection.prototype);
console.log(Document.prototype);


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //'HTMLLIElement'
li.click; //'Function'
li.innerText; //'String'
li.value; // 'Number'
li.hidden; // 'Boolean'
li.offsetLeft // 'Number'
li.click();  // undefined


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String

