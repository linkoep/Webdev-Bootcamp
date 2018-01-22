/* Like other languages, js uses if, else, and else if for conditionals */

//Bar bouncer example

var age = Number(prompt("How old are you?"));
if (age < 0) {
  console.log("Please enter a positive number");
} else if (age < 18) {
  console.log("You are too you to enter the venue");
} else if (age < 21) {
  console.log("You can enter but you cannot drink");
} else {
  console.log("Come on in, you're legal to drink");
}
