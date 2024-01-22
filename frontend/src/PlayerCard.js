import React from "react";
import "./PlayerCard.css"; // Ensure this path is correct
import playerIcon from "./image/title_image.png"; // Ensure this path is correct

import defaultNcaaImage from "./playImageSample/Jason_Tatum.png"; // Default NCAA player image
import defaultNbaImage from "./playImageSample/victor-wembanyama.png"; // Default NBA player image

const PlayerCard = ({ player, playerAvgSkills, leagueName }) => {
  if (!player) {
    // Return a placeholder or null if no player data is provided
    return <div>No player selected</div>;
  }

  const playerData = player;
  const skills = playerAvgSkills;

  const defaultImage =
    leagueName === "NCAA" ? defaultNcaaImage : defaultNbaImage;

  if (skills) {
    return (
      <div className="player-card">
        <div className="upper_part">
          <div className="playerCard-icon-container">
            <img
              src={playerIcon}
              alt="PlayerCard Icon"
              className="playerCard-icon"
            />
          </div>
          <div className="playerCard-image-container">
            <img
              src={playerData.pic_url || defaultImage}
              alt={playerData.name}
              className="playerCard-image"
            />
          </div>
        </div>

        <div className="player-rating-badge">{player.rating}</div>

        <div className="playerCard-info">
          <h2 className="player-name">
            {playerData.First_Name} {playerData.Last_Name}
          </h2>
          <div className="below_part_stats">
            <div className="playerCard-stats">
              {/* Ensure the player object has these properties. Adjust them as per your data structure */}
              <div className="stat-item">
                Jersey Number: {playerData.Jersey_Number}
              </div>
              <div className="stat-item">Position: {playerData.Position}</div>
              <div className="stat-item">Height: {playerData.Height}</div>
              <div className="stat-item">Weight: {playerData.Weight}</div>
              <div className="stat-item">Points: {skills.Avg_REB}</div>
              <div className="stat-item">Rebounds: {skills.Avg_AST}</div>
              <div className="stat-item">Assists: {skills.Avg_STL}</div>
              <div className="stat-item">Avg_BLK: {skills.Avg_BLK}</div>
              <div className="stat-item">Avg_FG3_PCT: {skills.Avg_FG3_PCT}</div>
              <div className="stat-item">Avg_FG_PCT: {skills.Avg_FG_PCT}</div>
              <div className="stat-item">Avg_FT_PCT: {skills.Avg_FT_PCT}</div>
              <div className="stat-item">Avg_OREB: {skills.Avg_OREB}</div>
              <div className="stat-item">Avg_DREB: {skills.Avg_DREB}</div>
              <div className="stat-item">Avg_TOV: {skills.Avg_TOV}</div>
              <div className="stat-item">Avg_MIN: {skills.Avg_MIN}</div>
              {/* Additional stats */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="player-card">
        <div className="upper_part">
          <div className="playerCard-icon-container">
            <img
              src={playerIcon}
              alt="PlayerCard Icon"
              className="playerCard-icon"
            />
          </div>
          <div className="playerCard-image-container">
            <img
              src={playerData.pic_url || defaultImage}
              alt={playerData.name}
              className="playerCard-image"
            />
          </div>
        </div>

        <div className="player-rating-badge">{player.rating}</div>

        <div className="playerCard-info">
          <h2 className="player-name">
            {playerData.First_Name} {playerData.Last_Name}
          </h2>
          <div className="below_part_stats">
            <div className="playerCard-stats">
              {/* Ensure the player object has these properties. Adjust them as per your data structure */}
              <div className="stat-item">
                Jersey Number: {playerData.Jersey_Number}
              </div>
              <div className="stat-item">Position: {playerData.Position}</div>
              <div className="stat-item">Height: {playerData.Height}</div>
              <div className="stat-item">Weight: {playerData.Weight}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PlayerCard;
