import React, { Suspense, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Auto from "../components/Auto/Auto";
import "./landingpage.css";

import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "../components/Layout/index";
import SingleInsurance from "../components/SingleInsurance";
import Spinner from "../components/Spinner";
import car from "../accets/car-image.svg";
import Login from "./auth/Login";
import LifePic from "../accets/life.svg";
import TravelPic from "../accets/driver.svg";
import Life from "../components/Life/Life";
import Travel from "../components/Travel/Travel";
import Health from "../components/Health/Health";
import HealthPic from "../accets/health.svg";
import { Button, Grid } from "@mui/material";

const rootStyle = {
  textAlign: "center",
};

const insurances = [
  {
    title: "Auto Insurance",
    url: "auto",
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
    url: "travel",
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

export default function LandingPage({}) {
  const { path, url } = useRouteMatch();

  const Card = () => (
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
          <Grid style={{ marginTop: "1%" }} lg={3} xs={12} md={6} sm={6}>
            <div style={{ padding: "0px 5px" }}>
              <Link className="Link" to={`${url}/${insurance.url}`}>
                <Button
                  className="autoInsurance"
                  style={{
                    backgroundColor: insurance.color,
                    margin: "1%",
                    borderRadius: "15px",
                  }}
                  variant="text"
                >
                  <div className="insuranceDiv" key={i}>
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
      <Layout>
        <div style={rootStyle}>
          <div className="tabs">
            <Switch>
              <Route path={`${path}`} exact component={Card} />
              <Route path={`${path}/auto`} component={Auto} />
              <Route path={`${path}/life`}>
                <Life />
              </Route>
              <Route path={`${path}/health`}>
                <Health />
              </Route>
              <Route path={`${path}/travel`}>
                <Travel />
              </Route>
            </Switch>
          </div>
          {/* {insurance !== "" ? <SingleInsurance insurance={insurance} /> : ""} */}
        </div>
      </Layout>
    </React.Fragment>
  );
}
