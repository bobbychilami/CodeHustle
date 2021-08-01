
const database1 = firebase.database().ref("quiz");
const htmldata = {
     textdata : [""],
     pass : [""],
     title : [""],
     time : [0],
    noOfQue : [0]
}
const privateData = (
    function(){
        function privateDataBlock(){
            var answers = [];
            var data = {
                marks : 0,
                total : 0,
                correct : 0,
                wrong : 0,
                whichCorrect : []
            }
            function setAnswers(ans){
                answers = ans;
            }
            function checkAnswers(ans){
                for(var i=1;i<answers.length;i++){
                    if(ans[i]==answers[i]){
                        data.correct++;
                        data.whichCorrect[i] = "correct";
                        data.marks++;
                        // console.log(answers[i]+" r "+ans[i]+" hmm " +i);
                    }
                    else{
                        data.wrong++;
                        data.whichCorrect[i] = "Wrong";
                        // console.log(answers[i]+" w "+ans[i]+" hmm " +i);
                    }
                    data.total++;
                }
                return data;
            }
            return{
                setAnswer: setAnswers,
                checkAnswer : checkAnswers
            }
        }
        return{
            privateDataBlock
        }
    }
)
();

var dataBlock = privateData.privateDataBlock();
function getAllQuizes(){
    var quizAdd = document.querySelector("#add-quiz");
    var i=0;
    
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
                if(childData.time<10)
                    data += "0";  
                data += childData.time;
                data += ":00 m </h5><button onclick ='frametheFunction("+i+");' id='enter-button-of-quiz'>Enter</button></li>";
                quizAdd.innerHTML += data;
                
                htmldata.textdata[i] = childData.questionAndAnswers;
                htmldata.pass[i] = childData.password;
                htmldata.title[i] = childData.titleOfQuiz;
                htmldata.time[i] = childData.time;
                htmldata.noOfQue[i] = childData.noOfQue;
                dataBlock.setAnswer(childData.answers);
                i++;
            });
            
        }
        else{
            console.log("No Quiz Available");
        }
    })
}


function frametheFunction(id){

    if(userData.loggedIn == true){
        var instruction = "<ol id='text-instructions' start='1'>";
        instruction += "<li>1. Test will start in next 1 min, Please be patient and read the instructions given below.</li>";
        instruction += "<li>2. Don't press the back button when attempting the quiz.</li>";
        instruction += "<li>3. You will have only one attempt to solve the quiz.</li>";
        instruction += "<li>4. Each question in the quiz is of multiple-choice.</li>";
        instruction += "<li>5. You can change your answer any number of times until the test ends.</li>";
        instruction += "<li>6. The test will automatically end once the time is over.</li>";
        instruction += "<li>7. You can end the quiz if you want to by clicking the End button.</li>";

        instruction += "</ol>";
        var password = prompt("Enter Password for Quiz");
        // console.log(htmldata.pass[id]+" "+password.trim()+" "+typeof(htmldata.pass[id])+" ");
        if(password!=null){
            if(password.trim() == htmldata.pass[id].trim()){

                var htmlData = "<div class='start-button'>";
                htmlData += "<div class='instructions'>"+instruction+"  </div>";
                htmlData += "<h5 id='oneMinTimer'></h5>"
                htmlData += "<button id='theStartButton' onclick='startTheQuiz("+id+");'> Start </button>";
                htmlData += "</div>";
        
        
                var div = document.querySelector("#main-body");
                div.innerHTML = htmlData;
                timerOf1min();
            }
            else{
                alert("Wrong Password");
            }
        }
    }
    else{
        alert("Please login/register to attempt the quiz");
    }
}
var x;
function timer(id){
    var time1 = document.querySelector("#timer");
    var min = htmldata.time[id];
    var sec = 0;
    x = setInterval(
        function(){
            if(min<0){
                clearInterval(x);
                alert("Test Ended");
                confirmExit();
            }
            else if(min<10)
            {
                time1.innerText = "0"+min+":";
            }
            else{
                time1.innerText = min+":";
            }

            if(sec<10){
                time1.innerText += "0"+sec;
            }else{
                time1.innerText += sec;
            }
            if(sec==0){
                min--;
                sec = 60;
            }
            
            sec--;
        },1000
    );
}
var x1;
function timerOf1min(){
    var time2 = document.getElementById("oneMinTimer");
    var startButton = document.querySelector("#theStartButton");
    var sec = 60;
    x1 = setInterval(
        function(){
                time2.innerText = "00:"+sec+"s";
                if(sec<10)
                time2.innerText = "00:0" + sec +"s";
                if(sec==0)
                {
                    clearInterval(x1);
                    startTheQuiz();

                    time2.innerText = "00:00s";
                    // clearInterval();
                }
                sec--;
        },1000
    );
}
function startTheQuiz(id){
    
    var div = document.querySelector("#main-body");
    clearInterval(x1);
        div.innerHTML = "<h1 id='timer'></h1>"
        div.innerHTML += htmldata.textdata[id];
        div.innerHTML += "<div id='end-the-quiz'><button onclick='Exit("+id+")' >End</button></div>"
        // div.style.display = "block";
    timer(id);
}
const answerArray ={
    ans : []
}
const responses = {
    answers : []
}
function Exit(id){
    var confirmExitFlag = confirm("Do you really want to end the quiz.");
    if(confirmExitFlag == true){
        clearInterval(x);
        confirmExit(id);
    }
    else{

    }
    

    // console.log("Yes"+htmldata.noOfQue);
    
}

function showResults(result,id){
    var htmlresult = "<div class='result-section'>";
    htmlresult += "<div class='result' id='result'><h2>You scored: </h2><h1>"+result.marks+"/"+result.total+"</h1></div><button><a href='dashboard.html'>click</a></button></div>";
    var div = document.querySelector("#main-body");

    div.innerHTML = htmlresult;
    database1.child(htmldata.title[id]+"/results/"+result.marks).set(userData.name);
}

function confirmExit(id1){

    for(var id = 1;id<=htmldata.noOfQue[id1];id++){
        var ans = document.getElementsByName("preOption"+id);

        // console.log("Hii"+id);
        for(var i=0;i<ans.length;i++){
            if(ans[i].checked){
                // console.log("Hmm"+i);
                responses.answers[id] = ans[i].value;
                // console.log(ans[i].value);
            }
        }
        
    }

    var Results = dataBlock.checkAnswer(responses.answers);
    answerArray.ans[id1] = Results;
    showResults(Results,id1);
    
}