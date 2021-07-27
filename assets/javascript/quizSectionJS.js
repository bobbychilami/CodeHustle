
const database1 = firebase.database().ref("quiz");

const htmldata = {
     textdata : "",
     pass : "",
     title : "",
     time : 0,
     noOfQue : 0
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
                data += "mins </h5><button onclick ='frametheFunction();'>Enter</button></li>";
                quizAdd.innerHTML += data;
                htmldata.textdata = childData.questionAndAnswers;
                htmldata.pass = childData.password;
                htmldata.title = childData.titleOfQuiz;
                htmldata.time = childData.time;
                htmldata.noOfQue = childData.noOfQue;
            });
            
        }
        else{
            console.log("No Quiz Available");
        }
    })
}
const instruction = "1."
function frametheFunction(){
    var password = prompt("Enter Password for Quiz");

    if(password.trim() == htmldata.pass){

        var htmlData = "<div class='start-button'>";
        htmlData += "<div class='instructions'></div>";
        htmlData += "<button onclick='startTheQuiz(), timer();'>Start</button>"
        htmlData += "</div>"


        var div = document.querySelector("#main-body");
        div.innerHTML = htmlData;
        
    }
    else{
        alert("Wrong Password");
    }
    
}
function timer(){
    var time1 = document.querySelector("#timer");
    var min = htmldata.time;
    var sec = 60;
    var x = setInterval(
        function(){
            time1.innerText = min+":"+sec;
            if(min<0)
            {
                alert("Test Ended");
            }
            if(sec==0){
                min--;
                sec = 60;
            }
            sec--;
        },1000
    );
}
function startTheQuiz(){
    var div = document.querySelector("#main-body");

        div.innerHTML = "<h1 id='timer'></h1>"
        div.innerHTML += htmldata.textdata;
        div.innerHTML += "<button onclick='Exit()'>End</button>"
        // div.style.display = "block";

}
const responses = {
    answers : []
}
function Exit(){
    // console.log("Yes"+htmldata.noOfQue);
    for(var id = 1;id<=htmldata.noOfQue;id++){
        var ans = document.getElementsByName("preOption"+id);

        // console.log("Hii"+id);
        for(var i=0;i<ans.length;i++){
            if(ans[i].checked){
                // console.log("Hmm"+i);
                responses.answers[id] = ans[i].value;
                console.log(ans[i].value);
            }
        }
        
    }
    window.open("quizSection.html","_self");
}