const links = document.querySelectorAll('a');

function handleClick(event){
  event.preventDefault();
  const url = event.target.href;
  pageFetch(url);
  window.history.pushState(null,null,url);
}

async function pageFetch(url) {
  const responseFetch = await fetch(url);
  const pageText = await responseFetch.text();
  changePage(pageText);
}

function changePage(newText){
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;
  
  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');
  oldContent.innerHTML = newContent.innerHTML;

  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () =>{
  pageFetch(window.location.pathname)
})

links.forEach((link) =>{
  link.addEventListener('click', handleClick);
})