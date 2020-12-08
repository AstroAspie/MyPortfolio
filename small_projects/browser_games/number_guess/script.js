let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/* Generate target number for guess */
const generateTarger = () => {
  return Math.floor(Math.random() * 10);
};

/* Compare guess to the closest integer of target answer */
const compareGuesses = (human, computer, answer) => {
  var result = false;
  if ((human === computer || (Math.abs(human) < Math.abs(computer)))) {
    result = true;
  }
  return result;
};

let updateScore = (winner="") => {
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    default:
      console.log('Invalid entry: Acceptable entries \'human\' or \'computer\'');
  }
};

const incrementRoundNumber = () => {
  currentRoundNumber++;
};

