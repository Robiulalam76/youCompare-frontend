import React from "react";
import { Stepper, Step, StepLabel, Box, Button } from "@mui/material";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useTheme } from "@mui/material/styles";

export default function StepperHelper(props) {
  const { steps, activeStep, handleBack, handleNext, children } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      {/**Stepper Label */}
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/** Child Component */}
      {children}

      {/** Stepper Footer */}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>

        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? (
            "Compare"
          ) : (
            <>
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </>
          )}
        </Button>
      </Box>
    </React.Fragment>
  );
}
