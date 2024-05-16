// variables
let player = {
  name: "Sam",
  chips: 500
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el"); //store p message in variable instead of console.log
// let sumEl = document.getElementById("sum-el"); //store p sum in variable
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");


//render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

// getRandomCard function always returns the number 5
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10; // if 11-13 -> return 10
  } else if (randomNumber === 1) {
    return 11; // if 1 -> return 11
  } else {
    return randomNumber;
  }
}

// Write the conditional according to these rules:
// if less than or equal to 20 -> "Do you want to draw a new card?"
// else if exactly 21 -> "Wohoo! You've got Blackjack!"
// else -> "You're out of the game!"
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "; //render out firstCard and secondCard
  //for loop to render all cards instead of two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false ) {
    let card = getRandomCard(); // value set to getRandomCard()
    sum += card;
    cards.push(card); // push the card to the cards array
    console.log(cards);
    renderGame();
  }
}
