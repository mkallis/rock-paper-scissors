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

// Computer choice uses a random number to select rock, paper, or scissors
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
    return 'rock';
    } else if (randomNum === 1) {
    return 'paper';
    } else if (randomNum === 2) {
    return 'scissors';
    } else {
    return 'Something went wrong.'
    }
}
