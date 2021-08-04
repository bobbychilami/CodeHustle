var image = document.querySelector(".image-temp");
var nav = document.getElementById("nav-bar");
var anchorTags = document.querySelectorAll("a");
var lines = document.querySelectorAll(".line");

const userData = {
  name : "",
  email : "",
  loggedIn : false,
}


// const Ranks = {
//   names : [],
//   allranks : []
// }





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
// var p,q;
// firebase.database().ref("quiz").get()
//   .then(snapshot=>{
//     if(snapshot.exists()){
//       snapshot.forEach(childSnapshot=>{
//         var childData = childSnapshot.val();
//         q = new Promise(resolve=>{
//           Ranks.names.push(childData.titleOfQuiz);
//           resolve(Ranks.names);
//         })
//         q.then(arr=>{
//           for(i in arr){
//             console.log(arr[i]);
//             document.querySelector(".ranking-section") += "<div quiz-rank-section' ><h2>"+arr[i]+"</h2><ul class='all-quiz-ranks' id='id-of-"+i+"'></ul></div>";

//           }
//         })
//         p = new Promise(resolve=>{
//           // Ranks.names.push(childData.titleOfQuiz);
//           Ranks.allranks.push(childData.results);
//           resolve(Ranks.allranks);
//         })
//         p.then(arr=>{
//           for(var i=0;i<arr.length;i++){
//             for(var j in arr[i]){
//               console.log(arr[i][j]);
//               document.querySelector("#id-of-"+i) += "<li>"+arr[i][j]+"</li>";

//             }
//           } 
//           })
//         // q = new Promise
        
//         // console.log(childData.results);
//       })
//     }
//   });

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

// quiz/Test2/results .get() .then(snapshot)
// obliqeu(/) is used to access the sub-references of a particular reference.
// .get() is used to fetch the latest data snapshot from database

var auth = firebase.auth();
// onAuthStateChanged is used when a user logs in, registers or logs out, it returns boolean value
// => is used to create a function with or without attributes
auth.onAuthStateChanged((firebaseUser)=>
    {
      var logDiv = document.querySelector(".login");
        if(firebaseUser)
        {
          firebase.database().ref('users/'+firebase.auth().currentUser.uid)
          .get()
          .then(data=>{
            if(data.exists()){
            userData.name = data.val().name;
            userData.email = data.val().email;
            userData.loggedIn = true;
            }
          }

          );
          logDiv.innerHTML = "<a onclick='logoutFun()'>Logout</a>";
        }
        else{
          userData.loggedIn = false;
          logDiv.innerHTML = "<a href='login.html'>Login</a>";
        }
    }
    );

function logoutFun(){
  firebase.auth().signOut().then(
    function(){
      console.log("Signed out");
    },function(error){
      console.log("'Sign out Error",error);
  }
  );
}