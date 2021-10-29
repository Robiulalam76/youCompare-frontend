import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//screens
import LandingPage from "./screens/LangingPage";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

import AutoCompare from "./screens/autoCompare";
import AutoBuyNow from "./screens/autoBuyNow";
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

  return (
    <React.Fragment>
      <ThemeProvider theme={theme(customvariables)}>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Redirect exact from="/" to="/home" />

            <Route path="/auto/compare">
              <AutoCompare />
            </Route>
            <Route path="/travel/compare">
              <AutoCompare />
            </Route>
            <Route path="/life/compare">
              <AutoCompare />
            </Route>

            <Route path="/health/buynow">
              <AutoBuyNow />
            </Route>

            <Route exact path="/auto/payment-success">
              <PaymentSuccessfull />
            </Route>

            <Route exact path="/profile/mydocs">
              <MyDocs />
            </Route>

            <Route exact path="/profile/mypolicies">
              <MyPolicies />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
