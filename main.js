const computerPlay = () => {
  let arrayPlay = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * Math.floor(3));
  return arrayPlay[random];
};

console.log(computerPlay());
