import React from "react";

import Navbar from "./Navbar/index";
// import Footer from "./Footer";
import Showcase from "./ShowCase";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container sx={{ mt: "20vh" }}>
        {children}
        <Showcase />
      </Container>
      {/* <Footer /> */}
    </React.Fragment>
  );
}
