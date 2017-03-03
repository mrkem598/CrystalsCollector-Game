
var wins = 0;
var losses = 0;

var score = 0;
var winningNumber = Math.floor((Math.random() * 100) + 1);
var red = Math.floor((Math.random() * 10) + 1);
var blue = Math.floor((Math.random() * 10) + 1);
var yellow = Math.floor((Math.random() * 10) + 1);
var green = Math.floor((Math.random() * 10) + 1);
// console.log(red, blue, yellow, green);


var updateScore = function (){
	$('#score').empty();
	$('#score').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	// $('#score').replaceAll(score); jquery error?
}

var restart = function (){

	score = 0;
	winningNumber = Math.floor((Math.random() * 100) + 1);

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

$("#randomNumber").append(winningNumber);


$("#score").append(score);



$(document).ready(function(){

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
