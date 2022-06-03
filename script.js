var playerScore = 0;
var computerScore = 0;
var roundNumber = 0;

/* Create function that will randomly return Rock Paper or Scissors*/
/* Create random number between 0 and 2 */
function computerPlay() {
    let randomInteger = Math.floor(Math.random() * 3);
    /* Assign Rock to 0, Paper to 1, and Scissors to 2 */
    var computerChoice = "none";
    if(randomInteger === 0) {
        computerChoice = "rock";
    } else if(randomInteger === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

/* Create function that loops through 5 rounds of the game */
function game(playerScore, computerScore) {
    if (computerScore >= 5 || playerScore >=5 ) {
        
        if (playerScore > computerScore) {
            return(`You win! Final score was ${playerScore} vs 
                    ${computerScore}`)

        }
        else {
            return(`You lose! Final score was ${playerScore} vs 
                    ${computerScore}`)
        }
    }
    else return("");

} 

/* Create function that compares computerPlay() vs humanPlay() and declares
a winner to the console */
function playRound(humanChoice) {
    const computerChoice = computerPlay();
    var message = ``;

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            message = "It's a Tie!";
        }
        else if (computerChoice == "paper") {
            message = "You lose! Paper beats Rock";
            computerScore++;
        }
        else if (computerChoice == "scissors") {
            message = "You win! Rock beats Scissors";
            playerScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            message = "You win! Paper beats Rock";
            playerScore++;
        }
        else if (computerChoice == "paper") {
            message = "It's a Tie!";
        }
        else if (computerChoice == "scissors") {
            message = "You lose! Scissors beats Paper";
            computerScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            message = "You lose! Rock beats Scissors";
            computerScore++;
        }
        else if (computerChoice == "paper") {
            message = "You win! Scissors beats Paper";
            playerScore++;
        }
        else if (computerChoice == "scissors") {
            message = "It's a Tie!";
        }
    }
    globalMessage = message;
    console.log(globalMessage);
    console.log(playerScore);
    console.log(computerScore);
    const finalMessage = (game(playerScore, computerScore));
    if (finalMessage != "") {
        console.log(finalMessage);
        playerScore = 0;
        computerScore = 0;
    }
}




document.querySelectorAll(`input`).forEach(playButton => {
    const buttonClass = playButton.getAttribute('class');
    playButton.addEventListener('click', () => playRound(buttonClass))
});


