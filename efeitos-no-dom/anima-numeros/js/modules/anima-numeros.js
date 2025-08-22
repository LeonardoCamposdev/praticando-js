export default function initAnimaNumeros(){

}


const numeros = document.querySelectorAll('[data-numero]');


let start = 0;
numeros.forEach((numero)=>{
  const total = +numero.innerText;
  const incremento = Math.floor(total / 100);

  const timer = setInterval(() =>{
    start = start + incremento;
    if(start > total){
      clearInterval(timer);
    }
  },2555)
})
