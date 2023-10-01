const score1 = JSON.parse(localStorage.getItem('score1')) || {
  wins1: 0,
  losses1: 0
};


function plGame(guess) {
  const randomNumber = Math.random();
  const result1 = randomNumber < 0.5 ? 'Heads' : 'Tails';


  if (guess === result1) {
    score1.wins1 ++;
  } else {
    score1.losses1 ++;
  }

  localStorage.setItem('score1', JSON.stringify(score1));

  document.querySelector('.js-plMove')
    .innerHTML = `Your pick: ${guess}`
  document.querySelector('.js-compMove')
    .innerHTML = `Coin flips at: ${result1}`

  updateScoreElement1()
}


function updateScoreElement1() {
  document.querySelector('.js-wins')
    .innerHTML = `Wins: ${score1.wins1}`;

  document.querySelector('.js-losses')
    .innerHTML = `Losses: ${score1.losses1}`;


  if (score1.wins1 === 0 & score1.losses1 === 0) {
    document.querySelector('.js-plMove')
      .innerHTML = `Your pick: ------`

    document.querySelector('.js-compMove')
      .innerHTML = `Coin flips at: ------`
  }
}
