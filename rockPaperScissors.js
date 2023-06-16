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

// Rock beats scissors. Scissors beats paper. Paper beats rock.
const determineWinner = (userChoice, computerChoice) => {
    console.log(`You chose ${userChoice}. The computer chose ${computerChoice}.`);
    if (userChoice === computerChoice) {
        return 'The game was a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
        return 'You won! :)';
        } else {
        return 'You lost. :('
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
        return 'You lost. :(';
        } else {
        return 'You won! :)';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
        return 'You lost. :(';
        } else {
        return 'You won! :)';
        }
    }
}