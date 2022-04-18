import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NavigationScroll from "./components/HOC/NavigationScroll";

//screens
import Login from "./screens/auth/Login";
import Signup from "./screens/auth/Signup";

import PaymentSuccessfull from "./screens/paymentSuccessfull";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/index";
import "./App.css";

import SelectionFallback from "./screens/fallbackPages/SelectionFallback";

const LandingPage = React.lazy(() => import("./screens/LangingPage"));

//compare pages
const AutoCompare = React.lazy(() => import("./screens/compare/auto"));
const LifeCompare = React.lazy(() => import("./screens/compare/life"));
const HealthCompare = React.lazy(() => import("./screens/compare/health"));
const TravelCompare = React.lazy(() => import("./screens/compare/travel"));

const AutoBuyNow = React.lazy(() => import("./screens/buyprocess/auto"));
const LifeBuyNow = React.lazy(() => import("./screens/buyprocess/life"));
const HealthBuyNow = React.lazy(() => import("./screens/buyprocess/health"));

const MyDocs = React.lazy(() => import("./screens/profile/MyDocs"));
const MyPolicies = React.lazy(() => import("./screens/profile/MyPolicies"));

const AutoClaim = React.lazy(() => import("./screens/Claim/auto"));
const Claim = React.lazy(() => import("./screens/Claim/Claim"));

export default function App() {
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
                <Suspense fallback={<SelectionFallback />}>
                  <LandingPage user={user} />
                </Suspense>
              </Route>

              <Redirect exact from="/" to="/home" />

              <Route exact path="/auto/compare">
                <Suspense fallback={ComparepageFallback}>
                  <AutoCompare />
                </Suspense>
              </Route>

              <Route exact path="/life/compare">
                <Suspense fallback={ComparepageFallback}>
                  <LifeCompare />
                </Suspense>
              </Route>

              <Route exact path="/health/compare">
                <Suspense fallback={ComparepageFallback}>
                  <HealthCompare />
                </Suspense>
              </Route>

              <Route exact path="/travel/compare">
                <Suspense fallback={ComparepageFallback}>
                  <TravelCompare />
                </Suspense>
              </Route>

              {/* claim */}
              <Route exact path="/claim">
                <Suspense fallback={<div>Loading....</div>}>
                  <Claim />
                </Suspense>
              </Route>

              <Route path="/claim/auto">
                <Suspense fallback={<div>Loading....</div>}>
                  <AutoClaim />
                </Suspense>
              </Route>

              <Route path="/claim/life">
                <Suspense fallback={<div>Loading....</div>}>
                  <LandingPage user={user} />
                </Suspense>
              </Route>

              <Route path="/claim/travel">
                <Suspense fallback={<div>Loading....</div>}>
                  <LandingPage user={user} />
                </Suspense>
              </Route>

              <Route path="/claim/health">
                <Suspense fallback={<div>Loading....</div>}>
                  <AutoBuyNow />
                </Suspense>
              </Route>

              {/** Buy Now Pages */}
              <Route exact path="/auto/buynow">
                <Suspense fallback={BuypageFallback}>
                  <AutoBuyNow />
                </Suspense>
              </Route>
              <Route exact path="/life/buynow">
                <Suspense fallback={BuypageFallback}>
                  <LifeBuyNow />
                </Suspense>
              </Route>
              <Route exact path="/health/buynow">
                <Suspense fallback={BuypageFallback}>
                  <HealthBuyNow />
                </Suspense>
              </Route>
              <Route path="/travel/buynow">
                <Suspense fallback={BuypageFallback}>
                  <AutoBuyNow />
                </Suspense>
              </Route>

              {/** Payment */}
              <Route exact path="/auto/payment-success">
                <PaymentSuccessfull />
              </Route>

              {/** Profile */}
              <Route exact path="/profile/mydocs">
                <Suspense fallback={ProfilepageFallback}>
                  <MyDocs />
                </Suspense>
              </Route>
              <Route exact path="/profile/mypolicies">
                <Suspense fallback={ProfilepageFallback}>
                  <MyPolicies />
                </Suspense>
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

const ComparepageFallback = () => {
  return <SelectionFallback />;
};

const BuypageFallback = () => {
  return <SelectionFallback />;
};

const ProfilepageFallback = () => {
  return <SelectionFallback />;
};
