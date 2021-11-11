import React from "react";

import { Popover, Typography, Box, Grid, Stack, Divider } from "@mui/material";
import { Navtext } from "../../customStyledComponents/texts";
import { Link, useLocation } from "react-router-dom";

import {
  autoInsuranceRoutes,
  travelInsuranceRoutes,
  healthInsuranceRoutes,
  lifeInsuranceRoutes,
} from "./productsRoutes";
import { spacing, styled } from "@mui/system";

import { AiOutlineCloseCircle } from "react-icons/ai";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LineBar = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 1),
  height: "inherit",
  width: "1px",
  backgroundColor: theme.palette.text.disabled,
}));

const LeftBorderedBox = styled("div")(({ theme }) => ({
  borderLeft: "1px solid",
  margin: theme.spacing(0, 1),
  padding: theme.spacing(0, 1),
  borderColor: theme.palette.text.disabled,
  "&:hover": {
    borderColor: theme.palette.text.secondary,
  },
}));

const SubNavText = styled(Typography)(({ theme }) => ({
  fontWeight: "normal",
  fontSize: ".8rem",
  cursor: "pointer",
  lineHeight: "1.8rem",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

const ProductsMenu = () => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    handleClose();
  }, [location.pathname]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "productsmenu-popover" : undefined;

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Navtext aria-describedby={id} onClick={handleClick}>
          Insurance Products
        </Navtext>
        <KeyboardArrowDownIcon sx={{ transform: open ? "rotate(180deg)" : "" }}/>
      </div>
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
        sx={{ mt: 2 }}
      >
        <Stack
          direction="row"
          spacing={6}
          sx={{ minWidth: "40vw", py: 2, px: 3 }}
        >
          <Stack spacing={3}>
            <InsuranceProducts data={autoInsuranceRoutes} />
            <InsuranceProducts data={travelInsuranceRoutes} />
          </Stack>
          <Stack spacing={3}>
            <InsuranceProducts data={healthInsuranceRoutes} />
            <InsuranceProducts data={lifeInsuranceRoutes} />
          </Stack>
          {/* <Stack>
            <AiOutlineCloseCircle />
          </Stack> */}
        </Stack>
      </Popover>
    </React.Fragment>
  );
};

export default ProductsMenu;

const InsuranceProducts = ({ data }) => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        {data.icon}
        <Navtext sx={{ px: 0.5 }}>{data.category}</Navtext>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          {data.subcat.map((item) => (
            <LeftBorderedBox>
              <Link to={item.link}>
                <SubNavText>{item.category}</SubNavText>
              </Link>
            </LeftBorderedBox>
          ))}
        </Box>
      </Box>
    </div>
  );
};
