import React, { useState } from "react";
import axios from 'axios';

function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChangeInput = e => {
    setForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleForm = e => {
    e.preventDefault();
    console.log("submitted", form);
    axios.post(`http://localhost:3030/auth/signup`,form)
    .then((user)=>{
    })
    .catch((err)=>{})
  };
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
        <form className="m-5 w-10/12" onSubmit={handleForm}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            {" "}
            Sign Up
          </h1>
          <div className="my-6 w-full">
            <input
              type="text"
              className="p-2 rounded shadow w-full text-gray-800"
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={onChangeInput}
            />
          </div>
          <div className="my-6 w-full">
            <input
              type="text"
              className="p-2 rounded shadow w-full text-gray-800"
              placeholder="First Name"
              name="lastName"
              value={form.lastName}
              onChange={onChangeInput}
            />
          </div>
          <div className="my-6 w-full">
            <input
              type="email"
              className="p-2 rounded shadow w-full text-gray-800"
              placeholder="Input Email"
              name="email"
              value={form.email}
              onChange={onChangeInput}
            />
          </div>
          <div className="my-6 w-full">
            <input
              type="password"
              className="p-2 rounded shadow w-full text-gray-800"
              placeholder="Input Password"
              name="password"
              value={form.password}
              onChange={onChangeInput}
            />
          </div>
          <div className="my-6 w-full">
            <input
              type="password"
              className="p-2 rounded shadow w-full text-gray-800"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChangeInput}
            />
          </div>
          <div className="w-full my-10">
            <button
              type="submit"
              className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
