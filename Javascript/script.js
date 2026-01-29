function checknumber() {
  let num = prompt("Enter a number:");

  if (num > 0) {
    alert(num + " is a positive number.");
  } else if (num < 0) {
    alert(num + " is a negative number.");
  } else {
    alert("The number is zero.");
  }
}

// var example
// var Name = "John Doe";
// var Name = "Jane Doe"; // re declared

// Name = "Alice"; // re assigned

// console.log(Name);

//let example
// let Age = 25;
// Age = 30; // re assigned

// let Age = 35; // re declared - this will cause an error
// console.log(Age);

//const example
// const Countryname = "USA";
// Country = "Canada"; // re assigned - this will cause an error

// {
//   let city = "New York";
//   const pi = 3.14;
//   var country = "USA";
// }

// console.log(country);
// console.log(city);
// console.log(pi);

let obj = {
  Name: "Abhishek",
  marks: 90,
  age: 23,
};

console.log(obj.age);
