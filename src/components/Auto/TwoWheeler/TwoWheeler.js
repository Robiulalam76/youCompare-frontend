import { Grid } from "@mui/material";
import React from "react";
import InsuranceStepper from "../../StepperInsuranceAuto";

function TwoWheeler({ TwoWheeler }) {
  return (
    <Grid container>
      <Grid lg={6} md={6} xl={5} sm={12} xs={12} className="GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h1 className="BannerHeader">Three Wheel </h1>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={TwoWheeler} alt="" />
      </Grid>
      <Grid lg={6} md={6} xl={5} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default TwoWheeler;
