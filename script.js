let player = document.getElementById('player')
let stage = document.getElementById('stage')
let points = document.getElementById('points')
let message = document.getElementById('message')

// let range = 2;
let userChoice;
let computerChoice;
let user;
let point = 0;

console.log("IF YOU ARE HERE WHILE PLAYING THE GAME THEN YOU ARE CHEATING!!!");

//================ PROCESSING FUNCTION ===============//
function process(range) {
    if ((!Number.isInteger(parseInt(userChoice))) || ((userChoice < 1) || (userChoice > range))) {
        if(confirm(`\n${user}, Please input a valid number between 1 and ${range}`)){
            startGame(range);
        } else {
            user = "";
            range = 2; 
            point = 0;
        }
        
    } else if (computerChoice != userChoice) {
        message.textContent = `\nGame over ${user}. \n\nThe correct number is ${computerChoice}\n\nYour total Point is ${point}`
        user = "";
        range = 2;
        point = 0;
    } else {
        point++;
        points.textContent = `Point(s): ${point}`
        alert(`\nCorrect!\n\nYou Scored ${point} Points`);
        range++;
        stage.textContent = `Stage: ${range}`
        startGame(range);
    }
}

//================ startGame FUNCTION ===============//

function startGame(range = 2) {
    while(!user) {
        user = prompt("\n Enter your username");
        player.textContent += user
        if (user == null) {
            player.textContent = 'User:'
            return;
        }
    }
    //range = num;
    computerChoice = Math.ceil(Math.random() * range);
    console.log(`The correct number for STAGE ${range-1} is: ${computerChoice}`);
    userChoice = prompt(`\nWelcome to the STAGE ${range-1} of The Number Guessing Game\n\nI picked a random number between 1 and ${range}\n\nShow me how awesome you are by guessing that number.\n`);
    if(userChoice != null) {
        process(range);
    } else {
        user = "";
        range = 2;
    }
}

let restart = document.getElementById('btn2')

restart.onclick = function() {
    stage.textContent = 'Stage: 0'
    points.textContent = 'Point(s): 0'
    player.textContent = 'User: '
    message.textContent = ''
    console.log('Cleared');
}