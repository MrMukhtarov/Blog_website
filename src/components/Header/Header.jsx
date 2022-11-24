import React from "react";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="containers">
        <div className=" all">
          <div className="headerTop row justify-content-between align-items-center col-lg-12">
            <div className="headerTop-left col-lg-3">
              <FaFacebookF />
              <BsTwitter />
              <BsSearch />
            </div>
            <div className="headerTop-center col-lg-6">
              <NavLink to="/">
                <img
                  src="https://assets.website-files.com/62961e0b9edf3034fa4a43b2/630e044bdd57f25c23d6adb0_The-daily-work-logo.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="headerTop-right col-lg-3 text-end">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact" className="ms-4">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="headerBottom">
            <NavLink to="/travel">Travel</NavLink>
            <NavLink to="/food">Food</NavLink>
            <NavLink to="/opinion">Opinion</NavLink>
            <NavLink to="/life">Life</NavLink>
            <NavLink to="/design">Design</NavLink>
            <NavLink to="/technology">Technology</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
