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

import { Alert, Box } from "@mui/material";

import AutoCard from "../Card/Card";
import { subAutoInsurances } from "../../Data/data";
// import MuiStepper from "../MuiStepper";
import StepperHelper from "../StepperHelper";
import Banner from "../Banner";

// stepped forms
import BrandForm from "../Forms/Auto/BrandForm";
import ModelNYearsForm from "../Forms/Auto/ModelNYearsForm";
import DetailsForm from "../Forms/Auto/DetailsForm";

// import {
//   brandValidation,
//   modelYearValidation,
//   detailsValidation,
// } from "../Forms/Auto/validator";
import { useSelector } from "react-redux";

import { scrollToError, scrollToTop } from "../../utils/scrolling";

// const renderComponent = (activeStep) => {
//   switch (activeStep) {
//     case 0:
//       return <BrandForm />;
//     case 1:
//       return <ModelNYearsForm />;
//     case 2:
//       return <DetailsForm />;
//     default:
//       return;
//   }
// };

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
                  <SteppedForms title={insurance.title} />
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
                  <SteppedForms title={insurance.title} />
                </div>
              </Banner>
            </Route>
          )
        )}
      </Switch>
    </div>
  );
}

const SteppedForms = ({ title }) => {
  const autoQuery = useSelector((state) => state.autoQuery);
  const { fullName, phone, email } = useSelector((state) => state.searcher);

  const steps = ["Brand Selection", "Model and Year", "Details", "Compare"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState("");

  const validation = (step) => {
    switch (step) {
      case 0:
        if (!autoQuery.brand || !autoQuery.carNo) return false;
        return true;
      case 1:
        if (!autoQuery.model || !autoQuery.year) return false;
        return true;
      case 2:
        if (
          !fullName ||
          !email ||
          !phone ||
          !autoQuery.typeofInsurance ||
          !autoQuery.idv
        )
          return false;
        return true;
      default:
        return true;
    }
  };

  const handleBack = () => {
    setActiveStep((activeStep) => activeStep - 1);
    setError("");
  };

  const handleNext = () => {
    if (!validation(activeStep)) {
      setError("All fields are required.");
      scrollToError();
      return;
    }
    setActiveStep((activeStep) => activeStep + 1);
    setError("");
  };

  React.useEffect(() => {
    scrollToTop();
  }, [activeStep]);
  return (
    <StepperHelper
      steps={steps}
      activeStep={activeStep}
      handleBack={handleBack}
      handleNext={handleNext}
    >
      <div>
        {error ? (
          <Alert severity="error" sx={{ mt: 3, mb: 1 }}>
            {error}
          </Alert>
        ) : null}
      </div>
      <Box sx={{ mt: 2 }}>
        {activeStep === 0 ? (
          <BrandForm />
        ) : activeStep === 1 ? (
          <ModelNYearsForm />
        ) : activeStep === 2 ? (
          <DetailsForm title={title} />
        ) : null}
      </Box>
    </StepperHelper>
  );
};
