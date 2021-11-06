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
import { Link, useLocation } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { ImProfile } from "react-icons/im";

const BrandLogoBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    width: "250px",
  },
}));

const NavContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#2a2b40",
  minHeight: "10vh",
}));

const UserLogo = ({ size }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

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
          alt="Jane Doe"
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
        <Link to="/profile">
          <ListItemButton sx={{ width: "200px", m: 1 }}>
            <ImProfile className={styles.icon} />
            <Typography sx={{ fontSize: ".9rem", lineHeight: "27px" }}>
              Profile
            </Typography>
          </ListItemButton>
        </Link>
        <Link to="/home">
          <ListItemButton sx={{ width: "200px", m: 1 }}>
            <FiLogOut className={styles.icon} />
            <Typography sx={{ fontSize: ".9rem", lineHeight: "27px" }}>
              Logout
            </Typography>
          </ListItemButton>
        </Link>
      </Popover>
    </React.Fragment>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [navbarElevation, setNavbarElevation] = React.useState(false);
  const [showTopBar, setShowTopBar] = React.useState(true);

  let location = useLocation();

  React.useEffect(
    (menuOpen) => {
      setMenuOpen(false);
    },
    [location.pathname]
  );

  const toggleMenuVisibility = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMenuOpen(open);
  };

  var prevPos = window.scrollY;
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarElevation(true);
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
      setNavbarElevation(false);
    }

    let currentPos = window.scrollY;
    let navbar = document.getElementById("navbar");
    let navHeight = navbar.clientHeight;

    if (prevPos > currentPos) {
      navbar.style.top = "0px";
    } else if (currentPos > 200) {
      navbar.style.top = `-${navHeight}px`;
    }
    prevPos = currentPos;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <React.Fragment>
      <AppBar color="inherit" elevation={navbarElevation ? 2 : 0} id="navbar">
        <Hidden mdDown>{showTopBar ? <TopBar /> : null}</Hidden>
        <NavContainer>
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
                <Button variant="contained" onClick={() => setIsLoggedin(true)}>
                  Login
                </Button>
              </li>
            )}
          </ul>
        </NavContainer>
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
    </React.Fragment>
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
      <Link to="/home">
        <BrandLogoBox>
          <img src={logo} style={{ width: "100%", height: "100%" }} />
        </BrandLogoBox>
      </Link>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu-close"
        onClick={(menuOpen) => setMenuOpen(false)}
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
      <Link to="/home">
        <BrandLogoBox>
          <img src={logo} style={{ width: "100%", height: "100%" }} />
        </BrandLogoBox>
      </Link>
    </div>
  );
};
