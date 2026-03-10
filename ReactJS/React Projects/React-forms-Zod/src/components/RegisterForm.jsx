import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/formSchema";

function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Name</label>
          <input {...register("name")} />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="error">{errors.gender?.message}</p>
        </div>

        <div className="checkbox">
          <input type="checkbox" {...register("terms")} />
          <label>I accept terms & conditions</label>
        </div>
        <p className="error">{errors.terms?.message}</p>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default RegisterForm;