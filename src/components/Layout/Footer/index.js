import { Typography, Box, Container, Grid } from "@mui/material";
// import CopyrightText from "./CopyrightText";
import React from "react";

export default function Footer() {
  const items = {
    insurances: [
      { item: "Auto Insurance" },
      { item: "Life Insurance" },
      { item: "Travel Insurance" },
      { item: "Health Insurance" },
    ],
    support: [
      { item: "Claims" },
      { item: "Manage Policy" },
      { item: "Renew Policy" },
    ],
    about: [
      { item: "About" },
      { item: "What We Do" },
      { item: "Blog" },
      { item: "Contanct" },
    ],
    contact: [
      { item: "Road 7, Sector 11, Uttara, Dhaka, Bangladesh" },
      { item: "youcompare@gmail.com" },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: "#000000",
      }}
    >
      <Container>
        <Grid container sx={{ px: 2 }}>
          {Object.keys(items).map((elem, i) => (
            <Grid item xs={6} sm={4} md={3} sx={{ py: 4 }} key={i}>
              <Typography
                sx={{
                  color: "#eeeeee",
                  fontWeight: "normal",
                  fontSize: "14px",
                  lineHeight: "32px",
                }}
              >
                {elem.toUpperCase()}
              </Typography>
              {items[elem].map((child, i) => (
                <Typography
                  sx={{
                    color: "#eeeeee",
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: "24px",
                  }}
                  key={i}
                >
                  {child.item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            background: "white",
            height: "1px",
            width: "100%",
          }}
        ></div>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "white",
            pt: 2,
            pb: 3,
            textAlign: "center",
          }}
        >
          Copyright <span style={{ fontSize: "14px" }}>&copy;</span> 2021, All
          rights reserved by YouCompare
        </Typography>
      </Container>
    </Box>
  );
}
