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
  useEffect(() => { }, [localStorageData]);
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
            <Button className="mainBtn" variant="contained">
              <li>Login</li>
            </Button>
          </Link>
        )}

        <li className="ml-2" to='/'>
          <div className="group relative">
            <button className=" w-36 h-9 flex justify-center items-center rounded bg-[#1481D0] px-4" variant="contained">
              <li className="text-white uppercase font-semibold">Insurance</li>
            </button>
            <div className="grid grid-cols-1 gap-1 bg-gray-100 border rounded">
              <Link to='/' className="font-semibold text-black uppercase hover:bg-gray-400 px-2 py-1">Car insurance</Link>
              <Link to='/' className="font-semibold text-black uppercase hover:bg-gray-400 px-2 py-1">travel</Link>
              <Link to='/health' className="font-semibold text-black uppercase hover:bg-gray-400 px-2 py-1">health</Link>
              <Link to='/' className="font-semibold text-black uppercase hover:bg-gray-400 px-2 py-1">life</Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
