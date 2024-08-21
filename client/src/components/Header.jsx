import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isdrop, setIsdrop] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  function toggleDarkMode() {
    setIsDark((p) => !p);
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <nav className="h-full w-full bg-blue-950">
      <div className="h-full w-full p-2 flex justify-between items-center">
        <div className="flex justify-center items-center gap-8">
          <span
            className="cursor-pointer ml-4 text-white"
            onClick={() => setIsOpen((p) => !p)}
          >
            {isOpen ? <DehazeIcon /> : <ClearIcon />}
          </span>
          <Link
            className="text-white flex justify-center items-center"
            to="/"
          >
            <img className="logo mr-4 w-20" src={logo} alt="logo" />
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
            <Link className="text-md mr-4" to="/videos">
              Videos
            </Link>
            <Link className="text-md mr-4" to="/venues">
              Venues
            </Link>
            <Link className="text-md mr-4" to="/Teams">
              Teams
            </Link>
          </div>

          <div
            onMouseEnter={() => setIsdrop(true)}
            onMouseLeave={() => setIsdrop(false)}
            className="mr-4 md-4 relative"
          >
            <p className="text-md cursor-pointer flex items-center">
              More{" "}
              {isdrop ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </p>
            {isdrop && (
              <div className="absolute w-60 bg-white text-black mt-2 p-2 rounded shadow-lg space-y-2">
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/photos"
                >
                  Photos
                </Link>
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/Login"
                >
                  Login
                </Link>
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/register"
                >
                  Signup
                </Link>
                <Link
                  className="block text-md hover:bg-gray-200 p-1 rounded"
                  to="/logout"
                >
                  Logout
                </Link>
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

        <div className="themeBtn flex justify-center items-center">
          <button className="text-white" onClick={toggleDarkMode}>
            {!isDark ? <WbSunnyIcon /> : <BedtimeIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
