//Function 1: Is even

function isEven(number) {
  return (number%2===0);
}

//Function 2: Factorial

function factorial(number) {
  if(number === 0) return 1;
  return(number * factorial(number-1));
}

//Function 3: kebabToSnake

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}

//Tests
console.log(isEven(4));
console.log(isEven(5));
console.log(factorial(4));
console.log(kebabToSnake("Hello-there-world"));
