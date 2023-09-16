let arrayGame = ["Paper", "Rock", "Scissors"];
let paperValue = 0;
let rockValue = 1;
let scissorsValue = 2;

// The paper win against the rock
function paper() {
    let randomGame = Math.floor(Math.random() * arrayGame.length.valueOf());
    console.log("You play the paper" + scissorsValue + " " + randomGame);
    if (scissorsValue === randomGame) {
        console.log("Egal !")
    } else {
        console.log("Diff")
    }
}

// The rock win against the scissors
function rock() {
    console.log("rock");

}

// The scissors win against the paper
function  scissors() {
    console.log("scissors");
}