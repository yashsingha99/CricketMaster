import React, { useState } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [isdrop, setIsdrop] = useState(false)
  function toggleDarkMode() {
    setIsDark((p) => !p)
    const root = document.documentElement;
    root.classList.toggle("dark");
  }
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="h-full w-full bg-blue-950">
      <div class="h-full w-full p-2 flex justify-between">
        <div className="flex justify-center items-center gap-8">
          <span className="cursor-pointer ml-4" onClick={() => setIsOpen((p) => !p)}>
            {isOpen ? <DehazeIcon /> : <ClearIcon />}
          </span>
          <Link className="text-white flex justify-center items-center" to="/">
            <img className="logo mr-4 w-20 " src={logo} alt="img" />
            <span className="text-xl">CricketMaster</span>
          </Link>
        </div>

        <div class="flex items-center gap-4 w-1/2 text-white" id="">
          <div className="mb-3 mt-2">
            <Link className="text-sm mr-4" to="/">
              Home
            </Link>
            <Link className="text-sm mr-4" to="/matches">
              Matches
            </Link>
            <Link className="text-sm mr-4" to="/videos">
              Videos
            </Link>
            <Link className="text-sm mr-4" to="/venues">
              Venues
            </Link>
            <Link className="text-sm mr-4" to="/Teams">
              Teams
            </Link>
          </div>

          <div 
           className="mr-4">
            <p className="text-sm cursor-pointer"
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)} >
              More { isdrop ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon />}</p>
            <div className="dropdown-content">
              <Link className="link" to="/photos">
                Photos
              </Link>
              <Link className="link" to="/profile">
                Profile
              </Link>
              <Link className="link" to="/Login">
                Login
              </Link>
              <Link className="link" to="/register">
                Signup{" "}
              </Link>
              <Link className="link" to="/logout">
                Logout
              </Link>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="themeBtn">
          <button className={`ThemeButton text-white  `} onClick={toggleDarkMode}>
            {!isDark?<WbSunnyIcon/> : <BedtimeIcon/>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
