//Create secre number
var secretNumber = 4;

//Ask for guess
var guess = Number(prompt("guess a number")); //Prompt returns a string, must be cast

//Display result
if (guess === secretNumber) {
  alert("You got it!");
} else if (guess > secretNumber) {
  alert("Too high. Guess again!");
} else {
  alert("Too low. Guess again!");
}
