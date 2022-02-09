'use strict';

function getRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

function displayScore(score) {
    document.querySelector('.score').textContent = score
}

function displayNumber(number) {
    document.querySelector('.number').textContent = number
}

function setBody(color, width) {
    document.querySelector('body').style.backgroundColor = color
    document.querySelector('.number').style.width = width
}

let score = 20
let highscore = 0
let secretNumber = getRandomNumber()

function checkGuess(guess) {
    // Not a valid number
    if (!guess) return displayMessage('⛔️ No number!')

    // lossing
    if (score <= 0) return displayMessage('💥 You lost the game!')

    // winning
    if (guess === secretNumber) {
        // css
        setBody('#60b347', '30rem')

        if (score > highscore) highscore = score
        document.querySelector('.highscore').textContent = score
        displayNumber(secretNumber)
        return displayMessage('🎉 Correct Number!')
    } 

    // higher and lower
    score--
    displayScore(score)
    return displayMessage(guess > secretNumber ? 
    '📈 Too high!' : '📉 Too low!')

}

document.querySelector('.check').addEventListener(
    'click', () => {
        // event handler function
        const guess = Number(document.querySelector('.guess').value)
        checkGuess(guess)
    }
)



document.querySelector('.again').addEventListener(
    'click', () => {
        score = 20
        displayScore(score)
        displayMessage('Start guessing...')
        displayNumber('?')
        document.querySelector('.guess').textContent = ''
        secretNumber = getRandomNumber()
        setBody('#222', '15rem')
    }
)