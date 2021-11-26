import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";

import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

// link -> compare page link
// array of object
function TestStepper({ steps, link, children, handleNext, handleBack, activeStep }) {
  const theme = useTheme();
  const maxSteps = steps.length;

  return (
    <React.Fragment>
      <Box>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {children}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <BackButton
            activeStep={activeStep}
            handleBack={handleBack}
            theme={theme}
            stepsLength={steps.length}
          />

          <Box sx={{ flex: "1 1 auto" }} />

          <NextButton
            activeStep={activeStep}
            handleNext={handleNext}
            theme={theme}
            stepsLength={steps.length}
            link={link}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}

TestStepper.propTypes = {
  steps: PropTypes.array,
  link: PropTypes.string,
};

const BackButton = ({ activeStep, handleBack, theme, stepsLength }) => {
  return (
    <React.Fragment>
      <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
        Back
      </Button>
    </React.Fragment>
  );
};

const NextButton = ({ activeStep, handleNext, theme, stepsLength, link }) => {
  return (
    <React.Fragment>
      {activeStep !== stepsLength - 2 ? (
        <Button onClick={handleNext}>
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      ) : (
        <Link className="Link" to={link}>
          <Button variant={"contained"}>Compare</Button>
        </Link>
      )}
    </React.Fragment>
  );
};

export default TestStepper;
