import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRouteMatch } from "react-router-dom";

const InsuranceBox = styled("div")(({ theme }) => ({
  borderRadius: theme.spacing(1),
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "100%",
  },
}));

const ImageBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: "120px",
  margin: "0 auto",
  padding: theme.spacing(3),
}));

function SubCard({ insurance }) {
  const { path, url } = useRouteMatch();

  console.log("path SubCard card", path);

  return (
    <InsuranceBox>
      <Typography
        sx={{
          textAlign: "left",
          px: 2,
          pt: 1,
          fontWeight: "medium",
          textTransform: "none",
          color: "text.secondary",
          fontSize: ".9rem",
        }}
      >
        {insurance.title}
      </Typography>
      <ImageBox>
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={insurance.image}
          alt=""
        />
      </ImageBox>
    </InsuranceBox>
  );
}

export default SubCard;
