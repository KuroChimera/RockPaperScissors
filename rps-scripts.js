//Player choice 

const playerChoice = () => {
  const playerChoice = prompt("Enter you weapon choice (Rock, Paper, or Scissors)", "").toLowerCase();
  if (playerChoice = "rock") {
    return playerChoice
  }
  if (playerChoice = "paper") {
    return playerChoice
  }
  if (playerChoice = "scissors") {
    return playerChoice
  }
}

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