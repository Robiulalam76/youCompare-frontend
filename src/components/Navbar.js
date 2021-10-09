import { getFormControlUnstyledUtilityClasses } from "@mui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const ulStyle = { listStyleType: "none", display: "flex" };
const liStyle = { padding: "0 1rem", cursor: "pointer" };

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
      <h3>You Compare Logo</h3>
      <ul style={ulStyle}>
        <li style={liStyle}>Products</li>
        <li style={liStyle}>Get a Quote</li>
        {localStorageData ? (
          <li onClick={logoutHandler} style={liStyle}>
            Logout
          </li>
        ) : (
          <Link to="/login">
            <li style={liStyle}>Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
}
