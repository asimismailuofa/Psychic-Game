// make and array of alphabets

var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess;
var wins = 0;
var losses = 0;
var numOfGuesses = 9;
var userLetter = [];

function compGuess() {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
    console.log(computerGuess);
}

compGuess();

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    var userGuess = event.key;
  numOfGuesses--;
  userLetter.push(userGuess)
  document.querySelector("#guessSoFar").innerHTML = userLetter;

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

    if (userGuess === computerGuess) {
        wins++; 
        document.querySelector("#wins").innerHTML = wins;
        numOfGuesses = 9;
        compGuess();
        userLetter = [];
        document.querySelector("#guessSoFar").innerHTML = userLetter;
    }

    if (numOfGuesses === 0 ) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        numOfGuesses = 9;
        compGuess();
        userLetter = [];
        document.querySelector("#guessSoFar").innerHTML = userLetter;
    }

    document.querySelector("#guessesLeft").innerHTML = numOfGuesses;


}




 
