const carro = {
  marca: 'gol',
  ano: 2023,
  portas: 4
}

const {marca, ano, portas} = carro;

console.log(marca);
console.log(ano);
console.log(portas);


const cliente = {
  nome: 'Leonardo',
  compras: {
    digitais:{
      livros: ['Livro1', 'Livro2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas:{
      cadernos: ['caderno 1']
    }
  }
}

const {digitais,fisicas, digitais:{livros,videos}} = cliente.compras;
const {cadernos} = cliente.compras.fisicas;

console.log(digitais);

console.log(livros);
console.log(videos);
console.log(cadernos);


const cliente2 = {
  nome: 'Ravi',
  compras: 10
}

const {nome: nomeCliente, compras: comprasCliente, email = 'Leonardo.kiss66@live.com', cpf} = cliente2;

console.log(nomeCliente);
console.log(comprasCliente);
console.log(email);
console.log(cpf);