const gameState = document.querySelector('div');

const rockbtn = document.createElement('button');
rockbtn.textContent = 'ROCK';
rockbtn.setAttribute('id', 'rockbtn'); 
gameState.appendChild(rockbtn);

const paperbtn = document.createElement("button");
paperbtn.textContent = 'PAPER';
paperbtn.setAttribute('id', 'paperbtn'); 
gameState.appendChild(paperbtn);

const scissorsbtn = document.createElement("button");
scissorsbtn.textContent = 'BUTTON';
scissorsbtn.setAttribute('id', 'scissorsbtn'); 
gameState.appendChild(scissorsbtn);

const gameresult = document.querySelector('p');

let playerScore = 0;
let computerScore = 0;

document.getElementById("rockbtn").addEventListener("click",rockPlay);
document.getElementById("paperbtn").addEventListener("click",paperPlay);
document.getElementById("scissorsbtn").addEventListener("click",scissorsPlay);

function rockPlay(){
    game('rock');
}
function paperPlay(){
    game('paper');
}
function scissorsPlay(){
    game('scissors');
}

function game(playerChoice){
    let playerSelection = playerChoice;
    function getComputerChoice(){
        let x = Math.floor((Math.random() * 3) + 1);
        let computerChoice;
        if(x===1){
            computerChoice = 'rock';
        }else if(x===2){
            computerChoice='paper';
        }else{
            computerChoice='scissors';
        }
        return computerChoice;
    }
    let computerSelection = getComputerChoice();
            
    function playRound(playerSelection, computerSelection) {
        if(playerSelection==='rock' && computerSelection==='rock'){
            gameresult.textContent = 'you tie. rock and rock';
        }else if(playerSelection==='paper' && computerSelection==='paper'){
            gameresult.textContent = 'you tie. paper and paper';
        }else if(playerSelection==='scissors' && computerSelection==='scissors'){
            gameresult.textContent = 'you tie. scissors and scissors';
        }else if(playerSelection==='rock' && computerSelection==='paper'){
            computerScore++;
            gameresult.textContent = 'you lose. rock and paper' ;                       
        }else if(playerSelection==='paper' && computerSelection==='rock'){
            playerScore++;
            gameresult.textContent = 'you win. paper and rock';                       
        }else if(playerSelection==='rock' && computerSelection==='scissors'){
            playerScore++;
            gameresult.textContent = 'you win. rock and scissors';                       
        }else if(playerSelection==='scissors' && computerSelection==='rock'){
            computerScore++;
            gameresult.textContent = 'you lose. scissors and rock';                       
        }else if(playerSelection==='paper' && computerSelection==='scissors'){
            computerScore++;
            gameresult.textContent = 'you lose. paper and scissors';                      
        }else if(playerSelection==='scissors' && computerSelection==='paper'){
            playerScore++;
            gameresult.textContent = 'you win. scissors and paper';
        }
    }
    playRound(playerSelection, computerSelection);

    if(playerScore === 5){
        const youWon = document.createElement("p");
        youWon.textContent = 'YOU WON'
        gameState.appendChild(youWon);
    }
    if(computerScore === 5){
        const youLost = document.createElement("p");
        youLost.textContent = 'YOU LOST'
        gameState.appendChild(youLost);
    }

    if(playerScore  === 5 || computerScore === 5) {
        gameState.removeChild(rockbtn);
        gameState.removeChild(paperbtn);
        gameState.removeChild(scissorsbtn);
        gameresult.remove();

        const playAgain = document.createElement("p");
        playAgain.textContent = 'PLAY AGAIN';
        playAgain.setAttribute('id', 'playAgain'); 
        gameState.appendChild(playAgain);
    }

}