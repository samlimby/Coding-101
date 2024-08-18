let player = {
    name: "Sam",
    chips: 0
}

let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
let sum = 0;

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    isAlive = true;
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    return renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ", "
    }
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

function getRandomCard() {
    let cardSelection = Math.floor(Math.random() * 13 + 1);
    if (cardSelection === 1) {
        return 11
    } else if (cardSelection === 11) {
        return 10
    } else if (cardSelection === 12) {
        return 10
    } else if (cardSelection === 13) {
        return 10
    } else {
        return cardSelection
    }
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        let cardPlus = getRandomCard();
        sum += cardPlus;
        cards.push(cardPlus);
        renderGame();
    }
}
