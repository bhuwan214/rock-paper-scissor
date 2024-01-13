let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    roundWinner = "player";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(rounderWinner, playerSelection, computerSelection);
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissor";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// Interface

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener('click', () => handleClick("paper"));
scissorBtn.addEventListener("click", () => handleClick("scissor"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore()

  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
  }
}

function updateChoices(playerSelection,computerSelection){
    switch(playerSelection){
        case 'rock':
            playerSign.textContent= '🪨'
            break
        case 'paper':
            playerSign.textContent='📄'
            break
        case 'scissor':
            playerSign.textContent='✂️'
            break
        }
        switch(computerSelection){
            case 'rock':
                computerSign.textContent= '🪨'
                break
            case 'paper':
                computerSign.textContent='📄'
                break
            case 'scissor':
                computerSign.textContent='✂️'
                break
            }
   }

   function updateScore(){
    if (roundWinner==='tie'){
        scoreInfo.textContent="It's a tie!"
    }
    else if (roundWinner==='player'){
        scoreInfo.textContent ="You won!"
    }
    else if (roundWinner ==='computer'){
        scoreInfo.textContent ="You lost !"
    }

    playerScorePara.textContent = `Player :${playerScore}`
    computerScorePara.textContent=`Computer: ${computerScore}`
    }

    function updateScoreMessage(winner, playerSelection , computerSelection)
    {
        if(winner ==='player'){
            scoreMessage.textContent =`${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`
            return
        }
        if (winner === 'computer'){
            scoreMessage.textContent =`${capitalizeFirstLetter (playerSelection) }is beaten by ${computerScore.toLowerCase()}`
            return
        }
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)}ties with ${computerSelection.toLowerCase()}`
    }

    function capitalizeFirstLetter(string){
    return string.chartAt(0).toUpperCase()+ string.slice(1).toLowerCase()
 }

 function openEndgameModal(){
    endgameModal.classList.add('active')
    overlay.classList.add("active")
 }

 function closeEndgameModal(){
    endgameModal.classList.remove('active')
    overlay.classList.remove("active")
 }

 
function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  
  function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }