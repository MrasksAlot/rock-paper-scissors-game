const COMPUTER_POSSIBILITIES = ["Rock","Paper","Scissors"] ;


// ****** Function to generate computer pick ******
let computerSelection = getComputerChoice () ;
function getComputerChoice () {
    return COMPUTER_POSSIBILITIES[Math.floor(Math.random()*
        (COMPUTER_POSSIBILITIES.length))] ;
    }
// console.log(computerSelection); test## make sure getComputerChoice function work



// ****** Getting play pick using the buttons ******
let playerSelection ; 
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
// console.log(scissorsButton);  test## make sure button are assigned to variables

rockButton.addEventListener('click', ()=> { playerSelection="Rock" ;
return console.log(playerSelection);})

paperButton.addEventListener('click', ()=> { playerSelection="Paper" ;
return console.log(playerSelection);})

scissorsButton.addEventListener('click', ()=> { playerSelection="Scissors" ;
return console.log(playerSelection);})


