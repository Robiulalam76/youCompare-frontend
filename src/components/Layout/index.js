import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Showcase from "./ShowCase";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        {children}
        <Showcase />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
