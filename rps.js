function getComputerChoice() {
    let random_n = Math.floor(Math.random()*3);
    if (random_n === 0) return "Rock";
    else if (random_n === 1) return "Sissors";
    else return "Paper";

}

function toUpper_firstletter(mystring) {
    let lowercase = mystring.toLowerCase();
    let thestring = mystring.charAt(0).toUpperCase() + lowercase.slice(1);
    return thestring;
}

function playRound(playerSelection, computerSelection) {
    let playerS = toUpper_firstletter(playerSelection);
    if (playerS === computerSelection) return "tie!";
    
    if (playerS === "Rock") {
        if (computerSelection === "Sissors") return "You Win! Rock beats Sissors";
        else return "You Lose! Paper beats Rock";
    }

    if (playerS === "Paper") {
        if (computerSelection === "Sissors") return "You Lose! Sissors beats Paper";
        else return "You Win! Paper beats Rock";

    }

    if (playerS === "Sissors") {
        if (computerSelection === "Rock") return "You Lose! Rock beats Sissors";
        else return "You Win! Sissors beats paper";
    }

}

function play() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5;) {
        let pChoice = prompt("What's your choice?");
        let result = playRound(pChoice, getComputerChoice());
        console.log(result);
        if (result.includes("tie")) continue;
        else if (result.includes("You Win")) {
            playerScore++;
        } else {
            computerScore++;
        }

        i++;
    }

    console.log("Game Over!");
    console.log(playerScore > computerScore ? "You Win!" : "You Lose!");
    

}

play();