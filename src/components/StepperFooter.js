import React from "react";
import PropTypes from "prop-types";

import { Box, Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

export default function StepperFooter(props) {
  const { activeStep, handleBack, handleNext, stepsLength, link } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
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

        <Button onClick={handleNext} type="submit">
          {activeStep === stepsLength - 1 ? (
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

StepperFooter.prototypes = {
  activeStep: PropTypes.number,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  stepsLength: PropTypes.number,
};
