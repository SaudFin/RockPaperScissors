let arrayPlay = ["ROCK", "PAPER", "SCISSORS"];
// to keep score for the player and computer for the game function
let playerScore = 0;
let computerScore = 0;
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
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "SCISSORS") {
      playerScore++;
      return "You Win, Rock beats Scissors";
    } else {
      return "Tie";
    }
  }
  //  when playerSelction is Paper
  else if (playerSelection === "PAPER") {
    if (computerSelection === "Rock") {
      playerScore++;
      return "You Win, Paper beats Rock";
    } else if (computerSelection === "SCISSORS") {
      computerScore++;
      return "You Lose! Scissors beat Paper";
    } else {
      return "Tie";
    }
  }
  //   when PlayerSelection is Scissors
  else {
    if (computerSelection === "Rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      playerScore++;
      return "You Win, Scissors beat Paper";
    } else {
      return "Tie";
    }
  }
};
const playerSelection = "rock";
// const computerSelection = computerPlay();
const game = () => {
  for (let i = 0; i < 5; i++) {
    // console.log(computerPlay());
    console.log(playRound(playerSelection, computerPlay()));
    console.log(` ${playerScore} :${computerScore}`);
  }
  if (playerScore > computerScore) {
    return "you have won the game";
  } else if (computerScore > playerScore) {
    return "you have lost the game";
  } else {
    return "it is a tie bro";
  }
};

console.log(game());
