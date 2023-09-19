
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
let textTour = elementById("tour")

let cross = "X";
let circle = "O";

let tourPlayer1 = "Tour du joueur 1";
let tourPlayer2 = "Tour du joueur 2";

let tour = true;

function button_1() {
    if (tour === true) {
        tour = false;
        button1.innerText = cross;
        button1.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button1.innerText = circle;
        button1.disabled = true;
        textTour.innerText = tourPlayer1;
        textTour.innerText = tourPlayer1;
    }
}
function button_2() {
    if (tour === true) {
        tour = false;
        button2.innerText = cross;
        button2.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button2.innerText = circle;
        button2.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_3() {
    if (tour === true) {
        tour = false;
        button3.innerText = cross;
        button3.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button3.innerText = circle;
        button3.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_4() {
    if (tour === true) {
        tour = false;
        button4.innerText = cross;
        button4.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button4.innerText = circle;
        button4.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_5() {
    if (tour === true) {
        tour = false;
        button5.innerText = cross;
        button5.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button5.innerText = circle;
        button5.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_6() {
    if (tour === true) {
        tour = false;
        button6.innerText = cross;
        button6.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button6.innerText = circle;
        button6.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_7() {
    if (tour === true) {
        tour = false;
        button7.innerText = cross;
        button7.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button7.innerText = circle;
        button7.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_8() {
    if (tour === true) {
        tour = false;
        button8.innerText = cross;
        button8.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button8.innerText = circle;
        button8.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}
function button_9() {
    if (tour === true) {
        tour = false;
        button9.innerText = cross
        button9.disabled = true;
        textTour.innerText = tourPlayer2;
    } else {
        tour = true;
        button9.innerText = circle;
        button9.disabled = true;
        textTour.innerText = tourPlayer1;
    }
}

