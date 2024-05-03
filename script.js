
const options = ['paper', 'rock', 'scissor'];
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log(`Computer Choice: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  const rockChoice = document.createElement('button');
   
  if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissor') {
    alert('Write a valid option!');
    humanChoice;
  }
  console.log(`Human Choice: ${humanChoice}`);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === 'paper' && computerChoice === 'paper')
    || (humanChoice === 'rock' && computerChoice === 'rock')
    || (humanChoice === 'scissor' && computerChoice === 'scissor')) {
    console.log("It's a tie");
  } else if ((humanChoice === 'paper' && computerChoice === 'rock')
    || (humanChoice === 'rock' && computerChoice === 'scissor')
    || (humanChoice === 'scissor' && computerChoice === 'paper')) {
    console.log(`${humanChoice} wins ${computerChoice}`);
    humanScore += 1;
  } else {
    console.log(`${computerChoice} wins ${humanChoice}`);
    computerScore += 1;
  }
}

function playGame() {
  for (let i = 0; i < 5; i += 1) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
}

playGame();