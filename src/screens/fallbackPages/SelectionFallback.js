import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';

export default function SelectionFallback() {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <div style={{
                background: "#f4f4f4",
                height: "10vh",
                width: "100%",
                marginTop: "1.5rem",
                marginBottom: "1rem",
                borderRadius: "8px",
            }}>

        </div>
        <Grid container spacing={2}>
          <Grid item container xs={12} md={4} spacing={2}>
            <Grid item xs={12}
              style={{
                background: "#f4f4f4",
                height: "100px",
                margin: "2rem 0 0 1rem",
                borderRadius: "8px",
              }}></Grid>
            <Grid item xs={12}
              style={{
                background: "#f4f4f4",
                height: "300px",
                margin: "2rem 0 0 1rem",
                borderRadius: "8px",
              }}></Grid>
          </Grid>
          <Grid item container xs={12} md={8}>
            <Grid item xs={12} style={{
              background: "#f4f4f4",
              margin: "1rem 0 0 1rem",
              borderRadius: "8px",
            }}>
            </Grid>
          </Grid>
        </Grid>
      </Container >
    </div >
  )
}