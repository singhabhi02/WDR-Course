// alert("hello");
let fruits = ["apple", "banana", "mango", "kiwi", "orange", "pineapple"];

// console.log(fruits);

// fruits[0] = "kiwi";

// console.log(fruits.length);

// fruits.push("grapes"); //add in the end

// console.log(fruits);

// fruits.pop(); //removes from end
// console.log(fruits);

// fruits.splice(2, 1); //delete the data in between
// console.log(fruits);

// fruits.splice(2, 0, "grapes", "Guava"); //insert in between
// console.log(fruits);

// let cart = [];

// cart.push("Laptop");
// cart.push("Mouse");
// cart.push("Keyboard");

// console.log(cart);

// cart.pop();
// console.log(cart);

// cart.unshift("Keyboard"); add in the start
// console.log(cart);

// cart.shift();     delete in the start
// console.log(cart);

//--------------------XXXXX-----------------------

// Loops in arrays
let marks = [90, 87, 67, 90, 67, 77];

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// Map function

// let increaseMarks = marks.map((num) => num + 10);
// console.log(increaseMarks);
// console.log(marks);

//FOR EACH METHOD

let increaseMarks = marks.forEach((mark) => mark + 10);
console.log(increaseMarks);
console.log(marks);

// let students = ["Amit", "Vraj", "Vishesh"];
// students.forEach((student) => {
//   console.log(student);
// });

//Industrial usecase of map and forEach()

// let users = [
//   { name: "Amit", age: 22 },
//   { name: "Riya", age: 24 },
// ];

// // console.log(users);
// users.forEach((user) => {
//   console.log("User: ", user.name.toUpperCase());
// });

// let names = users.map((user) => user.name.toUpperCase());

// console.log(names);

//  Feature                        forEach()                 map()
//  Return New array                  X                       Yes
//  Used for                        Action               Transformation
//  Return  value                   undefined              new array
//  Modifies  original array          No                       No
//  InterView preference            Both depends on the useCase
