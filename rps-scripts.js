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