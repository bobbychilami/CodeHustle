

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

function sendMessage(){
    firebase.database()
    .ref("data/"+firebase.auth().currentUser.uid)
    .once('value')
    .then(snapshot =>{
        var nameOfSender = snapshot.val().name;
    })
    alert(nameOfSender);
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