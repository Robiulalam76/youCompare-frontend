import { Grid, Button, Typography, Box } from "@mui/material";
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
import { subCommercial } from "../../../Data/data";
import {
  BannerHeader,
  BannerSubHeader,
} from "../../customStyledComponents/texts";

import SubCard from "../SubCard/SubCard";
import MuiStepper from "../../MuiStepper";

const ResponsiveButton = styled(Button)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.text.disabled}`,
  borderRadius: "8px",
}));

const ShadowedBox = styled("div")(
  ({ theme }) => `
  background-color: rgb(255, 255, 255);
  padding: ${theme.spacing(3)};
  border-radius: 10px;
  box-shadow: 0px 0px 16px 4px rgba(240, 240, 240, 0.75);
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  `
);

const ImageBox = styled(Box)(({ theme }) => ({
  height: "200px",
  marginTop: "5vw",
  [theme.breakpoints.up("md")]: {
    width: "70%",
    marginRight: "auto",
    marginTop: "5vw",
  },
}));

function CommercialAuto({ commercial, children }) {
  const { path, url } = useRouteMatch();
  return (
    <Grid container spacing={2}>
      <Grid item lg={5} md={5} xl={5} sm={12} xs={12}>
        <div>
          <BannerHeader>Commercial</BannerHeader>
          <BannerHeader>Vehicle</BannerHeader>
        </div>
        <Box sx={{ my: 2 }}>
          <BannerSubHeader>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </BannerSubHeader>
        </Box>

        <ImageBox>
          <img
            src={commercial}
            style={{ height: "100%", width: "100%" }}
            alt=""
          />
        </ImageBox>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={12} xs={12}>
        <Switch>
          <Route path={`${path}`} exact>
            <CommerialCard />
          </Route>
          <Route path={`${path}/:commercialCar`}>{children}</Route>
        </Switch>
      </Grid>
    </Grid>
  );
}

export default CommercialAuto;

const CommerialCard = () => {
  const { path, url } = useRouteMatch();
  return (
    <ShadowedBox>
      <Typography sx={{ textAlign: "left", pl: 2, pb: 2 }}>
        <BsArrowLeft /> Types of Vehicle
      </Typography>
      <Grid container spacing={2}>
        {subCommercial.map((insurance, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{ margin: "0 auto" }}
          >
            <Link className="Link" to={`${url}/${insurance.url}`}>
              <ResponsiveButton variant="text">
                <SubCard insurance={insurance} i={i} />
              </ResponsiveButton>
            </Link>
          </Grid>
        ))}
      </Grid>
    </ShadowedBox>
  );
};
