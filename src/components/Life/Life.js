import { Grid } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import InsuranceStepper from "../StepperInsuranceLife";
import "./Life.css";

// image
import permanentLife from "../../accets/40781@2x.png";
import life from "../../accets/life.svg";
import term from "../../accets/40781@2x.png";
import group from "../../accets/Group 2943.svg";
import twowheeler from "../../accets/twowheeler.svg";

// import CommercialAuto from "./CommercialAuto/CommercialAuto";
// import PrivateAuto from "./PrivateAuto/PrivateAuto";
// import ThreeWheeler from "./ThreeWheeler/ThreeWheeler";
// import TwoWheeler from "./TwoWheeler/TwoWheeler";
import AutoCard from "../Card/Card";
import PermanentLife from "./PermanentLife/PermanentLife";
import TempLife from "./TempLife/TempLife";
import GroupLife from "./GroupLife/GroupLife";
import { subInsurances, subLifeInsurances } from "../../Data/data";

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

function Life() {
  const { path, url } = useRouteMatch();

  const commercialTitle = "Life Insurance";
  const commercialDescription =
    "Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.";

  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={commercialTitle}
            description={commercialDescription}
            url={url}
            subInsuranceArray={subLifeInsurances}
            sideBanner={life}
            rowNumber={4}
          />
        </Route>
        <Route path={`${path}/permanent`}>
          <PermanentLife permanentLife={permanentLife} />
        </Route>
        <Route path={`${path}/term`}>
          <TempLife Life={term} />
        </Route>
        <Route path={`${path}/group`}>
          <GroupLife Life={group} />
        </Route>
      </Switch>
    </div>
  );
}

export default Life;
