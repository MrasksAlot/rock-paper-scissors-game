// ****** 1) General Variables deceleration ******

const COMPUTER_POSSIBILITIES = ["Rock","Paper","Scissors"] ;
let computerSelection ;

let playButton = document.querySelector("#play-button");
let resultSpace = document.querySelector('#decalre-result') ;
let declarePlayerPick = document.querySelector('#decaler-player-pick') ;
let declareComputerPick = document.querySelector('#decaler-computer-pick') ;
    // test## activate the 2 line below,pick your hand and press play to test me
    // console.log("You selected "+playerSelection);
    // console.log("computer selected "+computerSelection);

winOrLoseMsg = document.querySelector(`#win-or-lose`) ;

let playerSelection ; 
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
    // console.log(scissorsButton);  //test## make sure button are assigned to variables

let playerScore= 0;
let computerScore= 0;

playerScoreValue= document.querySelector(`#player-score`) ;
computerScoreValue= document.querySelector(`#computer-score`) ;

// ******End of Variables deceleration ******





// ****** 2) The Function to generate computer pick ******

function getComputerChoice () {
    return COMPUTER_POSSIBILITIES[Math.floor(Math.random()*
        (COMPUTER_POSSIBILITIES.length))] ;
    }

// ****** End of the Function to generate computer pick ******





// ****** 3) Getting player pick using the buttons ******

rockButton.addEventListener('click', ()=> { 
return playerSelection="Rock" ;})

paperButton.addEventListener('click', ()=> { 
return playerSelection="Paper" ;})

scissorsButton.addEventListener('click', ()=> { 
return playerSelection="Scissors" ;})

// ****** End of Getting play pick using the buttons ******





// ****** 4) Play button event (What happens when you press play) ******

playButton.addEventListener('click',() => {

    
    while (playerSelection===undefined){
    alert("Kindly choose your hand then press play to avoid Undefined appearing as your pick");
    
    playerSelection = "Still waiting for you to choose "
    computerSelection = "Computer won't play alone!, pick a hand"
        //declare picks section (in case of player not choosing) 
        declarePlayerPick.innerHTML=`${playerSelection}`;
        declareComputerPick.innerHTML=`${computerSelection}`;
    return

}

    //generate random computer choice everytime play button is clicked
    computerSelection = getComputerChoice () ;

    // we have 7 total cases 

    // Draw case document.querySelector('#decalre-reult') ;
    if (computerSelection === playerSelection) {
        resultSpace.innerHTML=`Draw , 
        computer also picked ${computerSelection}`
    }

    // picks are different - computer chose Rock
    else if (computerSelection === "Rock") {

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
    else if (computerSelection === "Paper") {

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
    else if (computerSelection === "Scissors") {

        switch (playerSelection) {

            case "Rock":
            resultSpace.innerHTML=`Victory! Player's Rock beats computer's Scissors`;
            break

            case "Paper":
            resultSpace.innerHTML=`Defeat! Player's Paper loses to computer's Scissors`;
            break

        }
    }
    declarePlayerPick.innerHTML=`${playerSelection}`;
    declareComputerPick.innerHTML=`${computerSelection}`;

        // ******  First to get 5 points Score tracker ******

            //decalre current score
            playerScoreValue.innerHTML=`  ${playerScore}`;
            computerScoreValue.innerHTML=`  ${computerScore}`;

            //update score values based on results
            if (playerSelection === "Rock") {
                if (computerSelection === "Paper") {++computerScore ;}
                else if (computerSelection === "Scissors") {++playerScore ;}
                playerScoreValue.innerHTML=`  ${playerScore}`;
                computerScoreValue.innerHTML=`  ${computerScore}`;
            }
            if (playerSelection === "Paper") {
                if (computerSelection === "Scissors") {++computerScore ;}
                else if (computerSelection === "Rock") {++playerScore ;}
                playerScoreValue.innerHTML=`  ${playerScore}`;
                computerScoreValue.innerHTML=`  ${computerScore}`;
            }
            if (playerSelection === "Scissors") {
                if (computerSelection === "Rock") {++computerScore ;}
                else if (computerSelection === "Paper") {++playerScore ;}
                playerScoreValue.innerHTML=`  ${playerScore}`;
                computerScoreValue.innerHTML=`  ${computerScore}`;
            }

            if ( playerScore ===5 || computerScore===5 ) {

                if (playerScore ===5) { 
                    //declare the winner
                    resultSpace.innerHTML=`"PLayer won this round" ${playerScore} to ${computerScore} ` ;
                    //reseting score
                    playerScore = 0 ;
                    computerScore = 0 ;
            }
                else if (computerScore ===5) { 
                    //declare the winner
                    resultSpace.innerHTML=`"Computer won this round" ${computerScore} to ${playerScore} ` ;
                    //reseting score
                    playerScore = 0 ;
                    computerScore = 0 ;
            }

            }
})

// ****** End of Play button event (What happens when you press play) ******







