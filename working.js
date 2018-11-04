$(document).ready(function(){

	var listOfAnswers = [
	"Maybe",
	"That's Possible",
	"For Sure",
	"With Certainty",
	"That's a NO",
	"Ain't Happening",
	"Make it So",
	"Sorry, Ask Again"];

//on button click, prompt with question, store that string as var question, insert question string into div
	$( "#questionButton" ).click(function() {
	   var question = prompt( "Ask Me Any YES or No question" );
		 $("#questionShow").text(question + "???");

		 var random = Math.floor(Math.random()*listOfAnswers.length);

		 var showAnswer = listOfAnswers[random];
		 $("#answer").text(showAnswer);
	});



//get the random number
//var random = Math.floor(Math.random()*listOfAnswers.length);
//console.log(random);
//use the random number to grab from the array
//var showAnswer = listOfAnswers[random];
//console.log(showAnswer);

//$("#answer").text(showAnswer);

});//closing of jquery


/*//jquery wrap
$(document).ready(function() {

//define all the parts
var magic8Ball = {};
var question = function() { prompt("What yes / no question do you want to ask the Magic 8 Ball?");
};
//make sure no answer is showing when page loads
$("#answer").hide();

//user clicks the ASK ME ANYTHING BUTTON
$("#questionButton").click(question);

$("#answer").hide();

magic8Ball.listOfAnswers = ["Maybe", "That's Possible", "For Sure", "With Certainty", "That's a NO", "Ain't Happening", "Make it So", "Sorry, Ask Again"];

//get the random number
var random = Math.floor(Math.random()* magic8Ball.listOfAnswers.length);

//use the random number to grab from the array
var showAnswer = magic8Ball.listOfAnswers[random];

//write the answer to the screen

$("#answer").text(showAnswer);
$("#answer").fadeIn(3000);


});*/
