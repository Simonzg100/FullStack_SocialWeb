import React, { useState, useEffect } from "react";
import "./Navigation.css";
import bgPicture2 from "./image/bg_2_picture.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomeIcon from "./image/home.svg";

const Navigation = () => {
  const [conferences, setConferences] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const activeStyle = {
    backgroundColor: "#1E90FF",
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    axios
      .get("/api/all-conferences")
      .then((response) => {
        setConferences(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the conferences", error);
      });
  }, []);

  return (
    <div
      className="navigation-container"
      style={{ backgroundImage: `url(${bgPicture2})` }}
    >
      <div className="overlay"></div>

      <header className="navigation-header">
        {/* Navigation links */}
        <nav className="navigation-links">
          <NavLink
            to="/NCAA"
            className="navigation-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            NCAA Teams
          </NavLink>
          <NavLink
            to="/NBA"
            className="navigation-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            NBA Teams
          </NavLink>
          <NavLink
            to="/Players"
            className="navigation-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Players
          </NavLink>
          <NavLink
            to="/Predictors"
            className="navigation-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Predictors
          </NavLink>
          <NavLink
            to="/PlayerComparison"
            className="navigation-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            In the lab
          </NavLink>
          <Link to="/" className="home-icon-link">
            <img
              src={HomeIcon}
              alt="Home"
              className="navigation-link home-icon"
            />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
