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