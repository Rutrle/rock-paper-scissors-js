function getComputerChoice(){
    const choices =["rock", "paper", "scissor"];
    let selected_choice = choices[ Math.floor(Math.random()*3)];

    return selected_choice
}

function playRound(){
    let computerSelection  = getComputerChoice();
    let playerSelection = prompt("What is your move?").toLowerCase();

    const legalChoices =["rock", "paper", "scissor"];
    if (!legalChoices.includes(playerSelection)){
        alert("Wrong selection, you have to choose rock, paper or scissor, try again")
        return playRound()
    }

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
}

function game(){
    let round_result = null
    let playerWins, computerWins = 0
    for (let i=0; i<5; i++){
        console.log(i)
       round_result = playRound();
       if (round_result=="player"){
            ++playerWins
       } else {
            ++computerWins
       }
    }

    if (playerWins>computerWins){
        alert(`Player won with ${playerWins} wins!`)
    }   else{
        alert(`Computer won with ${computerWins} wins!`)
    }

    
}

game()