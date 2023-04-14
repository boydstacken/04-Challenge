

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
}

//events when user clicks button and alerts saying if their answer is right or wrong. Time is deducted by -10 seconds if they select the wrong answer
clickEvent = (event) => {
    console.log('button clicked')
    let btn = event.target;
    console.log("the actual btn clicked = ", btn.textContent);
    if (correctanswer[currentIndex] === btn.textContent) {
        alert("Great! You answered right");
        score++;
    }
    else {
        // Penalizes user for wrong ansewr, docs 10 seconds off of timer
        (correctanswer[currentIndex] !== btn.textContent) 
            alert(" Oops, that  is not  right, you lose 10 seconds");
            timeleft -= 10;
        }
// Ends the quiz because user exhausted all questions
    currentIndex++;
    if (currentIndex === correctanswer.length) {
        endquiz();
    } else {
        handleQuestion();
    }

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
    console.log(answer)
    score = score + 5;
    alert(score)
}
