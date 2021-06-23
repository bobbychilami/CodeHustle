

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
  var nameOfSender;
function sendMessage(){
    firebase.database()
    .ref("data/"+firebase.auth().currentUser.uid)
    .once('value')
    .then(snapshot =>{
        nameOfSender = snapshot.val().name;
    })
    alert(nameOfSender);
    var message = document.querySelector("#message1").value;
    alert("message1 : " + message);
    firebase.database().ref("messages").push().set({
    "sender" : nameOfSender.trim(),
    "message" : message.trim()
});
alert("Name : " + nameOfSender);
return false;
}



firebase.database().ref("messages/").on("child_added", function (snapshot){
    var html = "";
    html += "<li>";
    if(snapshot.val().sender == nameOfSender){
        html += "<button id='" + snapshot.key + "' onclick = 'deleteMessage(this);'>";
        html += "X";
        html += "</button>";
    }

    html += snapshot.val().sender + ": " +snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;

});

function deleteMessage(self){
    var messageId = self.getAttribute("data-id");

    firebase.database().ref("messages").child(messageId).remove();

}

firebase.database().ref("messages").on("child_removed",function (snapshot){
    document.getElementById("message-"+ snapshot.key).innerText = "This message has been removed";
})



var names,text_message;
function getMessages(){
    firebase.database()
    .ref("messages/")
    .once('value')
    .then(snapshot =>{
        snapshot.forEach(function(snapshot1){
            names = snapshot1.val().sender;
            text_message = snapshot1.val().message;
            console.log(names+" : "+text_message);
            document.querySelector("#group-message").innerHTML +="<li>"+names+" : "+text_message+" </li>";

        })
    })

}