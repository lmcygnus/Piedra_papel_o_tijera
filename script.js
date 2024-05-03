const body = document.querySelector('body');
const title = document.createElement('h1');
const buttonsContainer = document.createElement('div');
const resultsContainer = document.createElement('div');
const scores = document.createElement('div');
const results = document.createElement('div');
const rockChoice = document.createElement('button');
const paperChoice = document.createElement('button');
const scissorChoice = document.createElement('button');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
title.textContent = 'Choose an option';
img1.src = 'roca.png';
img2.src = 'papel-arrugado.png';
img3.src = 'tijeras.png';
rockChoice.appendChild(img1);
paperChoice.appendChild(img2);
scissorChoice.appendChild(img3);
buttonsContainer.appendChild(rockChoice);
buttonsContainer.appendChild(paperChoice);
buttonsContainer.appendChild(scissorChoice);
resultsContainer.appendChild(scores);
resultsContainer.appendChild(results);
body.appendChild(title);
body.appendChild(buttonsContainer);
body.appendChild(resultsContainer);

const options = ['paper', 'rock', 'scissor'];

function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log(`Computer Choice: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice;
  rockChoice.addEventListener('click', () => {
    humanChoice = 'rock';
  });
  paperChoice.addEventListener('click', () => {
    humanChoice = 'paper';
  });
  scissorChoice.addEventListener('click', () => {
    humanChoice = 'scissor';
  });
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  scores.textContent = `Your Score = ${humanScore}`;
  if ((humanChoice === 'paper' && computerChoice === 'paper')
    || (humanChoice === 'rock' && computerChoice === 'rock')
    || (humanChoice === 'scissor' && computerChoice === 'scissor')) {
    results.textContent = "It's a tie";
  } else if ((humanChoice === 'paper' && computerChoice === 'rock')
    || (humanChoice === 'rock' && computerChoice === 'scissor')
    || (humanChoice === 'scissor' && computerChoice === 'paper')) {
    results.textContent = `${humanChoice} wins ${computerChoice}`;
    humanScore += 1;
  } else {
    results.textContent = `${computerChoice} wins ${humanChoice}`;
    computerScore += 1;
  }
}
