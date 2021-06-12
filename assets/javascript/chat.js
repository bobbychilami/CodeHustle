
const auth = firebase.auth();
function log(){

const email1 = document.querySelector("#inputEmail").value;
const reemail = document.querySelector("#reemail").value;
const password = document.querySelector("#inputPass").value;
alert(email1+" this is email");

    if(email1.trim()==""){
        alert("Enter Email");
    }
    else if(password.trim().length<7)
    alert("Enter Password more than 7 characters");
    else if(email1!=reemail)
    {
        alert("Email do not match");
    }
    else
    {

        auth.createUserWithEmailAndPassword(email1.trim(),password)
    .catch(function(error){
        alert(error.message);
    })
    authenticated();
    }
    
}

function fun1(){
    window.open("dashboard.html","_top");
}
function authenticated(){
    auth.onAuthStateChanged((firebaseUser)=>
    {
        if(firebaseUser)
        fun1();
    }
    )
}