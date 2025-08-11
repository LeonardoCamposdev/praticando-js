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
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo


// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
