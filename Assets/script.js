

var startbutton = document.querySelector(".Start-Quiz")
var question1 = document.querySelector(".Question-1")
var question2 = document.querySelector(".Question-2")
var question3 = document.querySelector(".Question-3")
var question4 = document.querySelector(".Question-4")
var question5 = document.querySelector(".Question-5")
//var answer1 = document.querySelector(".Ordered-list-button-1")
var answer1 = ["strings", "booleans","alerts", "numbers"]
var answer2 = ["quotes","curly brackets", "parenthesis", "square brackets"]
var answer3 = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var answer4 = ["commas", "curly brackets", "quotes","paranthesis"]
var answer5 = ["JavaScript", "terminal/bash", "for loops"]
correctanswer = ["booleans","paranthesis", "all of the above", "curly brackets","for loops"]


startbutton.addEventListener("click", startgame)

function startgame(){
    startbutton.classList.add("hide")
    question1.parentNode.classList.remove("hide")
    question1.parentNode.classList.add("show")
}

answerbutton.addEventListener("click", startgame)

for (var i = 0; i < orderedListButtons1.length; i++) {
   orderedListButtons1[i].addEventListener("click", answer1)
}
//if 
   // answer1 !==="strings"
    //startbutton.classList.add("hide")
    //question1.parentNode.classList.remove("hide")
   // question1.parentNode.classList.add("show")
//{
//} else {
    answer1 === "strings"
    startbutton.classList.add("hide")
    question1.parentNode.classList.remove("hide")
    question1.parentNode.classList.add("show")
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


