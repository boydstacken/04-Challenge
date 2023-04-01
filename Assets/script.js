

var startbutton = document.querySelector(".Start-Quiz")
var question1 = document.querySelector(".Question-1")
var question2 = document.querySelector(".Question-2")
var question3 = document.querySelector(".Question-3")
var question4 = document.querySelector(".Question-4")
var question5 = document.querySelector(".Question-5")
//var answer1 = document.querySelector(".Ordered-list-button-1")



startbutton.addEventListener("click", startgame)

function startgame(){
    startbutton.classList.add("hide")
    question1.parentNode.classList.remove("hide")
    question1.parentNode.classList.add("show")
}
//for (var i = 0; i < orderedListButtons1.length; i++) {
   //orderedListButtons1[i].addEventListener("click", answer1)
//}

//question1.addEventListener("click", orderedListButton1)

//function orderedListButton1() {
   // orderedListButton1.classList.add("hide")
    //question2.parentNode.classList.remove("hide")
    //question2.parentNode.classList.add("show")
//}

//for (var i = 0; i < orderedListButtons1.length; i++) {
   // orderedListButtons1[i].addEventListener()
 //}


