export default function outsideCLick(element,event,callback){  
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)){
    setTimeout(()=>{
      html.addEventListener(event, handleOutsideCLick);
    })
    element.setAttribute(outside,'');
  }

  function handleOutsideCLick(event){
    if(!element.contains(event.target)){
      html.removeEventListener("click", handleOutsideCLick);
      element.removeAttribute(outside);
    }
    callback();
  }
}

