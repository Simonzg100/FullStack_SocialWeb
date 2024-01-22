import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlayerComparison.css"; // Assuming you have a CSS file for styling
import bg from "./image/bg_comparison.png";
import PlayerCard from "./PlayerCard"; // Import the PlayerCard component
import RadarChartComponent from "./RadarChartComponent";
import RadarChartComponent2 from "./RadarChartComponent";
// Import images from your assets folder
import ncaaPlayerImage from "./playImageSample/Jason_Tatum.png";
import nbaPlayerImage from "./playImageSample/Jason_Tatum.png";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "./image/home.svg";
import PlayerSearch from "./helper/PlayerSearch"; //Custom component for player search
import StatisticsFrame from "./helper/StatisticsFrame"; // Your component to display stats
import {
  allTeams,
  allPlayers,
  ncaaTeams,
  topFive,
  ncaaPlayers,
  getAvgSkills,
  ncaaplayeravgskills,
  ncaaPlayerTopFive,
} from "./api/api"; // Placeholder functions for API calls
import nbaIconPath from "./image/NBA_icon.png";
import ncaaIconPath from "./image/NCAA_icon.png";

const PlayerComparison = () => {
  const [season, setSeason] = useState(2020);
  const [selectedNbaTeam, setSelectedNbaTeam] = useState("");
  const [selectedNcaaTeam, setSelectedNcaaTeam] = useState("");
  const [nbaTeam, setNBATeam] = useState([]);
  const [ncaaTeam, setNcaaTeam] = useState([]);
  const [ncaaPlayer, setNCAAPlayer] = useState([]);

  const [nbaPlayerInfo, setNbaPlayerInfo] = useState([]);
  const [nbaPlayerInfoTopFive, setNbaPlayerInfoTopFive] = useState([]);

  const [ncaaPlayerInfo, setNcaaPlayerInfo] = useState([]);
  const [ncaaPlayerInfoTopFive, setNcaaPlayerInfoTopFive] = useState([]);

  const [nbaPlayerFirstName, setNbaPlayerFirstName] = useState("");
  const [nbaPlayerLastName, setNbaPlayerLastName] = useState("");
  const [ncaaPlayerFirstName, setNcaaPlayerFirstName] = useState("");
  const [ncaaPlayerLastName, setNcaaPlayerLastName] = useState("");
  const activeStyle = {
    backgroundColor: "#1E90FF",
  };

  useEffect(() => {
    const fetchNbaTeams = async () => {
      const response = await allTeams();

      setNBATeam(response);
    };
    fetchNbaTeams();

    const fetchNcaaTeams = async () => {
      try {
        const response = await ncaaTeams();
        setNcaaTeam(response);
      } catch (error) {
        console.error("Failed to fetch NCAA teams:", error);
        // Handle error appropriately
      }
    };
    fetchNcaaTeams();
  }, []);

  const handleTeamChange = async (e) => {
    const newTeamName = e.target.value;
    setSelectedNbaTeam(newTeamName);

    // Use the team name to fetch players
    // const fetchNbaPlayer = await topFive(selectedNbaTeam, season, selectedNbaPlayer.First_Name, selectedNbaPlayer.Last_Name);
  };

  const handleNCAATeamChange = async (e) => {
    const newTeamName = e.target.value;
    console.log("newTeamName", newTeamName);
    setSelectedNcaaTeam(newTeamName);

    // Use the team name to fetch players
  };

  const handleNBAPlayer = async () => {
    console.log("season:", season);
    console.log("nbaTeam:", selectedNbaTeam);
    console.log("nbaPlayerFirstName:", nbaPlayerFirstName);
    console.log("nbaPlayerLastName:", nbaPlayerLastName);

    setNbaPlayerInfo(
      await getAvgSkills(
        selectedNbaTeam,
        season,
        nbaPlayerFirstName,
        nbaPlayerLastName
      )
    );
    console.log("nbaPlayerInfo:", nbaPlayerInfo);
  };

  //top5skill for nba
  const handleNBAPlayerTopFive = async () => {
    console.log("season:", season);
    console.log("nbaTeam:", selectedNbaTeam);
    console.log("nbaPlayerFirstName:", nbaPlayerFirstName);
    console.log("nbaPlayerLastName:", nbaPlayerLastName);

    try {
      const data = await topFive(
        selectedNbaTeam,
        season,
        nbaPlayerFirstName,
        nbaPlayerLastName
      );
      console.log("nbaPlayerInfoTopFive:", data);

      // Transform the data into the format expected by the RadarChart component
      const transformedData = data.map((item) => ({
        subject: item.Skill,
        value: item.Total_PTS, // Change this to the correct value for each skill
      }));

      setNbaPlayerInfoTopFive(transformedData);
    } catch (error) {
      console.error("Error fetching NBA player top five:", error);
    }
  };

  const handleNCAAPlayer = async () => {
    console.log("season:", season);
    console.log("ncaaTeam:", selectedNcaaTeam);
    console.log("ncaaPlayerFirstName:", ncaaPlayerFirstName);
    console.log("ncaaPlayerLastName:", ncaaPlayerLastName);

    setNcaaPlayerInfo(
      await ncaaplayeravgskills(
        selectedNcaaTeam,
        ncaaPlayerFirstName,
        ncaaPlayerLastName
      )
    );
    console.log("ncaaPlayerInfo:", ncaaPlayerInfo);
  };

  const handleNCAAPlayerTopFive = async () => {
    console.log("season:", season);
    console.log("ncaaPlayerFirstName:", ncaaPlayerFirstName);
    console.log("ncaaPlayerLastName:", ncaaPlayerLastName);
    try {
      const data2 = await ncaaPlayerTopFive(
        selectedNcaaTeam,
        ncaaPlayerFirstName,
        ncaaPlayerLastName
      );
      console.log("ncaaPlayerInfoTopFive:", data2);

      // Transform the data into the format expected by the RadarChart component
      const transformedData2 = data2.map((item) => ({
        subject: item.Skill,
        value: item.Total_PTS, // Change this to the correct value for each skill
      }));

      setNcaaPlayerInfoTopFive(transformedData2);
    } catch (error) {
      console.error("Error fetching NBA player top five:", error);
    }
  };

  useEffect(() => {
    console.log("ncaaPlayerInfo updated:", ncaaPlayerInfo);
  }, [ncaaPlayerInfo]);

  return (
    <div
      className="player-comparison-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      {/* Navigation component included here */}
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
          <Link to="/predictors" className="navigation-link">
            Predictors
          </Link>
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
        <div className="searchbar">
          {/* Season Selector */}
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="season-dropdown"
          >
            <option value="">Select a Season</option>
            {Array.from({ length: 2021 - 1950 }, (_, i) => 1950 + i).map(
              (year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              )
            )}
          </select>
          <div className="NBA-search-bar">
            <select
              value={selectedNbaTeam}
              onChange={handleTeamChange}
              className="team-dropdown"
            >
              <option value="">Select an NBA Team</option>
              {nbaTeam.map((team) => (
                <option key={team.Team_Name} value={team.Team_Name}>
                  {team.Team_Name}
                </option>
              ))}
            </select>
            {/* Input for NBA Player First Name */}
            <input
              type="text"
              placeholder="NBA Player First Name"
              value={nbaPlayerFirstName}
              onChange={(e) => setNbaPlayerFirstName(e.target.value)}
              className="player-input"
            />

            {/* Input for NBA Player Last Name */}
            <input
              type="text"
              placeholder="NBA Player Last Name"
              value={nbaPlayerLastName}
              onChange={(e) => setNbaPlayerLastName(e.target.value)}
              className="player-input"
            />
          </div>
          <div className="NBA-search-bar">
            <h1>NBA</h1>
            <img className="icon" src={nbaIconPath} alt="NBA Player" />
            <button
              id="loginBtn"
              type="button"
              onClick={() => handleNBAPlayer("nbaPlayerInfo:")}
            >
              card
            </button>

            <button
              id="loginBtn-topFive"
              type="button"
              onClick={handleNBAPlayerTopFive}
            >
              comparision
            </button>
          </div>
        </div>

        <div className="searchbar">
          {/* Season Selector */}
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="season-dropdown"
          >
            <option value="">Select a Season</option>
            {Array.from({ length: 2021 - 1950 }, (_, i) => 1950 + i).map(
              (year) => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              )
            )}
          </select>
          <div className="NCAA-search-bar">
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
          </div>

          <div className="NCAA-search-bar">
            <h1>NCAA</h1>
            <img className="icon" src={ncaaIconPath} alt="NCAA Player" />
            <button id="loginBtn" type="button" onClick={handleNCAAPlayer}>
              card
            </button>

            <button
              id="loginBtn-topFive"
              type="button"
              onClick={handleNCAAPlayerTopFive}
            >
              comparision
            </button>
          </div>
        </div>
      </div>

      <div className="comparison">
        <div className="nba-comparison-container">
          {nbaPlayerInfo && (
            <PlayerCard
              player={nbaPlayerInfo[0]}
              playerAvgSkills={nbaPlayerInfo[0]}
              iconPath={nbaIconPath}
            />
          )}
          <div className="nba-chart">
            {nbaPlayerInfoTopFive && (
              <RadarChartComponent
                data={nbaPlayerInfoTopFive}
                title="NBA Player Comparison"
                leagueName="NBA"
              />
            )}
          </div>
        </div>

        <div className="ncaa-comparison-container">
          {ncaaPlayerInfo && (
            <PlayerCard
              player={ncaaPlayerInfo[0]}
              playerAvgSkills={ncaaPlayerInfo[0]}
              iconPath={ncaaIconPath}
            />
          )}
          <div className="ncaa-chart">
            {ncaaPlayerInfoTopFive && (
              <RadarChartComponent2
                data={ncaaPlayerInfoTopFive}
                title="NCAA Player Comparison"
                leagueName="NCAA"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerComparison;
