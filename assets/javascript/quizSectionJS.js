
const database1 = firebase.database().ref("quiz");

const htmldata = {
     textdata : "",
     pass : "",
     title : "",
}

function getAllQuizes(){
    var quizAdd = document.querySelector("#add-quiz");
    
    database1
    .get()
    .then(snapshot => {
        if(snapshot.exists()){
            snapshot.forEach(childSnapshot => {
                var childData = childSnapshot.val();
                var data = "";
                data += "<li id='quiz-section-"+childData.titleOfQuiz+"'> <h5 class='title-of-quiz'>";
                data += childData.titleOfQuiz;
                data += "</h5> <h5 class='time-of-quiz'> ";
                data += childData.time;
                data += "mins </h5><button onclick ='frametheFunction();'>Enter</button></li><div id = 'div-of-"+childData.titleOfQuiz+"' class='main-quiz-body'></div>";
                quizAdd.innerHTML += data;
                htmldata.textdata = childData.questionAndAnswers;
                htmldata.pass = childData.password;
                htmldata.title = childData.titleOfQuiz;
            });
            
        }
        else{
            console.log("No Quiz Available");
        }
    })
}

function frametheFunction(){
    var password = prompt("Enter Password for Quiz");

    if(password == htmldata.pass){
        var div = document.querySelector("#div-of-"+htmldata.title);
        div.innerHTML = htmldata.textdata;
        div.innerHTML += "<button onclick='Exit()'>End</button>"
        div.style.display = "block";
    }
    
}