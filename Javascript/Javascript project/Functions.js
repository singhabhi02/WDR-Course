//FUNCTION KEYWORD (NORMAL FUNCTION)
// function greetfunction(name) {
//   console.log("hello" + " " + name);
// }

// function add(a = 0, b = 0, c = 0) {
//   //default parameters
//   return a + b + c;
// }

// let result = add(20, 10, 15);
// console.log(result);

// greetfunction("Aditya");

// let result_2 = add(50, 50, 50);  //arguments

// result = add();
// console.log(result);

//----------------------XXXXX--------------------

//ARROW FUNCTION

// function square(num){   //normal function
//     return num*num;
// }

// const square = (num) => num * num; // arrow function;

// console.log(square(3));

const getGrade = (marks) => {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else return "C";
};

console.log(getGrade(75));
