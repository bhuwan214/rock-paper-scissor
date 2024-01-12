
let playerScore =0
let computerScore =0
let rounderWinner =''


function playRound(playerSelection, computerSelection){

if (playerSelection === computerSelection){
    rounderWinner ="It's a tie!"

}

else if ((playerSelection ==='rock' && computerSelection ==='scissor') ||
         (playerSelection ==='scissor' && computerSelection ==='paper') ||
         (playerSelection ==='paper' && computerSelection ==='rock') 
){
    playerScore ++
    rounderWinner ='player'
}

else if ((playerSelection ==='rock' && computerSelection ==='paper') ||
         (playerSelection ==='scissor' && computerSelection ==='rock') ||
         (playerSelection ==='paper' && computerSelection ==='scissor') 
){
    computerScore++
    rounderWinner ='computer'

}
updateScoreMessage(rounderWinner, playerSelection , computerSelection)
}

function getRandomChoice(){
let randomNumber= Math.floor(Math.random()*3)
switch (randomNumber){
    case 0:
        return 'rock'
    
    case 1:
        return 'paper'

    case 2:
        return 'scissor'
}
}

function isGameOver(){
    return playerScore ===5 || computerScore ===5
}
