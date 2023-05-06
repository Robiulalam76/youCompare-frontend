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
                    spacing={2}
                    sx={{ minWidth: "full", py: 1 }}
                >
                    <Stack spacing={1}>
                        <Link to='/vehicle' className="text-sm text-gray-900 hover:bg-gray-100  px-2 py-1">Auto Insurance</Link>
                        <Link to='/travel' className="text-sm text-gray-900 hover:bg-gray-100 px-2 py-1">Travel Insurance</Link>
                        <Link to='/health' className="text-sm text-gray-900 hover:bg-gray-100 px-2 py-1">Health Insurance</Link>
                        <Link to='/life' className="text-sm text-gray-900 hover:bg-gray-100 px-2 py-1">Life Insurance</Link>
                    </Stack>
                </Stack>
            </Popover>
        </React.Fragment>
    );
};

export default InsuranceMenuData;
