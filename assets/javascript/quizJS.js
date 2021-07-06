


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
    var indexNoText = document.querySelector("#indexNoText"+it+"and"+id);

    var optOfQNo = document.querySelector("#opt"+it+"OfQNo"+id);

    var option = document.querySelector("#option"+it+"opt"+id);
    var optionInput = document.querySelector("#optionInput"+it+"opt"+id);
    var enterOptionButton = document.querySelector("#enter-option-"+it+"opt"+id);
    if(enterOptionButton.innerText == "Enter"){
        option.innerText = optionInput.value;
        optionInput.style.display = "none";
        enterOptionButton.innerText = "Edit";
        option.style.display = "block";
        optOfQNo.innerText = optionInput.value;
        optOfQNo.style.display = "block";
        indexNoText.innerText = indexNumber.value + ". ";
        indexNoText.style.display = "block";
        indexNumber.style.display = "none";
    }
    else{
        option.style.display = "none";
        optionInput.style.display = "block";
        enterOptionButton.innerText = "Enter";
        option.innerText = "";
        optOfQNo.style.display = "none";
        indexNoText.style.display = "none";
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

    optOfQNo.innerHTML += "<h5 id='opt"+iterator+"OfQNo"+id+"' ></h5>";


    var html = "";
    html += "<li id='whole-option-" + iterator + "opt"+id+"'> <input type='radio' name='option' id='q"+id+"opt"+iterator+"'>";
    html +=  "<input type='text' class='index-number' id='indexNumberOf"+iterator+"QNo"+id+"' placeholder=''>"+"<h5 id='indexNoText"+iterator+"and"+id+"'></h5> <input type='text' id='optionInput" + iterator +"opt"+id+"'> <h5 id='option" + iterator;
    html += "opt"+id+"' ></h5> <button onclick='enterOption(" + iterator + ","+id+")' id='enter-option-" + iterator ;
    html += "opt"+id+"' >Enter</button> <button onclick='deleteOption("+iterator+ ","+id+")' id='delete-option-";
    html += iterator + "opt"+id+"'>X</button></li>";
    iterator++;
    options.innerHTML += html;
    prev = curr;
}



// function doneQ(id){
//     var preQuestions = document.querySelector("#pre-questions");


// }



var totalQuestions = document.querySelector("#all-questions");
var index = 1;
function addQuestion(){

    preQuestions.innerHTML += "<h5 class='pre-question' id = 'queNo"+index+"'></h5> <ul id='optionsOfQueNo"+index+"'> </ul>";

    var html = "";
    html += "<li>";
                    
    html += "<div class='question-field'>";
    html += "<h5>Enter Question: </h5><h5> "+index+". </h5> ";
    html += "<input type='text' id='question-input"+index+"'>";
    html += "<h5 id='questionText"+index+"'></h5>";
    html += "<button onclick='enterQuestion("+index+")' id='questionButton"+index+"'>Enter</button> <button id='deleteQuestionButton"+index+"' onclick='deleteQues("+index+");'> Delete</button> </div>";
    
    html += "<div class='options-field'>";
    html += "<h5>Options</h5>";
    html += "<button onclick='addOption("+index+")'>+</button>";
    html += "<ul id='options"+index+"'> </ul> <button onclick = 'doneQ("+index+");'> Done </button></div></li>";
    index++;
    totalQuestions.innerHTML += html;
    
}

