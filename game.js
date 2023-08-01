

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
     switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
     }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase === "rock" && computerSelection.toLowerCase === "paper") {
        return "You lose! Paper beats Rock."
    }
    else if (playerSelection.toLowerCase === "rock" && computerSelection.toLowerCase === "scissors") {
        return "You win! Rock beats Scissors."
    }
    else if (playerSelection.toLowerCase === "paper" && computerSelection.toLowerCase === "rock") {
        return "You win! Paper beats Rock."
    }
    else if (playerSelection.toLowerCase === "paper" && computerSelection.toLowerCase === "scissors") {
        return "You lose! Scissors beats Paper."
    }
    else if (playerSelection.toLowerCase === "scissors" && computerSelection.toLowerCase === "rock") {
        return "You lose! Rock beats Scissors."
    }
    else if  (playerSelection.toLowerCase === "scissors" && computerSelection.toLowerCase === "paper") {
        return "You win! Scissors beats paper."
    }
    else (playerSelection.toLowerCase === computerSelection.toLowerCase) {
        return "Tie!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper or Scissors");
        let computerSelection = getComputerChoice
    }
}


console.log(getComputerChoice(2));

    
