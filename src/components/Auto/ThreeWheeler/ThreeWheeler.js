import { Grid } from "@mui/material";
import React from "react";
import InsuranceStepper from "../../StepperInsurance";

function ThreeWheeler({ ThreeWheeler }) {
  return (
    <Grid container>
      <Grid lg={5} className="GridDiv">
        <div>
          <h1 className="BannerHeader">Three Wheel </h1>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={ThreeWheeler} alt="" />
      </Grid>
      <Grid lg={7}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default ThreeWheeler;
