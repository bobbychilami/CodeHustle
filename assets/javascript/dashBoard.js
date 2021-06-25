
window.addEventListener('scroll',function(){
    var value = window.scrollY;
      // header.style.backgroundImage ='linear-gradient(to right,rgba(' + 225-value +','+ 225-value +','+ 225-value +','+ 1 +'),rgba';
      header.style.left = value +'px';
      if(value < 500){
      
        for(var j=0;j<main.length;j++){
          main[j].classList.add('onScrollChange');
          main[j].style.top = value + 0.25 + 'px';
          main[j].style.right = value + 1.5 + 'px';
        }
      }
      else
      {
        for(var j=0;j<main.length;j++){
          main[j].classList.remove('onScrollChange');
        }
      }
  });