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

import { Grid, TextField } from "@mui/material";

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

export default function Showcase() {
  return (
    <React.Fragment>
      {/* logo's of sponsore */}
      <Grid
        style={{
          marginTop: "4%",
          padding: "0px 5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "cente",
        }}
      >
        <Grid xs={2}>
          <img style={{ height: "55%" }} src={logo1} alt="" />
        </Grid>
        <Grid xs={2}>
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
        <Grid xs={2}>
          <img style={{ height: "55%" }} src={logo3} alt="" />
        </Grid>
        <Grid xs={2}>
          <img style={{ height: "55%" }} src={logo4} alt="" />
        </Grid>
        <Grid xs={2}>
          <img style={{ height: "55%" }} src={logo5} alt="" />
        </Grid>
      </Grid>

      {/* How it works Section */}
      <div style={methodology}>
        <h1>How does it work?</h1>
        <p style={{ marginBottom: "5%" }} className="pera">
          Complete 3 simple steps to find the best insurance plan for your or
          your family!
        </p>
        <Grid container style={methodStyle}>
          {steps.map((step, i) => (
            <Grid
              xl={4}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="step"
              style={(stepStyle, { padding: "2%" })}
              key={i}
              item
            >
              <div style={{ height: "300px" }}>
                <img
                  src={step.image}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                  }}
                  alt="Step Logo"
                />
              </div>
              <h3>{step.title}</h3>
              <p style={{ padding: "2% 10%" }}>{step.description}</p>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Community Section */}
      <div className="p5" style={community}>
        <b className="SecondHeaderTitle">1000+ people believed in us.</b>
        <p style={{ padding: "2% 18%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          finibus sapien lorem, molestie dictum urna accumsan sit amet.
        </p>
      </div>

      {/* Get the app */}
      <Grid container className="store">
        <Grid
          lg={6}
          xl={6}
          md={12}
          sm={12}
          xs={12}
          className="animate__animated animate__bounce animate__bounceInLeft"
          style={getApp}
          className="responsiceMiddle"
        >
          <p className="appHeader">Get the</p>
          <p className="appHeader">youcompare app</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            finibus sapien lorem, molestie dictum urna accumsan sit amet.
          </p>
        </Grid>
        <Grid lg={6} md={12} xl={6} sm={12} xs={12} style={{ width: "50%" }}>
          <img className="SubAuto appImage" src={store} alt="" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
