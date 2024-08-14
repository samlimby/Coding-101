let firstCard = 4;
let secondCard = 9;
let cards = [
    firstCard, 
    secondCard
];
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document. getElementById("card-el")

let sum = cards[0] + cards[1];

function startGame() {
    return renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
    sumEl.textContent = "Sum:" + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false
    }
    
    messageEl.textContent = message;
}

function newCard () {
    let cardPlus = 7;
    sum += cardPlus;
    cards.push(cardPlus);
    renderGame();
}
