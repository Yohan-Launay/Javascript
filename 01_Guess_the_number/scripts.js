let y = Math.floor(Math.random() * 10 + 1);
let text = document.getElementById("text");

console.log(y);

let guess = 1;

function button() {
    let guess = document.getElementById("guess").value;
    console.log(guess);
    if (guess == y) {
        text.innerText = "Tu as gagné !"
        console.log("Tu as gagné !")
    } else if (guess > y ) {
        text.innerText = "Trop haut !"
        console.log("Trop haut !")
    } else {
        text.innerText = "Trop bas !"
        console.log("Trop bas !")
    }
}





