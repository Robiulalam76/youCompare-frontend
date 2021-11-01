import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceAuto";

function PrivateAuto({ privateAuto }) {
  return (
    <Grid container>
      <Grid lg={7} xl={6} md={7} sm={12} xs={12} className="GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h1 className="BannerHeader">Private Car</h1>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={privateAuto} alt="" />
      </Grid>
      <Grid lg={5} xl={12} md={5} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default PrivateAuto;
