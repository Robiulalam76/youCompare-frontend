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
import Layout from "../components/Layout";
import SingleInsurance from "../components/SingleInsurance";
import Spinner from "../components/Spinner";
import car from "../accets/car-image.svg";
import Login from "./auth/Login";
import Life from "../components/Life/Life";
import Travel from "../components/Travel/Travel";
import Health from "../components/Health/Health";

const rootStyle = {
  textAlign: "center",
};

const insurances = [
  {
    title: "Auto Insurance",
    url: "auto",
    color: "#FFDFD2",
    image:
      "https://images.unsplash.com/photo-1502067294280-729dc7fea201?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    description:
      "Auto insurance is designed to protect yourself and others agains many various risks",
  },
  {
    title: "Life Insurance",
    url: "life",
    color: "#D4E5FB",
    image:
      "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    description:
      "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
  },
  {
    title: "Travel Insurance",
    url: "travel",
    color: "#FDEDC9",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    description:
      "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
  },
  {
    title: "Health Isurance",
    url: "health",
    color: "#FFDAED",
    image:
      "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:
      "Health is the most important thing that we should protect. Health insurance will take care of medical expenses.",
  },
];

export default function LandingPage({}) {
  const { path, url } = useRouteMatch();

  const Card = () => (
    <div>
      {" "}
      <div className="bannner">
        {" "}
        <h1 className="BannerHeader">
          Smart way <br />
          to buy insurance.
        </h1>
        <p className="BannerPera">
          Compare insurance policies, rate, detail, & buy instantly in less than
          five minutes!
        </p>
      </div>
      <div>
        {insurances.map((insurance, i) => (
          <Link className="Link" to={`${url}/${insurance.url}`}>
            <div
              // style={{ backgroundColor: insurance.color }}
              style={{ backgroundColor: insurance.color }}
              className="insuranceDiv"
              key={i}
            >
              {/* <img src={insurance.image} alt="" /> */}
              <car />
              <h1 className="insurance">{insurance.title}</h1>
              <p>{insurance.description}</p>
            </div>
          </Link>
        ))}
      </div>
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
