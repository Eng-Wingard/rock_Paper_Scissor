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

let humanScore =0;
let computerScore = 0;

function playGame(humanChoice,computerChoice){

if(humanChoice === computerChoice){
    return "its atie";
} 
    else if (computerChoice === 'paper' && humanChoice === 'rock'){
      computerScore++;
      return "You loose,paper beats rock";
    
       
    }
    else if (computerChoice === 'paper' && humanChoice === 'scissor'){
      humanScore++;
        return "You win,scissor beats rock";
      
  
      }
      else if (computerChoice === 'scissor' && humanChoice === 'paper'){
        computerScore++;
        return "you lose,scissor beats rock";
      
      }

      else if (computerChoice === 'scissor' && humanChoice === 'rock'){
        humanScore++;
        return " you win,scissor beats rock" ;
       
  
      }
      else if (computerChoice === 'rock' && humanChoice === 'paper'){
        humanScore++;
        return "you win,paper beats rock";
      
  
      }

      else if (computerChoice === 'rock' && humanChoice === 'scissor'){
        computerScore++;
        return "you lose,scissor beats rock";
     
  
      } else
      
      { return "Error occured";

      }
     
}

console.log(playGame(getHumanChoice(), getComputerChoice ()));

console.log(`computerScore:${computerScore}, YOU:${humanScore}`);



