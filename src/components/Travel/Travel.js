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
import "./Travel.css";

// image
import travel from "../../accets/driver.svg";

import single from "../../accets/Group 3347.svg";
import multi from "../../accets/Group 3437.svg";

// import CommercialAuto from "./CommercialAuto/CommercialAuto";
// import PrivateAuto from "./PrivateAuto/PrivateAuto";
// import ThreeWheeler from "./ThreeWheeler/ThreeWheeler";
// import TwoWheeler from "./TwoWheeler/TwoWheeler";
import AutoCard from "../Card/Card";

import {
  subInsurances,
  subLifeInsurances,
  subTravelInsurances,
} from "../../Data/data";
import PPO from "./SingleTrip/SingleTrip";
import HMO from "./MuliTrip/MuliTrip";
import SingleTrip from "./SingleTrip/SingleTrip";
import MuliTrip from "./MuliTrip/MuliTrip";

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

  const commercialTitle = "Travel Insurance";
  const commercialDescription =
    "Travel insurance is designed to protect yourself and others against";
  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={commercialTitle}
            description={commercialDescription}
            url={url}
            subInsuranceArray={subTravelInsurances}
            sideBanner={travel}
          />
        </Route>
        <Route path={`${path}/single-trip`}>
          <SingleTrip Travel={single} />
        </Route>
        <Route path={`${path}/multi-trip`}>
          <MuliTrip Travel={multi} />
        </Route>
      </Switch>
    </div>
  );
}

export default Travel;
