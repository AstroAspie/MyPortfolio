let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarger() {
  return Math.floor(Math.random() * 10);
}


function compareGuesses(human, computer, answer) {
  var winner;
  if ((human === computer || (Math.abs(human) < Math.abs(computer))) || human === answer) {
    winner = true;
  } else {
    winner = false;
  }
  return winner;
}