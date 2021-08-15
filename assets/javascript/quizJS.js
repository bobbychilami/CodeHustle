
const data = {
    titleOfQuiz : "",
    password : "",
    time : 0,
    questionAndAnswers : "",
    answers : [],
    noOfQue : 0
}



const keyAnswer = {
    answers : [],
    flag : true,
    doneFlag : false
};

var preTitle = document.querySelector("#pre-title");
var titleQuiz = document.querySelector("#Title-of-quiz");




function focusOnTitle(){
    titleQuiz.focus();
}

function getTitle(){

    if(userData.loggedIn == true){
        var nameOfQuiz = document.querySelector("#name-of-quiz");
        var quizNameButton = document.querySelector("#title-button");
        if(quizNameButton.innerText == "Enter"){
            if(titleQuiz.value.trim() == ""){
                alert("Please Enter a valid Title for Quiz");
            }
            else{
                nameOfQuiz.innerText = titleQuiz.value;
                nameOfQuiz.style.display = "block";
                titleQuiz.style.display = "none";
                quizNameButton.innerText = "X";
                preTitle.innerText = titleQuiz.value;
                data.titleOfQuiz = titleQuiz.value;
                keyAnswer.flag = true;
            }
            // preTitle.style.display = "block";
        }
        else{
            nameOfQuiz.style.display = "none";
            titleQuiz.style.display = "block";
            quizNameButton.innerText = "Enter";
            preTitle.innerText = "";
        }
    }
    else{
        alert("Please login/register before creating a quiz");
    }
}



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



function enterOption(it,id){
    var indexNumber = document.querySelector("#indexNumberOf"+it+"QNo"+id);

    var optOfQNo = document.querySelector("#preOpt"+it+"OfQNo"+id);

    var option = document.querySelector("#option"+it+"opt"+id);
    var optionInput = document.querySelector("#optionInput"+it+"opt"+id);
    var enterOptionButton = document.querySelector("#enter-option-"+it+"opt"+id);


    if(enterOptionButton.innerText == "Enter"){
        if(optionInput.value.trim()==""){
            alert("Please Enter option");
        }
        else{
            option.innerText = indexNumber.value+". "+optionInput.value;
            optionInput.style.display = "none";
            enterOptionButton.innerText = "Edit";
            option.style.display = "block";
            optOfQNo.innerText = indexNumber.value+". "+optionInput.value;
            optOfQNo.style.display = "block";
            indexNumber.style.display = "none";
        }
        
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
var iteratorFun = {
    iterator : 1
}
function deleteOption(it,id){
    var optionDeleteParameter = "#whole-option-"+it+"opt"+id;
    var wholeOption = document.querySelector(optionDeleteParameter);
    wholeOption.remove();
    document.querySelector("#preOptNo"+id+"and"+it).remove();
    iteratorFun.iterator--;
}




var prev = 1;
var curr = 1;
function addOption(id){
    
    var optOfQNo = document.querySelector("#optionsOfQueNo"+id);


    var options = document.querySelector("#options"+id);
    curr = id;
    if(curr>prev)
    iteratorFun.iterator = 1;

    optOfQNo.innerHTML += "<li id='preOptNo"+id+"and"+iteratorFun.iterator+"'><input type='radio' class='pre-radioInput' name = 'preOption"+id+"' value = '"+iteratorFun.iterator+"'> <h6 id='preOpt"+iteratorFun.iterator+"OfQNo"+id+"' ></h6></li>";


    var html = "";
    html += "<li id='whole-option-" + iteratorFun.iterator + "opt"+id+"'> <input class='radioInput' type='radio' name='option' value='"+iteratorFun.iterator+"' id='q"+id+"opt"+iteratorFun.iterator+"'>";
    html +=  "<input type='text' class='index-number' id='indexNumberOf"+iteratorFun.iterator+"QNo"+id+"' onkeydown='optionRightClick(event,"+iteratorFun.iterator+","+id+")' placeholder=''>"+" <input class='optionInput' type='text' id='optionInput" + iteratorFun.iterator +"opt"+id+"' onkeydown='enterKeyoption(event,"+iteratorFun.iterator+","+id+")'> <h5 id='option" + iteratorFun.iterator;
    html += "opt"+id+"' class='h5-of-option' ></h5> <button onclick='enterOption(" + iteratorFun.iterator + ","+id+")' id='enter-option-" + iteratorFun.iterator ;
    html += "opt"+id+"' >Enter</button> <button onclick='deleteOption("+iteratorFun.iterator+ ","+id+")' id='delete-option-";
    html += iteratorFun.iterator + "opt"+id+"'>X</button></li>";
    options.innerHTML += html;
    document.querySelector("#indexNumberOf"+iteratorFun.iterator+"QNo"+id).focus();
    prev = curr;
    iteratorFun.iterator++;
}
function enterKeyoption(event,it,id){
    if(event.key=='Enter'){
        document.querySelector("#enter-option-"+it+"opt"+id).click();
    }
}
function optionRightClick(event,it,id){
    if(event.key == "Enter")
    // document.querySelector("#indexNumberOf"+it+"QNo"+id).n
    document.querySelector("#optionInput"+it+"opt"+id).focus();
}
var pass = document.querySelector("#password");


function doneQ(id){


    var titleToData = document.querySelector("#queNo"+id);
    if(checkAnswerChecked(id) == true){
        if(titleToData.innerText == "" || document.querySelector("#optionsOfQueNo"+id).innerText == "" )
        {
            alert("Please Enter all the fields");
        }
        else{
            document.querySelector("#answerText").style.display = "block";
            
            if(id == 5)
            {
                var allDone = document.querySelector("#all-done");
                document.querySelector("#password").style.display = "block";
                document.querySelector("#time").style.display = "block";
                allDone.style.display = "block";
            }
        
            keyAnswer.flag = true;
        }
        keyAnswer.doneFlag = false;
    }
    else{
        alert("Please select answer from the above options to continue");
    }
    
}

function checkAnswerChecked(id){
    var answer = document.querySelector("#answers");
            answer.style.display = "block";
            answer.innerHTML = "";

    var options = document.getElementsByName("option");
    if(options.length <2){
        alert("Please enter atleast 2 options");
        return false;
    }
    else{
        for(var i=0;i<options.length;i++){
            if(options[i].checked)
            {
                keyAnswer.doneFlag = true;
                keyAnswer.answers[id] = options[i].value;
            }
        }
        // document.querySelector("#questionNo"+id).style.display = "none";
        // alert(keyAnswer.answers);
        if(keyAnswer.doneFlag == true){
            for(var i=1;i<keyAnswer.answers.length;i++){
                answer.innerHTML += "<li>"+i+" : "+keyAnswer.answers[i]+"</li>";
            }
        }
        return keyAnswer.doneFlag;
    }
    
}


var totalQuestions = document.querySelector("#all-questions");
var index = 1;
const indexNum = {
    index : 1
}
function addQuestion(){

    if(userData.loggedIn == true){
        if(keyAnswer.flag == true && document.querySelector("#title-button").innerText == "X"){
            preQuestions.innerHTML += "<li class='preQNo' id = 'preQNo"+index+"'> <h5 class='pre-question' id = 'queNo"+index+"'></h5> <ul class = 'pre-options' id='optionsOfQueNo"+index+"'> </ul> </li>";
    
            var html = "";
            html += "<li id = 'questionNo"+index+"'>";
                            
            html += "<div class='question-field'>";
            html += "<h5>Enter Question: </h5><h5> "+index+". </h5> ";
            html += "<input type='text' id='question-input"+index+"' onkeydown='questionKey(event,"+index+")'>";
            html += "<h5 id='questionText"+index+"'></h5>";
            html += "<button onclick='enterQuestion("+index+")' id='questionButton"+index+"'>Enter</button> <button id = 'delQ"+index+"' onclick='deleteQues("+index+");'> Delete</button> </div>";
            
            html += "<div class='options-field'>";
            html += "<h5>Options: (Click on + button or press Alt+Enter to add options)</h5>";
            html += "<button class='addoptionbutton' id='addOptionButton"+index+"' onclick='addOption("+index+")'>+</button>";
            html += "<ul id='options"+index+"'> </ul> ";
            html += "</div> ";
            // html += "<div class='answer-field'> <input type='text' id = 'answer"+index+"' placeholder='Answer (Only type the option)'> </div>";
            html += "<button class='doneButton' id='doneButton"+index+"' onclick = 'doneQ("+index+");' > Done </button><h5>(Ctrl+Enter)</h5>";
            html += "</li>";
            indexNum.index = index;
            data.noOfQue = index;
            totalQuestions.innerHTML += html;  
            document.querySelector("#question-input"+index).focus();
            keyAnswer.flag = false;  
            index++;

        }
        else{
            alert("Complete the Title/question and then click on + to add more");
        }
    }
    else{
        alert("Please login/register before creating a quiz");
    }

}

function questionKey(event,index){
    if(event.key == "Enter"){
        enterQuestion(index);
    }
    else if(keyPressed['Shift'] && event.key == "Enter"){
        // event.value = " ";
        keyPressed['Shift'] = false;
        event.preventDefault();
        return false;
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
        htmlData += "<h4 id='timer'></h4>";
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


var keyPressed = {};
document.addEventListener('keydown',(event)=>{
    keyPressed[event.key] = true;
    if(keyPressed['Shift'] && event.key == "Enter"){
            console.log(keyPressed);
            keyPressed['Shift'] = false;
            titleQuiz.blur();
            addQuestion();
        }
    if(keyPressed['Alt'] && event.key == "Enter"){
        keyPressed['Alt'] = false;
        document.querySelector("#addOptionButton"+indexNum.index).click();
    }
    if(keyPressed['Control'] && event.key == "Enter"){
        keyPressed['Control'] = false;
        document.querySelector("#doneButton"+indexNum.index).click();
    }
});
document.addEventListener('keyup',(event)=>{
     delete keyPressed[event.key];
})
function titleKey(event){
    // titleQuiz.blur();
    if(event.key == "Enter")
        getTitle();
    else if(keyPressed['Shift'] && event.key == "Enter"){
        event.preventDefault();
        keyPressed['Shift'] = false;
        return false;
    }
    
}
