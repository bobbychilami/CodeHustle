

const nameOfSender = document.querySelector("#inputName").value;


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


function log(){

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

        auth.createUserWithEmailAndPassword(email1.trim(),password)
    .catch(function(error){
        alert(error.message);
    })
    alert(email1+" this is email");
    authenticated();
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
    )
}

function sendMessage(){
    var message = document.querySelector("#message1").value;
    alert("message1 : " + nameOfSender);
    firebase.database().ref("messages").push().set({
    "sender" : nameOfSender.trim(),
    "message" : message.trim()
});
alert("Name : " + nameOfSender);
return false;
}

firebase.database().ref("messages").on("child_added", function (snapshot){
    var html = "";
    html += "<li>";
    // if(snapshot.val().sender == nameOfSender){
    //     html += "<button id='" + snapshot.key + "' onclick = 'deleteMessage(this);'>";
    //     html += "X";
    //     html += "</button>";
    // }

    html += snapshot.val().sender + ": " +snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;

});

function deleteMessage(self){
    var messageId = self.getAttribute("data-id");

    firebase.database().ref("messages").child(messageId).remove();
}
firebase.database().ref("messages").on("child_removed",function (snapshot){
    document.getElementById("message-"+ snapshot.key).innerHTML = "This message has been removed";
})