import outsideCLick from "./outsideClick.js";

export default function initDropdownMenu(){
  const dropDownMenu = document.querySelector('[data-dropdown]');
  dropDownMenu.addEventListener('click',handleClick);

function handleClick(event){
  event.preventDefault();
  this.classList.add('active');

  outsideCLick(this, ['click'], () =>{
    this.classList.remove('active');
  })
}
}

