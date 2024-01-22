import React from "react";
import "./HighlightPlayerCard.css"; // Ensure you have the correct path to your CSS file

const HighlightPlayerCard = ({ player }) => {
  return (
    <div className="highlight-player-card">
      <div className="player-info">
        <div className="player-name">
          <div className="player-skill">{player.Skill}</div>
          <h2 className="player-name">{player.First_Name}</h2>
          <h2 className="player-name">{player.Last_Name}</h2>
        </div>
        <div className="player-stat-image">
          <div className="player-stat">{player.Total_PTS}</div>
          <img
            src={player.pic_url}
            alt={player.name}
            className="player-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightPlayerCard;
