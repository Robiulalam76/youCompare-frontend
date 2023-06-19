import { Typography, Box, Container, Grid } from "@mui/material";
// import CopyrightText from "./CopyrightText";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const items = {
    insurances: [
      { item: "Auto Insurance", links: "/auto" },
      { item: "Life Insurance", links: "/life" },
      { item: "Travel Insurance", links: "/travel" },
      { item: "Health Insurance", links: "/health" },
    ],
    support: [
      { item: "Claims", links: "/claim" },
      { item: "Manage Policy", links: "/portal" },
      { item: "Renew Policy" },
    ],
    about: [
      { item: "About", links: "/about" },
      { item: "What We Do", links: "/what-we-do" },
      { item: "Blog", links: "/blog" },
      { item: "Contact", links: "/contact" },
    ],
    contact: [
      { item: "44 Abeokuta Street off Oba Akran Way, Anifowoshe Ikeja Lagos." },
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
                <Link to={child?.links}>
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
                </Link>
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
          Copyright <span style={{ fontSize: "14px" }}>&copy;</span>{" "}
          {new Date().getFullYear()}, All rights reserved by YouCompare
        </Typography>
      </Container>
    </Box>
  );
}
