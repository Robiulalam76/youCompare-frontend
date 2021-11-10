import React from "react";
import { Grid } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceTravel";
function MuliTrip({ Travel }) {
  return (
    <Grid style={{ paddingTop: "4vh" }} container>
      <Grid lg={5} md={5} xl={5} sm={12} xs={12} className="GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "-1rem",
            }}
            className="BannerHeader"
          >
            MuliTrip
          </h4>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "-1rem",
            }}
            className="BannerHeader"
          >
            Insurance
          </h4>
          <p
            className="BannerSubHeader"
            style={{
              width: "100%",
              marginTop: "1rem",
              color: "#74769E",
            }}
          >
            MuliTrip insurance is designed to protect yourself and others
            against many various risks.
          </p>
        </div>
        <img className="imgpermanentLife" src={Travel} alt="" />
      </Grid>
      <Grid style={{ padding: "1%" }} lg={7} md={7} xl={7} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default MuliTrip;
