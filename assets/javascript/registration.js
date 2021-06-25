



var firebaseConfig = {
    apiKey: "AIzaSyDHd6nUJB3NOjuJlw8zBtksdasfVkAEYFM",
    authDomain: "chatapp-practice7.firebaseapp.com",
    projectId: "chatapp-practice7",
    storageBucket: "chatapp-practice7.appspot.com",
    messagingSenderId: "110719916386",
    appId: "1:110719916386:web:8a3bf55b843b4a8a0a343b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

var uidOfUser = 0;

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

        try{
            auth.createUserWithEmailAndPassword(email1,password1)
            .then(function(userAuth){
                uidOfUser = userAuth.user.uid;
                var user1 = {
                    name : name1,
                    email : email1,
                    password : password1,
                    uid : userAuth.user.uid
                }
                
                writeUserData(user1);
                authenticated();
            });
            
        }
        catch(error){
            alert(error.message);
        }
        
        
        
    }
    
}





function writeUserData(user1){
    firebase.database().ref("data/"+user1.uid).set(user1).catch(error =>{
        console.log(error.message + " database errroorrr");
    });
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
function authenticated(){
    auth.onAuthStateChanged((firebaseUser)=>
    {
        if(firebaseUser)
        fun1();
    }
    )
}

