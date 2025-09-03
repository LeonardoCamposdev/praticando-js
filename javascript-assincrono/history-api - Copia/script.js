const links = document.querySelectorAll('a');

function handleClick(event){
  event.preventDefault();
  const url = event.target.href;
}



links.forEach((link) =>{
  link.addEventListener('click', handleClick);
})