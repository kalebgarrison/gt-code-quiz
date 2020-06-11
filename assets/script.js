
// Variables 
var startButton = document.getElementById('start-btn')
var gameRules = document.getElementById('rules')
var buttonA = document.getElementById('buttonA')
var buttonB = document.getElementById('buttonB')
var buttonC = document.getElementById('buttonC')
var buttonD = document.getElementById('buttonD')
var timer = document.getElementById('timer')
var headingHOne = document.querySelector('h1')

var timerLeft = 100

var codeQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"], 
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is inclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ['numbers and strings', "other arrays", "booleans", "all the above"],
        answer: "all the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }

];


















gameRules.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.'




// Functions
// This function starts the game. 
function start(){
    console.log('start')
    startButton.classList.add('hide')
    gameRules.textContent = ''
    showButtons()
    countdownTimer()
    

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


function nextQuestion(){}


function selectAnswer(){}




// Event Listeners
startButton.addEventListener('click', start)