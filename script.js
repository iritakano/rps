function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choicesIndex = Math.floor(Math.random() * choices.length);
    return choices[choicesIndex];
}

function disableButtons(){
    buttons.forEach(button => {
        button.disabled = true;
    })
}

let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("results");
const gameResult = document.createElement("p");

function playRound(humanChoice, computerChoice){
    result.innerHTML = "";
    const roundResult = document.createElement("p");
    const playerScore = document.createElement("p");
    const compScore = document.createElement("p");

    if (humanChoice == computerChoice){
        roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie this round.`;

        playerScore.textContent = `Your score: ${humanScore}`;

        compScore.textContent = `Computer score: ${computerScore}`;
    }

    else if((humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")){
        roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You lose the round.`;

        computerScore += 1;

        playerScore.textContent = `Your score: ${humanScore}`;
        compScore.textContent = `Computer score: ${computerScore}`
    }

    else{
        roundResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win the round!`
    
        humanScore += 1;

        playerScore.textContent = `Your score: ${humanScore}`;
        compScore.textContent = `Computer score: ${computerScore}`;
    }

    result.appendChild(roundResult);
    result.appendChild(playerScore);
    result.appendChild(compScore);

    if (computerScore == 5){
            gameResult.textContent = "You lose the game :("
            result.appendChild(gameResult);
            disableButtons();
    }

    if(humanScore == 5){
            gameResult.textContent = "You win the game!";
            result.appendChild(gameResult);
            disableButtons();
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.value;
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    } );
})