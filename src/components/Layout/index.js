import React from "react";

import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import Showcase from "./ShowCase";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  // marginTop: "14vh",
  paddingTop: "14vh",
  [theme.breakpoints.down("md")]: {
    paddingTop: "10vh",
  },
}));

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <StyledContainer>
        {children}
        <Showcase />
      </StyledContainer>
      <Footer />
    </React.Fragment>
  );
}
