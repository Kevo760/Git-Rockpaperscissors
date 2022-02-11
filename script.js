function play() {

// Player and Comp area
let ptext = document.getElementById('ptext');
let ctext = document.getElementById('ctext');
const playerIcon = document.querySelector('.player-icon');
const compIcon = document.querySelector('.computer-icon');
const roundResult = document.querySelector('.round-result');

// buttons
const startButton = document.querySelector('.start-btn');
const restartButton = document.querySelector('.restart-btn');


// button and restart section
const selectSection = document.querySelector('.select');
const restartSection = document.querySelector('.restart');

/// Fade in and Out Effect
const fadeIn = document.querySelector('.fade-in');
const fadeOut = document.querySelector('.fade-out');

let playerPoints = 0;
let computerPoints = 0;
let playerSelection = "";


// Start game click event
startButton.addEventListener("click", function(){
fadeOut.style.display = "none";
fadeIn.style.display = "block";
})



// RPS buttons click event
const select = document.querySelectorAll('.select button');
select.forEach(select => {
    select.addEventListener("click", function(){
        // function for random selection for computer
        let rps = ["rock", "paper", "scissors"];
        let computerPlay = rps[Math.floor(Math.random() * rps.length)];

        // pass this value when clicked to player selection
       playerSelection = this.value;
       playRound(playerSelection, computerPlay);

       //update icon when player/comp selects RPS
       playerIcon.src = `./Images/${this.value}.png`;
       compIcon.src = `./Images/${computerPlay}.png`;
       
       //update score via java text
       ptext.innerText = playerPoints;
       ctext.innerText = computerPoints;
       winner();
    })
});







// function to play a round
function playRound(playerSelection, computerSelection) {

  if (playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors") {
    roundResult.textContent = "You won this round!";
    roundResult.style.color = "green";
    playerPoints++;
  } else if (computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "scissors") {
    roundResult.textContent = "You lost this round!" ;
    roundResult.style.color = "red";
    computerPoints++;
  } else {
      roundResult.textContent = "It's Draw, try again";
      roundResult.style.color = "white";
  }
};

// first to hit 5 points win!
function winner() {
    if(playerPoints === 5) {
        roundResult.textContent = "GG! You won the game!";
        roundResult.style.color = "hsl(48, 100%, 50%)";
        selectSection.style.display = "none";
        restartSection.style.display = "block";
    } else if (computerPoints === 5) {
        roundResult.textContent = "Defeated! Try again.";
        roundResult.style.color = "red";
        selectSection.style.display = "none";
        restartSection.style.display = "block";
    } else {
        return
    }
};


// Play again one you reach 5 points and resets score
restartButton.addEventListener("click", function(){
    restartSection.style.display = "none";
    selectSection.style.display = "block";
    playerPoints = 0;
    computerPoints = 0;
    ptext.innerText = playerPoints;
    ctext.innerText = computerPoints;
    roundResult.textContent = "";
});


};

play();




