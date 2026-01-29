document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault(); //stops form reload
  validateForm(); // calling validation function
});
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let number = document.getElementById("ph_number").value;
  let Age = document.getElementById("age").value;

  // cleared all previous error messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("PhnumberError").innerText = "";
  document.getElementById("ageError").innerText = "";

  let valid = true;

  if (name == "") {
    document.getElementById("nameError").innerText = "Name Required";
    valid = false;
  }

  if (email == "") {
    document.getElementById("emailError").innerText = "Email Required";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Minimum 6 characters";
    valid = false;
  }
  if (number.length < 10 || number.length > 10 || number.length == "") {
    document.getElementById("PhnumberError").innerText =
      "Please enter 10-digit Phone number";
  }
  if (Age < 18 || Age == "") {
    document.getElementById("ageError").innerText = "Age must be 18+";
    valid = false;
  }
  if (valid == true) {
    document.getElementById("successMsg").innerText = "Registration Successful";
  }
}

let arr = [1, "abhishek", 3, true, 5.1];

console.log(arr[4]);
