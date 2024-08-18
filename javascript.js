function getComputerChoice () {

let randomNumber = Math.round(Math.random()* 3);

//switch case statement to return either rock or scissor or paper
switch(randomNumber){
case 0:
return 'paper';
break;

case 1:
return 'rock';
break;

case 2:
return 'scissor';

} 

}


//userInput

function getHumanChoice() {
    /*let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
*/
userInput="rock";
    while (true) {
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        } else {
            /*userInput = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors':").toLowerCase(); */
        }
    }
}


function playGame(humanChoice,computerChoice){
humanChoice.toLowerCase();
if(humanChoice === computerChoice){
    return "its atie"
} else return 'computer wins';
    
}
console.log(playGame(getHumanChoice(), getComputerChoice ()));
