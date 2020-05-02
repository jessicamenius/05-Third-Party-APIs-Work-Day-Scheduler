$(document).ready(function () {
    var currentDay = moment().format("dddd, MMMM DD, YYYY");
    console.log(moment().format("dddd, MMMM DD, YYYY"));
    $("#currentDay").text(currentDay);
  
    $("#btnSubmit").on("click", function (event) {
      event.preventDefault();
      console.log("message")
  });



// var newEvent = JSON.parse(localStorage.getItem("meeting"));
// if (newEvent === null) {
//   newEvent = [];
// }
// newEvent.push(window.score);
// document.getElementById("question").innerHTML = "";
// window.score = 0;
// localStorage.setItem("meeting", JSON.stringify(newEvent));
// // list the existing scores in html
// for (var i = 0; i < existingScores.length; i++) {
//   // display the scores on the page using
//   var listItem = document.createElement("li");
//   listItem.innerHTML = existingScores[i];
//   document.getElementById("score").append(listItem);
// }
// window.timer = 100;
// currentQuestion = 0;
// var startAgain = document.createElement("button");
// startAgain.setAttribute("id", "start-again");
// startAgain.innerHTML = "Start Again";

// startAgain.addEventListener("click", function () {
//   displayTimer();
//   displayQuestion();
//   startAgain.parentNode.removeChild(startAgain);
//   document.getElementById("score").innerHTML = "";
// });
// document.querySelector("#prompt_display").appendChild(startAgain);
// }
