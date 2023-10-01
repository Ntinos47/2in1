const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


/*
if (!score) {
  score = {
  wins: 0,
  losses: 0,
  ties: 0
  };
}
*/


function playGame(plMove) {

  const compmove = pickComMove();
  
  let result='';

  if (plMove === 'scissors') {
    if (compmove === 'rock') {
      result = 'You lose.';
    } else if (compmove === 'paper') {
      result = 'You win.';
    } else if (compmove === 'scissors') {
      result = 'Tie.';
    }

  } else if (plMove === 'paper') {
    if (compmove === 'rock') {
      result = 'You win.';
    } else if (compmove === 'paper') {
      result = 'Tie.';
    } else if (compmove === 'scissors') {
      result = 'You lose.';
    }
    
  } else {
    if (compmove === 'rock') {
      result = 'Tie.';
    } else if (compmove === 'paper') {
      result = 'You lose.';
    } else if (compmove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins ++;
  } else if (result === 'You lose.') {
    score.losses ++;
  } else {
    score.ties ++;
  }


  localStorage.setItem('score', JSON.stringify(score));


  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-pl-moves')
    .innerHTML = `You: ${plMove}`

  document.querySelector('.js-comp-moves')
    .innerHTML = `Computer:  ${compmove}`


  updateScoreElement();
}


function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;

  if (score.wins === 0 & score.losses === 0 & score.ties === 0) {
    document.querySelector('.js-result')
      .innerHTML = `-----`
    document.querySelector('.js-pl-moves')
      .innerHTML = `You: -----`
      document.querySelector('.js-comp-moves')
        .innerHTML = `Computer: -----`
  }
}

function pickComMove() {
  
  let compmove='';

  const randomnumber2 = Math.random()
  if (randomnumber2>=0 && randomnumber2<1/3) {
    compmove = 'rock';
  } else if (randomnumber2>=1/3 && randomnumber2<2/3 ) {
    compmove = 'paper';
  } else if (randomnumber2>=2/3 && randomnumber2<1) {
    compmove = 'scissors';
  }

  return compmove;
}

