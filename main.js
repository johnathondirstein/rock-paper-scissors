const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
   const choice = options[random()];
   console.log(choice);
}

getComputerChoice();

function random() {
 return Math.floor(Math.random() * options.length);
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  