let playerScore = 0;
let compScore = 0;

//naming user buttons to add event listeners
const optionBtn = document.querySelectorAll('.optionBtn');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#compScore');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',() => location.reload());
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

function getPlayerChoice(e) {
  playerChoice = e.target.textContent;
  playRound(playerChoice, );
}

    function computerPlay() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
    }
  
    function playRound(playerChoice, compChoice) {
    console.log("You choose ", playerChoice);
    compChoice = computerPlay();
    console.log("Computer choose ", compChoice);  
    if (playerChoice == compChoice) {
      playerScore = playerScore;
      compScore = compScore;
      console.log("Tie!", playerScore, compScore);
      playerPoints.textContent = playerScore;
      computerPoints.textContent = compScore;
      roundResults.textContent = "Tied this round!";

   
    } else if (
      (playerChoice == "Rock" && compChoice == "Scissor") || (playerChoice == "Paper" && compChoice == "Rock") || (playerChoice == "Scissor" && compChoice == "Paper")
      ) {   
        playerScore = ++playerScore;
        console.log("You win round", playerScore, compScore);
        playerPoints.textContent = playerScore;
        roundResults.textContent = "You Win round!";
    
    } else if (
      (playerChoice == "Rock" && compChoice == "Paper") || (playerChoice == "Paper" && compChoice == "Scissor") || (playerChoice == "Scissor" && compChoice == "Rock")
      ) {
        compScore = ++compScore;
        console.log("You lose round ", playerScore, compScore);   
        computerPoints.textContent = compScore;
        roundResults.textContent = "You Lose round!";  
    }
    gameCheck();
    }
function gameCheck() {
  if (compScore < 5 && playerScore < 5) {

  } else if (playerScore >= 5) {
    console.log('You win Game!');
    roundResults.textContent = "You Win Game!";  
    optionBtn.forEach(button => { button.removeEventListener('click', getPlayerChoice);
  });

  } else if (compScore >= 5) {
    console.log('Computer wins Game.');
    roundResults.textContent = "You Lose Game!";  
    optionBtn.forEach(button => { button.removeEventListener('click', getPlayerChoice);
  });
  }
}