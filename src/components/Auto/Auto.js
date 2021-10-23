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
import "./Auto.css";

// image
import commercial from "../../accets/commercial.svg";
import car from "../../accets/car-image.svg";
import privateAuto from "../../accets/private.svg";
import threeWheel from "../../accets/threeWheel.svg";
import twowheeler from "../../accets/twowheeler.svg";

import CommercialAuto from "./CommercialAuto/CommercialAuto";
import PrivateAuto from "./PrivateAuto/PrivateAuto";
import ThreeWheeler from "./ThreeWheeler/ThreeWheeler";
import TwoWheeler from "./TwoWheeler/TwoWheeler";
import AutoCard from "../Card/Card";
import { subInsurances } from "../../Data/data";

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

function Auto() {
  const { path, url } = useRouteMatch();

  const commercialTitle = "Auto Insurance";
  const commercialDescription =
    "Auto insurance is designed to protect yourself and others against";

  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={commercialTitle}
            description={commercialDescription}
            url={url}
            subInsuranceArray={subInsurances}
            sideBanner={car}
          />
        </Route>
        <Route path={`${path}/commercial`}>
          <CommercialAuto commercial={commercial} />
        </Route>
        <Route path={`${path}/private`}>
          <PrivateAuto privateAuto={privateAuto} />
        </Route>
        <Route path={`${path}/two-wheeler`}>
          <TwoWheeler TwoWheeler={twowheeler} />
        </Route>
        <Route path={`${path}/three-wheeler`}>
          <ThreeWheeler ThreeWheeler={threeWheel} />
        </Route>
      </Switch>
    </div>
  );
}

export default Auto;
