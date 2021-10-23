import React from "react";
import { Grid } from "@mui/material";
import InsuranceStepper from "../../StepperInsurance";
function SingleTrip({ Travel }) {
  return (
    <Grid container>
      <Grid lg={5} className="GridDiv">
        <div>
          <h4 className="BannerHeaderSmall">Single Trip Insurance</h4>
          <p>
            Single Trip insurance is designed to protect yourself and others
            against many various risks.
          </p>
        </div>
        <img src={Travel} alt="" />
      </Grid>
      <Grid lg={7}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default SingleTrip;
