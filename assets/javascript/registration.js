
const auth = firebase.auth();
const users = firebase.database().ref("users");
function register(){


    
const name1 = document.querySelector("#full-name").value;
const email1 = document.querySelector("#inputEmail").value;
const reemail = document.querySelector("#reemail").value;
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
          });     
 }
    
}






function checkAlreadyUser(){
    auth.fetchSignInMethodsForEmail(email1).then( (x)=>{
        return true;
    })
    return false;
}

function fun1(){
    window.open("chatGroup.html","_top");
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

