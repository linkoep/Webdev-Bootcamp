//Can nest to create complex data structures
//e.g. blog
var posts = [
  {
    title: "Post 1",
    author: "Person 1",
    comments: ["Comment 1.1", "Comment 1.2"]
  },
  {
    title: "Post 2",
    author: "Person 2",
    comments: ["Comment 2.1", "Comment 2.2"]
  }
]

//Accessing
console.log(posts[0].title); //Post 1
console.log(posts[1].comments[1]); //"Comment 2.2
