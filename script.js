let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textContent = `You chose: ${capitalize(userChoice)}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${capitalize(computerChoice)}`;

    let winner = "";

    if (userChoice === computerChoice) {
        winner = "It's a draw! 🤝";
    } else if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winner = "You win! 🎉";
        userScore++;
    } else {
        winner = "You lose! 😢";
        computerScore++;
    }

    document.getElementById('winner').textContent = winner;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
