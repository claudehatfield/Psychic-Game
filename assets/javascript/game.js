var wins = 0;
var loss = 0;
var guessLeft = 0;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(computerChoice);


document.onkeyup = function(event){
  var playerGuess = event.key;
  var success =document.getElementById("wins");

  if (playerGuess === computerChoice){
    wins++
    success.textContent = wins;
  }
}