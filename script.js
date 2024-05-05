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
const restart = document.createElement('button');
const dialog = document.createElement('div');

restart.textContent = 'Restart game';
title.textContent = 'Choose an option';
resultsContainer.classList.add('results');
buttonsContainer.classList.add('buttons');
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
body.appendChild(dialog);
body.appendChild(resultsContainer);
body.appendChild(restart);

const options = ['paper', 'rock', 'scissor'];
let humanScore = 0;
let computerScore = 0;
let result;
let winner;

function win(hs, cs) {
  if (humanScore < computerScore) {
    winner = `Computer wins ${cs} to ${hs}`;
  } else if (humanScore > computerScore) {
    winner = `You win ${hs} to ${cs}`;
  } else {
    winner = 'It\'s a tie';
  }
}

function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  scores.innerHTML = `Your Score = ${humanScore} <br> Computer Score = ${computerScore} <br>`;
  results.innerHTML = 'You Choice:  <br> Computer Choice:  <br> Result: <br>';
}

function gameOver(hscore, cscore) {
  win(hscore, cscore);
  dialog.textContent = winner;
  results.textContent = '';
  restartGame();
}

function playRound(humanChoice, computerChoice) {
  dialog.textContent = '';
  if ((humanChoice === 'paper' && computerChoice === 'paper')
  || (humanChoice === 'rock' && computerChoice === 'rock')
|| (humanChoice === 'scissor' && computerChoice === 'scissor')) {
    result = 'It\'s a tie';
  } else if ((humanChoice === 'paper' && computerChoice === 'rock')
|| (humanChoice === 'rock' && computerChoice === 'scissor')
|| (humanChoice === 'scissor' && computerChoice === 'paper')) {
    result = `${humanChoice} wins ${computerChoice}`;
    humanScore += 1;
  } else if ((computerChoice === 'paper' && humanChoice === 'rock')
  || (computerChoice === 'rock' && humanChoice === 'scissor')
  || (computerChoice === 'scissor' && humanChoice === 'paper')) {
    result = ` ${computerChoice} wins ${humanChoice}`;
    computerScore += 1;
  }
  results.innerHTML = `You Choice: ${humanChoice} <br> Computer Choice: ${computerChoice} <br> Result: ${result} <br>`;
  scores.innerHTML = `Your Score = ${humanScore} <br> Computer Score = ${computerScore} <br>`;
  if (humanScore === 5 || computerScore === 5) {
    gameOver(humanScore, computerScore);
  }
}

function getHumanChoice() {
  rockChoice.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
  });
  paperChoice.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
  });
  scissorChoice.addEventListener('click', () => {
    playRound('scissor', getComputerChoice());
  });
}

getHumanChoice();

restart.addEventListener('click', () => {
  restartGame();
  dialog.textContent = '';
});
scores.innerHTML = `Your Score = ${humanScore} <br> Computer Score = ${computerScore} <br>`;
results.innerHTML = 'You Choice:  <br> Computer Choice:  <br> Result: <br>';
