//define all the parts
var magic8Ball = {};
magic8Ball.question = prompt("What do you want to ask the Magic 8 Ball?");
magic8Ball.listOfAnswers = ["Maybe", "That's Possible", "For Sure", "With Certainty", "That's a NO", "Ain't Happening", "Make it So", "Sorry, Ask Again"];
//checking answer is stored
console.log(magic8Ball.question);
//get the random number
var random = Math.floor(Math.random()* magic8Ball.listOfAnswers.length);
console.log(random);
//use the random number to grab from the array
var showAnswer = magic8Ball.listOfAnswers[random];
console.log(showAnswer);
//write the answer to the screen
console.log("To answer your question: " + magic8Ball.question + " the Magic 8 Ball says: " + showAnswer + "!!");
