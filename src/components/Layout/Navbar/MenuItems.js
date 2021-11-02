import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { navdata } from "./navdata";

export default function MenuItems() {
  return (
    <React.Fragment>
      <List>
        {navdata.map((item) => {
          return <Navigation item={item} key={item.id} />;
        })}
      </List>
    </React.Fragment>
  );
}

const Navigation = ({ item }) => {
  const [showChildren, setShowChildren] = React.useState(false);
  return (
    <React.Fragment>
      <Typography
        variant="body2"
        onClick={() => setShowChildren(!showChildren)}
        sx={{ pl: item.depth === 0 ? 2 : item.depth === 1 ? 4 : 6 }}
      >
        {item.category}
      </Typography>
      {item.subcat && showChildren
        ? item.subcat.map((elem) => <Navigation item={elem} />)
        : null}
    </React.Fragment>
  );
};
