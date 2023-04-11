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
import Driver from "./Pages/DriverPage/Driver";
import Qoutes from "./Pages/QoutesPage/Qoutes";
import BuyPage from "./Pages/Buypage/BuyPage";
import Health from "./Pages/Health/Health";
import Vehicle from "./Pages/Vehicle/Vehicle";
import TravelPage from "./Pages/TravelPage/TravelPage";

import SelectionFallback from "./screens/fallbackPages/SelectionFallback";
import UserPortalLayout from "./components/Layout/UserPortalLayout/UserPortalLayout";
import SingleQuote from "./components/DriverPageCompo/SingleQuote";
import UserPortal from "./Pages/UserPortalMain/UserPortal";
import HelpCenter from "./Pages/UserPortalMain/HelpCenter";
import Layout from "./components/Layout";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import SingleTrip from "./Pages/TravelPage/SingleTrip";
import MultiTrip from "./Pages/TravelPage/MultiTrip";
import User from "./Pages/UserPortalMain/User";
import Broker from "./Pages/UserPortalMain/Broker";
import Insurar from "./Pages/UserPortalMain/Insurar";
import LifeInsurancePage from "./Pages/LifeInsurancePage/LifeInsurancePage";
import AgentPanel from "./Pages/UserPortalMain/AgentPanel";
import MyAgents from "./Pages/UserPortalMain/MyAgents/MyAgents";
import MyQuotes from "./Pages/UserPortalMain/MyQuotes/MyQuotes";
import AgentDetails from "./Pages/UserPortalMain/MyAgents/AgentDetails";
import BrokersPanel from "./Pages/UserPortalMain/BrokersPanel/BrokersPanel";
import CustomerPanel from "./Pages/UserPortalMain/CustomerPanel/CustomerPanel";
import PolicyDetails from "./Pages/UserPortalMain/PoliciesPage/PolicyDetails";
import PolicyDocuments from "./Pages/UserPortalMain/PoliciesPage/PolicyDocuments";

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

const AutoClaim = React.lazy(() => import("./screens/claim/auto"));
const Claim = React.lazy(() => import("./screens/claim/Claim"));
const LifeClaim = React.lazy(() => import("./screens/claim/life"));
const HealthClaim = React.lazy(() => import("./screens/claim/health"));
const TravelClaim = React.lazy(() => import("./screens/claim/travel"));

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


// --------------------robiul alam----------------------

              //-----------------user portal-------------------
              <Route exact path="/portal">
                <UserPortalLayout>
                  <CustomerPanel />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/customer-panel">
                <UserPortalLayout>
                  <CustomerPanel />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/policies/details">
                <UserPortalLayout>
                  <PolicyDetails />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/policies/documents">
                <UserPortalLayout>
                  <PolicyDocuments />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/my-agents">
                <UserPortalLayout>
                  <MyAgents />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/brokers">
                <UserPortalLayout>
                  <BrokersPanel />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/my-agents/agent-details">
                <UserPortalLayout>
                  <AgentDetails />
                </UserPortalLayout>
              </Route>

              <Route exact path="/portal/my-quotes">
                <UserPortalLayout>
                  <MyQuotes />
                </UserPortalLayout>
              </Route>

              {/* <Route exact path="/portal/customer-panel">
                <UserPortalLayout>
                  <UserPortal />
                </UserPortalLayout>
              </Route> */}

              {/* <Route exact path="/portal/broker-panel">
                <UserPortalLayout>
                  <Broker />
                </UserPortalLayout>
              </Route> */}

              {/* <Route exact path="/portal/insurer-panel">
                <UserPortalLayout>
                  <Insurar />
                </UserPortalLayout>
              </Route> */}

              <Route exact path="/portal/help-center">
                <UserPortalLayout>
                  <HelpCenter />
                </UserPortalLayout>
              </Route>


              // --------------------robiul alam----------------------

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
                  <LifeClaim />
                </Suspense>
              </Route>

              <Route exact path="/claim/travel">
                <Suspense fallback={<div>Loading....</div>}>
                  <TravelClaim />
                </Suspense>
              </Route>

              <Route path="/claim/health">
                <Suspense fallback={<div>Loading....</div>}>
                  <HealthClaim />
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
            <Switch>




// --------------------robiul alam----------------------

              {/* <Layout user={user}> */}

              <Route exact path="/driver">
                <Layout user={user}>
                  <Driver />
                </Layout>
              </Route>

              <Route exact path="/quotes">
                <Layout user={user}>
                  <Qoutes />
                </Layout>
              </Route>

              <Route exact path="/buy">
                <Layout user={user}>
                  <BuyPage />
                </Layout>
              </Route>

              <Route exact path="/health">
                <Layout user={user}>
                  <Health />
                </Layout>
              </Route>

              <Route exact path="/life">
                <Layout user={user}>
                  <LifeInsurancePage />
                </Layout>
              </Route>

              <Route exact path="/vehicle">
                <Layout user={user}>
                  <Vehicle />
                </Layout>
              </Route>

              <Route exact path="/travel">
                <Layout user={user}>
                  <TravelPage />
                </Layout>
              </Route>


              <Route exact path="/payment">
                <Layout user={user}>
                  <PaymentPage />
                </Layout>
                {/* <LandingPage user={user} /> */}
              </Route>

              {/* </Layout> */}


// --------------------robiul alam----------------------
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
