
// const auth = firebase.auth();
const users = firebase.database().ref("users");
function register(){

    
    
const name1 = document.querySelector("#full-name").value;
if(checkAlphabet(name1)){
    const email1 = document.querySelector("#inputEmail").value;
const reemail = email1
const password1 = document.querySelector("#inputPass").value;
    if(email1.trim()==""){
        alert("Enter Email");
    }
    else if(password1.trim().length<7)
    alert("Enter Password more than 7 characters");
    else if(email1!=reemail)
    {
        alert("Email do not match");
    }
    else 
    {
        
          auth.createUserWithEmailAndPassword(email1,password1).then(function(userAuth){
            const id1 = userAuth.user.uid;
            authenticated(id1,name1,email1,password1);
          },function(error){
              alert(error.message);
          }
          );     
 }
}
else{
    alert("Please enter a valid Name");
}
    
}






function checkAlreadyUser(){
    auth.fetchSignInMethodsForEmail(email1).then( (x)=>{
        return true;
    })
    return false;
}

function fun1(){
    window.open("index.html","_top");
}
function authenticated(id1,name1,email1,password1){
    users.child(id1).set({
        name : name1,
        email : email1,
        password : password1,
    });
    auth.onAuthStateChanged((firebaseUser)=>
    {
        if(firebaseUser)
        fun1();
    }
    );
}

function loginFun(){
    window.open("login.html","_self");
}
function nameLoadFunction(){
    document.querySelector("#full-name").focus();
}
function enterName(event){
    if(event.key == "Enter")
    document.querySelector("#inputEmail").focus();
}
function enterEmail(event){
    if(event.key == "Enter")
    document.querySelector("#inputPass").focus();
}
function enterPassword(event){
    if(event.key == "Enter")
    register();
}
function checkAlphabet(name){
    var exp = /^[A-Za-z]+$/;
    if(name.match(exp))
    return true;
    else
    return false;
}