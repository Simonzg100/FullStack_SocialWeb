import React from "react";
import "./PlayersCard.css"; // Your CSS styles for the component
import ncaaIcon from "../image/NCAA_icon.png";
import nbaIcon from "../image/NBA_icon.png";
import defaultNcaaImage from "../playImageSample/Jason_Tatum.png"; // Default NCAA player image
import defaultNbaImage from "../playImageSample/victor-wembanyama.png"; // Default NBA player image

const PlayersCard = ({ player }) => {
  // Choose the icon based on the player's league
  const leagueIcon = player.league === "NCAA" ? ncaaIcon : nbaIcon;
  const leagueAltText = player.league === "NCAA" ? "NCAA_icon" : "NBA_icon";
  const defaultImage =
    player.league === "NCAA" ? defaultNcaaImage : defaultNbaImage;

  return (
    <div className="players-card">
      <div className="players-card-header">
        <img src={leagueIcon} alt={leagueAltText} className="league-icon" />
        <span className="players-rating">{player.Jersey_Number}</span>
      </div>
      <div className="players-position">{player.position}</div>
      <div className="players-image-container">
        {/*/!*<img src={player.image} alt={player.name} className="players-image" />*!///for future use we need to use url links*/}
        {/* If player has a specific image, use it; otherwise, use the default image for the league */}
        <img
          src={player.pic_url || defaultImage}
          alt={player.name}
          className="players-image"
        />
      </div>
      <div className="players-info">
        <h2 className="players-name">{`${player.First_Name} ${player.Last_Name}`}</h2>

        <div className="players-stats">
          {player && (
            <>
              <div>Height: {player.Height}</div>
              <div>Weight: {player.Weight}</div>
              <div>Jersey: {player.Jersey_Number}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
