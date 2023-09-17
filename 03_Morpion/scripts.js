let buttonId = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(document.getElementsByClassName("button"));

let classButton = document.getElementsByClassName("button");

for(let i = 0; i < classButton.length; i++)
{
    classButton[i].className += buttonId.length;
}
