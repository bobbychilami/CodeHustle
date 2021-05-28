var temp = document.getElementsByClassName("temp");
var nav = document.getElementById("nav-bar");
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

function scrollDash(){
  temp.classList.add("onScrollChange");
}