import React from "react";
import { Link } from "react-router-dom";
import { Box, ButtonBase, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import logo from "../../accets/logo.png";
import CopyrightText from "../../components/Layout/Footer/CopyrightText";

const BrandLogoBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    width: "250px",
  },
}));

export default function AuthLayout({ children }) {
  return (
    <>
      <Container
        style={{
          marginTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <Link to="/home">
          <BrandLogoBox>
            <img src={logo} style={{ width: "100%", height: "100%" }} />
          </BrandLogoBox>
        </Link> */}

        {/* <Box>
          <Link to="/login">
            <ButtonBase
              disableRipple
              disableTouchRipple
              sx={{ color: "text.primary", pl: 2, fontSize: "1rem" }}
            >
              Login
            </ButtonBase>
          </Link>
          <Link to="/signup">
            <ButtonBase
              disableRipple
              disableTouchRipple
              sx={{ color: "text.primary", pl: 2, fontSize: "1rem" }}
            >
              Signup
            </ButtonBase>
          </Link>
        </Box> */}
      </Container>
      {children}
      <Box sx={{ margin: "0 auto", maxWidth: "400px", textAlign: "center" }}>
        {[
          "Privacy Policy",
          "Home",
          "Auto Insurance",
          "Life Insurance",
          "Travel Insurance",
          "Health Insurance",
          "Who we are",
        ].map((elem, i) => (
          <Link to="/" key={i}>
            <ButtonBase sx={{ fontSize: "12px", color: "text.hover" }}>
              {elem}
              <span style={{ padding: "0 6px" }}>|</span>
            </ButtonBase>
          </Link>
        ))}
        <Link to="/">
          <ButtonBase sx={{ fontSize: "12px", color: "text.hover" }}>
            What we do
          </ButtonBase>
        </Link>
        <CopyrightText />
      </Box>
    </>
  );
}
