//Computer choice

const getComputerChoice = () => {
  const randomChoice =  Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  }
  if (randomChoice === 1) {
    return "paper";
  }
  if (randomChoice === 2) {
    return "scissors";
  }
}

//Game round

function gameRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } 
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//Gameplay loop

function game() {
  for (let i = 0; i < 4; i++) {
    const playerSelection = prompt("Pick you weapon! Rock, Paper, or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    let roundResult = gameRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Player score is " + playerScore);
    console.log("Computer score is" + computerScore);
    if (playerScore === 5 || computerScore === 5) {
      break;
    }
  }
}