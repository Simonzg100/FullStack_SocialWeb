import React, { useState, useEffect } from "react";
import "./NBA.css";
import PlayerItem from "./helper/PlayerItem";
import HighlightPlayerCard from "./helper/HighlightPlayerCard";
import TeamInfoRow from "./helper/TeamInfoRow";
import nbaIconPath from "./image/NBA_icon.png";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "./image/home.svg";
import bgPicture2 from "./image/bg_2_picture.png";
import { allTeams } from "./api/api"; // Make sure this path is correct

// Assuming that '0' is the league number for NBA
const conferenceToLeagueNumber = {
  "Western Conference": 0,
  "Eastern Conference": 0,
};
const conferenceList = ["Western Conference", "Eastern Conference"];
const teamsByConference = {
  "Western Conference": [
    "DAL",
    "DEN",
    "GSW",
    "HOU",
    "LAC",
    "LAL",
    "MEM",
    "MIN",
    "NOP",
    "OKC",
    "PHO",
    "POR",
    "SAC",
    "SAS",
    "UTA",
  ],
  "Eastern Conference": [
    "ATL",
    "BKN",
    "BOS",
    "CHA",
    "CHI",
    "CLE",
    "IND",
    "MIA",
    "NYK",
    "ORL",
    "PHI",
    "TOR",
    "WAS",
    "DET",
    "MIL",
  ],
};

const NBA = () => {
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
    allTeams("0").then((data) => {
      console.log("data", data);
      setTeams(data);
    });
    // const response = allTeams('0');
    // console.log('response', response);
    // setTeams(response);
  }, []);

  // Handle conference selection
  const handleConferenceSelect = (event) => {
    setSelectedConference(event.target.value);

    // If a conference is selected, filter the teams based on the conference
    if (event.target.value) {
      const filteredTeams = teamsByConference[event.target.value];
      setTeams(filteredTeams);
    } else {
      // If no conference is selected, reset the teams to the full list
      setTeams([]);
    }
  };

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
      className="nba-container"
      style={{ backgroundImage: `url(${bgPicture2})` }}
    >
      <div className="overlay"></div>

      <header className="nba-header">
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

        {/* Dropdown for All Conferences */}
        <div className="dropdown">
          <select
            className="conference-dropdown"
            onChange={handleConferenceSelect}
            value={selectedConference}
          >
            <option value="">All Conferences</option>
            {conferenceList.map((conference) => (
              <option key={conference} value={conference}>
                {conference}
              </option>
            ))}
          </select>

          {/* Teams Dropdown - only shown when a conference is selected */}
          {selectedConference && (
            <select
              className="team-dropdown"
              onChange={handleTeamSelect}
              value={selectedTeam}
              disabled={!selectedConference}
            >
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          )}
        </div>
      </header>
      <div className="loading"></div>
      <div className="main-content">
        {/* Conditionally render TeamInfoRow only if a team is selected */}
        {selectedTeam && (
          <TeamInfoRow
            teamType="NBA"
            teamData={teamData}
            teamName={selectedTeam}
            playersData={players}
            nbaIconPath={nbaIconPath}
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

export default NBA;
