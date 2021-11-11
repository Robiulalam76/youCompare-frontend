import { Grid, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { subCommercial, subInsurances } from "../../../Data/data";

import InsuranceStepper from "../../StepperInsuranceAuto";
import SubCard from "../SubCard/SubCard";

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
  fontSize: "3.5rem",
  fontWeight: "bold",
  lineHeight: "3rem",
  marginBottom: "1rem",
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
  color: "#74769E",
  fontSize: "1rem",
  fontWeight: "normal",
  textAlign: "left",
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

function CommercialAuto({ commercial }) {
  const { path, url } = useRouteMatch();
  return (
    <RootBox>
      <Grid container spacing={2} sx={{ height: "inherit" }}>
        <Grid
          item
          container
          xs={12}
          lg={5}
          xl={5}
          sx={{
            height: { lg: "80vh" },
          }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <Heading
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  lineHeight: "3rem",
                  marginBottom: "1rem",
                }}
              >
                Commercial
              </Heading>
              <Heading>Auto</Heading>
              <SubHeading
                style={{
                  marginTop: "0.5rem",
                }}
              >
                Auto insurance is designed to protect yourself and others
                against many various risks.
              </SubHeading>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <ImageBox>
              <img
                src={commercial}
                style={{ height: "auto", width: "inherit" }}
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
          sx={{ justifyContent: "center", alignItems: "start" }}
        >
          <Switch>
            <Route path={`${path}`} exact>
              <CommerialCard />
            </Route>
            <Route path={`${path}/:commercialCar`}>
              <InsuranceStepper />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </RootBox>
  );
}

export default CommercialAuto;

const CommerialCard = () => {
  const { path, url } = useRouteMatch();
  return (
    <ShadowedBox>
      <Typography sx={{ textAlign: "left", pl: 2, pb: 2 }}>
        <BsArrowLeft /> Types of Vahical
      </Typography>
      {subCommercial.map((insurance, i) => (
        <Link className="Link" to={`${url}/${insurance.url}`}>
          <ResponsiveButton variant="text">
            <SubCard insurance={insurance} i={i} />
          </ResponsiveButton>
        </Link>
      ))}
    </ShadowedBox>
  );
};
