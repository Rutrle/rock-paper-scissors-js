let computerScore = 0
let playerScore = 0


function getComputerChoice(){
    const choices =["rock", "paper", "scissor"];
    let selected_choice = choices[ Math.floor(Math.random()*3)];

    return selected_choice
}



function playRound(playerSelection){
    let computerSelection  = getComputerChoice();

    let winner = null;

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            winner = "computer";
        }   else if (computerSelection == "scissors"){
            winner = "player";
        }   
    }   else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
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
    const resultDisplay = document.querySelector("#results-display") 

    if (winner == null){
        resultDisplay.innerHTML = "Tie! play round again"

        //winner = playRound();
    }   else if (winner == "computer"){
        resultDisplay.innerText = `Computer won with ${computerSelection}!`
        computerScore +=1
    }   else    {
        resultDisplay.innerText = `Player won with ${playerSelection}!`
        playerScore +=1
    }
    const scoreDisplay = document.querySelector("#score")

    scoreDisplay.innerText = `Player score ${playerScore} Computer score ${computerScore}!`

    if (playerScore == 5){
        scoreDisplay.innerText ="Player won!"

    } else if (computerScore == 5) {
        scoreDisplay.innerText ="Computer won!"
    }
    return winner
}

//////////////////////////////////////////// game()

const buttons  = document.querySelectorAll(".btn")
buttons.forEach(function(button){
    button.addEventListener("click", () => {playRound(button.id)})
})
