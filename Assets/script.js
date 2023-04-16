

var startbutton = document.querySelector(".Start-Quiz")
var question1 = document.querySelector(".Question-1-choices");
var question2 = document.querySelector(".Question-2")
var question3 = document.querySelector(".Question-3")
var question4 = document.querySelector(".Question-4")
var question5 = document.querySelector(".Question-5")
var answer1 = ["strings", "booleans", "alerts", "numbers"]
var answer2 = ["quotes", "curly brackets", "parenthesis", "square brackets"]
var answer3 = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var answer4 = ["commas", "curly brackets", "quotes", "paranthesis"]
var answer5 = ["JavaScript", "terminal/bash", "for loops"]
var correctanswer = ["booleans", "paranthesis", "all of the above", "curly brackets", "for loops"]
var choiceEl = document.querySelectorAll('.Ordered-list-button-1');
var timer;
var ele = document.getElementById('timer')
var score = 0;
var scorepage = document.querySelector(".Score-Page")
var highscorespage = document.querySelector(".Highscores-Page")
var highscorespage = document.querySelector(".Highscores-Page-2")



let currentQuestion = question1;
let currentIndex = 0;

//Iniitalizing the start of quiz with event after user clicks first button
startbutton.addEventListener("click", startgame)

//Once user starts quiz the countdown time starts to decrease and questions, answers show and dissapear as the user starts making their way through the quiz
var timeleft = 75;
function startgame() {
    startbutton.classList.add("hide")
    question1.parentNode.classList.remove("hide")
    question1.parentNode.classList.add("show")
    handleQuestion();
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
        handleQuestion();
}

// when user completes quiz
//function endquiz() {
    //scorepage.textContent.add.("show")
//}

//events when user clicks button and alerts saying if their answer is right or wrong. Time is deducted by -10 seconds if they select the wrong answer
clickEvent = (event) => {
    console.log('button clicked')
    let btn = event.target;
    console.log("the actual btn clicked = ", btn.textContent);
    if (correctanswer[currentIndex] === btn.textContent) {
        score++;
    }
    else {
        // Penalizes user for wrong ansewr, docs 10 seconds off of timer
        (correctanswer[currentIndex] !== btn.textContent) 
            alert(" Oops, that  is not  right, you lose 10 seconds");
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
    for (var i = 0; i < currentQuestion.length; i++) {
        correctanswer[i].addEventListener("click", answer1)
    }
    choiceEl.forEach((item) => {
        item.addEventListener('click', clickEvent)
    });
}
function checkAnswer(){
    console.log('correct')
    score = score + 5;
    alert ("Correct! Your score is " + score)
}
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

var scorebutton = document.querySelector(".Score-Button")
var submissionButton = document.querySelector(".Submission-Button");
var goBackButton = document.querySelector(".Go-Back-Button");
var clearHighscoresButton = document.querySelector(".Clear-Highscores-Button");
var question5 = document.querySelector(".Question-5")


// //scorebutton.addEventListener("click", seescores)
//     console.log('score button clicked')

// question5.addEventListener("click", removeQuestion5)
//     console.log('question 5 removal clicked')

// submissionButton.addEventListener("click",submitScore)
//     console.log('submission button clicked')

// goBackButton.addEventListener("click",goBack)
//     console.log('go back button clicked')

// clearHighscoresButton.addEventListener("click", clearHighscores)
//     console.log('clear scores button clicked')

// //shows the highscore page
// submissionButton.addEventListener("click",function() {
//     var initials = document.querySelector(input[type=text]).value
//     console.log("Initials were entered: $(initials)");
// })

//a function to show the users score on page
// function seescores() {
//     var scorebutton = document.querySelector(".Score-Button")
//     var scorepage = document.querySelector(".Score-Page")
//     var score = document.querySelector(".score")
//     question5.classList.add("hide")
//     scorebutton.classList.add("hide")
//     scorepage.classList.remove("hide")
//     score.classList.remove("hide")
// }

//function submitScore() {
    //var userInitials = document.querySelector('input[type="text"]').value
//}

//function goBack() {
    //console.log()
//}
//function clearHighscores() {
    //console.log()
//}

//function removeQuestion5 () {

//}