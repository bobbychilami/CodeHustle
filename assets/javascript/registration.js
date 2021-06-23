



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


function register(){



const firstname = document.querySelector("#firstname").value;
const lastname = document.querySelector("#lastname").value;
const phone = document.querySelector("#number").value;
const email1 = document.querySelector("#inputEmail").value;
const reemail = document.querySelector("#reemail").value;
const password = document.querySelector("#inputPass").value;

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

            auth.createUserWithEmailAndPassword(email1,password)
        .catch(function(error){
            alert(error.message);
        });

        firebase.database().ref("data").push().set({
            "firstname" : firstname,
            "lastname" : lastname,
            "phone" : phone,
            "email" : email1,
            "password" : password
        });
        alert(email1+" email" + firstname +" name "+ password);
        authenticated();
    }
    
alert(email1);
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

