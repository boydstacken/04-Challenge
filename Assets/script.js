

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



// let questions  = [
//     {
//         question:  "questions1",
//         ansChoices: ["a1", "a2", "a3",  "a4"],
//         corrAns: "a3",
//     },
//     {
//         question:  "questions1",
//         ansChoices: ["a1", "a2", "a3",  "a4"],
//         corrAns: "a3",
//     },
// ]

// let questions = [question1, question2, question3, question4, question5];
// let answers = [answer1, answer2, answer3, answer4, ]
// let currentIndex =0;
// let currentQuestion= questions[currentIndex];

let currentQuestion = question1;
let currentIndex = 0;


startbutton.addEventListener("click", startgame)



function startgame() {
    startbutton.classList.add("hide")
    question1.parentNode.classList.remove("hide")
    question1.parentNode.classList.add("show")
    handleQuestion();
    var timeleft = 75;
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


//setTimeout(() => {   
    //startbutton.addEventListener("click", startgame)
    //console.log("this is the first message");
     // }, 5000);



function endquiz() {
    // to be completed
}

clickEvent = (event) => {
    console.log('some event content here...')
    let btn = event.target;
    console.log("the actual btn clicked = ", btn.textContent);
    if (correctanswer[currentIndex] === btn.textContent) {
        alert("Great! You answered right");
    }
    else {
        // tbd , penalise by docking 10 seconds off of timer
        alert(" Oops, that  is not  right");
    }

    currentIndex++;
    if (currentIndex === correctanswer.length) {
        // tbd end the quiz , because exhausted all questions
        endquiz();
    } else {
        handleQuestion();
    }

}
// choiceEl.forEach((item) => {
//     item.addEventListener('click', clickEvent)
// });

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







//for (var i = 0; i < orderedListButtons1.length; i++) {
//    orderedListButtons1[i].addEventListener("click", answer1)
//}

//}

//question1.addEventListener("click", orderedListButton1)

//function orderedListButton1() {
   // orderedListButton1.classList.add("hide")
    //question2.parentNode.classList.remove("hide")
    //question2.parentNode.classList.add("show")
//}

//for (var i = 0; i < orderedListButtons1.length; i++) {
   //orderedListButtons1[i].addEventListener()
// }


