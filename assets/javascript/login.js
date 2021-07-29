const auth = firebase.auth();

function loginFunction(){

    const email2 = document.querySelector("#emailAddress").value;
    const reemail1 = document.querySelector("#reemailAddress").value;
    const password2 = document.querySelector("#passwordText").value;

    alert("hmmm");


    if(email2.trim()==""){
        alert("Enter Email");
    }
    else if(password2.trim().length<7)
    alert("Enter Password more than 7 characters");
    else if(email2!=reemail1)
    {
        alert("Email do not match");
    }
    else 
    {
        
        auth.signInWithEmailAndPassword(email2,password2).then(function(){
            authenticated();
        });     
    }


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
    );
}
function register(){
    window.open("reg1.html","_self");
}