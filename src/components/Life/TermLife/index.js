import React from "react";
import { Alert } from "@mui/material";

import StepperHelper from "../../StepperHelper";

import TermLifeCoverage from "../../Forms/Life/TermLifeCoverage";
import Insurance from "../../Forms/Life/Insurance";

import { useSelector } from "react-redux";

import { scrollToTop, scrollToError } from "../../../utils/scrolling";
import { Redirect } from "react-router";

const renderComponent = (currentStep) => {
  switch (currentStep) {
    case 0:
      return <TermLifeCoverage />;
    case 1:
      return <Insurance />;
    case 2:
      return <Redirect to="/life/compare" />;
    default:
      return;
  }
};

export default function TermLife() {
  const steps = ["Cover", "Insurance", "Compare"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = React.useState("");

  const { fullName, email, phone } = useSelector((state) => state.searcher);
  const {
    coverAmount,
    coverFor,
    gender,
    smoke,
    employment,
    age,
    termLength,
    healthIssue,
    healthIssue_father,
    healthIssue_mother,
    ageOfFather,
    ageOfMother,
  } = useSelector((state) => state.lifeQuery);

  const validation = (step) => {
    switch (step) {
      case 0:
        if (!coverFor || !coverAmount) return false;
        else if (
          coverFor !== "Parents" &&
          (!gender ||
            !smoke ||
            !employment ||
            !age ||
            !termLength ||
            !healthIssue)
        ) {
          return false;
        } else if (
          coverFor === "Parents" &&
          (!smoke ||
            !termLength ||
            !healthIssue_father ||
            !healthIssue_mother ||
            !ageOfFather ||
            !ageOfMother)
        ) {
          return false;
        } else return true;
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
            <Alert severity="error" sx={{ mt: 2, mb: 1 }}>
              {error}
            </Alert>
          ) : null}
        </div>

        {renderComponent(activeStep)}
      </StepperHelper>
    </div>
  );
}
