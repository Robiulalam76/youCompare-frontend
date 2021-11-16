import * as React from "react";
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

export default function MuiStepper({ steps }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <React.Fragment>
      {/* For Small Screen */}
      <Hidden smUp>
        <Box sx={{ width: "100%" }} className="SteeperDiv SubAuto">
          <Typography>{steps[activeStep].label}</Typography>

          {steps.map((step, i) => {
            if (i === activeStep) return step.component;
          })}

          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ mt: 2, fontSize: ".8rem", color: "text.secondary" }}
            nextButton={
              <NextButton
                activeStep={activeStep}
                handleNext={handleNext}
                theme={theme}
                stepsLength={steps.length}
              />
            }
            backButton={
              <BackButton
                activeStep={activeStep}
                handleBack={handleBack}
                theme={theme}
                stepsLength={steps.length}
              />
            }
          />
        </Box>
      </Hidden>

      {/*For Large Screen */}
      <Hidden only="xs">
        <Box sx={{ width: "100%" }} className="SteeperDiv SubAuto">
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {steps.map((step, i) => {
            if (i === activeStep) return step.component;
          })}

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
            />
          </Box>
        </Box>
      </Hidden>
    </React.Fragment>
  );
}

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

const NextButton = ({ activeStep, handleNext, theme, stepsLength }) => {
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
        <Link className="Link" to="/life/compare">
          <Button variant={"contained"}>Compare</Button>
        </Link>
      )}
    </React.Fragment>
  );
};
