let arrayPlay = ["ROCK", "PAPER", "SCISSORS"];
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let computerScoreDisplay = document.getElementById("computerScore");
let playerScoreDisplay = document.getElementById("playerScore");
// to keep track of the rounds
let round = 0;
// to keep score for the player and computer for the game function
let playerScore = 0;
let computerScore = 0;
const computerPlay = () => {
  let random = Math.floor(Math.random() * Math.floor(3));
  return arrayPlay[random];
};

// function to figure who won the round
const playRound = (playerSelection, computerSelection) => {
  //  when playerSelection is Rock
  if (playerSelection === "ROCK") {
    if (computerSelection === "PAPER") {
      computerScore++;
    } else if (computerSelection === "SCISSORS") {
      playerScore++;
    } else {
      console.log("Tie");
    }
  }
  //  when playerSelction is Paper
  else if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      playerScore++;
    } else if (computerSelection === "SCISSORS") {
      computerScore++;
    } else {
      console.log("Tie");
    }
  }
  //   when PlayerSelection is Scissors
  else {
    if (computerSelection === "ROCK") {
      computerScore++;
    } else if (computerSelection === "PAPER") {
      playerScore++;
    } else {
      console.log("Tie");
    }
  }
  computerScoreDisplay.innerHTML = computerScore;
  playerScoreDisplay.innerHTML = playerScore;
};
// to check who won the five rounds
const gameWinner = (playerScore, computerScore) => {
  computerScoreDisplay.innerHTML = computerScore;
  playerScoreDisplay.innerHTML = playerScore;
  setTimeout(function() {
    if (playerScore > computerScore) {
      alert("you have won the game");
    } else if (computerScore > playerScore) {
      alert("you have lost the game");
    } else {
      alert("it is a tie bro");
    }
  }, 200);
};
const game = playerSelection => {
  round++;
  console.log(round);
  playRound(playerSelection, computerPlay());
  console.log(` ${playerScore} :${computerScore}`);

  if (round === 5) {
    round = 0;
    gameWinner(playerScore, computerScore);
    setTimeout(function() {
      playerScore = 0;
      computerScore = 0;
      computerScoreDisplay.innerHTML = computerScore;
      playerScoreDisplay.innerHTML = playerScore;
    }, 500);
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
