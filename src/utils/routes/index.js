import React from "react";
import Home from "./../../components/Home";
import Login from "./../../components/Login";
import AboutUs from "./../../components/AboutUs";
import SignUp from "./../../components/SignUp";

export default [
  {
    path : '/',
    exact : true,
    component : ()=>(<Home/>),
    protected: "auth",
  },
  {
    path : '/about-us',
    exact : true,
    component : ()=>(<AboutUs/>)
  },
  {
    path : '/login',
    exact : true,
    component : ()=>(<Login/>),
    protected: "guest",
  },
  {
    path : '/sign-up',
    exact : true,
    component : ()=>(<SignUp/>),
    protected: "guest",
  },
];
