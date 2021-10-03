import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// screens
import LandingPage from "./screens/LangingPage";
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
