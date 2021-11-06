import React from "react";
import { Button, Grid, Box, Typography, TextareaAutosize } from "@mui/material";
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
import { BsArrowLeft } from "react-icons/bs";

const RootBox = styled("div")(({ theme }) => ({
  marginTop: "3rem",
  height: "auto",
  [theme.breakpoints.between("lg", "xl")]: {
    maxHeight: "80vh",
    overflow: "hidden",
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
  lineHeight: "3.5rem",
  textAlign: "left",
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
  marginTop: "1rem",
  color: "#74769E",
  fontSize: "1rem",
  fontWeight: "normal",
  // width: "75%",
  textAlign: "left",

  [theme.breakpoints.only("xs")]: {
    width: "80%",
    margin: "0 auto",
    fontSize: ".85rem",
    lineHeight: "1.2rem",
    textAlign: "center",
  },

  [theme.breakpoints.only("sm")]: {
    width: "90%",
    margin: "0 auto",
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
          style={{ textAlign: "-webkit-center" }}
        >
          <Grid item container lg={12} md={12} xs={12}>
            <div style={{ textAlign: "-webkit-match-parent" }}>
              {title
                ? title.split(" ").map((txt) => (
                    <Heading
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: "bold",
                        lineHeight: "3.5rem",
                      }}
                      key={txt}
                    >
                      {txt}
                    </Heading>
                  ))
                : null}
              <SubHeading>{description}</SubHeading>
            </div>
            <div className={title.split(" ").join("_")}>
              <ImageBox>
                <img
                  alt={title}
                  src={sideBanner}
                  style={{
                    height: "auto",
                    width: "85%",
                    objectFit: "contain",
                  }}
                />
              </ImageBox>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          lg={7}
          xl={7}
          sx={{ justifyContent: "center", alignItems: "start" }}
        >
          <ShadowedBox>
            <Typography
              sx={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                paddingLeft: "3%",
              }}
            >
              <BsArrowLeft style={{ paddingRight: "3px" }} />
              {title}
            </Typography>
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
