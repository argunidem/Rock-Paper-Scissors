const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
// Buttons in array with the same order as displayed in page
const buttonsArray = [rock, paper, scissors];
// Create variables to use in compareChoices function
let playersChoice;
let computersChoice;
// Get icons will show choices
const playersChoiceIcon = document.getElementById('first-choice');
const computersChoiceIcon = document.getElementById('second-choice');


buttonsArray.forEach((button, index) => {
  button.addEventListener('click', function(e) {
    if(!e.target.parentElement.hasAttribute('disabled')) {
      
      disableButtons()
      setTimeout(() => {
        enableButtons()

      }, 2700)
      playersChoiceIcon.classList = "fa-solid"
      computersChoiceIcon.classList = "fa-solid"
      // change the icon and display player's choice
      playersChoiceIcon.classList.toggle(e.target.classList[1]);
      // Set playersChoice a string to use as compareChoices's first parameter
      playersChoice = e.target.id;
      // add class 'choices-active' to change visibility of choices element
      playersChoiceIcon.parentElement.classList.add('choices-active');
      
      let elOfArr = buttonsArray[randomNumber()]
      // Set computersChoice a string to use as compareChoices's second parameter
      computersChoice = elOfArr.id;
      // // change the icon and display computer's choice
      computersChoiceIcon.classList.add(elOfArr.classList[1]);
      compareChoices(playersChoice, computersChoice)
      setTimeout(() => {
        playersChoiceIcon.parentElement.classList.remove('choices-active');
      }, 2300)
  }
  });
});
function randomNumber() {
  return Math.floor(Math.random() * 3);
}

let playerCount = 0;
let computerCount = 0;
const playerCountElement = document.querySelector('#player-count');
const computerCountElement = document.querySelector('#pc-count');

function compareChoices(playersChoice, computersChoice) {
  if (playersChoice === computersChoice) return "Draw!";
  const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (rules[playersChoice] === computersChoice) {
    playerCount++;
    playerCountElement.innerHTML = `You: ${playerCount}`;
    winnerLoser(playersChoiceIcon, computersChoiceIcon);
    moveLeft();
    return playerCount;
  }
  else {
    computerCount++;
    computerCountElement.innerHTML = `Computer: ${computerCount}`;
    winnerLoser(computersChoiceIcon, playersChoiceIcon);
    return computerCount;
  }
}

function winnerLoser(winner, loser) {
  // winner.classList.add('green');
  // loser.classList.add('red');
  setTimeout(function() {
    winner.classList.add('green');
    loser.classList.add('red');
  }, 300);
}


// disable buttons so since score is not updated buttons won't be clickable
// invoke that function when click event occurs 
function disableButtons() {
  buttonsArray.forEach(button => {
    return button.parentElement.setAttribute('disabled', '')
  }); 
}

// enable buttons back so next round can start 
// invoke it after score is updated (with settimeout method)
function enableButtons() {
  buttonsArray.forEach(button => {
    return button.parentElement.removeAttribute('disabled', '');
  });
}


function moveLeft() {
  setTimeout(function() {
    playersChoiceIcon.classList.add('left');
  }, 300);
}
