import React, { useState, useEffect } from "react";
import "./Navigation.css";
import "./Players.css"; // Your CSS file for styling
import pcBackground from "./image/player_card.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomeIcon from "./image/home.svg";
import ncaaLogo from "./image/NCAA_icon.png";
import nbaLogo from "./image/NBA_icon.png";
import PlayersCard from "./helper/PlayersCard";
import PlayersCard_NCAA from "./helper/PlayersCard_NCAA";
import playerImagePath from "./playImageSample/Jason_Tatum.png"; // Update the path accordingly
import playerImagePath_NBA from "./playImageSample/victor-wembanyama.png"; // Update the path accordingly
import { rootURL } from "./config/config"; // Make sure this is the correct path
import icon from "./image/title_image.png";
import {
  allTeams,
  allPlayersInfo,
  ncaaAllPlayers,
  ncaaTeams,
} from "./api/api.jsx";
import playerIcon from "./image/title_image.png"; // Ensure this path is correct

const Players = () => {
  const activeStyle = {
    backgroundColor: "#1E90FF",
  };

  const [ncaaTeam, setNcaaTeam] = useState([]);
  const [nbaTeam, setNbaTeam] = useState([]);
  const [selectedNbaTeam, setSelectedNbaTeam] = useState("");
  const [selectedNcaaTeam, setSelectedNcaaTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [playerAvgSkills, setPlayAvgSkills] = useState("");
  const [season, setSeason] = useState("2015");
  const [NBAplayerInfo, setNBAPlayerInfo] = useState([]);
  const [NCAAplayerInfo, setNCAAPlayerInfo] = useState([]);

  useEffect(() => {
    const teams = async () => {
      const response = await allTeams();
      setNbaTeam(response);
    };
    teams();

    const ncaaTeam = async () => {
      const response = await ncaaTeams();
      setNcaaTeam(response);
    };
    ncaaTeam();
  }, [selectedNbaTeam, season]);

  const handleNBATeamChange = async (e) => {
    const newNBAName = e.target.value;
    setSelectedNbaTeam(newNBAName);

    if (newNBAName) {
      const response = await allPlayersInfo(newNBAName, season);
      setNBAPlayerInfo(Array.isArray(response) ? response : []);
    }
  };

  const handleNCAATeamChange = async (e) => {
    const newNccaName = e.target.value;
    setSelectedNcaaTeam(newNccaName);

    if (newNccaName) {
      const response = await ncaaAllPlayers(newNccaName);
      setNCAAPlayerInfo(Array.isArray(response) ? response : []);
    }
  };

  return (
    <div
      className="players-container"
      style={{
        backgroundImage: `url(${pcBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="overlay"></div>

      <header className="players-header">
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

      <div className="players-sections">
        {/* NBA Players Section */}
        <div className="players-section">
          <div className="header-container">
            <h2>NBA Players</h2>
            {/* Season selection dropdown */}
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="season-dropdown"
            >
              <option value="">Select a Season</option>
              {Array.from({ length: 2022 - 1980 }, (_, i) => 1980 + i).map(
                (year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                )
              )}
            </select>
          </div>

          <select onChange={handleNBATeamChange} value={selectedNbaTeam}>
            {nbaTeam &&
              nbaTeam.map((team) => (
                <option key={team.Team_Id} value={team.Team_Name}>
                  {team.Team_Name}
                </option>
              ))}
          </select>
          <div className="players-list">
            {NBAplayerInfo.map((player) => (
              <PlayersCard
                league="NBA"
                player={player}
                imagePath={player.pic_url} // Pass the image path to the component
              />
            ))}
          </div>
        </div>
        <div class="loading2"></div>

        {/* NCAA Players Section */}
        <div className="players-section">
          <div className="header-container">
            <h2>NCAA Players</h2>
            {/* Season selection dropdown */}
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="season-dropdown"
            >
              <option value="">Select a Season</option>
              {Array.from({ length: 2022 - 1980 }, (_, i) => 1980 + i).map(
                (year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                )
              )}
            </select>
          </div>

          <select onChange={handleNCAATeamChange} value={selectedNcaaTeam}>
            {ncaaTeam &&
              ncaaTeam.map((team) => (
                <option key={team.Team_Name} value={team.Team_Name}>
                  {team.Team_Name}
                </option>
              ))}
          </select>

          {/* Populate options for NCAA teams */}
          <div className="players-list">
            {NCAAplayerInfo.map((player) => (
              <PlayersCard_NCAA
                league="NCAA"
                player={player}
                imagePath={playerImagePath} // Pass the image path to the component
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
