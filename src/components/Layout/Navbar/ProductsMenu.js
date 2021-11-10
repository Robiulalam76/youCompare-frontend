import React from "react";

import { Popover, Typography, Box } from "@mui/material";
import { Navtext } from "../../customStyledComponents/texts";

import { productsData } from "./productsData";

const ProductsMenu = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "productsmenu-popover" : undefined;

  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenuOpen = (menuOpen) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      {/* <Navtext aria-describedby={id} onClick={handleClick}>
        Insurance Products
      </Navtext>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          {productsData.map((elem) => (
            <div style={{ display: "inline-block", width: "300px" }}>
              <Navtext>{elem.category}</Navtext>
              {elem.subcat.map((child) => (
                <Typography variant="body2">{child.category}</Typography>
              ))}
            </div>
          ))}
        </div> 
      </Popover> */}
      <Navtext onClick={toggleMenuOpen}>Insurance Products</Navtext>
      <div></div>
    </React.Fragment>
  );
};

export default ProductsMenu;
