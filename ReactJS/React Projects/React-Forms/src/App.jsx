import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({  //created objects to store the value using setter function
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});  //to store the errors in input fields

  const handleChange = (e) => {
    const { name, value } = e.target;  //to change input in the respective field only
  
  setFormData({
    ...formData,
    [name]: value, // to update field data in state variable
  });
};

  const validate = () => {  //to validate the input field as per the condition
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is Required";
    }
    if (!formData.email.includes("@") ) {
      newErrors.email = "Email is invalid";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password should be greater than 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password does not match";
    }
    setErrors(newErrors); //to update the state variable with errors
    return Object.keys(newErrors).length === 0;  // return a boolean value whether there is error or not
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //stop the form from getting refreshed everytime

    console.log(validate())
    if(validate()) {
      console.log("Form Submitted", formData);
      alert("Registration successful");
    }
  };
  return (
    <div style={{maxWidth: "400px", margin: "50px auto"}}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter your name "
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <input
          name="email"
          placeholder="Enter your email "
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter your password again"
          onChange={handleChange}
        />
        <p>{errors.confirmPassword}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
