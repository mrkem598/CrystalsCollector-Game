$(document).ready(function() {
var crystals = [
	'assets/images/red.png',
	'assets/images/blue.png',
	'assets/images/yellow.png',
	'assets/images/green.png'
	];

var wins = 0;
var losses = 0;
var score = 0;

newCrystals();
newGame();
	//creating a function for newCrystals
	function newCrystals () {
		var numbers = []
		while(numbers.length < 4) {
		//Math.ceil round a number upward to its nearest integer
			var winningNumber = Math.ceil(Math.random()* 12);
			var found = false;
			for (var i=0; i< numbers.length ; i++){
				if(numbers[i] === winningNumber) {
					found = true; break
				}
			}
			if(!found)numbers[numbers.length]=winningNumber;
		}
		console.log(numbers);
	for(i=0; i < numbers.length; i++) {
	 var imageCrystal = $('<img>');
	 //The attr() method sets or returns attributes and values of the imageCrystal
	imageCrystal.attr('data-num', numbers[i]);
	imageCrystal.attr('src', crystals[i]);
	imageCrystal.attr('alt', 'crystals');
	imageCrystal.addClass('crystalImage');
	$("#crystals").append('imageCrystal');
	}
	}
function newGame() {
	var score = 0;
	$("#yourScore").text(score);
	
	function randomIntFromInterval(min,max) {
		return Math.floor(Math.random()*(max-min)+1);
	}
	var numberToGuess = randomIntFromInterval(19,120);
	$(".value").text(numberToGuess);
	
	$(".crystalImage").on("click", function() {
		counter = counter + parseInt($(this).data("num"));
		$("#yourScore").text((counter);
		if(counter === numberToGuess) {
			$("#status").text("You Win!");
			wins ++:
			$("#win").text(wins);
			console.log(wins);
			$("#crystals").empty();
			newCrystals();
			newGame();
		}else if (score > numberToGuess){
			$("#status).text("You Lost!");
			  losses ++;
			  console.log(losses);
			  $("#crystals").empty();
			newCrystals();
			newGame();
		}
		});
}
});
