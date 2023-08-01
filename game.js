

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
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
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock."
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors."
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock."
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper."
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors."
    }
    else if  (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper."
    }
    else if (playerSelection == computerSelection) {
        return "Tie!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper or Scissors.");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}
game()



    
