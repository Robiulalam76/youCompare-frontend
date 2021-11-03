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
  Paper,
  ListItemButton,
} from "@mui/material";
import Popover from "@mui/material/Popover";
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

import { FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";

const BrandLogoBox = styled("div")(
  () => `
    width: 200px;
    height: auto;
  `
);

const UserLogo = ({ size }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Box
        aria-describedby={id}
        onClick={handleClick}
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {[
          { title: "Profile", icon: <ImProfile className={styles.icon} /> },
          { title: "Logout", icon: <FiLogOut className={styles.icon} /> },
        ].map((elem, i) => (
          <ListItemButton sx={{ width: "200px", m: 1 }} key={i}>
            {elem.icon}
            <Typography sx={{ fontSize: ".9rem", lineHeight: "27px" }}>
              {elem.title}
            </Typography>
          </ListItemButton>
        ))}
      </Popover>
    </React.Fragment>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [navbarElevation, setNavbarElevation] = React.useState(false);
  const [showTopBar, setShowTopBar] = React.useState(true);

  const toggleMenuVisibility = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  var prevScrollPos = window.scrollY;
  const handleScroll = () => {
    window.scrollY > 150 ? setNavbarElevation(true) : setNavbarElevation(false);
    var currentScrollPos = window.scrollY;

    prevScrollPos > currentScrollPos
      ? setShowTopBar(true)
      : setShowTopBar(false);
    prevScrollPos = currentScrollPos;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <AppBar color="inherit" elevation={navbarElevation ? 2 : 0}>
      <Hidden mdDown>{showTopBar ? <TopBar /> : null}</Hidden>
      <Toolbar>
        <Container className={styles.text}>
          <div className={styles.navbar}>
            <BrandLogoSection setMenuOpen={setMenuOpen} />
            <ul className={styles.navlist}>
              <Hidden mdDown>
                {["Products", "Get a Quote"].map((elem, i) => (
                  <li key={i} className={styles.navlistItem}>
                    {elem}
                  </li>
                ))}
                {isLoggedin
                  ? ["My Documents", "My Policies"].map((elem, i) => (
                      <li key={i} className={styles.navlistItem}>
                        {elem}
                      </li>
                    ))
                  : null}
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
