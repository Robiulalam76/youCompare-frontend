import React from "react";

import {
  Container,
  Box,
  List,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Drawer,
  Hidden,
  ListItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import MenuItems from "./MenuItems";
import TopBar from "./TopBar";
import styles from "./styles.module.css";

import { style, styled } from "@mui/system";
import logo from "../../../accets/logo.png";
import profile from "../../../accets/profile.jpg";
import { Link } from "react-router-dom";

const BrandLogoBox = styled("div")(
  () => `
    width: 200px;
    height: auto;
  `
);

const UserLogo = ({ size }) => {
  return (
    <Box
      sx={{
        height: size === "large" ? "60px" : "40px",
        width: size === "large" ? "60px" : "40px",
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
    <AppBar color="inherit" elevation={2}>
      <Hidden mdDown>
        <TopBar />
      </Hidden>
      <Toolbar>
        <Container>
          <div className={styles.navbar}>
            <BrandLogoSection setMenuOpen={setMenuOpen} />
            <ul className={styles.navlist}>
              <Hidden mdDown>
                {["Products", "Get a Quote"].map((elem, i) => (
                  <li key={i} className={styles.navlistItem}>
                    {elem}
                  </li>
                ))}
              </Hidden>
              {isLoggedin ? (
                <li>
                  <UserLogo size="small" />
                </li>
              ) : (
                <li>
                  <Button
                    variant="contained"
                    onClick={() => setIsLoggedin(true)}
                  >
                    Login
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Toolbar>

      {/** Drawer, displayed on small screen */}
      <Hidden mdUp>
        <Drawer open={menuOpen} onClose={toggleMenuVisibility(false)}>
          <div style={{ minWidth: "350px" }}>
            <Box sx={{ px: 2, py: 1 }}>
              {/** Brand Logo */}
              <BrandLogoSectionMobile setMenuOpen={setMenuOpen} />

              {/** Login Button or Profile Logo */}
              <Box sx={{ mt: 2 }}>
                {!isLoggedin ? (
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setIsLoggedin(true)}
                  >
                    Login
                  </Button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <UserLogo size="small" />
                    <Typography sx={{ px: 2, fontSize: "20px" }}>
                      Jane Doe
                    </Typography>
                  </div>
                )}
              </Box>
            </Box>
            {/** Navigation Menu Items */}
            <MenuItems isLoggedin={isLoggedin} />
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

const BrandLogoSectionMobile = ({ setMenuOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <BrandLogoBox>
        <img src={logo} style={{ width: "100%", height: "100%" }} />
      </BrandLogoBox>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu-close"
        onClick={() => setMenuOpen(false)}
      >
        <CloseOutlinedIcon />
      </IconButton>
    </div>
  );
};

const BrandLogoSection = ({ setMenuOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Hidden mdUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={() => setMenuOpen(true)}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Hidden>
      <BrandLogoBox>
        <img src={logo} style={{ width: "100%", height: "100%" }} />
      </BrandLogoBox>
    </div>
  );
};
