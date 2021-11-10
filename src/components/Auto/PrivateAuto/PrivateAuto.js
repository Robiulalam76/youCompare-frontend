import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import InsuranceStepper from "../../StepperInsuranceAuto";

function PrivateAuto({ privateAuto }) {
  return (
    <Grid style={{ paddingTop: "4vh" }} container>
      <Grid
        // style={{ height: "70vh" }}
        lg={5}
        xl={5}
        md={5}
        sm={12}
        xs={12}
        className="GridDiv height75"
      >
        <div style={{ justifyContent: "space-around" }}>
          <h1
            style={{
              fontWeight: "bold",
              lineHeight: "3rem",
              marginBottom: "1rem",
            }}
            className="BannerHeader"
          >
            Private
          </h1>
          <h1
            style={{
              fontWeight: "bold",
              lineHeight: "3rem",
              marginBottom: "1rem",
            }}
            className="BannerHeader"
          >
            Car
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
        <img
          className="img imgR"
          // style={{  }}
          src={privateAuto}
          alt=""
        />
      </Grid>
      <Grid lg={7} xl={7} md={7} sm={12} xs={12}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
}

export default PrivateAuto;
