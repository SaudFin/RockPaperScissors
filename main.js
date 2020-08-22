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
  // the below line is commented because we will be putting value in the elements
  // playerSelection = playerSelection.toUpperCase();

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
    if (computerSelection === "ROCK") {
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
    if (computerSelection === "ROCK") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "PAPER") {
      playerScore++;
      return "You Win, Scissors beat Paper";
    } else {
      return "Tie";
    }
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    // below line is changed because we will be taking the player selection from his click on the button
    // let playerSelection = window.prompt();

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
