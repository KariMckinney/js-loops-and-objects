//Use a for loop to print numbers 1 through 10 in the console.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

//Print all even numbers from 2 to 20 using a for loop.

let numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numberz.length; i++) {
    if (numberz[i] % 2 === 0)
      console.log(numberz[i]);
}

//Loop through an Array

let animals = ["dog", "cat", "rabbit", "parrot"];

for (let i = 0; i < animals.length; i++) {
    animals[0] = "I like dogs"
    animals[1] = "Cats are cool"
    animals[2] = "Rabbits are cute"
    animals[3] = "Parrots can mimick"
    console.log(animals[i]);
}

//Reverse Array Output

let colors = ["red", "green", "blue", "yellow"];

for (let i = colors.length - 1; i > 0; i--) {
    console.log(colors[i])
}

numbers.reverse(colors[4]); 
  console.log(colors);


//Simple Object
//Create an object named person with properties:
// name
// age
//favoriteColor
//Log a message using all three values

  let namedPerson = {
    name: "Kapil",
    age: 24,
    favoriteColor: "Purple",
    hobby: "Crocheting"
  }

console.log("My name is " + namedPerson["name"] + ". I'm " + namedPerson["age"] + " and my favorite color is " + namedPerson["favoriteColor"])

//Modify an Object
// //Add a new property hobby to the person object using dot notation.
//Log the updated object.

console.log(namedPerson.hobby)

//Create an array of 3 book objects. Each book should have:
//title
//author
//pages
//Loop through the array and print each book like:
//"The Hobbit by J.R.R. Tolkien - 310 pages"

let bookOne = {
  title: "Dog Man",
  author: "Dav Pilkey",
  pages: 240 ,
}

let bookTwo = {
  title: "The Book of Bill",
  author: "Alex Hirsch",
  pages: 208,
  isFavorite: true,
}

let bookThree = {
  title: "Percy Jackson: The Lightning Thief",
  author: "Rick Riordan",
  pages: 377,
}

let books = [bookOne, bookTwo, bookThree]


for (let i = 0; i < books.length; i++){
  books[0] = "Dog man by Dav Pilkey - 240 pages"
  books[1] = "The Book of Bill by Alex Hirsch - 208 pages" 
  books[2] = "Percy Jackson: The Lightning Thief - 377 pages"
  console.log(books[i])
}
  
//Inside your array of books, add a property isFavorite: true to one of them.
//Use a for loop to find and print only the favorite book.

for (let i = 0; i < books.length; i++){
  if (books[i].isFavorite)
    console.log(books[i].title)
  }