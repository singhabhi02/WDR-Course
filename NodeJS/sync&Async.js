//synchronous programming is blocking the entire task which are not being executed
//javascript is single threaded

// console.log("start");
// console.log("Mid");
// console.log("end");

//Asynchronous task

// console.log("Start");

// setTimeout(() => {
//   console.log("Async task");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise returned");
// });

// console.log("End");

// 1. Call Stack
// 2. Web Apis
// 3. Callback queue / microtask queue
// 4. Event loop

// async function test() {
//   console.log("A");

//   await Promise.resolve();

//   console.log("B");
// }

// test();
// console.log("C");

//if we want response from the API

async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error("API Failed");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

fetchUsers();

// fetch() - returns the Promise
// await() - it waits till the promise resolves
// .json() - convers the reponse to JS object
