/* Display welcome and game option */
console.log('Welcome!\n');
console.log('Choose your weapon: ');
console.log('1. Rock\n2. Paper\n3. Scissors');

/* Get the user's choice */
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

/* Get the computer's choice */
const getComputerChoice = () => {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

/* Compare the choices and determine winnner */
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game is a tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins';
    } else {
      return 'You win';
    }
  }
  }
};
/* Play game */
getUserChoice('Rock');