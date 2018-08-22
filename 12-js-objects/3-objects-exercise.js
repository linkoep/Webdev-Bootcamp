//Challenge: Declare an array of movies you've watched and print it nicely

var movies = [
	{
		title: "Tangled",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 3,
		hasWatched: false
	},
	{
		title: "Wreck-It Ralph",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Zootopia",
		rating: 5,
		hasWatched: true
	}
];

function movieToString(mov){
	var s = "You have ";

	if (!mov.hasWatched) {
		s += "not ";
	}

	s += "watched \"";
	s += mov.title;
	s += "\" - ";
	s += mov.rating;
	s += " stars";
	return s;
}

movies.forEach(function(mov){
	console.log(movieToString(mov));
});
