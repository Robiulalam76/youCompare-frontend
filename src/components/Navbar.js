import { getFormControlUnstyledUtilityClasses } from "@mui/core";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../accets/logo.png";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const ulStyle = { listStyleType: "none", display: "flex" };
const liStyle = { padding: ".5rem 1.5rem", cursor: "pointer" };

export default function Navbar() {
  // if(localStorage.getItem("userInfo"))
  const [localStorageData, setLocalStorageData] = useState(
    localStorage.getItem("userInfo")
  );
  const userInfo = localStorage.getItem("userInfo");
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
  };
  useEffect(() => {}, [localStorageData]);
  return (
    <div style={navStyle}>
      <Link className="Link" to="/">
        {" "}
        <div>
          <img src={logo} alt="" />
        </div>
      </Link>

      <ul style={ulStyle}>
        <li style={liStyle}>Products</li>
        <li style={liStyle}>Get a Quote</li>
        {localStorageData ? (
          <li onClick={logoutHandler} style={liStyle}>
            Logout
          </li>
        ) : (
          <Link className="Link" to="/login">
            {" "}
            <Button variant="contained">
              <li>Login</li>
            </Button>
          </Link>
        )}
      </ul>
    </div>
  );
}
