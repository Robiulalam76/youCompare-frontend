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

const RootNavItem = (props) => (
  <Typography
    {...props}
    sx={{
      ...props.sx,
      fontSize: ".9rem",
      fontWeight: 600
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
  return (
    <React.Fragment>
      <List>
        {isLoggedin
          ? ["My Policies", "My Documents", "My Quotes"].map((item, i) => (
              <React.Fragment key={i}>
                <ListItem sx={{ py: 0, px: 2 }}>
                  <ListItemButton sx={{ py: 1.5, borderRadius: "4px" }}>
                    <RootNavItem>{item}</RootNavItem>
                  </ListItemButton>
                </ListItem>
              </React.Fragment>
            ))
          : null}

        {navdata.map((item) => {
          return <Navigation item={item} key={item.id} />;
        })}
      </List>
    </React.Fragment>
  );
}

const Navigation = ({ item }) => {
  const [showChildren, setShowChildren] = React.useState(false);
  const rootItem = item.depth === 0;

  return (
    <React.Fragment>
      <ListItem sx={{ px: 2, py: 0 }}>
        <ListItemButton
          onClick={() => setShowChildren(!showChildren)}
          sx={{
            py: 1.5,
            borderRadius: "4px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            {!rootItem ? (
              <Box sx={{ mr: ".5rem", color: "text.secondary" }}>
                {item.icon ? (
                  item.icon
                ) : (
                  <BsCircleFill
                    style={{ color: "text.primary", padding: "5px" }}
                  />
                )}
              </Box>
            ) : null}

            {rootItem ? (
              <RootNavItem>{item.category}</RootNavItem>
            ) : (
              <ChildNavItem>{item.category}</ChildNavItem>
            )}
          </div>

          {item.subcat ? (
            <ArrowForwardIosIcon
              sx={{
                p: "6px",
                transform: !showChildren ? "rotate(0deg)" : "rotate(90deg)",
              }}
            />
          ) : null}
        </ListItemButton>
      </ListItem>
      {item.subcat && showChildren
        ? item.subcat.map((elem) => <Navigation item={elem} key={elem.id} />)
        : null}
    </React.Fragment>
  );
};
