// let Name = "ES6";
// console.log(`Hello Today we are learning ${Name}`);

const { original } = require("@reduxjs/toolkit");

// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// console.log(add(10, 15));
// console.log(sub(15, 10);

// console.log("start");
// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 3000);
// console.log("End");

// let a = 20;
// let b = 10;

// // swap logic
// let temp = a;
// a = b;
// b = temp;

// console.log(a, b);

// let x = 5;
// x = x + 1;
// x = x * 5;

// console.log(x);

// let age = 20;

// if (age > 18) {
//   console.log("adult");
// } else {
//   console.log("not an adult");
// }

// write a code to print the reverse of number
// Find the largest of 3 number
// check the palindrome ( spell the same from both front and back side)

// let num = 654321;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }

// console.log("Reverse of this number is: ", reverse);

// function ReverseNumber(num) {
//   let reverse = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   return reverse;
// }

// let result = ReverseNumber(123456);
// console.log(result);

// let a = 40;
// let b = 32;
// let c = 50;

// if (a >= b && a >= c) {
//   console.log("a is largest");
// } else if (b >= a && b >= c) {
//   console.log("b is greatest");
// } else {
//   console.log("c is largest");
// }

// let num = 1331;
// let reverse = 0;
// let Original = num;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }

// if (Original == reverse) {
//   console.log("Number is palindrome");
// } else {
//   console.log("number is not palindrome");
// }

// ----------CREATING OUR FIRST SERVER ------------

const http = require("http");

const server = http.createServer((req, res) => {
  // res.write("Hello from nodeJS server");
  // res.end();
  if (req.url == "/") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    res.end("200 success status About Page");
  } else {
    res.end("404 Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 4 Main types of http request

//GET -> TO Fetch the data   ( profile information  )
//POST -> to send the data    (login form )
//PUT -> update the data     (Edit your information)
//DELETE -> delete some data ( delete something)
