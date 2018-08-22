console.log("Connected");
var todos = [];

window.setTimeout(function() {
	var input = prompt("please enter action");

	while(input !== "quit") {
		switch(input) {
			case "new":
				var newTodo = prompt("enter item");
				todos.push(newTodo)
				break;
			case "list":
				console.log("**********")
				todos.forEach(function(todo, index){
					console.log(index + ": " + todo);
				});
				break;
			case "delete":
				var index = prompt("enter index");
				todos.splice(index, 1);
				break;
		}
		input = prompt("please enter action");
	}
}, 500);
