import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MinimalLayout from "../../components/Layout/MinimalLayout";
import { Title } from "../../components/customStyledComponents/texts";

export default function Showcase(props) {
  return (
    <MinimalLayout>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Grid
          item
          container
          xs={12}
          md={7}
          lg={6}
          sx={{ justifyContent: "center" }}
        >
          {props.children}
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={5}
          lg={6}
          sx={{ height: 300, justifyContent: "center" }}
        >
          <Grid item xs={12} sm={10} md={12}>
            <Title>Buy Plan</Title>
          </Grid>
        </Grid>
      </Grid>
    </MinimalLayout>
  );
}
