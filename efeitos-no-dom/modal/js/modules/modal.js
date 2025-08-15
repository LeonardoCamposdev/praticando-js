export default function initModal(){
  const modalAbrir = document.querySelector('[data-modal="abrir"]');
  const modal = document.querySelector('[data-modal="container"]');
  const modalFechar = document.querySelector('[data-modal="fechar"]');

  function abrirFecharModal(event){
    event.preventDefault();
    modal.classList.toggle('ativo');
  }

  modalAbrir.addEventListener('click', abrirFecharModal);
  modalFechar.addEventListener('click',abrirFecharModal);
}

