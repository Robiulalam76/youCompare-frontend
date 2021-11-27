import { Grid, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { BannerHeader, BannerSubHeader } from "./customStyledComponents/texts";

const DescriptionBox = styled(Box)(({ theme }) => ({
  padding: "0 5%",
  margin: "2% 0",
  [theme.breakpoints.up("md")]: {
    paddingLeft: 0,
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // [theme.breakpoints.only("xs")]: {
  //   padding: "5% 10%",
  // },
  // [theme.breakpoints.only("sm")]: {
  //   padding: "2rem 20%",
  // },
  // [theme.breakpoints.only("md")]: {
  //   padding: "2rem 1rem",
  //   marginTop: "2rem"
  // },
  height: "250px",
  [theme.breakpoints.only("xs")]: {
    padding: "5vw 10vw",
  },
  [theme.breakpoints.up("md")]: {
    width: "70%",
    marginRight: "auto",
    marginTop: "5vw",
  },
}));

export default function Banner({
  title,
  description,
  imageSrc,
  stepper,
  children,
}) {
  const dynamicClass = title.toLowerCase().split(" ").join("-");
  return (
    <Grid container spacing={2}>
      <Grid item lg={5} md={5} xl={5} sm={12} xs={12}>
        <div>
          <BannerHeader className={dynamicClass + "-header"}>
            {title}
          </BannerHeader>
          <BannerHeader className={dynamicClass + "-header"}>
            Insurance
          </BannerHeader>
        </div>
        <DescriptionBox>
          <BannerSubHeader id={dynamicClass + "-sub-header"}>
            {description}
          </BannerSubHeader>
        </DescriptionBox>
        <ImageBox>
          <img
            id={dynamicClass + "-image"}
            src={imageSrc}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </ImageBox>
      </Grid>
      <Grid item lg={7} md={7} xl={7} sm={12} xs={12}>
        {stepper || children}
      </Grid>
    </Grid>
  );
}
