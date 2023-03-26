import React from "react";

import { Popover, Stack } from "@mui/material";
import { Navtext } from "../../customStyledComponents/texts";
import { Link, useLocation } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const InsuranceMenuData = () => {
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
                <Navtext>Insurance</Navtext>
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
                        <Link to='/vehicle' className="block font-semibold text-black uppercase hover:bg-gray-400  hover:white  px-2">Car insurance</Link>
                        <Link to='/travel' className="block font-semibold text-black uppercase hover:bg-gray-400 hover:white-400  px-2">travel</Link>
                        <Link to='/health' className="block font-semibold text-black uppercase hover:bg-gray-400 hover:white-400  px-2">health</Link>
                        {/* <Link to='/life' className="block font-semibold text-black uppercase hover:bg-gray-400 px-2">life</Link> */}
                    </Stack>
                </Stack>
            </Popover>
        </React.Fragment>
    );
};

export default InsuranceMenuData;
