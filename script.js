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
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie.`);
    }

    else if((humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")){
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose.`);
        humanScore += 1;
    }

    else{
        console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
        computerScore += 1;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);