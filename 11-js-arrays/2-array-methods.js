//Can look up more in docs

//Push and pop are like stack operations
var myarray = [];
console.log(myarray);
myarray.push("First word");
console.log(myarray);
myarray.pop();
console.log(myarray);

//Shift adds and removes beginning
myarray.push("First word");
myarray.unshift("before first");
console.log(myarray);
myarray.shift();
console.log(myarray);

//Index of finds
console.log(myarray.indexOf("First word"));
console.log(myarray.indexOf("Second word"));

//Slice gets parts
for(var i = 0; i < 10; ++i) {
	myarray.push(i);
}

console.log(myarray);
console.log(myarray.slice(3, 8));
