function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choicesIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[choicesIndex];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors: ");
}

let humanScore = 0;
let computerScore = 0;

