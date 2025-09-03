const links = document.querySelectorAll('a');

function handleCLick(event){
  event.preventDefault();
  const url = event.target.href;
  fetchPage(url);
  window.history.pushState(null,null,url);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  changePage(pageText);
}

function changePage(newText){
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;
  
  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
}

window.addEventListener('popstate', () =>{
  fetchPage(window.location.pathname);
})

links.forEach((link) =>{
  link.addEventListener('click', handleCLick);
})