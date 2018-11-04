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

		$("#answer").hide();

	   var question = prompt( "Ask Me Any YES or No question" );
		 $("#questionShow").text(question + "???");

		 var random = Math.floor(Math.random()*listOfAnswers.length);

		 var showAnswer = listOfAnswers[random];
		 $("#answer").text(showAnswer).fadeIn(3000);

	});

$("#answer").hide();
});//closing of jquery
