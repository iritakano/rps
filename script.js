function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choicesIndex = Math.floor(Math.random() * choices.length);
    return choices[choicesIndex];
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors: ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice){
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie this round.`);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    else if((humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")){
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose the round.`);
        computerScore += 1;
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    else{
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win the round!`);
        humanScore += 1;
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

const buttons = querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.value;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    } );
})