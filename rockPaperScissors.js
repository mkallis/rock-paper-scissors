// Let's play Rock, Paper, Scissors!

// User can input rock, paper, or scissors
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
      return userInput;
    } else {
      return 'invalid input'
    } 
}