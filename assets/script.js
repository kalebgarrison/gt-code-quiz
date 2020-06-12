
// Variables 
var startButton = document.getElementById('start-btn');
var gameRules = document.getElementById('rules');
var buttonA = document.getElementById('buttonA');
var buttonB = document.getElementById('buttonB');
var buttonC = document.getElementById('buttonC');
var buttonD = document.getElementById('buttonD');
var timer = document.getElementById('timer');
var headingHOne = document.querySelector('h1');
var questionsEl = document.getElementById('questions'); 
var score = document.getElementById('score');
var hThree = document.getElementById('correct-wrong');
var initialBtn = document.getElementById('initial-btn')
var initialInput = document.getElementById('initial-input')
var msgDiv = document.querySelector('#msg')

var runningQuestionIndex = 0;
var currentScore = 0;
var highScoreLocal = localStorage.getItem('Highscore')

console.log(typeof codeQuestions)

var timerLeft = 75

var codeQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is inclosed within ____.",
        choiceA: "quotes", 
        choiceB: "curly brackets",
        choiceC: "parentheses", 
        choiceD: "square brackets",
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choiceA: 'numbers and strings',
        choiceB: "other arrays", 
        choiceC: "booleans", 
        choiceD: "all the above",
        answer: "all the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choiceA: "commas", 
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        answer: "console.log"
    }

];

// For loop for the questions



gameRules.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.'




// Functions
// This function starts the game. 
function start(){
    console.log('start')
    startButton.classList.add('hide')
    gameRules.textContent = ''
    score.innerHTML = "Score: " + currentScore;
    showButtons()
    countdownTimer()
    showQuestions()

}
console.log(codeQuestions[runningQuestionIndex].question)


function showQuestions(){

    if (runningQuestionIndex < 5){
        questionsEl.innerHTML = codeQuestions[runningQuestionIndex].question;
        buttonA.textContent = codeQuestions[runningQuestionIndex].choiceA;
        buttonB.textContent = codeQuestions[runningQuestionIndex].choiceB;
        buttonC.textContent = codeQuestions[runningQuestionIndex].choiceC;
        buttonD.textContent = codeQuestions[runningQuestionIndex].choiceD;
        console.log(questionsEl)
    } else {
        endGame()
    }

}


function correctAnswer(choice){
    if (choice === codeQuestions[runningQuestionIndex].answer){
        hThree.textContent = 'Correct!';
        currentScore += 10;
        score.innerHTML = "Score: " + currentScore;
    } else {
        hThree.textContent = 'Wrong!';
        timerLeft -=15;
    }

    runningQuestionIndex++;
    showQuestions()

}





// This function controls the answer buttons showing or hiding on the page.
function showButtons(){
    buttonA.classList.remove('hide');
    buttonB.classList.remove('hide');
    buttonC.classList.remove('hide');
    buttonD.classList.remove('hide');
}

// This function operates the timer. 
function countdownTimer(){
    var gameTimer = setInterval(function(){
        timerLeft--;
        timer.textContent = "Timer: " + timerLeft
        if (timerLeft === 0) {
            clearInterval(gameTimer);
            headingHOne.textContent = "Coding Quiz Over!"
        } else {
            console.log(typeof timer)
        }
    
    }, 1000);
}

function endGame(){
    headingHOne.textContent = "All Done!"
    buttonA.classList.add('hide');
    buttonB.classList.add('hide');
    buttonC.classList.add('hide');
    buttonD.classList.add('hide');
    questionsEl.textContent = '';
    highScore()
    
}

function highScore(){
    hThree.textContent = 'You scored ' + currentScore + " points! Enter your initials to keep track of your highscore!";
    initialBtn.classList.remove('hide')
    initialInput.classList.remove('hide')
}

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

//   function renderLastRegistered() {
//     var highscoreMsg = localStorage.getItem("");
  
//     if (!email || !password) {
//       return;
//     }
  
//     userEmailSpan.textContent = email;
//     userPasswordSpan.textContent = password;
//   }
  
// Event Listeners
startButton.addEventListener('click', start)
buttonA.addEventListener('click', function(){
    correctAnswer(codeQuestions[runningQuestionIndex].choiceA)
});
buttonB.addEventListener('click', function(){
    correctAnswer(codeQuestions[runningQuestionIndex].choiceB)
});
buttonC.addEventListener('click', function(){
    correctAnswer(codeQuestions[runningQuestionIndex].choiceC)
});
buttonD.addEventListener('click', function(){
    correctAnswer(codeQuestions[runningQuestionIndex].choiceD)
});

initialBtn.addEventListener('click', function(event){

    event.preventDefault()

})
// hThree.textContent = 'Highscores: ' + currentScore;