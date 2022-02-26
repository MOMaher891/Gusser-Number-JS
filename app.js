var random = function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let min = 1,
    max = 10,
    winningNum = random(max, min),
    guessLeft = 3;

const game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.getElementById('guess-input'),
    guessBtn = document.getElementById('guess-btn'),
    message = document.querySelector('.message');

//Assign min and max value
minNum.textContent = min;
maxNum.textContent = max;
console.log(winningNum);

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess > max || guess < min) {
        errorMessage(`Please ,Enter Number Between ${min} and ${max}`);
        return 0;
    }



    setTimeout(() => {
        if (guess === winningNum) {
            // message.style.display = 'block';
            guessInput.disabled = true;
            setMessage(`${winningNum} is Correct , You Win`, 'green');
            // guessBtn.disabled = true;
            playAgain();

        } else {
            guessLeft -= 1;
            if (guessLeft === 0) {
                //Game over - lost
                guessInput.disabled = true;
                setMessage(`GameOver..The correct Number is ( ${winningNum} )..You are Loser`, 'red');
                guessInput.value = '';
                guessInput.placeholder = "Finish..";
                playAgain();

            } else {
                //Clear input
                guessInput.value = '';
                //game continue
                setMessage(`${guess} is not correct , ${guessLeft} guesses left`, 'red');
            }
        }
    }, 800);


})
guessInput.value = '';


//Function check

//Create Error Message
function errorMessage(msg) {
    let errorMessage = document.createElement('div');
    errorMessage.className = 'alert alert-danger w-50';
    errorMessage.style.color = 'red';
    errorMessage.style.fontWeight = 'bold';

    errorMessage.appendChild(document.createTextNode(msg));
    let heading = document.querySelector('.heading');
    game.insertBefore(errorMessage, message);
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);

}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
    guessInput.style.borderColor = color;
}


function playAgain() {
    guessBtn.value = "Play Again";
    guessBtn.addEventListener('click', () => {
        window.location.reload();
    })
}