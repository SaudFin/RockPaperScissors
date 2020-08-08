let arrayPlay = ["ROCK", "PAPER", "SCISSORS"];

const computerPlay = () => {
  let random = Math.floor(Math.random() * Math.floor(3));
  return arrayPlay[random];
};

// function to figure who won the round
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();

  //  when playerSelection is Rock
  if (playerSelection === "ROCK") {
    if (computerSelection === "PAPER") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "SCISSORS") {
      return "You Win, Rock beats Scissors";
    } else {
      return "Tie";
    }
  }
  //  when playerSelction is Paper
  else if (playerSelection === "PAPER") {
    if (computerSelection === "Rock") {
      return "You Win, Paper beats Rock";
    } else if (computerSelection === "SCISSORS") {
      return "You Lost! Scissors beat Paper";
    } else {
      return "Tie";
    }
  }
  //   when PlayerSelection is Scissors
  else {
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      return "You Win, Scissors beat Paper";
    } else {
      return "Tie";
    }
  }
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
