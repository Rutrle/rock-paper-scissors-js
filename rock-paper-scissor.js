function getComputerChoice(){
    const choices =["rock", "paper", "scissor"];
    let selected_choice = choices[ Math.floor(Math.random()*3)];

    return selected_choice
}

function playRound(){
    let computerSelection  = getComputerChoice();
    let playerSelection = prompt("What is your move?").toLowerCase();

    let winner = null;

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            winner = "computer";
        }   else if (computerSelection == "scissor"){
            winner = "player";
        }   
    }   else if (playerSelection == "paper"){
        if (computerSelection == "scissor"){
            winner = "computer";
        }   else if (computerSelection == "rock"){
            winner = "player";
        }
    }   else {
        if (computerSelection == "rock"){
            winner = "computer";
        }   else if (computerSelection == "paper"){
            winner = "player";
        }
    }

    if (winner == null){
        alert("Tie! play round again");
        winner = playRound();
    }   else if (winner == "computer"){
        alert(`Computer won with ${computerSelection}!`);
    }   else    {
        alert(`Player won with ${playerSelection}!`);
    }


    return winner

    console.log(playerSelection)
}

console.log(getComputerChoice());
playRound();