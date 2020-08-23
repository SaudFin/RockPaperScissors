let arrayPlay = ["ROCK", "PAPER", "SCISSORS"];
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

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
// to get the player selection from the user clicks on the buttons
// const playerSelection = () => {
//   if (rock.onclick) {
//     return "ROCK";
//   }
//   if (paper.onclick) {
//     return "PAPER";
//   }
//   if (scissors.onclick) {
//     return "scissors";
//   }
// };
const game = playerSelection => {
  // for (let i = 0; i < 5; i++) {
  // below line is changed because we will be taking the player selection from his click on the button
  // let playerSelection = window.prompt();
  // let playerSelection = console.log(
  playRound(playerSelection, computerPlay());
  // );
  console.log(` ${playerScore} :${computerScore}`);
  // }
  if (playerScore > computerScore) {
    return "you have won the game";
  } else if (computerScore > playerScore) {
    return "you have lost the game";
  } else {
    return "it is a tie bro";
  }
};

rock.addEventListener("click", function() {
  game("ROCK");
});

paper.addEventListener("click", function() {
  game("PAPER");
});

scissors.addEventListener("click", function() {
  game("SCISSORS");
});
