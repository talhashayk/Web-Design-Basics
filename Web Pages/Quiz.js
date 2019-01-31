// Array to hold questions and corresponding answers.
var playerQuestions = [
	{
		prompt: "What language is generally used for the design of a website?\
		\n(a) JavaScript\n(b) CSS\n(c) HTML\
		\nEnter the corresponding letter.",
		answer: "b"
	},
	{
		prompt: "What language is generally used for the base of a website?\
		\n(a) JavaScript\n(b) CSS\n(c) HTML\
		\nEnter the corresponding letter.",
		answer: "c"
	},
	{
		prompt: "What language is generally used to affect website behaviour?\
		\n(a) JavaScript\n(b) CSS\n(c) HTML\
		\nEnter the corresponding letter.",
		answer: "a"
	},
	]
// Variable to hold players score.
var playerScore = 0;
	
// For loop to increment score.	
for(var i=0; i < playerQuestions.length; i++){
	var response = window.prompt(playerQuestions[i].prompt);
	if(response == playerQuestions[i].answer){
		playerScore++;
		alert("You got it right!");
	} else {
		alert("better luck next time");
	}
}
alert("Your score on this quiz was " + playerScore + "/3");