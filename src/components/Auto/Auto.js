import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import "./Auto.css";

// image
import commercial from "../../accets/commercial.svg";
import car from "../../accets/car-image.svg";

import CommercialAuto from "./CommercialAuto/CommercialAuto";

import AutoCard from "../Card/Card";
import { subAutoInsurances } from "../../Data/data";
import Banner from "../Banner";

// components
import ThreeWheeler from "./ThreeWheeler";

export default function Auto() {
  const { path, url } = useRouteMatch();
  const title = "Auto";
  const description =
    "Auto insurance is designed to protect yourself and others against many various risks.";

  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={title}
            description={description}
            url={url}
            subInsuranceArray={subAutoInsurances}
            sideBanner={car}
          />
        </Route>
        {subAutoInsurances.map((insurance, i) =>
          insurance.title === "Commercial Vehicle" ? (
            <Route path={`${path}/commercial`} key={i}>
              <CommercialAuto commercial={commercial} key="commercial">
                <div className="SteeperDiv">
                  <ThreeWheeler />
                </div>
              </CommercialAuto>
            </Route>
          ) : (
            <Route path={`${path}/${insurance.url}`} key={insurance.title}>
              <Banner
                title={insurance.title}
                description={insurance.description}
                imageSrc={insurance.image}
              >
                <div className="SteeperDiv">
                  <ThreeWheeler />
                </div>
              </Banner>
            </Route>
          )
        )}
      </Switch>
    </div>
  );
}
