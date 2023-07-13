let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";
let statusDisplay = document.getElementById("status-head");
statusDisplay.textContent = 'Choose!!';
let moveDisplay = document.querySelector(".move-display");
let rockButton = document.getElementById("rock-button");
rockButton.textContent = "Rock";
let paperButton = document.getElementById("paper-button");
paperButton.textContent = "Paper";
let scissorButton = document.getElementById("scissors-button");
scissorButton.textContent = "Scissors";


let moveList = ['Rock', 'Paper', 'Scissors'];


function startGame(playerchoice){
    const computerChoice = moveList[Math.floor(Math.random() * moveList.length)];

    moveDisplay.children[0].textContent = `Player : ${playerchoice}`;
    moveDisplay.children[1].textContent = `Computer: ${computerChoice}`;

    const result  = calResult(playerchoice, computerChoice);

    statusDisplay.textContent = result;

    if (result === winMsg || result === loseMsg || result === tieMsg) {
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorButton.textContent = 'Play Again';
        scissorButton.addEventListener('click', resetGame);
    }

}

function calResult(move1, move2){
    if(move1 === move2){
        return tieMsg;
    }else if((move1 === moveList[0] && move2 === moveList[2]) ||
    (move1 === moveList[1] && move2 === moveList[0]) ||
    (move1 === moveList[2] && move2 === moveList[1])){
        return winMsg;
    }else{
        return loseMsg;
    }

}

function resetGame() {
    rockButton.style.display = 'inline-block';
    paperButton.style.display = 'inline-block';
    scissorButton.textContent = 'Scissors';
    statusDisplay.textContent = 'Choose!!';
    moveDisplay.children[0].textContent = '';
    moveDisplay.children[1].textContent = '';
    scissorButton.removeEventListener('click', resetGame);
}


rockButton.addEventListener('click', () => startGame(moveList[0]));
paperButton.addEventListener('click', () => startGame(moveList[1]));
scissorButton.addEventListener('click', ()=> startGame(moveList[2]));