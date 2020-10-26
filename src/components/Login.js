import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({email: "", password: ""});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  const onChangeInput = (e) =>{
    setForm((prevState)=>({...prevState,[e.target.name]: e.target.value }))
  }
  const handleForm = (e)=>{
    e.preventDefault();
    if(isLoading){
      return;
    }
    console.log('submitted', form);
    setIsLoading(true)
    axios.post(`http://localhost:3030/auth/signin`,form)
    .then((user)=>{
      console.log('user sign-in',user)
      sessionStorage.setItem("accessToken", user.data.accessToken);
      setIsLoading(false);
      history.replace('/')
    })
    .catch((err)=>{
      console.log('errors----------->',err.message, JSON.parse(JSON.stringify(err)))
      setError(err.message);
      setIsLoading(false);
    })
    
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
        <form className="m-5 w-10/12" onSubmit={handleForm}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1>
          {error !== "" && <p className="has-error">{error}</p>}
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
          <div className="w-full my-10">
            <button type="submit" className="flex justify-center p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
              {
                isLoading ? <div className="loader"></div> :"Login"
              }
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;