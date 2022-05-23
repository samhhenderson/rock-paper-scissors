
/* Create function that will randomly return Rock Paper or Scissors*/
/* Create random number between 0 and 2 */
function computerPlay() {
let randomInteger = Math.floor(Math.random() * 3);
/* Assign Rock to 0, Paper to 1, and Scissors to 2 */
var computerChoice = "None";
if(randomInteger === 0) {
    computerChoice = "Rock";
} else if(randomInteger === 1) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";

}
console.log(computerChoice);
return computerChoice;
}

computerPlay();