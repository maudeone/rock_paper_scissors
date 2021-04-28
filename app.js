let playerScore = 0;
    let compScore = 0;  

    function computerPlay() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
    }
  
    function playRound(playerChoice, compChoice) {
    playerChoice = prompt("Rock, Paper, or Scissor", "Rock");
    console.log("You choose ", playerChoice);
    compChoice = computerPlay();
    console.log("Computer choose ", compChoice);  
    if (playerChoice == compChoice) {
      playerScore = playerScore;
      compScore = compScore;
      console.log("Tie!", playerScore, compScore);
   
    } else if (
      (playerChoice == "Rock" && compChoice == "Scissor") || (playerChoice == "Paper" && compChoice == "Rock") || (playerChoice == "Scissor" && compChoice == "Paper")
      ) {   
        playerScore = ++playerScore;
        console.log("You win round", playerScore, compScore);
        
    
    } else if (
      (playerChoice == "Rock" && compChoice == "Paper") || (playerChoice == "Paper" && compChoice == "Scissor") || (playerChoice == "Scissor" && compChoice == "Rock")
      ) {
        compScore = ++compScore;
        console.log("You lose round ", playerScore, compScore);   
          
    }
    gameCheck();
    }
    function gameCheck() {
    if (compScore < 5 && playerScore < 5) {
      playRound();

    } else if (playerScore == 5) {
      console.log('You win!');

    } else if (compScore == 5) {
      console.log('Computer wins.');
    }
    }
    console.log(gameCheck());