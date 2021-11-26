import React from "react";
import { Alert, Box } from "@mui/material";
import Cover from "../../Forms/Health/Cover";
import Insurance from "../../Forms/Health/Insurance";

import { useSelector } from "react-redux";

import { scrollToTop, scrollToError } from "../../../utils/scrolling";
import { Redirect } from "react-router";
import StepperHelper from "../../StepperHelper";

const renderComponent = (currentStep) => {
  switch (currentStep) {
    case 0:
      return <Cover />;
    case 1:
      return <Insurance />;
    case 2:
      return <Redirect to="/health/compare" />;
    default:
      return;
  }
};

export default function PPO() {
  const steps = ["Cover", "Insurance", "Compare"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState("");

  const { fullName, email, phone } = useSelector((state) => state.searcher);
  const { insuranceType, coverFor, organizationName } = useSelector(
    (state) => state.healthQuery
  );

  const validation = (step) => {
    switch (step) {
      case 0:
        if (!insuranceType || !coverFor) return false;
        else if (coverFor === "Group" && !organizationName) return false;
        else return true;
      case 1:
        if (!fullName || !email || !phone) return false;
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
    <div>
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
        <Box sx={{ mt: 2 }}>{renderComponent(activeStep)}</Box>
      </StepperHelper>
    </div>
  );
}
