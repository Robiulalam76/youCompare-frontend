import { Typography } from "@mui/material";

export const Title = (props) => (
  <Typography
    {...props}
    variant="h3"
    color="text.primary"
    style={{ lineHeight: "54px" }}
    gutterBottom
  />
);

export const Subtitle = (props) => (
  <Typography
    {...props}
    variant="h5"
    style={{
      lineHeight: "54px",
    }}
  />
);
export const Navtext = (props) => (
  <Typography
    {...props}
    style={{ fontSize: "0.95rem", lineHeight: "27px", fontWeight: "normal" }}
  />
);
