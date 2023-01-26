'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🎇 Numero correcto';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Cuando hay input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔  No hay numero!';
    displayMessage('⛔  No hay numero!');
    //cuando el jugador gana
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ' 🎇 Numero correcto!';
    displayMessage(' 🎇 Numero correcto!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
  }
  // cuando esta malo
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? ' 📈 El numero es muy alto!'
          : ' 📉 El numero es muy bajo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 🚫 Tu perdiste el juego!');
      document.querySelector('.score').textContent = 0;
    }

    //Cuando guess es muy alto
    // } else if (guess > secretNumber) {
    // if (score > 1) {
    //   document.querySelector('.message').textContent =
    //    ' 📈 El numero es muy alto!'; ;
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } else {
    //   document.querySelector('.message').textContent =
    //     ' 🚫 Tu perdiste el juego!';
    // }

    //   //Cuando guess es muy bajo
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent =
    //       ' 📉 El numero es muy bajo!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent =
    //       ' 🚫 Tu perdiste el juego!';
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = ' Empieza adivinar..';
  displayMessage(' Empieza adivinar..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
