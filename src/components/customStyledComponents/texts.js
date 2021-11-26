import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Title = (props) => (
  <Typography
    {...props}
    variant="h3"
    color="text.primary"
    style={{ lineHeight: "54px" }}
    gutterBottom
  />
);

export const Subtitle = (props) => (
  <Typography
    {...props}
    variant="h5"
    style={{
      lineHeight: "54px",
    }}
  />
);
export const Navtext = (props) => (
  <Typography
    {...props}
    style={{ fontSize: "0.95rem", lineHeight: "27px", fontWeight: "normal" }}
  />
);


export const BannerHeader = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  lineHeight: "4rem",
  textAlign: "left",
  [theme.breakpoints.only("lg")]: {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3.75rem",
    textAlign: "left",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "3rem",
    textAlign: "left",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "2.5rem",
    lineHeight: "3rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

export const BannerSubHeader = styled(Typography)(({ theme }) => ({
  color: "#74769E",
  fontSize: "1rem",
  fontWeight: "normal",
  textAlign: "left",
  [theme.breakpoints.only("lg")]: {
    fontSize: ".9rem",
    lineHeight: "1.2rem",
    textAlign: "left",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: ".85rem",
    lineHeight: "1.2rem",
    textAlign: "left",
  },
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