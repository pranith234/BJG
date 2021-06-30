/* let firstName = "Praneeth ";
let secondName = "Kumar ";
let fullName = firstName + secondName;
console.log(fullName); */


/* let name = "linda";
let greeting = "Hi there";
function greetLinda(){
    console.log(greeting + ", " + name + "!");
}
greetLinda(); */

/* let myPoints = 3;

function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints -= 1;

}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints); */

/* let errorParagraph = document.getElementById("error");

console.log(errorParagraph);

function purchase(){
    errorParagraph.textContent = "something went wrong, please try again";
 */


/* let num1 = 8;
let num2 = 9;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");
function addition(){
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}
function subtract(){
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}
function division(){
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}
function multiplication(){
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
} */

let firstCard = 7;
let secondCard = 11;
let drawCard = 4;
let deckCard = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let result = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
function startGame(){
    renderGame();
}
function renderGame(){
    cardEl.textContent = "Cards:";
    for(let i = 0; i < deckCard.length; i++){
        cardEl.textContent += deckCard[i]+" ";
    }
    if(sum <= 20){
        result = "do you want to draw a new card ?";
    }else if(sum === 21){
       result = "YOU've a black jack ";
       hasBlackJack = true;
    }else {
       result = "you're out of the game";
       isAlive = false;
    }

    sumEl.textContent = "Sum:" + sum;
    messageEl.textContent = result;

}
function newCard(){

    sum += deckCard.push(drawCard);
    cardEl.textContent = "Cards:";
    renderGame();

}
/* let sentence = ["Hello", "My", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");
 for(let i=0; i<sentence.length;i++){
   greetingEl.textContent += sentence[i]+" ";
} */
