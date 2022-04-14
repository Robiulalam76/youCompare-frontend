import React from "react";

import { Popover, Typography, Box, Stack } from "@mui/material";
import { Navtext } from "../../customStyledComponents/texts";
import { Link, useLocation } from "react-router-dom";

import {
  autoInsuranceRoutes,
  travelInsuranceRoutes,
  healthInsuranceRoutes,
  lifeInsuranceRoutes,
} from "./productsRoutes";
import { styled } from "@mui/system";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LeftBorderedBox = styled("div")(({ theme }) => ({
  borderLeft: "1px solid",
  margin: theme.spacing(0, 1),
  padding: theme.spacing(0, 1),
  borderColor: theme.palette.text.disabled,
  "&:hover": {
    borderColor: theme.palette.text.secondary,
    backgroundColor: "#f4f4f4",
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

const ClainMenu = () => {
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
      <div
        aria-describedby={id}
        onClick={handleClick}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Navtext>Claim</Navtext>
        <KeyboardArrowDownIcon
          sx={{ transform: open ? "rotate(180deg)" : "" }}
        />
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
          sx={{ minWidth: "10vw", py: 2, px: 3 }}
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

export default ClainMenu;

const InsuranceProducts = ({ data }) => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        {data.icon}
        <Link to={data.claimLink}>
          <Navtext sx={{ px: 0.5 }}>{data.category}</Navtext>
        </Link>
      </Box>
      {/* <Box sx={{ display: "flex" }}>
        <Box>
          {data.subcat.map((item) => (
            <LeftBorderedBox>
              <Link to={item.link}>
                <SubNavText>{item.category}</SubNavText>
              </Link>
            </LeftBorderedBox>
          ))}
        </Box>
      </Box> */}
    </div>
  );
};
