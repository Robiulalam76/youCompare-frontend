import { styled } from "@mui/styles";
import { Box, Button } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 3),
  marginBottom: "2rem",
  [theme.breakpoints.only("sm")]: {
    padding: theme.spacing(3, 4),
    width: "450px",
  },
  [theme.breakpoints.only("md")]: {
    padding: theme.spacing(3, 4),
    width: "420px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 4),
    width: "500px",
  },
}));

export const StyledButton = (props) => (
  <Button
    {...props}
    variant="contained"
    style={{ ...props.style, height: "42px" }}
    sx={{ mt: 2 }}
  />
);
