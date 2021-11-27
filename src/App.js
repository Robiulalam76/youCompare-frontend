import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NavigationScroll from "./components/HOC/NavigationScroll";

//screens
import LandingPage from "./screens/LangingPage";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

//compare pages
import AutoCompare from "./screens/compare/auto";
import LifeCompare from "./screens/compare/life";
import HealthCompare from "./screens/compare/health";
import TravelCompare from "./screens/compare/travel";

import AutoBuyNow from "./screens/buyprocess/auto";
import LifeBuyNow from "./screens/buyprocess/life";
import HealthBuyNow from "./screens/buyprocess/health";

import PaymentSuccessfull from "./screens/paymentSuccessfull";

import MyDocs from "./screens/profile/MyDocs";
import MyPolicies from "./screens/profile/MyPolicies";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/index";

import "./App.css";

function App() {
  const [customvariables, setCustomvariables] = React.useState({
    bg: "#454545",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          console.log(`response`, response);
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(`response 2`, resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log("user", user);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme(customvariables)}>
        <BrowserRouter>
          <NavigationScroll>
            <Switch>
              <Route path="/home">
                <LandingPage user={user} />
              </Route>
              <Redirect exact from="/" to="/home" />

              <Route exact path="/auto/compare">
                <AutoCompare />
              </Route>

              <Route exact path="/life/compare">
                <LifeCompare />
              </Route>
              <Route exact path="/health/compare">
                <HealthCompare />
              </Route>
              <Route exact path="/travel/compare">
                <TravelCompare />
              </Route>

              {/** Buy Now Pages */}
              <Route exact path="/auto/buynow">
                <AutoBuyNow />
              </Route>
              <Route exact path="/life/buynow">
                <LifeBuyNow />
              </Route>
              <Route exact path="/health/buynow">
                <HealthBuyNow />
              </Route>
              <Route path="/travel/buynow">
                <AutoBuyNow />
              </Route>

              {/** Payment */}
              <Route exact path="/auto/payment-success">
                <PaymentSuccessfull />
              </Route>

              {/** Profile */}
              <Route exact path="/profile/mydocs">
                <MyDocs />
              </Route>
              <Route exact path="/profile/mypolicies">
                <MyPolicies />
              </Route>

              {/**Auth pages */}
              {user === null && (
                <Route exact path="/login">
                  <Login />
                </Route>
              )}
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </NavigationScroll>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
