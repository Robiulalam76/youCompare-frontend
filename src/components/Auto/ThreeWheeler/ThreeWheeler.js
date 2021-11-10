import { Grid } from "@mui/material";
import React from "react";
import InsuranceStepper from "../../StepperInsuranceAuto";

function ThreeWheeler({ ThreeWheeler }) {
  return (
    <Grid style={{ paddingTop: "4vh" }} container>
      <Grid lg={5} xl={5} md={5} sm={12} xs={12} className=" height75 GridDiv">
        <div style={{ justifyContent: "space-around" }}>
          <h1
            style={{
              fontWeight: "bold",
              lineHeight: "3rem",
              marginBottom: "1rem",
            }}
            className="BannerHeader"
          >
            Three Wheel
          </h1>
          <p
            className="BannerSubHeader"
            style={{
              width: "100%",
              marginTop: "1rem",
              color: "#74769E",
            }}
          >
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img className="img" src={ThreeWheeler} alt="" />
      </Grid>
      <Grid lg={6} md={6} xl={5} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default ThreeWheeler;
