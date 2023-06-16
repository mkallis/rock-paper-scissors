// Let's play Rock, Paper, Scissors!

// User can input rock, paper, scissors, or bomb
// Bomb is a special cheat code that always wins
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
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

// Rock beats scissors. Scissors beats paper. Paper beats rock. Bomb is a special cheat code that always wins
const determineWinner = (userChoice, computerChoice) => {
    console.log(`You chose ${userChoice}. The computer chose ${computerChoice}.`);
    if (userChoice === 'bomb') {
        return 'BOOOOMM!! You automatically win!!';
    }
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

// Play the game!
const playGame = () => {
    const userChoice = getUserChoice('paper'); // type user input here
    const computerChoice = getComputerChoice();

    // as long as the user choice is valid, we determine a winner
    if (userChoice !== 'invalid input') {
        console.log(determineWinner(userChoice, computerChoice));
    } else {
        console.log('Please input rock, paper, or scissors.')
    }
}

playGame();
