const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  const userChoiceOption = document.getElementById(userChoice);
  userScore += 1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML =
    userChoice + ' beats ' + computerChoice + '.<br>You win! 😎';
  userChoiceOption.classList.add('green-glow');
  setTimeout(() => userChoiceOption.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
  const userChoiceOption = document.getElementById(userChoice);
  computerScore += 1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML =
    userChoice + ' loses to ' + computerChoice + '.<br>You lost... 🙁';
  userChoiceOption.classList.add('red-glow');
  setTimeout(() => userChoiceOption.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const userChoiceOption = document.getElementById(userChoice);
  result.innerHTML =
    userChoice + ' equals to ' + computerChoice + ".<br>It's a draw. 🙄";
  userChoiceOption.classList.add('gray-glow');
  setTimeout(() => userChoiceOption.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;

    case 'scissorsrock':
    case 'paperscissors':
    case 'rockpaper':
      lose(userChoice, computerChoice);
      break;

    case 'scissorsscissors':
    case 'paperpaper':
    case 'rockrock':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  result.innerHTML = '';

  rock.addEventListener('click', () => game('rock'));

  paper.addEventListener('click', () => game('paper'));

  scissors.addEventListener('click', () => game('scissors'));
}

main();
