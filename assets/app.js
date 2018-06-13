// Selector 
var userWordSelect = document.getElementById("user-word");
var compWordSelect = document.getElementById("comp-word");
var resultSelect = document.getElementById("result");
var myImg = document.getElementById("my-img");

// from a perdetermiend list
var computerWords = ["cat", "dog", "phone", "jedi", "eagles", "bitwise", "polymorphism"];

var chosenWord = computerWords[Math.floor(Math.random()* computerWords.length)];
console.log("computer picked " + chosenWord);

// Hit them with a prompt 
// that ask 
// what word am I thinking of
var userAnswer = prompt("What word am I thinking of?");

// if the userAnswer matches the chosenWord
// display a message to the user that they match
if(userAnswer === chosenWord) {
    userWordSelect.textContent = userAnswer;
    compWordSelect.textContent = chosenWord;
    resultSelect.textContent = "You win!";
    myImg.src = "https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif";
} else {
    // otherwise 
    // display a message that they do not match show the word the computer picked
    userWordSelect.textContent = userAnswer;
    compWordSelect.textContent = chosenWord;
    resultSelect.textContent = "You lose!";
    myImg.src = "https://media.giphy.com/media/cr9vIO7NsP5cY/giphy.gif";
}

