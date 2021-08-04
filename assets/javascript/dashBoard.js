var header = document.getElementById("header-area");
// var rowdata = document.getElementsByClassName("second-section");

window.addEventListener('scroll',function(){
    var value = window.scrollY;
      header.style.color = 'rgba(' + 200 +','+ (value*255)/100 +','+ (value*255)/100 +','+ 1 +')';
      header.style.left = value +'px';

      if(value < 500){
        image.classList.add("onScrollChange");
      }
      else
      {
        image.classList.remove("onScrollChange");
      }
  });

