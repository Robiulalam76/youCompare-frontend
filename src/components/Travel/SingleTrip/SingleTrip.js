import React from "react";
import { Grid } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceTravel";
function SingleTrip({ Travel }) {
  return (
    <Grid container>
      <Grid lg={5} md={5} xl={5} sm={12} xs={12} className="GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h4 className="BannerHeaderSmall">Single Trip Insurance</h4>
          <p>
            Single Trip insurance is designed to protect yourself and others
            against many various risks.
          </p>
        </div>
        <img src={Travel} alt="" />
      </Grid>
      <Grid style={{ padding: "1%" }} lg={7} md={7} xl={7} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default SingleTrip;
