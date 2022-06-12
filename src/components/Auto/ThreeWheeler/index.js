import React from "react";
import { Alert, Box } from "@mui/material";
import StepperHelper from "../../StepperHelper";

// stepped forms
import BrandForm from "../../Forms/Auto/BrandForm";
import ModelNYearsForm from "../../Forms/Auto/ModelNYearsForm";
import DetailsForm from "../../Forms/Auto/DetailsForm";

import { useSelector } from "react-redux";

import { scrollToError, scrollToTop } from "../../../utils/scrolling";
import { Redirect } from "react-router";

export default function ThreeWheeler() {
  const autoQuery = useSelector((state) => state.autoQuery);
  const { fullName, phone, email } = useSelector((state) => state.searcher);

  const steps = ["Brand Selection", "Details", "Compare"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState("");
  console.log(autoQuery);

  const validation = (step) => {
    switch (step) {
      case 0:
        if (!autoQuery.brand || !autoQuery.carNo) return true;
        return true;
      // case 1:
      //   if (!autoQuery.model || !autoQuery.year) return true;
      //   return true;
      case 1:
        if (!fullName || !email || !phone || !autoQuery.typeofInsurance)
          return false;
        if (autoQuery.typeofInsurance === "comprehensive" && !autoQuery.idv)
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
          <>
            <BrandForm />
            <ModelNYearsForm />
          </>
        ) : activeStep === 1 ? (
          // <ModelNYearsForm />
          <DetailsForm title="Three Wheeler" />
        ) : activeStep === 2 ? (
          <Redirect to="/auto/compare" />
        ) : null}
        {/* <DetailsForm title="Three Wheeler" />
        activeStep === 3 ? (
          <Redirect to="/auto/compare" />
        ) : null} */}
      </Box>
    </StepperHelper>
  );
}
