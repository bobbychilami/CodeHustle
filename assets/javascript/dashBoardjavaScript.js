var main = document.querySelectorAll(".main");
var nav = document.getElementById("nav-bar");
var anchorTags = document.querySelectorAll("a");
var lines = document.querySelectorAll(".line");

var main1 = document.getElementById('main1');

let header = document.getElementById('header-area');

var flag = false;
function makeItX(x){
  x.classList.toggle("change");
  if(flag == false){
    nav.classList.add("clickOnX");
    flag = true;
  }
  else{
    nav.classList.remove("clickOnX");
    flag = false;
  }
}
var secondFlag = false;
function CallForMenuBar(){
  if(secondFlag == false){
    for(var i=0;i<anchorTags.length;i++){
      anchorTags[i].classList.add("changesize");
      
    }
    secondFlag = true;
  }
  else{
    for(var i=0;i<anchorTags.length;i++){
      anchorTags[i].classList.remove("changesize");
    }
    secondFlag = false;
  }
}
var thirdFlag = false;
function linesAnimation(){
  if(thirdFlag == false){
    for(var i=0;i<lines.length;i++){
      lines[i].classList.add("lineAnimate");
      
    }
      thirdFlag= true;
  }else
  {
    for(var i=0;i<lines.length;i++){
      lines[i].classList.remove("lineAnimate");
      
    }
      thirdFlag= false;
  }
}

var fourtFlag = false;
function loadOnScreen(){
  if(!thirdFlag){
    for(var j=0;j<main.length;j++){
      main[j].classList.add('onScrollChange');
    }
    thirdFlag = true;
  }
  else
  {
    for(var j=0;j<main.length;j++){
      main[j].classList.remove('onScrollChange');
    }
    thirdFlag = false;
  }
}

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