// Variables
var wins = 0;
var losses = 0;
// Players current score
var score = 0;
// Selects a random number from 1 to 100 for player to match
var winningNumber = Math.floor((Math.random() * 100) + 1);

// Assigns random value to crystals from 1 to 10
var red = Math.floor((Math.random() * 10) + 1);
var blue = Math.floor((Math.random() * 10) + 1);
var yellow = Math.floor((Math.random() * 10) + 1);
var green = Math.floor((Math.random() * 10) + 1);
// console.log(red, blue, yellow, green);

// update score in html
var updateScore = function (){
	$('#score').empty();
	$('#score').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	// $('#score').replaceAll(score); jquery error?
}

// Should restart game and select new random numbers
var restart = function (){

	// Change 1 - Remove all var keywords. Once you've declared a global variable its declared for good!
	score = 0;
	winningNumber = Math.floor((Math.random() * 100) + 1);

	// CHANGE 2 -  Clear the randomNumber then add the new number
	$("#randomNumber").empty();
	$("#randomNumber").append(winningNumber);

	red = Math.floor((Math.random() * 10) + 1);
	blue = Math.floor((Math.random() * 10) + 1);
	yellow = Math.floor((Math.random() * 10) + 1);
	green = Math.floor((Math.random() * 10) + 1);
	console.log(red, blue, yellow, green, winningNumber);
	alert('restart function ran');
	updateScore();
}

var logic = function (){
		// win/loss logic
	if (score == winningNumber) {
			wins = wins + 1; //++ not working?
			alert('You Win!');
			restart();
			}			
		else if (score > winningNumber) {
			losses = losses + 1;
			alert('You Lost!');
			restart();
			}
		else {
			updateScore();
			}
}

// Display winning number in html
$("#randomNumber").append(winningNumber);

// Display score in html
$("#score").append(score);


// Functions
$(document).ready(function(){
// Crystal Buttons
$('#red').click(function(){
			score = score + red;
			logic();
		})

$('#blue').click(function(){
			score = score + blue;
			logic();	
		})

$('#yellow').click(function(){
			score = score + yellow;
			logic();
		})

$('#green').click(function(){
			score = score + green;
			logic();
	})
});