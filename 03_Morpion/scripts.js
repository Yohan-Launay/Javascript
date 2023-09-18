let buttonId = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function elementById(id) {
    return document.getElementById(id);
}

let button1 = elementById("button-1");
let button2 = elementById("button-2");
let button3 = elementById("button-3");
let button4 = elementById("button-4");
let button5 = elementById("button-5");
let button6 = elementById("button-6");
let button7 = elementById("button-7");
let button8 = elementById("button-8");
let button9 = elementById("button-9");

// Si un boutton est disabled = true, tu ne touches pas à ce bouton
// Check si les boutons sont true ou false dans le tableau
button4 = true;
let arrayButtons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

for (let key in arrayButtons) {
    if (key == true) {
        arrayButtons.slice();
    }
    console.log(arrayButtons)
}

console.log(arrayButtons.length)




function button_1() {
    button1.innerText = "X";
    button1.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);

    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
        } else {
            console.log("non")
        }
    }
    console.log(arrayButtons)

}
function button_2() {
    button2.innerText = "X";
    button2.disabled = true;
    console.log(button2);
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }

}
function button_3() {
    button3.innerText = "X";
    button3.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }

}
function button_4() {
    button4.innerText = "X";
    button2.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }

}
function button_5() {
    button5.innerText = "X";
    button5.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }
}
function button_6() {
    button6.innerText = "X";
    button6.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }
}
function button_7() {
    button7.innerText = "X";
    button7.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }
}
function button_8() {
    button8.innerText = "X";
    button8.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }

}
function button_9() {
    button9.innerText = "X";
    button9.disabled = true;
    let randomButton = Math.floor(Math.random() * arrayButtons.length);
    for (let key in arrayButtons) {
        if (key == false) {
            arrayButtons[randomButton].innerText = "O";
            arrayButtons[randomButton].disabled = true;
            console.log('false')
        }
    }
}

