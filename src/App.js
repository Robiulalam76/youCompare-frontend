import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//screens
import LandingPage from "./screens/LangingPage";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

// import AutoCompare from "./screens/autoCompare";
// import AutoBuyNow from "./screens/autoBuyNow";
import PaymentSuccessfull from "./screens/paymentSuccessfull";

//compare pages
import AutoCompare from "./screens/compare/auto";
import LifeCompare from "./screens/compare/life";
import HealthCompare from "./screens/compare/health";
import TravelCompare from "./screens/compare/travel";

import AutoBuyNow from "./screens/buyprocess/auto";

// import PaymentSuccessfull from './screens/paymentSuccessfull'

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

            {/** Compare Pages */}

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
            <Route path="/auto/buynow">
              <AutoBuyNow />
            </Route>
            <Route path="/life/buynow">
              <AutoBuyNow />
            </Route>
            <Route path="/health/buynow">
              <AutoBuyNow />
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
