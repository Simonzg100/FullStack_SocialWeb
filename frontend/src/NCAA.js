import React, { useState, useEffect } from "react";
import "./NCAA.css";
import PlayerItem from "./helper/PlayerItem";
import HighlightPlayerCard from "./helper/HighlightPlayerCard";
import TeamInfoRow from "./helper/TeamInfoRow";
import ncaaIconPath from "./image/NCAA_icon.png";
import nbaIconPath from "./image/NBA_icon.png";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "./image/home.svg";
import bgPicture2 from "./image/bg_2_picture.png";
import { allTeams, ncaaTeams } from "./api/api"; // Make sure this path is correct

const NCAA = () => {
  const [selectedConference, setSelectedConference] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  // Get top players for the selected team and season
  const [topPlayers, setTopPlayers] = useState([]);
  // Static team data for demonstration
  const [teamData, setTeamData] = useState({ seasons: [] }); // Default state for teamData
  const activeStyle = {
    backgroundColor: "#1E90FF",
  };

  // Fetch teams when a conference is selected
  useEffect(() => {
    ncaaTeams("0").then((data) => {
      console.log("data", data);
      setTeams(data);
    });
    // const response = allTeams('0');
    // console.log('response', response);
    // setTeams(response);
  }, []);

  // Handle conference selection

  // Handle team selection
  const handleTeamSelect = (event) => {
    setSelectedTeam(event.target.value);
  };

  // Handle season change
  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  return (
    <div
      className="ncaa-container"
      style={{ backgroundImage: `url(${bgPicture2})` }}
    >
      <div className="overlay"></div>

      <header className="ncaa-header">
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
          {/* Conditionally render TeamInfoRow only if a team is selected */}
          <select
            className="team-dropdown"
            onChange={handleTeamSelect}
            value={selectedTeam}
          >
            <option value="">Select Team</option>
            {teams.map((team) => (
              <option key={team.Team_Name} value={team.Team_Name}>
                {team.Team_Name}
              </option>
            ))}
          </select>
        </nav>

        {/* Dropdown for All Conferences */}
        <div className="dropdown">
          {/* Teams Dropdown - only shown when a conference is selected */}
        </div>
        <div className="loading"></div>
      </header>
      <div className="main-content">
        {selectedTeam && (
          <TeamInfoRow
            teamType="NCAA"
            teamData={teamData}
            teamName={selectedTeam}
            playersData={players}
            nbaIconPath={nbaIconPath}
            ncaaIconPath={ncaaIconPath}
            selectedSeason={selectedSeason}
            handleSeasonChange={handleSeasonChange}
          />
        )}
      </div>

      {/*Scrollable frame for player items*/}
      {/* Highlighted player cards for top performers */}
      {/* <div className="highlighted-players">
        {topPlayers.map((player, index) => (
          <HighlightPlayerCard
            key={index}
            player={player}
            statCategory={`Most ${Object.keys(player.stats)[0]}`}
            statValue={Object.values(player.stats)[0]}
          />
        ))}
      </div> */}
    </div>
  );
};

export default NCAA;
