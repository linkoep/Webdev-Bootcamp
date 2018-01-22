/* Javascript Functions */

//As in other programming languages, functions in javascript
//allow us to abstract and reuse code

//Declaring/defining function
function sayHi() {
  console.log("Hello");
}

//Calling function
sayHi();


//Functions take arguments (separated by commas) in parentheses:
function greetPerson(name) {
  console.log("Hello " + name);
}

greetPerson("John");

//Empty arguments are left as undefined
greetPerson();


//Functions can return output values
//As usual, returning exits the function
function square(x) {
  return x*x;
}

console.log(square(4));

//Functions without explicit return statements return undefined
console.log(sayHi());


/* Function syntax */

//Declaration
function myFunc(args) {
  return args;
}

var myFuncReturn = myFunc("test");
console.log(myFuncReturn);

//Expression (Anyonymous function -- attached to variable)
var myFunc2 = function(args) {
  return args;
}

myFuncReturn = myFunc2("test");
console.log(myFuncReturn);

//This gets rid of the function assigned to myFunc2
myFunc2 = 10;

//This causes an error
//myFuncReturn = myFunc2("test");
//console.log(myFuncReturn);
