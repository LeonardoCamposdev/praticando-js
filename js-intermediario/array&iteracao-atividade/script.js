// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) =>{
    const titulo = curso.querySelector('h1').innerHTML;
    const descricao = curso.querySelector('p').innerHTML;
    const aula =  curso.querySelector('.aulas').innerHTML;
    const hora =  curso.querySelector('.horas').innerHTML;
  
    return{
      titulo,
      descricao,
      aula,
      hora
    }
})
console.log(objetoCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiorQue100 = numeros.filter((numero) =>{
  if(numero > 100){
    return numero;
    }
})
console.log(numerosMaiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const instrumentoBaixo = instrumentos.includes('Baixo');
console.log(instrumentoBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

