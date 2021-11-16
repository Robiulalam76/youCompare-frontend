import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import "./Auto.css";

// image
import commercial from "../../accets/commercial.svg";
import car from "../../accets/car-image.svg";
// import privateAuto from "../../accets/private.svg";
// import threeWheel from "../../accets/threeWheel.svg";
// import twowheeler from "../../accets/twowheeler.svg";

import CommercialAuto from "./CommercialAuto/CommercialAuto";
// import PrivateAuto from "./PrivateAuto/PrivateAuto";
// import ThreeWheeler from "./ThreeWheeler/ThreeWheeler";
// import TwoWheeler from "./TwoWheeler/TwoWheeler";

import AutoCard from "../Card/Card";
import { subAutoInsurances } from "../../Data/data";
import MuiStepper from "../MuiStepper";
import Banner from "../Banner";

// stepped forms
import BrandForm from "../Forms/Auto/BrandForm";
import ModelNYearsForm from "../Forms/Auto/ModelNYearsForm";
import DetailsForm from "../Forms/Auto/DetailsForm";

const steps = [
  {
    label: "Select Brand",
    component: <BrandForm />,
  },
  {
    label: "Model And Year",
    component: <ModelNYearsForm />,
  },
  {
    label: "Details",
    component: <DetailsForm />,
  },
  {
    label: "Compare",
  },
];

function Auto() {
  const { path, url } = useRouteMatch();

  const title = "Auto";
  const description =
    "Auto insurance is designed to protect yourself and others against many various risks.";

  const renderSteps = (title) => {
    switch (title) {
      case "Private Vehicle":
        return steps;
      case "Three Wheeler":
        return steps;
      case "Two Wheeler":
        return steps;
      default:
        return;
    }
  };

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
        {subAutoInsurances.map((insurance) =>
          insurance.title === "Commercial Vehicle" ? (
            <Route path={`${path}/commercial`}>
              <CommercialAuto
                commercial={commercial}
                steps={steps}
                key="commercial"
              />
            </Route>
          ) : (
            <Route path={`${path}/${insurance.url}`} key={insurance.title}>
              <Banner
                title={insurance.title}
                description={insurance.description}
                imageSrc={insurance.image}
                stepper={<MuiStepper steps={renderSteps(insurance.title)} />}
              />
            </Route>
          )
        )}
      </Switch>
    </div>
  );
}

export default Auto;
