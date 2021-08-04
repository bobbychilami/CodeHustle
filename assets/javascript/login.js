
function loginFunction(){

    const email2 = document.querySelector("#email").value;
    const reemail1 = email2;
    const password2 = document.querySelector("#password").value;


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
        },function(error){
            alert(error.message);
        }
        );     
    }


}

function fun1(){
    window.open("index.html","_self");
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