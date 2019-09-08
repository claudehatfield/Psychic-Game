var wins = 0;
var loss = 0;
var userGuessLeft = 9;
var userGuessedLetters;
var correctLetter;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(computerChoice);




document.onkeyup = function (event) {
  var playerGuess = event.key;
  if (playerGuess === correctLetter) {
    win();
  } else if(userGuessLeft - 1 === 0){
    lose();
  }else {
    fail(playerGuess);
  }
  start();
}


function start() {
  var startWins = document.getElementById("win");
  var startLoss = document.getElementById("loss");
  var startGuess = document.getElementById("left");
  var startLetter = document.getElementById("soFar");
  startWins.textContent = "#win " + wins;
  startLoss.textContent = "#loss " + loss;
  startGuess.textContent = "#left " + userGuessLeft;
  startLetter.textContent = "#soFar" + userGuessedLetters.join(',');
}

function win() {
  wins++;
  reset();
}

function lost() {
  loses++;
  reset();
}

function fail(letter) {
  userGuessLeft--;
  userGuessedLetters.push(letter);
}

function reset() {
  useGuessLeft = 9;
  userGuessedLetters = [];
  correctLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + correctLetter);
}