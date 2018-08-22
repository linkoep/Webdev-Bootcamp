//Just like objects may have Object/primitive members,
//They may also have function members, called methods

var calculator = {
	add: function(x, y){
		return x+y;
	}
};

console.log(calculator.add(3, 4)); //7

//Must access members using "this" keyword

var person = {
	firstName: "John",
	lastName: "Smith",
	getFullName: function(){
		return this.firstName + " " + this.lastName;
	}
};

console.log(person.getFullName());
