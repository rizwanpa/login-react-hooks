import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../store/AppContex";

function Header() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn,user] = useContext(AppContext);
  const history = useHistory();
  

  const logout = () => {

    sessionStorage.setItem("accessToken",null);
    //setIsLoggedIn(false);
    history.replace('/login');
  }

  return (
    <nav className="py-5 bg-gray-900 text-white">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
        </span>
        <span className="flex">
          <li className="mr-5">
            {
              isLoggedIn ?
              <button onClick={logout}>Logout</button> :
              <Link to="/login">Login</Link>
            }
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </span>
      </ul>
    </nav>
  );
}

export default Header;
