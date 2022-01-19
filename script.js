function computerPlay() {
let rps = ["rock", "paper", "scissor"];
let randomRps = rps[Math.floor(Math.random() * rps.length)];
return randomRps
}


function playRound(playerSelection, computerSelection) {




  if (playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissor") {
      return "You Win! " + playerSelection +  " beats " + computerSelection
  } else if (computerSelection == "scissor" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "scissor") {
      return "You Lose! " + computerSelection + " beats " + playerSelection
  } else {
      return "It's a Draw!"
  }



}

const playerSelection = "scissor";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


