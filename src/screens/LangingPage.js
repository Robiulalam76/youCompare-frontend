import React, { Suspense, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Auto from "../components/Auto";

import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "../components/Layout";
import SingleInsurance from "../components/SingleInsurance";
import Spinner from "../components/Spinner";
import Login from "./auth/Login";

const rootStyle = {
  textAlign: "center",
};
const insuranceDiv = {
  display: "inline-grid",
  width: "20%",
  border: "1px solid lightgray",
  margin: "1rem 1%",
  padding: "0 1%",
  height: "200px",
  cursor: "pointer",
};

const insurances = [
  {
    title: "Auto Insurance",
    url: "auto",
    image:
      "https://images.unsplash.com/photo-1502067294280-729dc7fea201?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    description:
      "Auto insurance is designed to protect yourself and others agains many various risks",
  },
  {
    title: "Life Insurance",
    url: "life",
    image:
      "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    description:
      "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
  },
  {
    title: "Travel Insurance",
    url: "travel",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    description:
      "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
  },
  {
    title: "Health Isurance",
    url: "health",
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
      <div>
        {insurances.map((insurance, i) => (
          <Link to={`${url}/${insurance.url}`}>
            <div style={insuranceDiv} key={i}>
              <h3>{insurance.title}</h3>
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
          <h1>Smart way to buy insurance.</h1>

          <div className="tabs">
            <Switch>
              <Route path={`${path}`} exact component={Card} />
              <Route path={`${path}/auto`} component={Auto} />
            </Switch>
          </div>
          {/* {insurance !== "" ? <SingleInsurance insurance={insurance} /> : ""} */}
        </div>
      </Layout>
    </React.Fragment>
  );
}
