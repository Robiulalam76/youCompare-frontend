import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import "./Health.css";

// image
import health from "../../accets/health.svg";

import AutoCard from "../Card/Card";
import Banner from "../Banner";
import { subHealthInsurances } from "../../Data/data";

import PPO from "./PPO";

export default function Travel() {
  const { path, url } = useRouteMatch();

  const commercialTitle = "Health";
  const commercialDescription =
    "Health is the most important thing we should protect, when we can't take care of ourselves, then insurance will help.";

  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={commercialTitle}
            description={commercialDescription}
            url={url}
            subInsuranceArray={subHealthInsurances}
            sideBanner={health}
          />
        </Route>
        {subHealthInsurances.map((insurance) => (
          <Route path={`${path}/${insurance.url}`} key={insurance.title}>
            <Banner
              title={insurance.title}
              description={insurance.description}
              imageSrc={insurance.image}
            >
              <PPO />
            </Banner>
          </Route>
        ))}
      </Switch>
    </div>
  );
}
