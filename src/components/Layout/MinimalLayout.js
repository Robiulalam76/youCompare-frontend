import React from "react";
import Navbar from "./Navbar/index";
import Footer from "./Footer";

import { Container } from "@mui/material";

export default function MinimalLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container sx={{ mt: "20vh" }}>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
