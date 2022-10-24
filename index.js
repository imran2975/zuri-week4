//collecting input from the user

const user = prompt('Enter your username >>')

//welcomiming message
console.log(`Welcome to number guessing game  [<< ${user} >>]`)
console.log("\nYou're in stage 1, guess the correct number to proceed to stage two. Good luck Champ😎")

let stage = 1;
let maxStage = 10;
let point = 0;

//loops keeps running while i is equal to max stage
for (let i = 2; i <= maxStage; i++) {
  // computer guess number
  let computerGuess = Math.floor(Math.random() * i) + 1;
  //console.log(computerGuess)

  //user guess number
  let userGuess = parseInt(prompt(`Enter a number between 1 and ${i}`))

  //stage and point increases as far as user guess correct number
  stage++;
  point++;


  if (userGuess === computerGuess) {
    console.log(`You got 1 point\n
        Stage: ${stage}`)
  }

  // condition to terminate if the user guess the wrong number
  if (userGuess != computerGuess) {
    point -= 1;
    console.log(`Opps! you guessed the wrong number.. correct number is ${computerGuess} \n Total points: ${point}`)
    break;
  }

}
