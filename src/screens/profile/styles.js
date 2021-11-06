import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ShadowedBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 0px 63px #F0F0F0",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  marginBottom: "3%",
  borderRadius: "1rem",
}));

export const LogoBox = styled("div")(
  () => `
  height: 80px;
  width: 80px;
  border-radius: .5rem;
  background: lightgray;
`
);

export const ColumnFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "inherit",
}));

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: "normal",
  fontSize: ".85rem",
}));
