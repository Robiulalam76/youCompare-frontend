import React, { Suspense, useState } from "react";
import "./landingpage.css";

import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Layout from "../components/Layout/index";
//import SingleInsurance from "../components/SingleInsurance";
//import Spinner from "../components/Spinner";
//import Login from "./auth/Login";
import LifePic from "../accets/life.svg";
import TravelPic from "../accets/driver.svg";
import car from "../accets/car-image.svg";
import HealthPic from "../accets/health.svg";

import { Button, Grid } from "@mui/material";

// components
const Life = React.lazy(() => import("../components/Life/Life"));
const Travel = React.lazy(() => import("../components/Travel/Travel"));
const Health = React.lazy(() => import("../components/Health/Health"));
const Auto = React.lazy(() => import("../components/Auto/Auto"));
// import Life from "../components/Life/Life";
// import Travel from "../components/Travel/Travel";
// import Health from "../components/Health/Health";
// import Auto from "../components/Auto/Auto";

const rootStyle = {
  textAlign: "center",
};

const insurances = [
  {
    title: "Auto Insurance",
    url: "vehicle",
    color: "#FFDFD2",
    image: car,
    description:
      "Auto insurance is designed to protect yourself and others agains many various risks",
  },
  {
    title: "Life Insurance",
    url: "life",
    color: "#D4E5FB",
    image: LifePic,
    description:
      "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
  },
  {
    title: "Travel Insurance",
    url: "home/travel",
    color: "#FDEDC9",
    image: TravelPic,
    description:
      "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
  },
  {
    title: "Health Insurance",
    url: "health",
    color: "#FFDAED",
    image: HealthPic,
    description:
      "Health is the most important thing that we should protect. Health insurance will take care.",
  },
];

export default function LandingPage({ user }) {
  const { path, url } = useRouteMatch();

  console.log(path, "PATH");

  const Card = () => (
    //landing page er main div
    <div>
      <div className="bannner">
        <h1 className="BannerHeader poppinFont ">
          Smart way <br />
          to buy insurance.
        </h1>
        <p className="BannerPera poppinFont">
          Compare insurance policies, rate, detail, & buy instantly in less than
          five minutes!
        </p>
      </div>
      <Grid container>
        {insurances.map((insurance, i) => (
          <Grid
            item
            style={{ marginTop: "1%" }}
            lg={3}
            xs={12}
            md={6}
            sm={6}
            key={i}
          >
            <div style={{ padding: "0px 5px" }}>
              <Link className="Link" to={`/${insurance.url}`}>
                <Button
                  className="autoInsurance"
                  style={{
                    backgroundColor: insurance.color,
                    margin: "1%",
                    borderRadius: "15px",
                  }}
                  variant="text"
                >
                  <div className="insuranceDiv">
                    <img
                      style={{ height: "150px" }}
                      src={insurance.image}
                      alt=""
                    />
                    {/* <car /> */}
                    <div className="insuranceDetails">
                      <h1
                        style={{ fontSize: "25px", padding: "0px 15px" }}
                        className="insurance"
                      >
                        {insurance.title}
                      </h1>
                      <p className="poppinFont" style={{ fontSize: "12px" }}>
                        {insurance.description}
                      </p>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );

  return (
    <React.Fragment>
      <Layout user={user}>
        <div style={rootStyle}>
          <div className="tabs">
            <Switch>
              <Route path={`${path}`} exact component={Card} />
              <Route path={`${path}/auto`}>
                <Suspense fallback={<div>Auto Component Loading...</div>}>
                  <Auto />
                </Suspense>
              </Route>
              <Route path={`${path}/life`}>
                <Suspense fallback={<div>Life Component Loading...</div>}>
                  <Life />
                </Suspense>
              </Route>
              <Route path={`${path}/health`}>
                <Suspense fallback={<div>Health Component Loading...</div>}>
                  <Health />
                </Suspense>
              </Route>
              <Route path={`${path}/travel`}>
                <Suspense fallback={<div>Travel Component Loading...</div>}>
                  <Travel />
                </Suspense>
              </Route>
            </Switch>
          </div>
          {/* {insurance !== "" ? <SingleInsurance insurance={insurance} /> : ""} */}
        </div>
      </Layout>
    </React.Fragment>
  );
}
