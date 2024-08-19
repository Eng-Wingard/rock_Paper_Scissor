function getComputerChoice () {
let randomNumber = Math.floor(Math.random()* 3);
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
  let userInput = prompt("Enter your choice (rock, paper, or scissors):");
        
    while (true) {
      if (userInput === null) {
        // Handle null input here, for example, return null or a default value
        return null;
      }
  
      userInput = userInput.toLowerCase();

        if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
            return userInput;

        } else {
           userInput = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissor':");
        }
    }
  
}



function playGame (){
  let humanScore =0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  
  if(humanChoice === computerChoice){
    return "its atie";
} 
    else if( (computerChoice === 'paper' && humanChoice === 'rock') 
      || (computerChoice === 'scissor' && humanChoice === 'paper')
       || (computerChoice === 'rock' && humanChoice === 'scissor')){

        computerScore++
      return `you lose,${computerChoice} beats ${humanChoice}`;
    
    }
     else
      
      { 
         humanScore++;
      return `you win,${computerChoice} beats ${humanChoice}`; 

      }

}

for(let i =0; i<5; i++){
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  console.log(playRound(humanSelection, computerSelection));
  }
  console.log(`computerScore:${computerScore},You:${humanScore}`);
if(humanScore>computerScore){
  console.log("you win the game");
}

else if (computerScore>humanScore){

  console.log("You loose the game");
}
else {
  console.log("its atie game");
}


}
console.log(playGame());



