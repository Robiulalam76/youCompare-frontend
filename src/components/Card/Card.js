import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
// image
import commercial from "../../accets/commercial.svg";

import privateAuto from "../../accets/private.svg";
import threeWheel from "../../accets/threeWheel.svg";
import twowheeler from "../../accets/twowheeler.svg";
import SubCard from "../Auto/SubCard/SubCard";

const RootBox = styled("div")(({ theme }) => ({
  marginTop: "3rem",
  height: "auto",
  [theme.breakpoints.up("lg")]: {
    minHeight: "80vh",
  },
}));

const ResponsiveButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    width: "100%",
    margin: theme.spacing(3, 0),
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  lineHeight: "4.5rem",
  [theme.breakpoints.only("xs")]: {
    fontSize: "2.5rem",
    lineHeight: "3rem",
    textAlign: "center",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    textAlign: "center",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#74769E",
  fontSize: "1rem",
  fontWeight: "normal",
  [theme.breakpoints.only("xs")]: {
    fontSize: ".85rem",
    lineHeight: "1.2rem",
    textAlign: "center",
  },
  [theme.breakpoints.only("sm")]: {
    textAlign: "center",
  },
}));

const ShadowedBox = styled("div")(
  ({ theme }) => `
  background-color: rgb(255, 255, 255);
  padding: ${theme.spacing(3)};
  border-radius: 10px;
  box-shadow: 0px 0px 16px 4px rgba(240, 240, 240, 0.75);
  `
);

const ImageBox = styled("div")(({ theme }) => ({
  paddingTop: "3rem",
  width: "400px",
  margin: "0 auto",
  [theme.breakpoints.only("xs")]: {
    width: "300px",
  },
  [theme.breakpoints.only("md")]: {
    paddingTop: "0",
  },
}));

function AutoCard({
  rowNumber = 6,
  sideBanner,
  url,
  subInsuranceArray,
  title,
  description,
}) {
  return (
    <RootBox>
      <Grid container spacing={2} sx={{ height: "inherit" }}>
        <Grid
          item
          container
          xs={12}
          lg={5}
          xl={12}
          style={{ textAlign: "-webkit-left" }}
        >
          <Grid item xs={12} md={6} lg={12}>
            <div style={{ textAlign: "-webkit-match-parent" }}>
              {title
                ? title
                    .split(" ")
                    .map((txt) => <Heading key={txt}>{txt}</Heading>)
                : null}
              <SubHeading>{description}</SubHeading>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <ImageBox>
              <img
                alt={title}
                src={sideBanner}
                style={{
                  height: "auto",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </ImageBox>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          lg={7}
          xl={7}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <ShadowedBox>
            {/** Arrow back button needed */}
            {subInsuranceArray.map((insurance, i) => (
              <Link className="Link" to={`${url}/${insurance.url}`} key={i}>
                <ResponsiveButton variant="text">
                  <SubCard insurance={insurance} />
                </ResponsiveButton>
              </Link>
            ))}
          </ShadowedBox>
        </Grid>
      </Grid>
    </RootBox>
  );
}

export default AutoCard;
