const COMPUTER_POSSIBILITIES = ["Rock","Paper","Scissors"] ;
let computerSelection ;

// ****** Function to generate computer pick ******
function getComputerChoice () {
    return COMPUTER_POSSIBILITIES[Math.floor(Math.random()*
        (COMPUTER_POSSIBILITIES.length))] ;
    }



// ****** Getting play pick using the buttons ******
let playerSelection ; 
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
// console.log(scissorsButton);  //test## make sure button are assigned to variables

rockButton.addEventListener('click', ()=> { 
return playerSelection="Rock" ;})

paperButton.addEventListener('click', ()=> { 
return playerSelection="Paper" ;})

scissorsButton.addEventListener('click', ()=> { 
return playerSelection="Scissors" ;})






// ****** Play button function ******
let playButton = document.querySelector("#play-button");
let resultSpace = document.querySelector('#decalre-result') ;
let declarePlayerPick = document.querySelector('#decaler-player-pick') ;
let declareComputerPick = document.querySelector('#decaler-computer-pick') ;

    // test## activate the 2 line below,pick your hand and press play to test me
    // console.log("You selected "+playerSelection);
    // console.log("computer selected "+computerSelection);


playButton.addEventListener('click',() => {
if (playerSelection===undefined){
    alert("Kindly choose your hand then press play to avoid Undefined appearing as your pick");
    
}

    //generate random computer choice everytime play button is clicked
    computerSelection = getComputerChoice () ;

    //declare picks section (so the player can see what was picked) 
    declarePlayerPick.innerHTML=`${playerSelection}`;
    declareComputerPick.innerHTML=`${computerSelection}`;



    
    // we have 7 total cases 

    // Draw case document.querySelector('#decalre-reult') ;
    if (computerSelection === playerSelection) {
        resultSpace.innerHTML=`Draw , 
        computer also picked ${computerSelection}`
    }

    // picks are different - computer chose Rock
    if (computerSelection === "Rock") {

        switch (playerSelection) {

            case "Paper":
            resultSpace.innerHTML=`Victory! Player's Paper beats computer's Rock`;
            break

            case "Scissors":
            resultSpace.innerHTML=`Defeat! Player's Scissors loses to computer's Rock`;
            break

        }
    }

    // picks are different - computer chose Paper
    if (computerSelection === "Paper") {

        switch (playerSelection) {

            case "Rock":
            resultSpace.innerHTML=`Defeat! Player's Rock loses to computer's Paper`;
            break

            case "Scissors":
            resultSpace.innerHTML=`Victory! Player's Scissors beats computer's Rock`;
            break
        }
    }

    // picks are different - computer chose Scissors
    if (computerSelection === "Scissors") {

        switch (playerSelection) {

            case "Rock":
            resultSpace.innerHTML=`Victory! Player's Rock beats computer's Scissors`;
            break

            case "Paper":
            resultSpace.innerHTML=`Defeat! Player's Paper loses to computer's Scissors`;
            break

        }
    }
})

// ****** Best out of 5 Score tracker ******
winOrLoseMsg = document.querySelector(`#win-or-lose`) ;
let playerScore= 0;
let computerScore= 0;


if (computerSelection === "Rock") {
    if (playerSelection === "Paper") {++playerScore ;}
    else if (playerSelection === "Scissors") {++computerScore}
}
document.querySelector(`#player-score`).innerHTML=`  ${playerScore}`;
document.querySelector(`#computer-score`).innerHTML=`  ${computerScore}`;


