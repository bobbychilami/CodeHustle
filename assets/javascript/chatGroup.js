

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
    var message1 = document.querySelector("#message1").value;

        firebase.database()
        .ref("data/"+firebase.auth().currentUser.uid)
        .once('value')
        .then(snapshot =>{
              nameOfSender = snapshot.val().name;

              firebase.database().ref("messages/").push().set({
                sender : nameOfSender.trim(),
                message : message1.trim()
              });
              firebase.database().ref("messages").on("child_added", function (snapshot1){
                var html = "";
                html += "<li>";
                html += snapshot1.val().sender + "<br><h3>" +snapshot1.val().message;
                if(snapshot1.val().sender == nameOfSender){
                    html += "<button id='" + snapshot1.id + "' onclick = 'deleteMessage(this);'> X ";
                    html += "</button>";
                }
                html += "</h3></li>";
            
                document.getElementById("group-message").innerHTML += html;
            
            });
            firebase.database().ref("messages/").on("child_removed",function (snapshot2){
                document.getElementById("message-"+ snapshot2.id).innerText = "This message has been removed";
                document.querySelector("#message1").value = "";
              })
              .catch(function(error){
                alert(error.message);
              })
          })
}
function getMessages(){
  firebase.database()
      .ref("messages/")
      .once('value')
      .then(snapshot =>{
          snapshot.forEach(function(snapshot1){
              
              names = snapshot1.val().sender;
              text_message = snapshot1.val().message;
              console.log(names+" : "+text_message);
              var htmlData = "<li>"+names+"<br><h3>"+text_message+"</h3></li>"
              document.querySelector("#group-message").innerHTML += htmlData;
  
          })
      })
}






function deleteMessage(self){
    var messageId = self.getAttribute("data-id");

    firebase.database().ref("messages").child(messageId).remove();

}




// var names,text_message;
// function getMessages(){
//     

// }

// function addMessage(){
//     var childMessage = document.createElement("li");
//     childMessage.innerHTML = nameOfSender + " : " + message;
//     document.querySelector("#group-message").appendChild(childMessage);
// }