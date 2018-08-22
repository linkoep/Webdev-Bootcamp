var myarray = [];
for(var i = 0; i < 10; i++) {
	myarray.push(i);
}

//Iterating with for loop
for(var i = 0; i < myarray.length; i++) {
	console.log(myarray[i]);
}

//Iterating with for... in
for(var num in myarray) {
	console.log(num)
}

//Iterating with .forEach and anonymous function
myarray.forEach(function(num) {
	console.log(num);
});

//Iterating with .forEach and predefined function
function log(foo){
	console.log(foo);
}
myarray.forEach(log);
