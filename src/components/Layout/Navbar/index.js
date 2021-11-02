import React from "react";

import {
  Container,
  Box,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItems from "./MenuItems";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import { styled } from "@mui/system";
import logo from "../../../accets/logo.png";
import profile from "../../../accets/profile.jpg";

const IconBox = styled("div")(
  () => `
    width: 200px;
    height: auto;
  `
);

const StyledBox = styled(Box)(({ theme }) => ({}));

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedin, setIsLoggedin] = React.useState(false);

  const toggleMenuVisibility = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  return (
    <AppBar color="inherit" elevation={0}>
      <Toolbar>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
                onClick={toggleMenuVisibility(true)}
              >
                <AiOutlineMenuFold />
              </IconButton>
              <IconBox>
                <img src={logo} style={{ width: "100%", height: "100%" }} />
              </IconBox>
            </div>
            {isLoggedin ? (
              <UserLogo />
            ) : (
              <Button variant="contained" onClick={() => setIsLoggedin(true)}>
                Login
              </Button>
            )}
          </div>
        </Container>
      </Toolbar>

      {/** Mobile Navigation */}
      <Drawer open={menuOpen} onClose={toggleMenuVisibility(false)}>
        <Box sx={{ minWidth: "300px" }}>
          <MenuItems />
        </Box>
      </Drawer>
    </AppBar>
  );
}

const ProfileMenu = () => {};

const UserLogo = (props) => {
  return (
    <Box
      sx={{
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={profile}
        alt="A Girl"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};
