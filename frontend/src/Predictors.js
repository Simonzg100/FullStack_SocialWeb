// Predictor.js
import React, { useEffect, useState } from "react";
import "./Predictors.css"; // Your custom CSS for the Predictor page
import bg from "./image/bg_comparison.png";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "./image/home.svg";
import ncaaIconPath from "./image/NCAA_icon.png";
import nbaLogo from "./image/NBA_icon.png"; // Default NBA player image
import StatisticsComparison from "./StatisticsComparison";
import {
  allTeams,
  playerInfo,
  getAvgSkills,
  getTeamAvgSkills,
} from "./api/api"; // Make sure this path is correct
import PlayersCard from "./PlayerCard";
const Predictor = () => {
  const activeStyle = {
    backgroundColor: "#1E90FF",
  };

  const [selectedSeason, setSelectedSeason] = useState(2020);
  const [ncaaTeam, setNcaaTeam] = useState([]);
  const [selectedNcaaTeam, setSelectedNcaaTeam] = useState("");
  const [ncaaPlayerFirstName, setNcaaPlayerFirstName] = useState("");
  const [ncaaPlayerLastName, setNcaaPlayerLastName] = useState("");
  const [player, setPlayer] = useState("");
  const [playerAvgSkills, setPlayAvgSkills] = useState("");
  const [teamAvgSkills, setTeamAvgSkills] = useState("");

  useEffect(() => {
    const fetchNbaTeams = async () => {
      const response = await allTeams();

      setNcaaTeam(response);
    };
    fetchNbaTeams();
  }, []);

  const handleNCAATeamChange = async (e) => {
    const newTeamName = e.target.value;
    console.log("newTeamName", newTeamName);
    setSelectedNcaaTeam(newTeamName);

    // Use the team name to fetch players
  };

  const handleNCAAPlayer = async () => {
    setPlayer(
      await playerInfo(
        selectedNcaaTeam,
        ncaaPlayerFirstName,
        ncaaPlayerLastName
      )
    );

    setPlayAvgSkills(
      await getAvgSkills(
        selectedNcaaTeam,
        selectedSeason,
        ncaaPlayerFirstName,
        ncaaPlayerLastName
      )
    );

    setTeamAvgSkills(await getTeamAvgSkills(selectedNcaaTeam, selectedSeason));
    console.log("playerAvgSkills", playerAvgSkills);
    console.log("player", player);
  };

  return (
    <div
      className="predictor-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <header className="predictor-header">
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
      <div className="main-content">
        <div className="search-and-card-container">
          <div className="search-container">
            {/* Season Selection Dropdown */}
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
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

            <select
              value={selectedNcaaTeam}
              onChange={handleNCAATeamChange}
              className="team-dropdown"
            >
              <option value="">Select an NCAA Team</option>
              {ncaaTeam.map((team) => (
                <option key={team.Team_Name} value={team.Team_Name}>
                  {team.Team_Name}
                </option>
              ))}
            </select>

            {/* Input for NCAA Player First Name */}
            <input
              type="text"
              placeholder="NCAA Player First Name"
              value={ncaaPlayerFirstName}
              onChange={(e) => setNcaaPlayerFirstName(e.target.value)}
              className="player-input"
            />

            {/* Input for NCAA Player Last Name */}
            <input
              type="text"
              placeholder="NCAA Player Last Name"
              value={ncaaPlayerLastName}
              onChange={(e) => setNcaaPlayerLastName(e.target.value)}
              className="player-input"
            />
            <button id="loginBtn" type="button" onClick={handleNCAAPlayer}>
              Search
            </button>
          </div>

          {player && playerAvgSkills && (
            <PlayersCard
              player={player[0]}
              playerAvgSkills={playerAvgSkills[0]}
            />
          )}
        </div>
        <div className="statistics-container">
          {playerAvgSkills && teamAvgSkills && (
            <StatisticsComparison
              playerStats={playerAvgSkills}
              averageStats={teamAvgSkills}
            />
          )}
        </div>

        <div className="search-container"></div>
      </div>
    </div>
  );
};

export default Predictor;
