import { Grid } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import InsuranceStepper from "../StepperInsurance";
import "./Health.css";

// image
import health from "../../accets/health.svg";

import ppo from "../../accets/Group 3044.svg";
import hmo from "../../accets/health (2).svg";
import healthService from "../../accets/Group 3231.svg";
import poinOfService from "../../accets/37520.png";

// import CommercialAuto from "./CommercialAuto/CommercialAuto";
// import PrivateAuto from "./PrivateAuto/PrivateAuto";
// import ThreeWheeler from "./ThreeWheeler/ThreeWheeler";
// import TwoWheeler from "./TwoWheeler/TwoWheeler";
import AutoCard from "../Card/Card";

import {
  subHealthInsurances,
  subInsurances,
  subLifeInsurances,
  subTravelInsurances,
} from "../../Data/data";
import PPO from "./PPO/PPO";
import HMO from "./HMO/HMO";
import PointOfService from "./PoinOfService/PointOfService";
import HealthSaving from "./HealthSaving/HealthSaving";

const insuranceDiv = {
  display: "inline-grid",
  width: "90%",
  border: "1px solid lightgray",
  margin: "1rem 1%",
  padding: "2%",
  height: "250px",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: "white",
};

function Travel() {
  const { path, url } = useRouteMatch();

  const commercialTitle = "Health Insurance";
  const commercialDescription =
    "Health insurance is designed to protect yourself and others against";
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
        <Route path={`${path}/PPO`}>
          <PPO Health={ppo} />
        </Route>
        <Route path={`${path}/HMO`}>
          <HMO Health={HMO} />
        </Route>
        <Route path={`${path}/point-of-service`}>
          <PointOfService Health={poinOfService} />
        </Route>
        <Route path={`${path}/health-saving`}>
          <HealthSaving Health={healthService} />
        </Route>
      </Switch>
    </div>
  );
}

export default Travel;
