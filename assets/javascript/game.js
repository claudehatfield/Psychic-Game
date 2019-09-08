var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var left = 0;
var letterGuessed;

reset();
start();

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === rightLetter) {
    win();
  } else if (left - 1 === 0) {
    lost();
  } else {
    wrong(guess);
  }

  start();
}



function start(){
  var correct = document.getElementById("wins");
  var lost = document.getElementById("losses");
  var guessLeft = document.getElementById("guessLeft");
  var guess = document.getElementById("guessed");

  correct.textContent =  wins;
  lost.textContent =  losses;
  guessLeft.textContent = left;
  guess.textContent = letterGuessed.join();
}

function win(){
  wins++
  reset();
}

function lost(){
  losses++
  reset();
}

function wrong(letter){
  left--;
  letterGuessed.push(letter);

}

function reset(){
  left = 9;
  letterGuessed= [];
  rightLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + rightLetter);
}