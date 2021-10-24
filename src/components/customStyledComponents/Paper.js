import { Box } from "@mui/material"

const Paper = (props) => (
  <Box {...props}
    style={{
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 0px 63px #F0F0F0",
      borderRadius: "25px",
      padding: "1rem 2.5rem 1rem 2.5rem",
      width: "inherit"
    }} />)

export default Paper