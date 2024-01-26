function pickComputerMover() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
}
let computerMove = "";

const pickMeMove = "Paper";
let result = "";

if (computerMove === "rock") {
  result = "You lose";
} else if (computerMove === "paper") {
  result = "You win";
} else if (computerMove === "scissors") {
  result = "You tie";
}

console.log(result);
