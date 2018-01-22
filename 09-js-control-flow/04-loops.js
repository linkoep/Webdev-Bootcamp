/* Loops allow us to repeat things */

//Keep code DRY -- Don't Repeat Yourself

//While loops repeat as long as condition is true
var count = 1;
while(count<6) {
  console.log(count);
  ++count; //Prefix and postfix apply as in c++
}

//For loops 
for(var i = 1; i < 6; ++i) {
  console.log(i);
}
