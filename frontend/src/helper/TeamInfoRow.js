import React, { useEffect, useState } from "react";
import "./TeamInfoRow.css"; // Your existing styles for team information row
import {
  allPlayersInfo,
  teamTopFive,
  ncaaAllPlayers,
  ncaaTopFive,
} from "../api/api";
import PlayerItem from "./PlayerItem";
import HighlightPlayerCard from "./HighlightPlayerCard";
const TeamInfoRow = ({
  teamType,
  teamData,
  teamName,
  nbaIconPath,
  ncaaIconPath,
}) => {
  const [season, setSeason] = useState("2017");
  const [playerInfo, setPlayerInfo] = useState([]);
  const [topPlayer, settopPlayer] = useState([]);

  useEffect(() => {
    if (teamType === "NCAA") {
      const fetchPlayers = async () => {
        const response = await ncaaAllPlayers(teamName);
        setPlayerInfo(Array.isArray(response) ? response : []);
      };

      const topFive2 = async () => {
        const response = await ncaaTopFive(teamName, season);
        settopPlayer(Array.isArray(response) ? response : []);
      };

      fetchPlayers();
      topFive2();
    }

    if (teamType === "NBA") {
      const fetchPlayers = async () => {
        const response = await allPlayersInfo(teamName, season);
        setPlayerInfo(Array.isArray(response) ? response : []);
      };
      fetchPlayers();
      const topFive2 = async () => {
        const response = await teamTopFive(teamName, season);
        settopPlayer(Array.isArray(response) ? response : []);
      };
      topFive2();
    }
  }, [season]);

  // Determine the logo source based on the type of team
  const logoSrc =
    teamType === "NBA"
      ? require(`../image/team-icons/${teamName}.png`) // Use require for NBA teams
      : teamData.pic_url; // Use pic_url from teamData for NCAA teams

  //   console.log("playerInfo:", playerInfo);
  //   const teamCity = playerInfo.length > 0 ? playerInfo[0].TEAM_CITY : "";
  //   const teamFullName =
  //     playerInfo.length > 0 ? playerInfo[0].Team_Full_Name : "";

  return (
    <div>
      {/* Team Information Row */}
      <div className="team-info-row">
        <div className="team-info-row-header">
          <img className="team-logo" src={logoSrc} alt={`${teamName} Logo`} />
          <h2 className="team_name">
            {teamName} -- {teamName} -- {teamName}
          </h2>

          {/* Season Selection Dropdown */}
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
        </div>

        <div className="team-stats">{/* Display team stats here */}</div>
        <div className="scrollable-player-frame">
          {playerInfo.map((player) => {
            // Determine the icon path based on the league type of the player
            const iconPath = teamType === "NBA" ? nbaIconPath : ncaaIconPath;
            return (
              <PlayerItem key={player.id} player={player} iconPath={iconPath} />
            );
          })}
        </div>

        <div className="highlighted-players">
          {topPlayer.map((player, index) => (
            <HighlightPlayerCard key={index} player={player} />
          ))}
        </div>
      </div>

      {/* Scrollable Frame for Players */}
      {/* Rest of your component */}
    </div>
  );
};

export default TeamInfoRow;
