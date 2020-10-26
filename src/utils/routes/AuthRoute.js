import React, { Children, useContext } from "react";
import AppContext from "./../../store/AppContex";
import { Redirect, Route } from "react-router-dom";
//import AnimatedRoute from "./AnimatedRoute";

export default function AuthRoute({ children, ...rest }) {
  //const [isLoggedIn] = useContext(AppContext);
  let isLoggedIn = false;
  let accessTokem = sessionStorage.getItem('accessToken') !== 'null' ? sessionStorage.getItem('accessToken') : "";
  if(accessTokem){
    isLoggedIn = true;
  }else{
    isLoggedIn = false
  }

  if (isLoggedIn) return <Route {...rest}>{children}</Route>;

  return (
      <Redirect to="/login" />
  );
}