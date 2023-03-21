import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//screens
import LandingPage from "./screens/LangingPage";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

import AutoCompare from "./screens/autoCompare";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/index'

import "./App.css";
import Qoute from "./Pages/DriverPage/Driver";
import Driver from "./Pages/DriverPage/Driver";
import Qoutes from "./Pages/QoutesPage/Qoutes";
import BuyPage from "./Pages/Buypage/BuyPage";
import Health from "./Pages/Health/Health";
import Vehicle from "./Pages/Vehicle/Vehicle";

function App() {

  const [customvariables, setCustomvariables] = React.useState({
    bg: "#454545"
  })

  return (
    <React.Fragment>
      <ThemeProvider theme={theme(customvariables)}>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Redirect exact from="/" to="/home" />

            <Route path="/compare">
              <AutoCompare />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>


            <Route exact path="/driver">
              <Driver />
            </Route>

            <Route exact path="/qoutes">
              <Qoutes />
            </Route>
            <Route exact path="/buy">
              <BuyPage />
            </Route>
            <Route exact path="/health">
              <Health />
            </Route>
            <Route exact path="/vehicle">
              <Vehicle />
            </Route>


          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;
