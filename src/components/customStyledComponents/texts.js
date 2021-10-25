import { Typography } from "@mui/material"

export const Title = (props) =>
  <Typography {...props}
    variant="h3"
    style={{ lineHeight: "54px" }}
    gutterBottom />

export const Subtitle = (props) =>
  <Typography {...props}
    variant="h5"
    style={{
      lineHeight: "54px"
    }} />