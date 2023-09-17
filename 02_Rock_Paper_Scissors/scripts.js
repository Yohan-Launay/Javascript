let arrayGame = ["Paper", "Rock", "Scissors"];
let bot = 0
let humain = 0;

function getElement(element) {
    return document.getElementById(element);
}

let pointBot = getElement("bot");
let pointHumain = getElement("humain");
let gameBot = getElement("gameBot");
let gameHumain = getElement("gameHumain");

// The paper win against the rock
function paper() {
    let randomGame = Math.floor(Math.random() * arrayGame.length);

    gameHumain.innerText = "Paper !"
    gameBot.innerText = arrayGame[randomGame];
    if (randomGame === 0) {
        console.log("Egal !")
    } else if (randomGame === 1){
        console.log("Gagné !")
        humain++;
        pointHumain.innerText = humain;
    } else {
        console.log('Perdu !');
        bot++;
        pointBot.innerText = bot;
    }
}

// The rock win against the scissors
function rock() {
    let randomGame = Math.floor(Math.random() * arrayGame.length);

    gameHumain.innerText = "Rock !"
    gameBot.innerText = arrayGame[randomGame];
    // Si le random est égal au nombre de rock, c'est égal !
    if (randomGame === 1) {
        console.log("Egal !")
    } else if (randomGame === 2){
        console.log("Gagné !")
        humain++;
        pointHumain.innerText = humain;
    } else {
        console.log('Perdu !')
        bot++;
        pointBot.innerText = bot;
    }
}

// The scissors win against the paper
function  scissors() {
    let randomGame = Math.floor(Math.random() * arrayGame.length);

    gameBot.innerText = arrayGame[randomGame];
    gameHumain.innerText = "Scissors !"
    if (randomGame === 2) {
        console.log("Egal !")
    } else if (randomGame === 0){
        console.log("Gagné !");
        humain++;
        pointHumain.innerText = humain;
    } else {
        console.log('Perdu !')
        bot++;
        pointBot.innerText = bot;
    }
}