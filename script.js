const body = document.querySelector('body');
const rockChoice = document.createElement('button');
const img1 = document.createElement('img');
img1.src = 'roca.png';
rockChoice.appendChild(img1);
body.appendChild(rockChoice);

const paperChoice = document.createElement('button');
const img2 = document.createElement('img');
img2.src = 'papel-arrugado.png';
paperChoice.appendChild(img2);
body.appendChild(paperChoice);

const scissorChoice = document.createElement('button');
const img3 = document.createElement('img');
img3.src = 'tijeras.png';
scissorChoice.appendChild(img3);
body.appendChild(scissorChoice);

const options = ['paper', 'rock', 'scissor'];
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log(`Computer Choice: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  
}

getHumanChoice();

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

playGame();