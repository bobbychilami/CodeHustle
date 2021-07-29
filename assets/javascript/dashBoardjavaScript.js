var image = document.querySelector(".image-temp");
var nav = document.getElementById("nav-bar");
var anchorTags = document.querySelectorAll("a");
var lines = document.querySelectorAll(".line");


let header = document.getElementById("header-area");

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

function loadOnScreen(){
  if(!thirdFlag){
    image.classList.add("onScrollChange");
    thirdFlag = true;
  }
  else
  {
    image.classList.remove("onScrollChange");

    thirdFlag = false;
  }
}

