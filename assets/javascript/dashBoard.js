
window.addEventListener('scroll',function(){
    var value = window.scrollY;
      // header.style.backgroundImage ='linear-gradient(to right,rgba(' + 225-value +','+ 225-value +','+ 225-value +','+ 1 +'),rgba';
      header.style.left = value +'px';

      if(value < 500){
        image.classList.add("onScrollChange");
      }
      else
      {
        image.classList.remove("onScrollChange");
      }
  });