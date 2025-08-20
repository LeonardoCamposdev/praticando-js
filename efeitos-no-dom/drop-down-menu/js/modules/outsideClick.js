export default function outsideCLick(element,events,callback){  
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)){
    setTimeout(()=>{
      html.addEventListener(events, handleOutsideCLick);
    })
    element.setAttribute(outside,'');
  }

  function handleOutsideCLick(event){
    if(!element.contains(event.target)){
      html.removeEventListener(events, handleOutsideCLick);
      element.removeAttribute(outside);
    }
    callback();
  }
}

