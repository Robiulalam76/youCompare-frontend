import React from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  TextareaAutosize,
  ButtonBase,
} from "@mui/material";
import { styled } from "@mui/system";

import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
// image
// import commercial from "../../accets/commercial.svg";

// import privateAuto from "../../accets/private.svg";
// import threeWheel from "../../accets/threeWheel.svg";
// import twowheeler from "../../accets/twowheeler.svg";
// import Banner from "../Banner";

import { BannerHeader, BannerSubHeader } from "../customStyledComponents/texts";
import SubCard from "../Auto/SubCard/SubCard";
import { BsArrowLeft } from "react-icons/bs";

const ResponsiveButton = styled(Button)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.palette.text.disabled}`,
  borderRadius: "8px",
}));

const ShadowedBox = styled("div")(
  ({ theme }) => `
  background-color: rgb(255, 255, 255);
  padding: ${theme.spacing(3, 4)};
  border-radius: 10px;
  box-shadow: 0px 0px 16px 4px rgba(240, 240, 240, 0.75);
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  `
);

const DescriptionBox = styled(Box)(({ theme }) => ({
  padding: "0 5%",
  margin: "2% 0",
  [theme.breakpoints.up("md")]: {
    paddingLeft: 0,
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  height: "250px",
  [theme.breakpoints.up("lg")]: {
    width: "60%",
    marginRight: "auto",
    marginTop: "5vw",
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
  const { path } = useRouteMatch();
  console.log(path, "path");
  if (path === "/home/auto") {
    console.log(`done`, path);
  }
  const dynamicClass = title.toLowerCase().split(" ").join("-");

  return (
    <Grid container spacing={2}>
      <Grid item container lg={5} md={12} xl={5} sm={12} xs={12}>
        <Grid item xs={12} md={6} lg={12}>
          <div>
            <BannerHeader className={dynamicClass + "-header"}>
              {title}
            </BannerHeader>
            <BannerHeader className={dynamicClass + "-header"}>
              Insurance
            </BannerHeader>
          </div>
          <DescriptionBox sx={{ my: 2 }}>
            <BannerSubHeader id={dynamicClass + "-sub-header"}>
              {description}
            </BannerSubHeader>
          </DescriptionBox>
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <ImageBox id={dynamicClass + "-image-div"}>
            <img
              id={dynamicClass + "-image"}
              src={sideBanner}
              alt={title}
              style={{ width: "100%", height: "100%" }}
            />
          </ImageBox>
        </Grid>
      </Grid>
      <Grid item lg={7} md={12} xl={7} sm={12} xs={12}>
        <ShadowedBox>
          <div style={{ textAlign: "left" }}>
            <ButtonBase disableRipple sx={{ px: 1, py: 0.5 }}>
              <BsArrowLeft style={{ paddingRight: "3px" }} />
              {title} Insurance
            </ButtonBase>
          </div>

          <Grid container spacing={2}>
            {subInsuranceArray.map((insurance, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                sx={{ margin: "0 auto" }}
              >
                <Link className="Link" to={`${url}/${insurance.url}`}>
                  <ResponsiveButton variant="text">
                    <SubCard insurance={insurance} />
                  </ResponsiveButton>
                </Link>
              </Grid>
            ))}
          </Grid>
        </ShadowedBox>
      </Grid>
    </Grid>
  );
}

export default AutoCard;
