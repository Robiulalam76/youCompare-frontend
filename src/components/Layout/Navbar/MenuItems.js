import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import { Divider, ListItemButton, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { navdata } from "./navdata";
import { ArrowRight } from "@mui/icons-material";
import { display, fontSize } from "@mui/system";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import styles from "./styles.module.css";

const NavSideBar = styled(Box)(({ theme }) => ({
  height: "inherit",
  borderRightWidth: ".25rem",
  borderRightStyle: "solid",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  marginRight: ".75rem",
  "&:hover": {
    borderColor: theme.palette.primary.light,
  },
}));

const RootNavItem = (props) => (
  <Typography
    {...props}
    sx={{
      ...props.sx,
      fontSize: ".9rem",
      fontWeight: 600,
    }}
  />
);

const ChildNavItem = (props) => (
  <Typography
    {...props}
    sx={{ ...props.sx, fontSize: ".85rem", fontWeight: "normal" }}
  />
);

export default function MenuItems({ isLoggedin }) {
  const [selectedNavItem, setSelectedNavItem] = React.useState("My Policies");
  return (
    <React.Fragment>
      <List>
        {isLoggedin
          ? [
              { title: "My Policies", link: "/profile/mypolicies" },
              {
                title: "My Documents",
                link: "/profile/mydocs",
              },
              { title: "My Quotes", link: "/" },
            ].map((item, i) => (
              <Link to={item.link} kxey={i}>
                <ListItem sx={{ py: 0, px: 2 }}>
                  <ListItemButton
                    onClick={() => setSelectedNavItem(item.title)}
                    sx={{
                      py: 1.5,
                      px: 0,
                      color: "primary.main",
                      borderRadius: "4px",
                      height: "48px",
                    }}
                  >
                    <NavSideBar
                      sx={{
                        borderColor:
                          selectedNavItem === item.title
                            ? "primary.main"
                            : "transparent",
                      }}
                    ></NavSideBar>
                    <RootNavItem>{item.title}</RootNavItem>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))
          : null}

        {navdata.map((item) => (
          <Navigation
            item={item}
            key={item.id}
            selectedNavItem={selectedNavItem}
            setSelectedNavItem={setSelectedNavItem}
          />
        ))}
      </List>
    </React.Fragment>
  );
}

// Nav Items for mobile app
const Navigation = ({ item, selectedNavItem, setSelectedNavItem }) => {
  const [showChildren, setShowChildren] = React.useState(false);
  const rootItem = item.depth === 0;

  const handleItemButtonClick = () => {
    setShowChildren(!showChildren);
    if (rootItem) {
      setSelectedNavItem(item.category);
    }
  };

  return (
    <React.Fragment>
      <LinkWrapper link={item.link}>
        <ListItem sx={{ px: 2, py: 0 }}>
          <ListItemButton
            onClick={handleItemButtonClick}
            sx={{
              py: 1.5,
              px: 0,
              height: "48px",
              borderRadius: "4px",
              color: "primary.main",
            }}
          >
            {rootItem ? (
              <>
                <NavSideBar
                  sx={{
                    borderColor:
                      selectedNavItem === item.category
                        ? "primary.main"
                        : "transparent",
                  }}
                ></NavSideBar>
                <RootNavItem>{item.category}</RootNavItem>
              </>
            ) : (
              <div style={{ display: "flex", marginLeft: "2rem" }}>
                <Box sx={{ mr: ".5rem", color: "text.secondary" }}>
                  {item.icon ? (
                    item.icon
                  ) : (
                    <BsCircleFill
                      style={{ color: "text.primary", padding: "5px" }}
                    />
                  )}
                </Box>
                <ChildNavItem>{item.category}</ChildNavItem>
              </div>
            )}

            {item.subcat ? (
              <ArrowForwardIosIcon
                sx={{
                  p: "6px",
                  color: "#2a2b40",
                  transform: !showChildren ? "rotate(0deg)" : "rotate(90deg)",
                }}
              />
            ) : null}
          </ListItemButton>
        </ListItem>
      </LinkWrapper>

      {item.subcat && showChildren
        ? item.subcat.map((elem) => <Navigation item={elem} key={elem.id} />)
        : null}
    </React.Fragment>
  );
};

const LinkWrapper = ({ children, link }) => {
  if (link) {
    return <Link to={link}>{children}</Link>;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
