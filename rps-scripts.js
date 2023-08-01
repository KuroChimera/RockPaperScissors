let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

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
    tieScore++;
    return `It's a tie! You both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } 
}

//Gameplay loop

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Pick you weapon! Rock, Paper, or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    let roundResult = gameRound(playerSelection, computerSelection);
    console.log(roundResult);
    console.log("Player score is " + playerScore);
    console.log("Computer score is " + computerScore);
    console.log("Tie score is " + tieScore);
  }
}

// Declare winner

function declareWinner() {
  if (playerScore > computerScore) {
    return ("You win the game!");
  } else {
    return ("Computer wins the game!"); 
  }
}