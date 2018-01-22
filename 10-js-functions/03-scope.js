//Scope applies in javascript as it would in other programming languages

function doMath() {
  var x = 40;
  console.log(x);
}

//This returns an error because x is not defined outside the function
//console.log(x);

var x = "Hello";
console.log(x);
//Note how doMath still uses its local x -- takes preference
doMath();

function changeVar(num) {
  console.log(num);
  if(true) {
    num = 50;
  }
  console.log(num);
}

var y = 60;
console.log(y);
//Note how this function changes the value of the variable 
//within the function, but not outside it
changeVar(y);
console.log(y);
