import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpeg";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import Cookies from "js-cookie";
const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isdrop, setIsdrop] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation().pathname;

  // const path = location.split("/")
  const token = Cookies.get("user");
  const navigate = useNavigate();
  function toggleDarkMode() {
    setIsDark((p) => !p);
    const root = document.documentElement;
    root.classList.toggle("dark");
  }
  // useEffect(() => {

  // },[])
  const handleLogout = () => {
    Cookies.remove("user");
    alert("logout successfully");
    navigate("/");
  };

  return (
    <nav className="h-full w-full bg-blue-950">
      <div className=""></div>
      <div className="h-full w-full p-2 flex justify-between items-center">
        <div className="flex justify-center items-center gap-8">
          <Link className="text-white flex justify-center items-center" to="/">
            <img
              className="logo h-12 rounded-full mr-4 w-12"
              src={logo}
              alt="logo"
            />
            <span className="text-xl">CricketMaster</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 w-1/3 text-white">
          <div className="mb-3 mt-2">
            <Link className="text-md mr-4" to="/">
              Home
            </Link>
            <Link className="text-md mr-4" to="/matches">
              Matches
            </Link>
            <Link className="text-md mr-4" to="/venues">
              Venues
            </Link>
            <Link className="text-md mr-4" to="/players">
              Players
            </Link>
            <Link className="text-md mr-4" to="/Teams">
              Teams
            </Link>
          </div>

          <div
            onMouseEnter={() => setIsdrop(true)}
            // onMouseLeave={() => setIsdrop(false)}
            className="mr-4 md-4 relative"
          >
            <p className="text-md cursor-pointer flex items-center">
              More{" "}
              {isdrop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </p>
            {isdrop && (
              <div
                onMouseLeave={() => setIsdrop(false)}
                className="absolute w-60 bg-white text-black mt-2 z-10 p-2 rounded shadow-lg space-y-2"
              >
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/profile"
                >
                  Profile
                </Link>
                {!token && (
                  <Link
                    className="block text-md hover:bg-gray-200 p-1 rounded"
                    to="/Login"
                  >
                    Login
                  </Link>
                )}
                {!token && (
                  <Link
                    className="block text-md hover:bg-gray-200 p-1 rounded"
                    to="/register"
                  >
                    Signup
                  </Link>
                )}
                {token && (
                  <div
                    className="block text-md hover:bg-gray-200 p-1 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                )}
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>

        {(location !== "/" &&
          location !== "/Login" &&
          location !== "/register") && (
          <div className=" rounded-lg flex bg-white h-8 justify-center items-center">
            <div className="h-8 rounded-lg bg-white flex items-center pl-2">
              <SearchIcon className="text-gray-600" />
              <input
                className="rounded-lg h-full nav-src border-white outline-none pl-2"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
        <span
          className="cursor-pointer ml-4 text-white"
          onClick={() => setIsOpen((p) => !p)}
        >
          {isOpen ? <DehazeIcon /> : <ClearIcon />}
        </span>
      </div>
    </nav>
  );
};

export default Header;
