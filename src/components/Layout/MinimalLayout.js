import React from "react";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";

import { Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: "14vh",
  [theme.breakpoints.down('md')]: {
    marginTop: "10vh",
  },
}));

export default function MinimalLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </React.Fragment>
  );
}
