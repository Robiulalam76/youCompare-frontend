import React from "react";
import { Grid } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceHealth";
function HealthSaving({ Health }) {
  return (
    <Grid container>
      <Grid lg={5} md={5} xl={5} sm={12} xs={12} className="GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h4 className="BannerHeaderSmall">HealthSaving Insurance</h4>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={Health} alt="" />
      </Grid>
      <Grid style={{ padding: "0% 1%" }} lg={7} md={7} xl={7} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default HealthSaving;
