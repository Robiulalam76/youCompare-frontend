import { Grid } from "@mui/material";
import React from "react";
import InsuranceStepper from "../../StepperInsurance";

function GroupLife({ Life }) {
  return (
    <Grid container>
      <Grid lg={5} className="GridDiv">
        <div>
          <h4 className="BannerHeaderSmall">PermanentLife Insurance</h4>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={Life} alt="" />
      </Grid>
      <Grid lg={7}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default GroupLife;
