const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'Error!';
  }
};

// test user input
//console.log(getUserChoice('rock')); // expect rock to output
//console.log(getUserChoice('spock')); // expect Error! output

const getComputerChoice = () => {
  // computer choice based on a random number between 0 and 2
  const computer_choice = Math.floor(Math.random() * 4);
  switch (computer_choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'bomb';
  }
}

// test computer choice generator
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'bomb') {
    return 'User wins by bomb!';
  } else if (computerChoice === 'bomb') {
    return 'Computer wins by bomb!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
};

// Test to determine winner
/*
const test = determineWinner(getUserChoice('rock'), getComputerChoice());
const test1 = determineWinner(getUserChoice('paper'), getComputerChoice());
const test2 = determineWinner(getUserChoice('scissors'), getComputerChoice());

console.log(test);
console.log(test1);
console.log(test2);
*/

const playGame = () => {
  var userChoice = getUserChoice('rock'); // test variable without user input
  var computerChoice = getComputerChoice();

  // log both user and computer choices to console
  console.log('User: ' + userChoice);
  console.log('Computer: ' + computerChoice);

  var winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
};

playGame();
