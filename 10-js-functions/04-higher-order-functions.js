//We can pass functions to other functions, and return functions from other functions

//SetInterval is a predefined function

function speak() {
  console.log("hello");
}

setInterval(speak, 1000);

//We can make anonymous functions as arguments as well
setInterval(function(){
  console.log("I'm anonymous");
}, 2000);
