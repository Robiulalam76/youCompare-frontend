import React from "react";
import { Grid } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceHealth";
function HealthSaving({ Health }) {
  return (
    <Grid container>
      <Grid lg={5} className="GridDiv">
        <div>
          <h4 className="BannerHeaderSmall">HealthSaving Insurance</h4>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={Health} alt="" />
      </Grid>
      <Grid lg={7}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default HealthSaving;
