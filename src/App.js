import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//screens
import LandingPage from "./screens/LangingPage";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

import AutoCompare from "./screens/autoCompare";
import AutoBuyNow from "./screens/autoBuyNow";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/index'

import "./App.css";

function App() {

  const [customvariables, setCustomvariables] = React.useState({
    bg: "#454545"
  })

  return (
    <React.Fragment>
<<<<<<< HEAD
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Redirect exact from="/" to="/home" />
          
          <Route path="/compare">
            <AutoCompare />
          </Route>

          <Route path="/auto/buynow">
            <AutoBuyNow />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
=======
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
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
>>>>>>> dev
    </React.Fragment>
  );
}
export default App;
