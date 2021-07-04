

function enterQuestion(id){

var question = document.querySelector("#question-input"+id);
var questionText = document.querySelector("#questionText"+id);
var questionButton = document.querySelector("#questionButton"+id);
    
    if(questionButton.innerText == "Enter"){
        question.style.display = "none";
        questionText.innerText = question.value;
        questionButton.innerText = "Edit"; 
        questionText.style.display = "block";
    }
    else{
        question.style.display = "block";
        questionButton.innerText = "Enter"; 
        questionText.innerText = "";
        questionText.style.display = "none";
        
    }
}


function getTitle(){
    var titleQuiz = document.querySelector("#Title-of-quiz");
    var nameOfQuiz = document.querySelector("#name-of-quiz");
    var quizNameButton = document.querySelector("#title-button");
    if(quizNameButton.innerText == "Create"){
        nameOfQuiz.innerText = titleQuiz.value;
        nameOfQuiz.style.display = "block";
        titleQuiz.style.display = "none";
        quizNameButton.innerText = "X";
    }
    else{
        nameOfQuiz.style.display = "none";
        titleQuiz.style.display = "block";
        quizNameButton.innerText = "Create";
    }
}


function enterOption(it,id){
    var optionParameter = "#enter-option-"+it+"opt"+id;
    var parameter = "#option"+it+"opt"+id;
    var parameter2 = "#optionInput"+it+"opt"+id;
    var indexNumberParameter = "#indexNumber"


    var option = document.querySelector(parameter);
    var optionInput = document.querySelector(parameter2);
    var enterOptionButton = document.querySelector(optionParameter);
    if(enterOptionButton.innerText == "Enter"){
        option.innerText = optionInput.value;
        optionInput.style.display = "none";
        enterOptionButton.innerText = "Edit";
        option.style.display = "block";

    }
    else{
        option.style.display = "none";
        optionInput.style.display = "block";
        enterOptionButton.innerText = "Enter";
        option.innerText = "";
    }
}

function deleteOption(it,id){
    var optionDeleteParameter = "#whole-option-"+it+"opt"+id;
    var wholeOption = document.querySelector(optionDeleteParameter);
    wholeOption.remove();
    iterator--;
}
var iterator = 1;
// var prev = 1;
// var curr = 1;
function addOption(id){
    
    var options = document.querySelector("#options"+id);
    // curr = id;
    // if(curr>prev)
    // iterator = 1;
    var html = "";
    html += "<li id='whole-option-" + iterator + "opt"+id+"'> <input type='radio' name='option' id='q"+id+"opt"+iterator+"'>";
    html +=  "<input type='text' class='index-number' id='indexNumber"+iterator+"' placeholder=''>"+"<input type='text' id='optionInput" + iterator +"opt"+id+"'> <h5 id='option" + iterator;
    html += "opt"+id+"' ></h5> <button onclick='enterOption(" + iterator + ","+id+")' id='enter-option-" + iterator ;
    html += "opt"+id+"' >Enter</button> <button onclick='deleteOption("+iterator+ ","+id+")' id='delete-option-";
    html += iterator + "opt"+id+"'>X</button></li>";
    iterator++;
    options.innerHTML += html;
    // prev = curr;
}

var totalQuestions = document.querySelector("#all-questions");
var index = 1;
function addQuestion(){

    

    var html = "";
    html += "<li>";
                    
    html += "<div class='question-field'>";
    html += "<h5>Enter Question: </h5> ";
    html += "<input type='text' id='question-input"+index+"'>";
    html += "<h5 id='questionText"+index+"'></h5>";
    html += "<button onclick='enterQuestion("+index+")' id='questionButton"+index+"'>Enter</button> </div>";
    
    html += "<div class='options-field'>";
    html += "<h5>Options</h5>";
    html += "<button onclick='addOption("+index+")'>+</button>";
    html += "<ul id='options"+index+"'> </ul></div></li>";
    index++;
    totalQuestions.innerHTML += html;
    
}