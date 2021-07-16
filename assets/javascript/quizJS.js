
const data = {
    titleOfQuiz : "",
    password : "",
    time : 0,
    questionAndAnswers : "",
    answers : []
}



const keyAnswer = {
    answers : [],
    flag : true
};




var preQuestions = document.querySelector("#pre-questions");
function enterQuestion(id){

var question = document.querySelector("#question-input"+id);
var questionText = document.querySelector("#questionText"+id);
var questionButton = document.querySelector("#questionButton"+id);

var div = document.querySelector("#queNo"+id);
    if(questionButton.innerText == "Enter"){
        question.style.display = "none";
        questionText.innerText = question.value;
        questionButton.innerText = "Edit"; 
        questionText.style.display = "block";
        
        div.innerText = id + ". " + question.value;
        div.style.display = "block";
    }
    else{
        question.style.display = "block";
        questionButton.innerText = "Enter"; 
        questionText.innerText = "";
        questionText.style.display = "none";
        
        div.style.display = "none";
    }
}

var preTitle = document.querySelector("#pre-title");
function getTitle(){
    var titleQuiz = document.querySelector("#Title-of-quiz");
    var nameOfQuiz = document.querySelector("#name-of-quiz");
    var quizNameButton = document.querySelector("#title-button");
    if(quizNameButton.innerText == "Create"){
        nameOfQuiz.innerText = titleQuiz.value;
        nameOfQuiz.style.display = "block";
        titleQuiz.style.display = "none";
        quizNameButton.innerText = "X";
        preTitle.innerText = titleQuiz.value;
        data.titleOfQuiz = titleQuiz.value;
        // preTitle.style.display = "block";
    }
    else{
        nameOfQuiz.style.display = "none";
        titleQuiz.style.display = "block";
        quizNameButton.innerText = "Create";
        preTitle.innerText = "";
    }
}


function enterOption(it,id){
    var indexNumber = document.querySelector("#indexNumberOf"+it+"QNo"+id);

    var optOfQNo = document.querySelector("#preOpt"+it+"OfQNo"+id);

    var option = document.querySelector("#option"+it+"opt"+id);
    var optionInput = document.querySelector("#optionInput"+it+"opt"+id);
    var enterOptionButton = document.querySelector("#enter-option-"+it+"opt"+id);


    if(enterOptionButton.innerText == "Enter"){
        option.innerText = indexNumber.value+". "+optionInput.value;
        optionInput.style.display = "none";
        enterOptionButton.innerText = "Edit";
        option.style.display = "block";
        optOfQNo.innerText = indexNumber.value+". "+optionInput.value;
        optOfQNo.style.display = "block";
        indexNumber.style.display = "none";
    }
    else{
        option.style.display = "none";
        optionInput.style.display = "block";
        enterOptionButton.innerText = "Enter";
        option.innerText = "";
        optOfQNo.style.display = "none";
        // indexNoText.style.display = "none";
        indexNumber.style.display = "block";
    }
}

function deleteOption(it,id){
    var optionDeleteParameter = "#whole-option-"+it+"opt"+id;
    var wholeOption = document.querySelector(optionDeleteParameter);
    wholeOption.remove();
    iterator--;
}



var iterator = 1;
var prev = 1;
var curr = 1;
function addOption(id){
    
    var optOfQNo = document.querySelector("#optionsOfQueNo"+id);


    var options = document.querySelector("#options"+id);
    curr = id;
    if(curr>prev)
    iterator = 1;

    optOfQNo.innerHTML += "<li><input type='radio' class='pre-radioInput' name = 'preOption"+id+"' > <h6 id='preOpt"+iterator+"OfQNo"+id+"' ></h6></li>";


    var html = "";
    html += "<li id='whole-option-" + iterator + "opt"+id+"'> <input class='radioInput' type='radio' name='option' value='"+iterator+"' id='q"+id+"opt"+iterator+"'>";
    html +=  "<input type='text' class='index-number' id='indexNumberOf"+iterator+"QNo"+id+"' placeholder=''>"+" <input class='optionInput' type='text' id='optionInput" + iterator +"opt"+id+"'> <h5 id='option" + iterator;
    html += "opt"+id+"' class='h5-of-option' ></h5> <button onclick='enterOption(" + iterator + ","+id+")' id='enter-option-" + iterator ;
    html += "opt"+id+"' >Enter</button> <button onclick='deleteOption("+iterator+ ","+id+")' id='delete-option-";
    html += iterator + "opt"+id+"'>X</button></li>";
    iterator++;
    options.innerHTML += html;
    prev = curr;


}

var pass = document.querySelector("#password");


function doneQ(id){

    var titleToData = document.querySelector("#queNo"+id);

    if(titleToData.innerText == "" || document.querySelector("#optionsOfQueNo"+id).innerText == "")
    {
        alert("Please Enter all the fields");
    }
    else{
        document.querySelector("#answerText").style.display = "block";
        var answer = document.querySelector("#answers");
        answer.style.display = "block";
        answer.innerHTML = "";
        if(id == 5)
        {
            var allDone = document.querySelector("#all-done");
            document.querySelector("#password").style.display = "block";
            document.querySelector("#time").style.display = "block";
            allDone.style.display = "block";
        }
    var options = document.getElementsByName("option");
        for(var i=0;i<options.length;i++){
            if(options[i].checked)
            {
                keyAnswer.answers[id] = options[i].value;
            }
        }
        // document.querySelector("#questionNo"+id).style.display = "none";
        // alert(keyAnswer.answers);
        for(var i=1;i<keyAnswer.answers.length;i++){
            answer.innerHTML += "<li>"+i+" : "+keyAnswer.answers[i]+"</li>";
        }
        keyAnswer.flag = true;
    }
}




var totalQuestions = document.querySelector("#all-questions");
var index = 1;
function addQuestion(){


    if(keyAnswer.flag == true){
        preQuestions.innerHTML += "<li class='preQNo' id = 'preQNo"+index+"'> <h5 class='pre-question' id = 'queNo"+index+"'></h5> <ul class = 'pre-options' id='optionsOfQueNo"+index+"'> </ul> </li>";

        var html = "";
        html += "<li id = 'questionNo"+index+"'>";
                        
        html += "<div class='question-field'>";
        html += "<h5>Enter Question: </h5><h5> "+index+". </h5> ";
        html += "<input type='text' id='question-input"+index+"'>";
        html += "<h5 id='questionText"+index+"'></h5>";
        html += "<button onclick='enterQuestion("+index+")' id='questionButton"+index+"'>Enter</button> <button id = 'delQ"+index+"' onclick='deleteQues("+index+");'> Delete</button> </div>";
        
        html += "<div class='options-field'>";
        html += "<h5>Options</h5>";
        html += "<button class='addoptionbutton' onclick='addOption("+index+")'>+</button>";
        html += "<ul id='options"+index+"'> </ul> ";
        html += "</div> ";
        // html += "<div class='answer-field'> <input type='text' id = 'answer"+index+"' placeholder='Answer (Only type the option)'> </div>";
        html += "<button class='doneButton' onclick = 'doneQ("+index+");' > Done </button>";
        html += "</li>";

        
        index++;
        totalQuestions.innerHTML += html;  
        keyAnswer.flag = false;  
    }
    else{
        alert("Complete the question and then click on + to add more");
    }
}



function deleteQues(id){
        var deleteQueId = document.querySelector("#questionNo"+id);
        var deletePreQ = document.querySelector("#preQNo"+id);

        deletePreQ.remove();
        deleteQueId.remove();
        index--;   
        keyAnswer.flag = true;
}



const database = firebase.database().ref("quiz");

function allDone(){
    // alert(data.titleOfQuiz);

const passwordtext = document.querySelector("#password");
const timing = document.querySelector("#time");

    if(passwordtext.value == "" || timing.value == ""){
        alert("Please enter password and timing for quiz");
    }
    else{

        data.password = passwordtext.value;
        data.time = timing.value;
        data.answers = keyAnswer.answers;
        

        var htmlData = "<h1 id='pre-title'>"+data.titleOfQuiz+"</h1>";
        htmlData += "<div id='pre-questions'>";
        htmlData += preQuestions.innerHTML;
        htmlData += "</div>";
        
        data.questionAndAnswers = htmlData;

        database.child(data.titleOfQuiz).set(data).then(
            () => {
                // alert('All done');
                window.open("quizSection.html","_top");
            }
        );

        
    }

}


