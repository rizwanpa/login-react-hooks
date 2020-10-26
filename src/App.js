import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./utils/routes/index";
import "./assets/css/style.css";
import "./assets/css/common.css";
import Header from "./components/Header";
import AppContext from "./store/AppContex";
import GuestRoute from "./utils/routes/GuestRoute";
import AuthRoute from "./utils/routes/AuthRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState({});

  useEffect(()=>{
    let accessTokem = sessionStorage.getItem('accessToken') !== 'null' ? sessionStorage.getItem('accessToken') : "";
    if(accessTokem){
      console.log('inside if');
      setIsLoggedIn(true);
    }else{
      console.log('else');
      setIsLoggedIn(false);
    }
    console.log('accessTokem===>',accessTokem, sessionStorage.getItem('accessToken') !== null, sessionStorage.getItem('accessToken'))
  })
  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
             if (route.protected === "guest") {
              return (
                <GuestRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </GuestRoute>
              );
            }

            if (route.protected === "auth") {
              return (
                <AuthRoute key={index} path={route.path} exact={route.exact}>
                  <route.component />
                </AuthRoute>
              );
            }
            return (<Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />)
          })}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
