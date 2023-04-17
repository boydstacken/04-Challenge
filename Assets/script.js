

var startbutton = document.querySelector(".Start-Quiz")
var question1 = document.querySelector(".Question-1-choices");
var question2 = document.querySelector(".Question-2")
var question3 = document.querySelector(".Question-3")
var question4 = document.querySelector(".Question-4")
var question5 = document.querySelector(".Question-5")
var answer1 = ["strings", "booleans", "alerts", "numbers"]
var answer2 = ["quotes", "curly brackets", "parentheses", "square brackets"]
var answer3 = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var answer4 = ["commas", "curly brackets", "quotes", "parentheses"]
var answer5 = ["JavaScript", "terminal/bash", "for loops"]
var correctanswer = ["booleans", "parentheses", "all of the above", "curly brackets", "for loops"]
var choiceEl = document.querySelectorAll('.Ordered-list-button-1');
var timer;
var ele = document.getElementById('timer')
var score = 0;
var scorepage = document.querySelector(".Score-Page")
var highscorespage = document.querySelector(".Highscores-Page")
var highscorespage2 = document.querySelector(".Highscores-Page-2")
var mainpage = document.querySelector(".container")


let currentQuestion = question1;
let currentIndex = 0;

//array for each question to read and cycle through the information to help continue progession throughout the application.
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store _____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within _____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'paranthesis'],
        answer: 'curly brackets',
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['Javascript', 'terminal/bash', 'for loops', 'console log'],
        answer: 'for loops',
    },
]

//Iniitalizing the start of quiz with event after user clicks first button
startbutton.addEventListener("click", startgame)

//Once user starts quiz the countdown time starts to decrease and questions, answers show and dissapear as the user starts making their way through the quiz
var timeleft = 75;
var scoreEl = document.querySelector('.score');

function startgame() {
    startTimer()
    startbutton.classList.add("hide")
    mainpage.parentNode.classList.add("hide")
    question1.parentNode.classList.remove("hide")
    question1.parentNode.classList.add("show")
    handleQuestion();
}
function startTimer(){
    var downloadTimer = setInterval(function(){
        setTimeout(downloadTimer,1000);  
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Finished";
      } else {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
      }
      timeleft -= 1;
    }, 1000);
}


//events when user clicks button and alerts saying if their answer is right or wrong. Time is deducted by -10 seconds if they select the wrong answer
var clickEvent = (event) => {
    console.log('button clicked')
    let btn = event.target;
    console.log("the actual btn clicked = ", btn.textContent,correctanswer[currentIndex]);
    if (correctanswer[currentIndex] == btn.textContent) {
        score = score + 5;
        console.log ("total score is " + score)
        alert("Correct! Your score is " + score)
    }
    else {
        // Penalizes user for wrong ansewr, docs 10 seconds off of timer
        (correctanswer[currentIndex] !== btn.textContent) 
            alert(" Oops, that  is not  right, you lose 10 seconds");
            console.log ("total score is still " + score , "and 10 seconds were deducted")
            timeleft -= 10;
        }
//Ends the quiz because user exhausted all questions
   currentIndex++;
    if (currentIndex === correctanswer.length) {
       endquiz();
    } else {
       handleQuestion();
    }
}
function endquiz(){
    console.log("quiz has ended")
}

function handleQuestion() {
    currentQuestion.parentNode.classList.add("hide")
    choiceEl = document.querySelectorAll(`.Ordered-list-button-${currentIndex + 1}`);
        console.log(choiceEl)
    switch (currentIndex + 1) {
        case 1:
            currentQuestion = question1;
            break;
        case 2:
            currentQuestion = question2;
            break;
        case 3:
            currentQuestion = question3;
            break;
        case 4:
            currentQuestion = question4;
            break;
        case 5:
            currentQuestion = question5;
            break;

    }
    currentQuestion.parentNode.classList.remove("hide")
    currentQuestion.parentNode.classList.add("show")
        console.log(currentQuestion)
    for (var i = 0; i < currentQuestion.length; i++) {
        console.log(correctanswer[i])
        correctanswer[i].addEventListener("click", questions)
    }
    choiceEl.forEach((item) => {
        item.addEventListener('click', clickEvent)
    });
}


var scorebutton = document.querySelector(".Score-Button")
var submissionButton = document.querySelector(".Submission-Button");
var goBackButton = document.querySelector(".Go-Back-Button");
var clearHighscoresButton = document.querySelector(".Clear-Highscores-Button");
var question5removal = document.querySelector(".Question-5")
var initials = document.querySelector(".Initial-Entry-Box")
var highscoresList = document.querySelector(".Highscores-Page")
var finalScore = document.querySelector(".finalscore")

//after quiz is cmoplete user can click the button to see their scores
scorebutton.addEventListener("click", seescores)

function seescores() {
    var scorebutton = document.querySelector(".Score-Button")
    var scorepage = document.querySelector(".Score-Page")
    var mainpage = document.querySelector(".container")
    question5removal.parentNode.classList.add("hide")
    scorebutton.classList.remove("hide")
    scorepage.parentNode.classList.remove("hide")

    finalScore.textContent = score

}
//user's initial submission after receiving their score, will get them to highscores page
submissionButton.addEventListener("click", function() {
    var initials = document.querySelector("input[type=text]").value
    console.log("Initials were entered: " + initials)
    var newHighscore = document.createElement('li')
    newHighscore.textContent = initials + ': ' + score
    highscoresList.appendChild(newHighscore)
    var scorepage = document.querySelector('.Score-Page')
    var highscorespage = document.querySelector('.Highscores-Page')
    scorepage.parentNode.classList.add('hide')
    highscorespage.parentNode.classList.remove('hide')
  });

//go back button execution
    var goBackButton = document.querySelectorAll(".Go-Back-Button")
    for (var i=0; i < goBackButton.length; i++) {
        goBackButton[i].addEventListener("click",function() {
        showQuiz()
    })
}
//clear button execution
var clearHighscoresButton = document.querySelector(".Clear-Highscores-Button")
clearHighscoresButton.addEventListener("click",function() {
    var highscoresList = document.getElementById("highscoresList")
    while (highscoresList.firstChild) {
        highscoresList.removeChild(highscoresList.firstChild)
    }
    scores = []
    localStorage.setItem("scores",JSON.stringify(scores))
})