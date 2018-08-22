//Objects represent a specific model of data
var person = {
    name: "Bob",
    age: 37,
    city: "Atlanta"
};
 //No order
//Retrieve by
console.log(person["name"]);
console.log(person.name); //more common
//Cannot use dot if starts w/ number
//Cannot use dot if property has space
//Cannot use dot to lookup, e.g.
var str = "name";
console.log(person[str]);
console.log(person.str); //does not work

//Update by access, then reassign
console.log(person.city);
person.city = "London";
console.log(person.city);

//Can also intialize empty or new
var otherPerson = {};
var objectPerson = new Object();

//Objects: kind of like dictionaries: key value pairs
//vs. Arrays: just values, indexed numerically
//Array could be seen as object where keys are numbers
