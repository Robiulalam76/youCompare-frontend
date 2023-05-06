import React from "react";

import "animate.css";

// image
import group1 from "../../accets/Group 1907.svg";
import group2 from "../../accets/Group 2005.svg";
import group3 from "../../accets/Group 2751.svg";
import store from "../../accets/Image 7.png";

import logo1 from "../../accets/logo1/NoPath.png";
import logo2 from "../../accets/logo1/NoPath - Copy.png";
import logo3 from "../../accets/logo1/NoPath - Copy (2).png";
import logo4 from "../../accets/logo1/NoPath - Copy (3).png";
import logo5 from "../../accets/logo1/NoPath - Copy (4).png";

import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import reviewBanner from "../../accets/reviewBanner.PNG";

const methodology = {
  // margin: "3rem 0 0rem 0rem",
  textAlign: "center",
  // padding: "2rem 3rem",
};
const methodStyle = { display: "flex", justifyContent: "space-around" };
const stepStyle = {};
const community = { ...methodology };
const getApp = { marginTop: "1rem" };

const steps = [
  {
    title: "Enter Details",
    description:
      "Answer a few simple question, so the program could generate a custom quote for you.",
    image: group1,
  },
  {
    title: "Compare",
    description: "View the quotes, compare them and choose the best deal.",
    image: group2,
  },
  {
    title: "Buy Online",
    description:
      "Get instant insurance from the company of your choice through us.",
    image: group3,
  },
];

const ImageBox = styled(Box)(({ theme }) => ({
  height: "200px",
  marginTop: "5vw",
  [theme.breakpoints.up("md")]: {
    width: "70%",
    marginRight: "auto",
    marginTop: "5vw",
  },
}));

export default function Showcase() {
  return (
    <React.Fragment>
      {/* logo's of sponsore */}
      <Grid
        container
        style={{
          margin: "7% 0% 4% 0%",
          padding: "0px 1%",
          display: "flex",
          justifyContent: "center",
          alignItems: "cente",
        }}
      >
        <Grid item xs={2}>
          <img style={{ height: "55%" }} src={logo1} alt="" />
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img style={{ height: "55%", width: "60%" }} src={logo2} alt="" />
          </div>
        </Grid>
        <Grid item xs={2}>
          <img style={{ height: "55%" }} src={logo3} alt="" />
        </Grid>
        <Grid item xs={2}>
          <img style={{ height: "55%" }} src={logo4} alt="" />
        </Grid>
        <Grid item xs={2}>
          <img style={{ height: "55%" }} src={logo5} alt="" />
        </Grid>
      </Grid>

      {/* How it works Section */}
      <div style={methodology}>
        <h1>How does it work?</h1>
        <p style={{ marginBottom: "2%" }} className="pera">
          Complete 3 simple steps to find the best insurance plan for your or
          your family!
        </p>
        <Grid container style={methodStyle}>
          {steps.map((step, i) => (
            <Grid
              item
              xl={4}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="step"
              style={(stepStyle, { padding: "2%" })}
              key={i}
            >
              <div style={{ height: "300px" }}>
                <img
                  src={step.image}
                  className="showcaseImage"
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                    padding: "10%",
                  }}
                  alt="Step Logo"
                />
              </div>
              <h3>{step.title}</h3>
              <p className="ThirdHeaderPera" style={{ padding: "2% 10%" }}>
                {step.description}
              </p>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Community Section */}
      <div className="p5" style={community}>
        <b className="SecondHeaderTitle">1000+ people believed in us.</b>
        <p className="ThirdHeaderPera" style={{ padding: "2% 18%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          finibus sapien lorem, molestie dictum urna accumsan sit amet.
        </p>

        <div>
          <img
            src={reviewBanner}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>

      {/* Get the app */}
      <Grid container className="store">
        <Grid
          item
          lg={6}
          xl={6}
          md={6}
          sm={6}
          xs={12}
          className="animate__animated animate__bounce animate__bounceInLeft"
          style={getApp}
          className="responsiceMiddle"
        >
          <h5 className="appHeader">Get the</h5>
          <h5 style={{ marginBottom: "4%" }} className="appHeader">
            HilltopCompare
          </h5>
          <p className="ThirdHeaderPera">
            Lorem ipsum dolor sit amet, a consectetur adipiscing elit. Maecenas
            finibus sapien lorem, molestie dictum urna accumsan sit amet.
          </p>
        </Grid>
        <Grid item lg={6} md={6} xl={6} sm={6} xs={12} style={{ width: "50%" }}>
          <img className="SubAuto appImage" src={store} alt="" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
